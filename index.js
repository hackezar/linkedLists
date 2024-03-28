
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

function updateIndex(linkedList) {
    for( let i=1; i<linkedList.linkedList.length; i++) {
        linkedList.linkedList[i].value.index = linkedList.linkedList[i].value.index + 1;
        if (linkedList.linkedList.length == i + 1)
            linkedList.linkedList[i].next = undefined;
    }
    return linkedList;
}

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

let head = function () {
    return linkedList.linkedList[0].value;
}

let findTail = function (count = 0) {
    if (linkedList.linkedList[count].next == undefined)
        return console.log(linkedList.linkedList[count].value);
    findTail(count + 1);
}

let atIndex = function (index) {
    return console.log(linkedList.linkedList[index].value)
}

let pop = function (count = 0) {
    if (linkedList.linkedList[count].next == undefined) {
        linkedList.linkedList.pop()
        linkedList = updateIndex(linkedList);
        renderNodeDom(linkedList);
        console.log(linkedList);
        return linkedList;
    }
    pop(count + 1);
}

let contains = function (value) {
    for (let i = 0; i < linkedList.linkedList.length; i++) {
        if (linkedList.linkedList[i].value.name == value || linkedList.linkedList[i].value.age == value) {
            console.log('Found!')
            console.log(linkedList.linkedList[i].value);
            return true;
        } else {
            console.log('Not Found!');
            return false;
        }
    }
}

let find = function(value, count = 0) {
    if (linkedList.linkedList[count].value.age == value || linkedList.linkedList[count].value.name == value) {
        console.log(count);
        return count;
    } else if (count + 1 == linkedList.linkedList.length) {
        console.log('Not Found!');
        return null;
    }
    count++;
    find(value, count);
}

let toString = function(count=0, stringList="") {
    if (linkedList.linkedList[count].next == undefined) {
        stringList = stringList + 'null';
        console.log(stringList);
        return stringList;
    }
    stringList = stringList + '(Name: ' + linkedList.linkedList[count].value.name + ', Age: ' + linkedList.linkedList[count].value.age + ' ) -> ';
    count++;
    toString(count, stringList);
}

let insertAt = function(name, age, index) {
    let newNode = {
        value: {
            name: name,
            age: age,
            index: index,
        },
        next: linkedList.linkedList[index].value
    };
    linkedList.linkedList.splice(index, 0, newNode);
    linkedList.linkedList[index - 1].next = linkedList.linkedList[index].value;
    for (let i = 0; i<linkedList.linkedList.length; i++) {
        linkedList.linkedList[i].value.index = i;
    }
    renderNodeDom(linkedList);
    return linkedList;
}

let removeAt = function(index) {
    linkedList.linkedList.splice(index, 1);
    for (let i = 0; i<linkedList.linkedList.length; i++) {
        linkedList.linkedList[i].value.index = i;
    }
    linkedList.linkedList[index - 1].next = linkedList.linkedList[index].value;
    renderNodeDom(linkedList);
    return linkedList;
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
        size: size,
        head: head,
        tail: findTail,
        at: atIndex,
        pop: pop,
        contains: contains,
        find: find,
        toString: toString,
        insertAt: insertAt,
        removeAt: removeAt
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


