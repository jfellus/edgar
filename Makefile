default: all

all:
	cd src; npm install

package:
	rm -rf dist/edgar
	cd src; npm run package
	install -D debian.package dist/edgar/DEBIAN/control
	mkdir -p dist/edgar/usr/lib dist/edgar/usr/bin
	mv dist/edgar-linux-x64 dist/edgar/usr/lib/edgar/
	ln -sf /usr/lib/edgar/edgar dist/edgar/usr/bin/edgar
	dpkg-deb --build dist/edgar dist


clean:
	rm -rf dist

clean-deep: clean
	rm -rf src/node_modules
