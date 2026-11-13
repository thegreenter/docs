/*
 * Buscador de reglas de validación SUNAT (docs/sunat/reglas-validacion.md).
 * Los datos los genera scripts/sunat_rules.py a partir del Excel de SUNAT en sunat/.
 */
(function () {
  'use strict';

  var root = document.getElementById('rv');
  if (!root) return;
  var script = document.currentScript;
  var dataUrl = new URL('reglas-validacion.json', script ? script.src : location.href).href;

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  var norm = function (s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  };

  root.innerHTML = '<p class="rv-note">Cargando reglas…</p>';
  fetch(dataUrl)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(init)
    .catch(function () {
      root.innerHTML = '<div class="rv-empty">No se pudieron cargar las reglas (<code>reglas-validacion.json</code>). ' +
        'Si estás en local, genera el archivo con <code>python scripts/sunat_rules.py</code>.</div>';
    });

  function init(data) {
    var docs = data.docs;
    var state = { doc: docs[0].key, q: '', kind: 'all' };

    docs.forEach(function (d) {
      d.sections.forEach(function (s) {
        s._title = norm(s.title);
        s.fields.forEach(function (f) {
          f.tags.forEach(function (t) {
            t._base = norm([f.n, f.dato, t.tag, t.fmt, t.tipo].join(' '));
            t.v.forEach(function (v) { v._txt = norm([v.c, v.t, v.m, v.l].join(' ')); });
          });
        });
      });
    });

    root.innerHTML =
      '<div class="rv-bar">' +
        '<div class="rv-tabs" role="tablist" aria-label="Documento"></div>' +
        '<div class="rv-tools">' +
          '<div class="rv-search"><input id="rv-q" type="search" autocomplete="off" aria-label="Buscar" ' +
            'placeholder="Buscar por tag, código (3244), campo o mensaje"></div>' +
          '<div class="rv-chips" role="group" aria-label="Tipo de retorno">' +
            '<button class="rv-chip" data-k="all" aria-pressed="true">Todas</button>' +
            '<button class="rv-chip e" data-k="ERROR" aria-pressed="false">ERROR</button>' +
            '<button class="rv-chip o" data-k="OBSERV" aria-pressed="false">OBSERV</button>' +
          '</div>' +
          '<span class="rv-status" aria-live="polite"></span>' +
        '</div>' +
        '<select class="rv-toc-select" aria-label="Ir a sección"></select>' +
      '</div>' +
      '<div class="rv-body"><nav class="rv-toc" aria-label="Secciones"></nav><div class="rv-content"></div></div>';

    var $ = function (sel) { return root.querySelector(sel); };
    var tabsEl = $('.rv-tabs');
    var statusEl = $('.rv-status');
    var tocEl = $('.rv-toc');
    var tocSel = $('.rv-toc-select');
    var content = $('.rv-content');

    function hl(text, q) {
      text = String(text);
      if (!q) return esc(text);
      var n = norm(text);
      var out = '';
      var i = 0;
      var at;
      // La normalización solo quita tildes combinadas, así que las posiciones coinciden
      // con el texto original salvo en caracteres compuestos poco frecuentes.
      if (n.length !== text.length) return esc(text);
      while ((at = n.indexOf(q, i)) !== -1) {
        out += esc(text.slice(i, at)) + '<mark>' + esc(text.slice(at, at + q.length)) + '</mark>';
        i = at + q.length;
      }
      return out + esc(text.slice(i));
    }

    function kindOf(v) {
      var e = v.k.indexOf('ERROR') !== -1;
      var o = v.k.indexOf('OBSERV') !== -1;
      if (e && !o) return 'e';
      if (o || v.k) return 'o';
      return 'x';
    }

    function filterDoc(d) {
      var q = norm(state.q.trim());
      var code = /^\d{3,4}$/.test(q) ? q : null;
      var count = 0;
      var fieldCount = 0;
      var sections = [];
      d.sections.forEach(function (s, si) {
        var fields = [];
        s.fields.forEach(function (f) {
          var tags = [];
          f.tags.forEach(function (t) {
            var vs = t.v.filter(function (v) { return state.kind === 'all' || v.k.indexOf(state.kind) !== -1; });
            var show;
            if (code) {
              vs = vs.filter(function (v) { return v.c === code; });
              show = vs.length > 0;
            } else if (q) {
              var baseHit = t._base.indexOf(q) !== -1 || s._title.indexOf(q) !== -1;
              if (!baseHit) vs = vs.filter(function (v) { return v._txt.indexOf(q) !== -1; });
              show = baseHit || vs.length > 0;
            } else {
              show = state.kind === 'all' || vs.length > 0;
            }
            if (show) {
              tags.push({ t: t, vs: vs });
              count += vs.length;
            }
          });
          if (tags.length) fields.push({ f: f, tags: tags });
        });
        if (fields.length) {
          sections.push({ s: s, si: si, fields: fields });
          fieldCount += fields.length;
        }
      });
      return { sections: sections, count: count, fields: fieldCount, q: code || q };
    }

    function renderVal(v, q) {
      var label = v.c ? v.k.replace(/\n/g, '/') + ' ' + v.c : 'Sin validación';
      return '<div class="rv-val"><span class="rv-code ' + kindOf(v) + '">' + hl(label, q) + '</span>' +
        '<div class="rv-vtext"><div class="rv-vcond">' + hl(v.t, q) + '</div>' +
        (v.m ? '<div class="rv-vmsg"><b>Mensaje:</b> ' + hl(v.m, q) + '</div>' : '') +
        (v.l ? '<div class="rv-vlist">Listado: ' + hl(v.l, q) + '</div>' : '') +
        '<div class="rv-row">fila ' + v.row + '</div></div></div>';
    }

    function renderTag(t, vs, q) {
      var m = t.tag.match(/^(.*?)\s*(\(.*\))?$/);
      var path = m ? m[1] : t.tag;
      var desc = m && m[2] ? m[2] : '';
      var cond = t.cond === 'M' ? 'M (obligatorio)' : t.cond === 'C' ? 'C (condicional)' : t.cond;
      var meta = [['Condición', cond], ['Tipo', t.tipo], ['Formato / valor', t.fmt], ['Uso', t.uso]]
        .filter(function (p) { return p[1]; })
        .map(function (p) { return '<span>' + p[0] + ' <b>' + hl(p[1], q) + '</b></span>'; })
        .join('');
      return '<div class="rv-tag' + (t.attr ? ' attr' : '') + '">' +
        (path ? '<div class="rv-xpath"><code>' + hl(path, q) + '</code>' +
          (desc ? '<span class="desc">' + hl(desc, q) + '</span>' : '') +
          '<button class="rv-copy" data-copy="' + esc(path) + '" title="Copiar tag">copiar</button></div>' : '') +
        (meta ? '<div class="rv-meta">' + meta + '</div>' : '') +
        (vs.length ? '<div class="rv-vals">' + vs.map(function (v) { return renderVal(v, q); }).join('') + '</div>' : '') +
        '</div>';
    }

    function render() {
      var d = docs.filter(function (x) { return x.key === state.doc; })[0];
      var r = filterDoc(d);

      var groups = [];
      docs.forEach(function (x) {
        var g = groups[groups.length - 1];
        if (!g || g.name !== x.group) groups.push(g = { name: x.group, docs: [] });
        g.docs.push(x);
      });
      tabsEl.innerHTML = groups.map(function (g) {
        return '<div class="rv-group">' + (g.name ? '<span class="rv-group-name">' + esc(g.name) + '</span>' : '') +
          g.docs.map(function (x) {
            var n = x === d ? r.count : filterDoc(x).count;
            return '<button class="rv-tab" role="tab" data-doc="' + x.key + '" aria-selected="' + (x === d) + '">' +
              esc(x.label) + ' <span class="n">' + n + '</span></button>';
          }).join('') + '</div>';
      }).join('');
      statusEl.textContent = r.count + ' validaciones en ' + r.fields + ' campos';
      tocEl.innerHTML = r.sections.map(function (x) {
        return '<a href="#' + d.key + '" data-sec="rv-sec-' + x.si + '"><span>' + esc(x.s.title) +
          '</span><span>' + x.fields.length + '</span></a>';
      }).join('');
      tocSel.innerHTML = '<option value="">Ir a sección…</option>' + r.sections.map(function (x) {
        return '<option value="rv-sec-' + x.si + '">' + esc(x.s.title) + '</option>';
      }).join('');

      if (!r.sections.length) {
        content.innerHTML = '<div class="rv-empty">Nada coincide con “' + esc(state.q) + '” en ' + esc(d.label) +
          '. El número junto a cada documento indica cuántas validaciones coinciden.</div>';
        return;
      }
      content.innerHTML = r.sections.map(function (x) {
        return '<section class="rv-sec" id="rv-sec-' + x.si + '"><div class="rv-sec-title">' + hl(x.s.title, r.q) + '</div>' +
          x.fields.map(function (ff) {
            return '<article class="rv-field"><div class="rv-fhead"><span class="rv-fnum">' + esc(ff.f.n) + '</span>' +
              '<span class="rv-fname">' + hl(ff.f.dato, r.q) + '</span>' +
              (ff.f.nivel ? '<span class="rv-flevel">' + esc(ff.f.nivel) + '</span>' : '') + '</div>' +
              ff.tags.map(function (tt) { return renderTag(tt.t, tt.vs, r.q); }).join('') + '</article>';
          }).join('') + '</section>';
      }).join('') +
        '<p class="rv-note">Fuente: ' + esc(data.source) + ', hoja ' + esc(d.sheet) +
        ' (versión ' + esc(data.version) + '). “fila” es la fila de esa hoja en el Excel de SUNAT.</p>';
    }

    function setDoc(key, scroll) {
      if (!docs.some(function (d) { return d.key === key; })) key = docs[0].key;
      state.doc = key;
      if (location.hash !== '#' + key) history.replaceState(null, '', '#' + key);
      render();
      if (scroll) root.scrollIntoView({ block: 'start' });
    }

    function goSection(id) {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: 'start' });
    }

    function selectText(el) {
      if (!el) return;
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }

    tabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.rv-tab');
      if (b) setDoc(b.dataset.doc, false);
    });
    var timer;
    $('#rv-q').addEventListener('input', function (e) {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = e.target.value; render(); }, 150);
    });
    $('.rv-chips').addEventListener('click', function (e) {
      var b = e.target.closest('.rv-chip');
      if (!b) return;
      state.kind = b.dataset.k;
      root.querySelectorAll('.rv-chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c === b)); });
      render();
    });
    tocEl.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      goSection(a.dataset.sec);
    });
    tocSel.addEventListener('change', function (e) {
      if (e.target.value) goSection(e.target.value);
      e.target.value = '';
    });
    content.addEventListener('click', function (e) {
      var b = e.target.closest('.rv-copy');
      if (!b) return;
      var code = b.parentNode.querySelector('code');
      var done = function () {
        b.textContent = 'copiado';
        setTimeout(function () { b.textContent = 'copiar'; }, 1200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(b.dataset.copy).then(done, function () { selectText(code); });
      } else {
        selectText(code);
      }
    });
    window.addEventListener('hashchange', function () {
      var key = location.hash.slice(1);
      if (docs.some(function (d) { return d.key === key; })) setDoc(key, false);
    });

    setDoc(location.hash.slice(1), false);
  }
})();
