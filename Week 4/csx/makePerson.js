function makePerson(name, age) {
    let object = {}
    object.name = name
    object.age = age
    return object
}

const vicky = makePerson('Vicky', 24);

console.log(vicky.name)
console.log(vicky.age)