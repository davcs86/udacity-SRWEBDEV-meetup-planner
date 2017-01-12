!function (a) {
  "use strict";
  var b = {
    main: this, init: function (b, c) {
      this.opts = c, this.wrap = a(b), this.heads = this.wrap.find(c.headers), this.folders = this.wrap.find(c.folders), this.openMethod = c.animated ? "slideDown" : "show", this.closeMethod = c.animated ? "slideUp" : "hide", this.timing = c.animated ? c.timing || 700 : null, c.closedOnStart && this.folders.hide(), this.setListeners()
    }, setListeners: function () {
      var b = this;
      this.heads.on("click", function () {
        b.clickedEl = a(this), b.relatedFolder = b.clickedEl.next(b.opts.folders), b.toggleFolders()
      })
    }, toggleFolders: function () {
      return this.relatedFolder.is(":visible") ? void this.relatedFolder[this.closeMethod](this.timing, this.fireCallback("onClose")) : (this.opts.closeOthers === !0 && this.folders[this.closeMethod](this.timing, this.fireCallback("onClose")), void this.relatedFolder[this.openMethod](this.timing, this.fireCallback("onOpen")))
    }, fireCallback: function (a) {
      this.opts[a] ? this.opts[a](this) : null
    }
  };
  "function" != typeof Object.create && (Object.create = function () {
    function a() {
    }

    return function (b) {
      return a.prototype = b, new a
    }
  }()), a.fn.squeezebox = function (c) {
    var d = a.extend({}, {
      headers: ".squeezhead",
      folders: ".squeezecnt",
      closeOthers: !0,
      closedOnStart: !0,
      animated: !0
    }, c);
    return this.each(function () {
      var a = Object.create(b);
      a.init(this, d)
    })
  }
}(jQuery, window, document);
