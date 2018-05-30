import { Component, OnInit } from '@angular/core';

class Greeting{
  message: string;
  constructor(message: string){
    this.message= message;
  }
  greet() {
    return "hello, " + this.message;
  }
}
    class Animal { 
      name: string;
      constructor(animalName: string){
        this.name = animalName;
      }
      move(distance: number = 0){
        console.log(`${this.name} moved ${distance}m.`);
      }
}
class Dog extends Animal{
  constructor(name: string){
    super(name);
  }
  bark(){
    console.log('Woof!');
  }
  move(distanceMovedByDog: number = 5){
    console.log('dog is moving...');
    super.move(distanceMovedByDog);
  }
}
class Poodle extends Dog{
  constructor(name: string){
    super(name);
  }
  move(){
    let moving = super.move();
    console.log('pooding is walking...');
  }

}
class Horse extends Animal{
  constructor(name: string){
    super(name);
  }
  nay(){
    console.log('Nay!');
  }
  move(distanceMovedByHorse: number = 45){
    console.log('horse is moving...');
    super.move(distanceMovedByHorse);
  }
}
class User{
  private name : string;
  constructor(name: string){
    this.name = name;
  }
}
class John extends User {
  constructor(){
    super("John");
  }
}
class Employee{
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class Person{
  protected name: string;
  constructor(name: string){
    this.name = name;
  }
}
class Worker extends Person{
  private department: string;

  constructor(name: string, department: string){
    super(name);
    this.department = department;
  }
  getDetails() {
    return `My name is ${this.name} and I work in ${this.department}.`;
  }
}
export class AppComponent implements OnInit{
  title = 'app works!';
  ngOnInit(){
    // this.classTesting();
    // this.animalClassTesting();
    // this.classCompatibilityTesting();
    this.extendDerivedClassTesting();
  }
  classTesting() {
    const greeter = new Greeting('world!');
    console.log(greeter.greet());
  }
  animalClassTesting(){
    const dog = new Dog("Goofy");
    dog.bark();
    dog.move();
    const horse = new Horse("Ray");
    horse.nay();
    horse.move();
    // console.log();
    // console.log();

  }
  classCompatibilityTesting(){
    let user = new User("Doe");
    const john = new John();
    console.log(user);
    console.log(john);
    const employee = new Employee("Smith");
    console.log(employee);

    user = john;
    console.log(user);
    
  }
  extendDerivedClassTesting(){
    const poodle = new Poodle("Tom");
    poodle.move();
  }
  protectedTesting(){
    const worker = new Worker("Steve", "Sales");
    console.log(worker.getDetails());
    // console.log(worker.name);
    // const person = Person("Patrick");
    // console.log(person);
  }
}

