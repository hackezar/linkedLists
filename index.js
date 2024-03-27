
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

function findEndOfList(list) {
    let lastIndex = list.length - 1;
    return lastIndex;
}

function modPrevTail(dataBase, lastIndex) {
    dataBase.linkedList[lastIndex].next = dataBase.linkedList[lastIndex + 1].value;
    console.log(dataBase);
    return;
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
        append: function(name, age) {
            let lastIndex = findEndOfList(linkedList.linkedList);
            let newNode = {
                value: {
                    name,
                    age,
                    index: lastIndex + 1
                },
                next: undefined,
            }
            dataBase.linkedList.push(newNode);
            modPrevTail(dataBase, lastIndex);
        }
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

function renderNodeDom(data) {
    let container = document.getElementById('main');
    container.innerHTML = "";
    for(let i = 0; i<list.length; i++) {
        let node = document.createElement('div');
        let name = document.createElement('p');
        name.innerHTML = data.linkedList[i].value.name;
        node.appendChild(name);
        let age = document.createElement('p');
        age.innerHTML = data.linkedList[i].value.age;
        node.appendChild(age);
        let index = document.createElement('p');
        index.innerHTML = data.linkedList[i].value.index;
        node.setAttribute('class', 'node');
        node.appendChild(index);
        container.appendChild(node);
    }
}



let linkedList = LinkedList(list);
renderNodeDom(linkedList);
console.log(linkedList);

