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

    it("1. Comprobando que ...", async function () {
        this.score = 2;
        this.msg_ok = `Resultado OK`;
        this.msg_err = `Resultado NOK`;
        try {
            const result = false;
            if (!result) {
                error_critical = this.msg_err;
            }
  
            result.should.be.equal(true);
        } catch (err) { error_critical = err;}
    });

});