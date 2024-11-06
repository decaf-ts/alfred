// eslint-disable-next-line no-undef
exports.handlers = {
  beforeParse: function (e) {
    e.source = e.source.replace(/^#!.*/, "");
  },
};
