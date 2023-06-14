
//Write a “person” class to hold all the details.
class person {
    constructor(name, age, gender, qualification, address) {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
        this.address=address;
    }
}
greet = () => {
return `details are ${name}`;
}
var myperson=new person("VENKAT", 28, "male", "BCA", "Mayiladuthrai")
console.log(myperson);

//write a class to calculate the uber price.

class price {
    constructor(km, cost) {
        this.km=km;
        this.cost=cost;
        
    }
}
greet = () => {
return `${km * cost}`;
}
var myprice=new price(12, 22)
console.log(`travel charge is ${12*22}`);