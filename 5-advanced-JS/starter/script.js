
function Person(name,age){
  let person={};
  person.name = name;
  person.age = age;

person.calculateAge = function(){
  console.log(`${this.name}:2020-${this.age}`);
}
return person;
}
var p1 = Person('ray',3);
console.log(p1.calculateAge());
var p2 = Person('bruce',7);
console.log(p2.calculateAge());
