'use strict'
document.addEventListener('DOMContentLoaded', function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let limitNumber;
    let pageNumber;

    setTimeout(function () {
        limitNumber=getRandomInt(1, 11);
        console.log(limitNumber)
    }, 1000);
    setTimeout(function () {
        pageNumber=getRandomInt(1, 11);
        console.log(pageNumber)
    }, 2000);

    setTimeout(function () {
        getPost(function (responseText) {
            console.log("callback response =>", JSON.parse(responseText));
        })
    }, 2500);
    setTimeout(GetPostByPromise, 2500);
    setTimeout(GetPostByAsync, 2500);
    //using callback
    function getPost(callback) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
        xhttp.send();
    }
//using promises
    function GetPostByPromise() {
        let GetbyPromise= new Promise((resolve,reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            xhttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
            xhttp.send();
        });
        GetbyPromise.then((responseText) => {
            console.log("promise response =>", JSON.parse(responseText));
        }).catch((status) => {
            console.log("promise status =>", JSON.parse(status));
        });
    }
//using async/await
    async function GetPostByAsync() {
        let GetbyAsync = new Promise((resolve,reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                    reject(this.status);
                }
            };
            xhttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
            xhttp.send();
        });
        let AsyncResponse = await GetbyAsync;
        console.log("Async Response  =>",JSON.parse(AsyncResponse));
    }
});

