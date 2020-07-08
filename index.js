// #1
function concat() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    return arr1.concat(arr2);
}

// #2
function reverse() {
    const arr = [1, 2, 3];
    return arr.reverse();
}

// #3
function push() {
    const arr = [1, 2, 3];
    arr.push(4, 5, 6);
    return arr;
}

// #4
function unshift() {
    const arr = [1, 2, 3];
    arr.unshift(4, 5, 6);
    return arr;
}

// #5
function shift() {
    const arr = ['js', 'css', 'jq'];
    return alert(arr.shift());
}

// #6
function pop() {
    const arr = ['js', 'css', 'jq'];
    return alert(arr.pop());
}

// #7
function slice() {
    const arr = [1, 2, 3, 4, 5];
    return arr.slice(0, 3);
}

// #8
function slice2() {
    const arr = [1, 2, 3, 4, 5];
    return arr.slice(3, 5);
}

// #9
function splice() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);
    return arr;
}

// #10
function splice2() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(0, 1);
    arr.splice(arr.length - 1, 1);
    return arr;
}

// #11
function splice3() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, 'a', 'b', 'c');
    return arr;
}

// #12
function splice4() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(arr.length - 1, 0, 'c');
    arr.splice(arr.length, 0, 'e');
    return arr;
}

// #13
function sort() {
    const arr = [3, 4, 1, 2, 7];
    arr.sort((a, b) => a - b);
    return arr;
}

// #14
function keys() {
    const obj = {
        js: 'test',
        jq: 'hello',
        css: 'world',
    };
    return Object.keys(obj);
}