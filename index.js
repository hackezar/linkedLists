
const list = [
{
    name: "jack",
    age: 25
}, {
    name: "kiley",
    age: 24
},
{
    name: "bill",
    age: 44
},
{
    name: "kevin",
    age: 23
},
{
    name: "ed",
    age: 25
},
{
    name: "tim",
    age: 67
},
{
    name: "karen",
    age: 49
},
{
    name: "peter",
    age: 69
},
{
    name: "terry",
    age: 19
},
];

let append = function (name, age) {
    let lastIndex = findEndOfList(linkedList.linkedList);
    let newNode = {
        value: {
            name,
            age,
            index: lastIndex + 1
        },
        next: undefined,
    }
    linkedList.linkedList.push(newNode);
    modPrevTail(linkedList, lastIndex);
    renderNodeDom(linkedList);
};

let prepend = function (name, age) {

    function updateIndex(linkedList) {
        for( let i=1; i<linkedList.linkedList.length; i++) {
            linkedList.linkedList[i].value.index = linkedList.linkedList[i].value.index + 1;
        }
        return linkedList;
    }
    let headNode = linkedList.linkedList[0];
    let newNode = {
        value: {
            name,
            age,
            index: headNode.value.index
        },
        next: linkedList.linkedList[0].value
    }
    linkedList.linkedList.unshift(newNode);
    return updateIndex(linkedList);
}

let size = function (count = 0) {
    if (linkedList.linkedList[count].next == undefined) 
        return console.log("Total Number of Nodes: " + (count + 1));
    size(count + 1);
}

function findEndOfList(list) {
    let lastIndex = list.length - 1;
    return lastIndex;
}

function modPrevTail(dataBase, lastIndex) {
    dataBase.linkedList[lastIndex].next = dataBase.linkedList[lastIndex + 1].value;
    return;
}

function renderNodeDom(data) {
    console.log(data);
    let container = document.getElementById('main');
    container.innerHTML = "";
    for(let i = 0; i<data.linkedList.length; i++) {
        let node = document.createElement('div');
        let name = document.createElement('p');
        name.innerHTML = 'name: ' + data.linkedList[i].value.name;
        node.appendChild(name);
        let age = document.createElement('p');
        age.innerHTML = 'age: ' + data.linkedList[i].value.age;
        node.appendChild(age);
        let index = document.createElement('p');
        index.innerHTML = 'index: ' + data.linkedList[i].value.index;
        node.setAttribute('class', 'node');
        node.appendChild(index);
        container.appendChild(node);
    }
}

let LinkedList = function (list) {
    let listCopy = [];

    for (let i = 0; i < list.length; i++) {
        list[i].next = list[i + 1];
        list[i].index = i;
        listCopy.push(makeNodes(list[i]));
    };

    let dataBase = {
        linkedList: listCopy,
        append: append,
        prepend: prepend,
        size: size
    }
    return dataBase;
} 

function makeNodes(node) {
    return {
        value: {
            name: node.name,
            age: node.age,
            index: node.index
        },
        next: node.next
    }
}



let linkedList = LinkedList(list);
renderNodeDom(linkedList);


