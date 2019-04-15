if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    if (typeof this !== 'function') {
      throw TypeError('Function.prototype.bind - what is trying to be fBound is not callable');
    }
    var fn = this,
      args1 = Array.prototype.slice.call(arguments, 1),
      fNOP = function () { },
      fBound = function () {
        var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(this instanceof Function ? context : this, args1.concat(args2));
      };

    if (this.prototype) {
      fNOP.prototype = this.prototype
    }

    fBound.prototype = new fNOP()

    return fBound;
  }
}
