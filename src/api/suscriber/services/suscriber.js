'use strict';

/**
 * suscriber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suscriber.suscriber');
