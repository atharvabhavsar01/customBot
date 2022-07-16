const fetch = require('node-fetch');

async function   getjoke(){
    const url="https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    return await fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
       
        const jk = data.joke;
        return jk;
    })



}

module.exports= getjoke;//required to export everytime you make functions