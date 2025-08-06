const person = {
    "age":18,
    "name":"surya",
    "Employed":false
};
const people = {
    "age":19,
    "name":"adithya",
    "Employed":true
};

const student = {
    "age":23,
    "name":"alexa",
    "Employed":true
};

const teacher = {
    "age":19,
    "name":"siri",
    "Employed":true
};

console.log(teacher.age);

const names = ["Anil","Reddy","Karna","Siri"];

const peop = JSON.stringify(people);
const pers = JSON.stringify(person);
const stud = JSON.stringify(student);
const teac = JSON.stringify(teacher);
console.log(peop);
console.log(pers);
console.log(teac);
console.log(stud);