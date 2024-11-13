"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Shubh",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
let activities = ["Coding", "Drugs"];
for (const hobby of person.hobbies)
    console.log(hobby.toUpperCase());
if (person.role === Role.ADMIN)
    console.log("IS ADMIN");
