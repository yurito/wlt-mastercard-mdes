#!/bin/bash

mv package.json package.json.bak

# We assume OpenAPI Generator is installed using `npm i -g @openapitools/openapi-generator-cli`
 openapi-generator-cli  generate -i MDES_Digital_Enablement.yaml -g javascript -o . -c config.json

# Remove some generated files we don't use in this tutorial
rm git_push.sh
rm .openapi-generator-ignore
rm .travis.yml

shopt -s extglob
cd test
rm -rf model
cd api
rm -fv !(TokenizeApi.spec.js)
cd ../..

mv package.json.bak package.json