import {MicroframeworkSettings} from './MicroframeworkSettings';

/**
 * Microframework loader is a function that executes in order on microframework bootstrap.
 */
export type MicroframeworkLoader = (options?: MicroframeworkSettings) => Promise<any>|any;
