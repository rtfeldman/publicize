publicize = require("../publicize.js");
assert    = require("assert");

assert(typeof log === "undefined");

publicize(console);

assert(typeof log === "function");

try {
    log("The test passed!");
} catch (err) {
    console.log("The test failed.");
}