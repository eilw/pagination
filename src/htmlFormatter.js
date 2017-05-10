function HtmlFormatter () {
}

var htmlMapping = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '/': '&#x2F;',
  '=': '&#x3D;'
}

HtmlFormatter.prototype.escapeHtml = function (string) {
  return string.replace(/[&<>"'`=\/]/g, function (s) {
    return htmlMapping[s]
  })
}
