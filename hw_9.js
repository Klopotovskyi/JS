function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let limitNumber = setTimeout(getRandomInt(1, 10), 1000);
let pageNumber = setTimeout(getRandomInt(1, 10), 2000);

function getPost(callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200){
          callback (this.responseText);
      }
      xhttp.open("GET", "http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
      xhttp.send();
    }
}





