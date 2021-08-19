function personFromPersonStore(name, age) {
    let newObject = Object.create(personStore)
    newObject.name = name
    newObject.age = age
    return newObject
}

const renee = personFromPersonStore('Renee', 27)