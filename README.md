# coffee-compiler2

A handy compiler with [CoffeeScript2](http://coffeescript.org/).

## Installation

    npm install coffee-compiler2

## Testing

    npm test

## Using

    var coffee = require('coffee-compiler2');

    var opts = {
      sourceMap: true,
      bare: true
    };

    coffee.fromSource('console.log "hello world!"', opts, function(err, js) {
      console.log(js);
    });

    coffee.fromFile('./main.coffee', opts, function(err, js) {
      console.log(js);
    });

## License

The MIT License (MIT)

Copyright (c) 2018 Hajime Oh-yake

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
