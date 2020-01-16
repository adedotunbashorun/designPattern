class Car1 {

    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }


}

class Suv extends Car1 {

    constructor(doors, engine, color , wheels){
        super(doors, engine, color);
        this.wheels = wheels;
    }
}

const civics  = new Car1(4, 'v6', 'red');

const cx5  = new Suv(4, 'v6', 'red', 3);

console.log(civics);
console.log(cx5);