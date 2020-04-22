#!/bin/sh

git config user.name "Giancarlos Salas";
git config user.email "giansalex@gmail.com";
git remote add gh-token "https://${GH_TOKEN}@github.com/thegreenter/thegreenter.github.io.git";
git fetch gh-token && git fetch gh-token gh-pages:gh-pages;
mkdocs gh-deploy -v --clean --remote-name gh-token --message "Deployed MkDocs";