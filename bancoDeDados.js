const items = {
    "1": {id:1, nome:"Caneta", valor:"12"},
    "2": {id:2, nome:"Papel", valor:"13"},
    "3": {id:3, nome:"Lápis", valor:"14"}
}

const sequence = {
    _id: 4,
    get id(){
        return this._id++;
    }
}

function listItems(){
    return Object.values(items);
}

function createItem(item){
    items.id = sequence.id;
    items[item.id] = item;
    return item;
}

function getItem(id){
    return items[id];
}

module.exports = {listItems, createItem, getItem};
