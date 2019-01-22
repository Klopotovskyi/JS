'use strict';
document.addEventListener('DOMContentLoaded', function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let limitNumber = setTimeout(getRandomInt(1, 11), 1000);
    let pageNumber = setTimeout(getRandomInt(1, 11), 2000);
    function getPost(callback) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", "http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
        xhttp.send();
    }
    setTimeout(getPost(function (responseText) {
        console.log(JSON.parse(responseText));
    }), 2500);
})
