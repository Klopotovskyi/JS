'use strict';
document.addEventListener('DOMContentLoaded', function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    setTimeout(function () {
        let limitNumber=getRandomInt(1, 11);
        console.log(limitNumber)
    }, 2000);
    setTimeout(function () {
        let pageNumber=getRandomInt(1, 11);
        console.log(pageNumber)
    }, 2000);
   function getPost(callback) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
            }
        };
        xhttp.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
        xhttp.send();
    }
    setTimeout(function () {
        getPost(function (responseText) {
            console.log(JSON.parse(responseText));
        })
    } , 2500);
})
