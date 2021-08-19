function PersonConstructor(){
    this.greet=() =>console.log('hello')
}

const simon = new PersonConstructor()

simon.greet()