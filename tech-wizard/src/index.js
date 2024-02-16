'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    let { Server } = require('socket.io');
    let io = new Server(strapi.server.httpServer, {
      cors: {
        origin: ["http://localhost:8081", 'http://192.168.0.17:8081'],
        // origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on('connection', (socket) => {
      console.log("Connection", socket.id);
      socket.on('geolocation', async (data) => {
        const { latitude, longitude, id } = JSON.parse(data)
        console.log(latitude, longitude);
        try {
          const updatedEntry = await strapi.entityService.update('api::geolocation.geolocation', id, {
            data: { latitude, longitude },
          });
          console.log('entry', updatedEntry);
        } catch (e) {
          console.error('Error saving geolocation data:', e);
        }
      });
    })

  },
};
