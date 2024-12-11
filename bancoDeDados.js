const items = {
    "1": {id:1, nome:"Caneta"},
    "2": {id:2, nome:"Papel"},
    "3": {id:3, nome:"Lápis"}
}

function listItems(){
    return Object.values(items);
}

module.exports = (listItems);