import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Person } from '../entity/Person';

export default class PersonSeed implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<any> {
    const count = await connection.getRepository(Person).count();
    if (count === 0) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(Person)
        .values([
          {
            firstName: 'Mahefa',
            lastName: 'Marie',
            address: 'Ambolokandrina',
            email: 'marie@gmail.com',
          },
          {
            firstName: 'Archana',
            lastName: 'Angelette',
            address: 'Ankatso',
            email: 'archana@gmail.com',
          },
        ])
        .execute();
    }
  }
}
