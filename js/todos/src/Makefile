build:
	@echo 'Optimizing...'
	@rm -r ../build
	@mkdir ../build
	@node ../../_libs/rjs/r.js -o amd.build.js
	@find ../build/* -not -iwholename '*todos.js*' | xargs rm -rf;
	@echo 'Deleting all files apart from: todos.js'
	@echo ''
	@echo '******************************************'
	@echo '************* BUILD COMPLETE *************'
	@echo '******************************************'
	@echo ''
install:
	@echo 'Installing...'
	@echo 'Note: Node.js and NPM need to be installed for this to work'
	sudo npm install -g uglify-js
	#sudo npm install -g requirejs