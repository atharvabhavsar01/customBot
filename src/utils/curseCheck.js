const Filter = require('bad-words')

function curseCheck(string){
    filter = new Filter();
    const res= filter.clean(string);
    // console.log(res);
    if(res===string){
        return false;
    }else{
        return true;
    }

    }

    module.exports= curseCheck;