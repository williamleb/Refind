import logger from './Logger';

export const logError = (err: Error) => {
    if (err) {
        logger.error(err);
    }
};
