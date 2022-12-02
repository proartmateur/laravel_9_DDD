var path = require('path');
var fs = require('fs');
const makeDir = ({name, pathStr}) => {
    const dir = path.join('.', pathStr, name)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
const makeComponentDirs = ({name, pathStr, directories}) => {
    makeDir({name, pathStr: pathStr})

    for (let dir of directories) {
        const thePath = dir.path !== '' ? path.join(pathStr, name, dir.path) : path.join(pathStr, name)
        makeDir({name: dir.name, pathStr: thePath})
    }
}
module.exports = {makeDir, makeComponentDirs}

// php artisan make:migration create_popi_table --path=/src/Pipo/Infrastructure/migrations
    // php artisan make:model Src/Pipo/Infrastructure/Pipo
