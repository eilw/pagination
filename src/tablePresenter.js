function TablePresenter () {
}

TablePresenter.prototype.tableData = function (items) {
  return items.map(buildRow).join('')
}

TablePresenter.prototype.pageButtons = function (numberOfPages) {
  var html = ''
  for (var pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    html += "<button type='button' class='pageLink' id='pageButton" + pageNum + "'>" + pageNum + '</button>'
  }
  return html
}

function buildRow (item) {
  var html = '<tr>'
  html += "<td><a href='" + item.html_url + "'>" + item.name + '</a></td>'
  html += '<td>' + item.owner.login + '</td>'
  html += "<td class='col-description'>" + escapeHtml(item.description) + '</td>'
  html += '<td>Stargazers: ' + item.stargazers_count + '<br />' + 'Open issues: ' + item.open_issues_count + '</td>'
  html += '</tr>'
  return html
}

function escapeHtml (string) {
  var formatter = new HtmlFormatter()
  return formatter.escapeHtml(string)
}
