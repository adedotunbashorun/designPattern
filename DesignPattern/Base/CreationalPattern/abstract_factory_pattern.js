class Car4 {

    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
     }
}

class carFactory1 {

    createCar(type){
        switch(type){
            case 'civic' :
                return new Car4(4,'v6','grey');
            case 'honda' :
                return new Car4(4,'v8','red');
            default:
                return null;

        }
    }
}

//mixins design pattern
let carMixin = {
    revEngine(){
        console.log(`${this.engine} sound vroom vroom`);
    }
}

Object.assign(Car4.prototype, carMixin);

class Suv1 extends Car4 {

    constructor(doors, engine, color , wheels){
        super(doors, engine, color);
        this.wheels = wheels;
    }
}

class suvFactory {

    createCar(type){
        switch(type){
            case 'cx5' :
                return new Suv1(4,'v6','grey', 2);
            case 'sante fe' :
                return new Suv1(4,'v8','red', 3);
            default:
                return null;

        }
    }
}

const carfactory = new carFactory1();
const suvfactory = new suvFactory();

const  autoManufacture = (type, model) =>{
    switch(type){
        case 'car' :
            return carfactory.createCar(model);
        case 'suv' :
            return suvfactory.createCar(model);
        default:
            return null;

    }
}

const suvcx5 = autoManufacture('suv', 'cx5');
const carcivic = autoManufacture('car', 'civic');
carcivic.revEngine();
console.log(suvcx5);
console.log(carcivic);