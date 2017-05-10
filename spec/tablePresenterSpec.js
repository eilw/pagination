describe('TablePresenter', function () {
  var presenter
  var item

  beforeEach(function () {
    item = [ {
      html_url: 'www.example.com',
      name: 'Example',
      owner: { login: 'Owner' },
      description: 'A repo',
      stargazers_count: 1,
      open_issues_count: 2
    } ]
    presenter = new TablePresenter()
  })

  describe('#tableData', function () {
    var rowOutput = "<tr><td><a href='www.example.com'>Example</a></td><td>Owner</td><td class='col-description'>A repo</td><td>Stargazers: 1<br />Open issues: 2</td></tr>"

    it('returns html output with the items contents', function () {
      expect(presenter.tableData(item)).toEqual(rowOutput)
    })

    it('returns html output for each of the items contents', function () {
      var input = [item[0], item[0]]
      var output = rowOutput + rowOutput

      expect(presenter.tableData(input)).toEqual(output)
    })

    it('calls the htmlformatter escape html function with the item description', function () {
      spyOn(HtmlFormatter.prototype, 'escapeHtml')
      presenter.tableData(item)

      expect(HtmlFormatter.prototype.escapeHtml).toHaveBeenCalledWith('A repo')
    })
  })

  describe('#pageButtons', function () {
    it('when given 1 page, returns html output for 1 button', function () {
      var page = 1
      var buttonsOutput = "<button type='button' class='pageLink' id='pageButton1'>1</button>"

      expect(presenter.pageButtons(page)).toEqual(buttonsOutput)
    })

    it('when given 3 pages, returns html output for 3 buttons numbered', function () {
      var page = 3
      var buttonsOutput = "<button type='button' class='pageLink' id='pageButton1'>1</button>"
      buttonsOutput += "<button type='button' class='pageLink' id='pageButton2'>2</button>"
      buttonsOutput += "<button type='button' class='pageLink' id='pageButton3'>3</button>"

      expect(presenter.pageButtons(page)).toEqual(buttonsOutput)
    })
  })
})
