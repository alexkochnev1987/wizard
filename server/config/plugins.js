module.exports = ({ env }) => ({
  // ...
  // io: {
  //   enabled: true,
  //   config: {
  //     contentTypes: ['api::article.article', 'geolocation'],
  //     events: [
  //       {
  //         name: 'connection',
  //         handler: ({ strapi }, socket) => {
  //           // will log every time a client connects
  //           strapi.log.info(`[io] a new client with id ${socket.id} has connected`);
  //         },
  //       },
  //       {
  //         name: 'geolocation',
  //         handler: ({ strapi }, socket) => {
  //           socket.on('geolocation', (data) => {
  //             console.log(`Geolocation data received: `, data);
  //             // Here you can save the data to a database, emit to other clients, etc.
  //           });
  //         },
  //       },
  //     ],
  //   },
  // },
  // ...
});
