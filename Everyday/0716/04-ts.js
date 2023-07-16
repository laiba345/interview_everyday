type Person = {
    name: string;
    age: number;
    address: string;
    email: string;
}

type PersonSummary = Pick<Person, 'name' | 'age'>

const person: PersonSummary = {
    name: 'John', 
    age: 30
}

console.log(person)