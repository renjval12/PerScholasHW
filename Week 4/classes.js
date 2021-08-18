let text = "<div>" + "<h2>"
class Circle {
    constructor(diameter, name) {
        // this.name = name
        this.diameter = diameter
        this.name = name
    }

    radius() {
        let radius = this.diameter / 2
        return radius
    }

    circumference() {
        let circumference = Math.floor((2 * Math.PI) * (this.radius()))
        return circumference
    }

    area() {
        let area = Math.floor(Math.PI * (this.radius() ** 2))
        return area
    }

    displayCircleDetails() {
        text = `${this.name} </h2> <p>Diameter: ${this.diameter}</p> <p>Radius: ${this.radius()}</p><p>Circumference: ${this.circumference()}</p><p>Area: ${this.area()}</p>`
        return text
    }
}
text = text + "</div>"
let circ1 = new Circle(document.getElementById('diameter-input').value)
circ1.displayCircleDetails()

function createNewCircle(circName) {
    document.getElementById('circle').innerHTML = ''
    let circle = new Circle(document.getElementById('diameter-input').value, circName)
    document.getElementById('circle').innerHTML = circle.displayCircleDetails()
}


        // class Rectangle {
        //     constructor(sides, width, length) {
        //         this.sides = sides
        //         this.width = width
        //         this.length = length
        //     }

        //     perimeter() {
        //         let perimeter = 2 * (this.width * this.length)
        //         this.perimeter = perimeter
        //         return perimeter
        //     }
        // }

        // let rect1 = new Rectangle(4, 10, 5)

        // class Square {
        //     constructor(sides, width, length) {
        //         this.sides = sides
        //         this.width = width
        //         this.length = length
        //     }

        //     area() {
        //         let perimeter = this.width * this.length
        //         return perimeter
        //     }
        // }

        // let sq1 = new Square(4, 5, 5)