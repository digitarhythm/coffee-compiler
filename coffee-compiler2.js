// Generated by CoffeeScript 2.3.1
var coffee, compiler, fs,
  splice = [].splice;

fs = require('fs-extra');

coffee = require('coffeescript');

module.exports = compiler = {
  fromSource: function(src, ...opts) {
    var callback, code, err, map, ref, results, v3SourceMap;
    ref = opts, [...opts] = ref, [callback] = splice.call(opts, -1);
    opts = opts[0] || {};
    try {
      results = coffee.compile(src, opts);
      if (results.charAt != null) {
        code = results;
      } else {
        ({
          js: code,
          v3SourceMap
        } = results);
        if (v3SourceMap) {
          map = JSON.parse(v3SourceMap);
          map.sources = [opts.filename];
          map.sourcesContent = [src];
          code += '\n//@ sourceMappingURL=data:application/json;base64,';
          code += new Buffer(JSON.stringify(map)).toString('base64');
        }
      }
    } catch (error) {
      err = error;
      if (err.name === 'SyntaxError') {
        err.message = err.toString();
      }
    }
    return callback(err, code);
  },
  fromFile: function(filepath, ...opts) {
    var callback, ref;
    ref = opts, [...opts] = ref, [callback] = splice.call(opts, -1);
    opts = opts[0] || {};
    if (opts.filename == null) {
      opts.filename = filepath;
    }
    return fs.readFile(filepath, 'utf8', function(err, src) {
      if (err != null) {
        return callback(err);
      }
      return compiler.fromSource(src, opts, callback);
    });
  }
};
