import expressLoader from './express.loader';
import Logger from './logger.loader';
import typeormLoader from './typeorm.loader';
import  iocLoader from './ioc.loader';

//We have to import at least all the events once so they can be triggered

export default async ({ expressApp }) => {

  await typeormLoader()
  Logger.info('✌️ DB loaded and connected!');

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */


    await iocLoader()
  Logger.info('✌️ Dependency Injector loaded');

//   Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
