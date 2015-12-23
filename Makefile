all: LIBRARIES

LIBRARIES: html/js/libs/ace html/js/libs/mathquill html/js/libs/jquery MARKED_LIB

html/js/libs/ace: node_modules/ace-builds/src-min
	mkdir -p html/js/libs/
	cp -r node_modules/ace-builds/src-min html/js/libs/ace

html/js/libs/mathquill: node_modules/mathquill/build
	mkdir -p html/js/libs/
	cp -r node_modules/mathquill/build html/js/libs/mathquill

node_modules/mathquill/build:
	cd node_modules/mathquill/; make

MARKED_LIB: html/js/libs/marked/lib/marked.js

html/js/libs/marked/lib/marked.js: node_modules/marked/lib/marked.js
	mkdir -p html/js/libs/marked/lib/
	cp node_modules/marked/lib/marked.js html/js/libs/marked/lib/

html/js/libs/jquery: node_modules/jquery/dist
	mkdir -p html/js/libs/
	cp -r node_modules/jquery/dist html/js/libs/jquery
