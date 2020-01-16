class Car3 {

    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
     }
}

class carFactory {

    createCar(type){
        switch(type){
            case 'civic' :
                return new Car3(4,'v6','grey');
            case 'honda' :
                return new Car3(4,'v8','red');
            default:
                return null;

        }
    }
}

const factory = new carFactory();
const hond = factory.createCar('honda');

console.log(hond);