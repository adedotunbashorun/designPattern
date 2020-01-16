function f(){
    console.log('called f');
    return function(target, propertyKey){
        console.log('called f');
    }
}

function g(){
    console.log('called g');
}

class Car5 {
    @f()
    @g()
}