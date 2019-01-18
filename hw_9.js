

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let limitNumber = setTimeout(handler())
    function()getRandomInt(1, 10)

let pageNumber = getRandomInt(1, 10)




function getPost(callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200){
          callback (this.responseText);
      }
      xhttp.open(method: "GET", url:"http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
      xhttp.send();
    }
}
getPost(callback: function (response) {

})


