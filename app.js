let argv = require('minimist')(process.argv.slice(2));
let url = `https://jsonplaceholder.typicode.com/photos`

// allows for --album and --id flag to be used
if('album' in argv && 'id' in argv){
    url += `?albumId=${argv.album}&id=${argv.id}`
} else if('album' in argv){
    url += `?albumId=${argv.album}`
} 
//call to API with parameters parsed into URL
fetch(url)
    .then(res => res.json()) // parse response as JSON
    // prints all of the id's and titles in the album specified
    .then(data => {
        for (obj in data){
            console.log(data[obj].id, data[obj].title)
        }
        })
    .catch(err => {
            console.log(`error ${err}`)
        });
