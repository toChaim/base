#!/bin/bash
# echo "*************** $PWD ***************" && yarn
# cd ./web && echo "*************** $PWD ***************" && yarn
cd ./web
cd ../api && echo "*************** $PWD ***************" && yarn && yarn run rebuild
