const fs = require('fs');
const path = require('path');
let filesCopy;
let files;

(async () => {
        await fs.promises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true });
		filesCopy = await fs.promises.readdir(path.join(__dirname, 'files-copy'))
		files = await fs.promises.readdir(path.join(__dirname, 'files'))
		if (filesCopy.length > 0) {
			for (let file of filesCopy) {
				fs.promises.unlink(path.join(__dirname, 'files-copy', file))
			}
		}

		if (files.length > 0) {
			for (let file of files) {
				fs.promises.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file))
			}
		}
})()
