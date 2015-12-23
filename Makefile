all: LIBRARIES manifest.json

manifest.json: manifest.js package.json
	node manifest.js

LIBRARIES: html/js/libs/ace MARKED_LIB

html/js/libs/ace: node_modules/ace-builds/src-min
	mkdir -p html/js/libs/
	cp -r node_modules/ace-builds/src-min html/js/libs/ace

MARKED_LIB: html/js/libs/marked/lib/marked.js

html/js/libs/marked/lib/marked.js: node_modules/marked/lib/marked.js
	mkdir -p html/js/libs/marked/lib/
	cp node_modules/marked/lib/marked.js html/js/libs/marked/lib/

PACKAGE: NoTeX.zip
NoTeX.zip: all
	rm -rf NoTeX.zip
	zip NoTeX.zip -r manifest.json background.js html
