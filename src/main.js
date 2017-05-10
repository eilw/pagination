$(document).ready(function () {
  var presenter = new TablePresenter()
  var pageService
  var client = new GitHubService()
  var $body = $('body')

  $body
    .on('click', '#next', nextPage)
    .on('click', '#previous', previousPage)
    .on('click', '.pageLink', specificPage)

  init()

  function init () {
    client.getData().done(function (data) {
      pageService = new PageService(data.items)
      populateData()
    })
  }

  function populateData () {
    insertPageButtons()
    setPage(1)
  }

  function specificPage () {
    var pageNum = parseInt($(this).text(), 10)
    setPage(pageNum)
  }

  function previousPage () {
    setPage(pageService.previousPageNum())
  }

  function nextPage () {
    setPage(pageService.nextPageNum())
  }

  function insertPageButtons () {
    $('#previous').after(presenter.pageButtons(pageService.totalPages))
  }

  function setPage (page) {
    $('#repos-data').html(presenter.tableData(pageService.pageItems(page)))
    setActiveButton()
  }

  function setActiveButton () {
    $('.pageLink').removeClass('active')
    $('#pageButton' + pageService.currentPage).addClass('active')
  }
})
