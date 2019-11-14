const jsdom = require('jsdom')
const { JSDOM } = jsdom
const expect = require('chai').expect
const options = {
 resources: 'usable',
 runScripts: 'dangerously',
};

beforeEach(function(done) {
 JSDOM.fromFile("index.html", options)
 .then((dom) => {
   global.window = dom.window;
 })
 .then(done, done);
});

describe('Click Event', function() {
 it(`click event should be fired`, function() {
   const buttonElement = window.document.getElementById("button")
   const boxElement = window.document.getElementById("box")

   // Fire the click action on the button
   const event = new window.MouseEvent('click')
   buttonElement.dispatchEvent(event)

   // Compare the value
   expect(boxElement.innerHTML).to.equal("Yes!");
 });
})