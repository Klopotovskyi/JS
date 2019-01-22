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
//using callback
    /*
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
    setTimeout(function () {
        getPost(function (responseText) {
            console.log(JSON.parse(responseText));
        })
    } , 2500);
    */
//using promises
    let GetbyPromise= new Promise((resolve,reject) => {
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
    setTimeout(function () {
        GetbyPromise.then((responseText) => {
            console.log(JSON.parse(responseText));
        }).catch((status)=>{
            console.log(JSON.parse(status));
        });
    } , 2500);


});

