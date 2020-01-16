let instance = null;
class Car2 {

    constructor(doors, engine, color){
        if(!instance){
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        }
        return instance;
    }


}

// class Suv extends Cars {

//     constructor(doors, engine, color , wheels){
//         super(doors, engine, color);
//         this.wheels = wheels;
//     }
// }

const civics1  = new Car2(4, 'v6', 'red');

const honda  = new Car2(3, 'v4', 'red');

console.log(civics1);
console.log(honda);