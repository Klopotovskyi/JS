function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function getPagesProp (){
    let limitNumber = getRandomInt(1, 11);
    let pageNumber = getRandomInt(1, 11);
}


function getPost() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.warn(JSON.parse(this.responseText));
        }
    };
      xhttp.open("GET", "http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
      xhttp.send();
}
getPost(function(callback) {
    console.log(JSON.parse(this.responseText));
})




