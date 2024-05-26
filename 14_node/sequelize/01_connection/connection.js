// Install sequelize    $ npm install sequelize
// Install the driver, in this case 'tedious' for (sql server) $ npm install tedious 

// Import Sequelize
// we don't have to import tedious, works internally with sequelize
const Sequelize = require("sequelize");

// Create Connection using seperated parameters (other dialects)
// ( DATABASE | USERNAME | PASSWORD | {OPJECT} )
const sequelize = new Sequelize("node", "sa", "sa123456", {
  host: "localhost",
  port: 1433,       
  dialect: "mssql",
  dialectOptions: { // Optional
    options: {
      trustedConnection: true,
    },
  },
});

// Text the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Close the connection (we have to make it wait the authentication at first before closing it)
// sequelize.close();


