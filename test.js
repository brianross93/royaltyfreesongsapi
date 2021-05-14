const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

const server = require('./index.js')

chai.use(chaiHttp)

describe("basic test routes", () => {
    it("returns a 200", (done) => {

    })
    it("gets a list of songs", (done) => {
        
    })
    it("adds a song to DB", (done) => {
        
    })
    it("update an existing song in DB", (done) => {
        
    })
    it("removes a song from db", (done) => {
        
    })


})