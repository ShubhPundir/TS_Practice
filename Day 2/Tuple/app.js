"use strict";
const person = {
    name: "Shubh",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role.push("admin"); // ALLOWED
// person.role[1] = 10; // ERROR
person.role = [0, "Heheh"]; // ALLOWED
let activities = ["Coding", "Drugs"];
for (const hobby of person.hobbies)
    console.log(hobby.toUpperCase());
