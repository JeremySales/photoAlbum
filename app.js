function getAlbum(album, id) {
    let url = `https://jsonplaceholder.typicode.com/photos`;
    if(album && id){
        url += `?albumId=${album}&id=${id}`;
    } else if(album){
        url += `?albumId=${album}`;
    } 
    
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            for (obj in data) {
                console.log(`[${data[obj].id}] ${data[obj].title}`);
            }
        })
        .catch(err => {
            console.error(`error ${err}`)
        });
};

module.exports = getAlbum;