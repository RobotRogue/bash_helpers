#!/bin/bash

echo " "; echo "-- Navigating to Lanc project --"
cd $HOME/git/PROJECTFOLDER && PWD

echo " "; echo "-- Performing a Git Pull --"
git pull &> /dev/null
echo " " ; echo "- Done."

echo " "; echo "-- Performing NPM Install --"
npm i &> /dev/null
echo " "; echo "- Done."

echo " "; echo "-- Current Branch and Commit --"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
COMMIT=$(git rev-parse --short HEAD)
echo " "; echo "[$BRANCH - $COMMIT]"

echo " "; echo "-- Running Latest Build --"
npm run dev
