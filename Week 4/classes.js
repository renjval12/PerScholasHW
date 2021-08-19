let text = "<div>"
class Circle {
    constructor(diameter, name) {
        // this.name = name
        this.diameter = diameter
        this.name = name
    }

    //find the radius method
    radius() {
        let radius = this.diameter / 2
        return radius
    }

    //find the circumference method
    circumference() {
        let circumference = Math.floor((2 * Math.PI) * (this.radius()))
        return circumference
    }

    //find the area method
    area() {
        let area = Math.floor(Math.PI * (this.radius() ** 2))
        return area
    }

    //method to display circle diameter, radius, circumference and area in the DOM

    displayCircleDetails() {
        text = `<h2> ${this.name} </h2> <p>Diameter: ${this.diameter}</p> <p>Radius: ${this.radius()}</p><p>Circumference: ${this.circumference()}</p><p>Area: ${this.area()}</p>`
        return text
    }
}

// output in DOM: <div> text(displayCircleDetails method) </div>
text = text + "</div>"

//create new circle based on input function
function createNewCircle(circName) {
    document.getElementById('circle').innerHTML = ''
    let circle = new Circle(document.getElementById('diameter-input').value, circName)
    document.getElementById('circle').innerHTML = circle.displayCircleDetails()
}

//quadrilaterals classes

let quadSides = 4 // sides of a quadrilateral

//Rectangle class

class Rectangle {
    constructor(name, sides, width, length) {
        this.name = name
        this.sides = sides
        this.width = width
        this.length = length
    }
    //perimeter method 
    perimeter() {
        let perimeter = 2 * (this.width * this.length)
        return perimeter
    }

    //method to display rectangle name, sides, width, length, and perimeter in the DOM
    displayRectangleDetails() {
        text = `<h2> ${this.name}</h2>
        <p>Sides: ${this.sides}</p> 
        <p>Width: ${this.width}</p> 
        <p>Length: ${this.length}</p>
        <p>Perimeter: ${this.perimeter()}</p>`
        return text
    }
}

//createNewRectangle function for the DOM
function createNewRectangle() {
    let rectWidth = document.getElementById('rect-width').value //width of rectangle
    let rectLength = document.getElementById('rect-length').value //length of rectangle
    let name = document.getElementById('rectangle-name').value
    document.getElementById('rectangle').innerHTML = ''
    let rectangle = new Rectangle(name, quadSides, rectWidth, rectLength)
    document.getElementById('rectangle').innerHTML = rectangle.displayRectangleDetails()
}
text = text + "</div>"

class Square {
    constructor(name, sides, width) {
        this.name = name
        this.sides = sides
        this.width = width
        this.length = this.width
    }

    area() {
        let perimeter = this.width * this.length
        return perimeter
    }

    displaySquareDetails() {
        text = `<h2> ${this.name}</h2>
        <p>Sides: ${this.sides}</p> 
        <p>Width: ${this.width}</p> 
        <p>Length: ${this.length}</p>
        <p>Area: ${this.area()}</p>`
        return text
    }
}

function createNewSquare() {
    let sqWidth = document.getElementById('square-width').value //width of square
    let name = document.getElementById('square-name').value //name of square
    document.getElementById('square').innerHTML = ''
    let square = new Square(name, quadSides, sqWidth)
    document.getElementById('square').innerHTML = square.displaySquareDetails()
}