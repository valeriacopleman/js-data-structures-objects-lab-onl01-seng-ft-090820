// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromDriverByKey(object, key) {
    const newObj = Object.assign({key});
    delete newObj.key;

    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    
    //const newObj = Object.assign({}, obj, [key]);

    delete obj[key];

    return obj;
}


//const obj = { foo: "bar" };

//const newObj = Object.assign({}, obj);

//newObj;
// => { foo: "bar" }

//delete newObj['foo'];
// => true

//newObj;
// => {}

//obj;
// => { foo: "bar" }