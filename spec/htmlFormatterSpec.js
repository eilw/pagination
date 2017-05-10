describe('HtmlFormatter', function () {
  var formatter
  var string

  beforeEach(function () {
    formatter = new HtmlFormatter()
  })

  describe('#escapeHtml', function () {
    it('replaces html characters', function () {
      var input = '& < > / ='
      expect(formatter.escapeHtml(input)).toEqual('&amp; &lt; &gt; &#x2F; &#x3D;')
    })

    it('replaces html characters around words', function () {
      var input = '<strong>'
      expect(formatter.escapeHtml(input)).toEqual('&lt;strong&gt;')
    })
  })
})
