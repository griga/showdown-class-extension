"use strict";

const showdown = require('showdown');
require('../src/main');

describe("Showdown class sugar extension spec", function () {

    it("add desired class to image node", function () {
        let converter = new showdown.Converter({ extensions: ['classify'] });
        let text = '![image alt](http://lorempixel.com/400/200){.thumbnail}';
        let html = converter.makeHtml(text);

        let expectation = html === '<p><img class="thumbnail" src="http://lorempixel.com/400/200" alt="image alt" ></p>'
        expect(expectation).toBe(true);
    });

    it("add desired class to image with no alt", function () {
        let converter = new showdown.Converter({ extensions: ['classify'] });
        let text = '![](http://lorempixel.com/400/200){.thumbnail}';
        let html = converter.makeHtml(text);

        let expectation = html === '<p><img class="thumbnail" src="http://lorempixel.com/400/200" alt="" ></p>'
        expect(expectation).toBe(true);
    });


});
