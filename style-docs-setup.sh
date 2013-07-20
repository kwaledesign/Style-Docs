#!/bin/sh

echo "Setting up a clean Style-Docs project..."

rm -rf .git/              &&\
rm style-docs-setup.sh    &&\
git init                  &&\
git status

echo "Style-Docs successfully installed and setup. Ready to commit."

