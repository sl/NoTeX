all: LIBRARIES

LIBRARIES: html/js/libs/ace

html/js/libs/ace: node_modules/ace-builds/src-min
	mkdir -p html/js/libs/
	cp -r node_modules/ace-builds/src-min html/js/libs/ace
