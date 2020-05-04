/* eslint-disable no-invalid-this*/
/* eslint-disable no-undef*/
// IMPORTS
const path = require("path");
const Utils = require("./testutils");

const node_modules = path.resolve(path.join(__dirname, "../", "node_modules"));
var sequelize;

const T_TEST = 2 * 60; // Time between tests (seconds)

// CRITICAL ERRORS
let error_critical = null;

describe("P4_SQL_BBDDR", function () {

    this.timeout(T_TEST * 1000);

    before(async function() {
        const { Sequelize } = require('sequelize');
        sequelize = new Sequelize('employees', process.env.MYSQL_USER, process.env.MYSQL_PASS, {
          host: 'localhost',
          dialect: 'mysql'
        });
        try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
        } catch (error) {
          console.error('Unable to connect to the database.');
          if (!process.env.MYSQL_USER || !process.env.MYSQL_PASS) {
              console.error('Has configurado las variables de entorno con el user y pass de MySQL?');
          };
        }
    });

    it("(Precheck) Comprobando que las dependencias están instaladas...", async function () {
        this.score = 0;
        this.msg_ok = `Encontrado el directorio '${node_modules}'`;
        this.msg_err = `No se encontró el directorio '${node_modules}'`;
        var fileexists;
        try {
            fileexists = await Utils.checkFileExists(node_modules);
            if (!fileexists) {
                error_critical = this.msg_err;
            }            
        } catch (err) { error_critical = err;}

        fileexists.should.be.equal(true);
    });


    it("(Precheck): Comprobando que la base de datos se ha importado correctamente...", async function () {
        this.score = 0;
        this.msg_ok = `La base de datos se ha importado correctamente`;
        this.msg_err = `La base de datos no se ha importado correctamente`;
        var res;
        try {
            res = await sequelize.query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'employees' AND TABLE_NAME = 'departments'");
            if (!res[0][0]) {
                error_critical = this.msg_err;
                should.not.exist(error_critical);
            }
        } catch (err) { error_critical = err;}
        res[0][0].should.not.equal(undefined);
    });

    it("(1): Comprobando que la tabla emails se ha creado correctamente...", async function () {
        this.score = 2;
        this.msg_ok = `La tabla emails se ha creado correctamente`;
        this.msg_err = `La tabla emails no se ha creado correctamente`;
        var res;
        try {
            res = await sequelize.query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'employees' AND TABLE_NAME = 'emails'");
        } catch (err) { error_critical = err;}

        if (!res[0][0])
            this.msg_err += '. Existe la tabla?'

        console.log(res);
        res[0][0].should.not.equal(undefined);
    });

});