
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
	name: "Shubh",
	age: 20,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

let activities: string[] = ["Coding", "Drugs"];

for (const hobby of person.hobbies)
    console.log(hobby.toUpperCase());

if(person.role === Role.ADMIN)
    console.log("IS ADMIN")