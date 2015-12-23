all: LIBRARIES

LIBRARIES: html/js/libs/ace html/js/libs/mathquill

html/js/libs/ace: node_modules/ace-builds/src-min
	mkdir -p html/js/libs/
	cp -r node_modules/ace-builds/src-min html/js/libs/ace

html/js/libs/mathquill: node_modules/mathquill/build
	mkdir -p html/js/libs/
	cp -r node_modules/mathquill/build html/js/libs/mathquill

node_modules/mathquill/build:
	cd node_modules/mathquill/; make
