import "reflect-metadata";
import {createConnection} from "typeorm";
import {Person} from "./entity/Person";

createConnection().then(async connection => {   
    const person = new Person();
    person.firstName = "Jean Aimé";
    person.lastName = "Ravomanana";
    person.address = "Ambohipo";
    person.email = "jeanaime.ravomanana@gmail.com"
    await connection.getRepository(Person).save(person);
    console.log("[Person] new record saved ", person);

    const persons = await connection.getRepository(Person).find({where: {lastName: 'Ravomanana'}});
    console.log("[Person]: load user by lasmane", persons);

}).catch(error => console.log(error));
