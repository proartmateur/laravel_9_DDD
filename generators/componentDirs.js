// Crear Estructura de carpeas para un componente
const readline = require("readline");
var path = require('path');
const prompt = require("prompt-sync")();
var inflect = require('i')(true);
const {makeComponentDirs} = require("./lib/directories");
const srcPath = path.join('.', 'src')

const directories = [
    {
        name: 'Domain',
        path: ''
    },
    {
        name: 'UseCases',
        path: ''
    },
    {
        name: 'Infrastructure',
        path: ''
    },
    {
        name: 'migrations',
        path: 'Infrastructure'
    },
    {
        name: 'routes',
        path: 'Infrastructure'
    }
]
// Crear el directorio base
console.log('Making Component Folders')

const componentName = inflect.classify(prompt("Component Name: "));
const componentSnake = inflect.dasherize(componentName)
console.log(`Building: ${componentName} component`);
makeComponentDirs({name: componentName, pathStr: srcPath, directories})

const commands = [
    `php artisan make:migration create${componentSnake}_table --path=/src/${componentName}/Infrastructure/migrations`
]
