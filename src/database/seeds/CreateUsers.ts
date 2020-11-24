import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { User } from '../../../src/api/models/User';

export class CreateUsers implements Seeder {
    public run(factory: Factory, connection: Connection): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async seed(factory: Factory, connection: Connection): Promise<any> {
        await factory(User)().seedMany(10);
    }
}
