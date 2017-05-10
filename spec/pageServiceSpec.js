describe('PageService', function () {
  var pageService
  var items

  beforeEach(function () {
    items = [ { item: 1 }, { item: 2 }, { item: 3 } ]
    pageService = new PageService(items)
  })

  describe('default values', function () {
    it('perPage is set to 20', function () {
      expect(pageService.perPage).toEqual(20)
    })

    it('currentPage is set to 1', function () {
      expect(pageService.currentPage).toEqual(1)
    })
  })

  describe('#pageitems', function () {
    it('returns all the items on the specific page', function () {
      expect(pageService.pageItems(1)).toEqual(items)
    })

    it('returns the items on a specific page', function () {
      pageService.perPage = 1

      expect(pageService.pageItems(1)).toEqual([{ item: 1 }])
    })

    it('sets the currentPage to the page selected', function () {
      pageService.perPage = 1
      pageService.pageItems(3)

      expect(pageService.currentPage).toEqual(3)
    })
  })

  describe('#nextPageNum', function () {
    beforeEach(function () {
      pageService = new PageService(items, 1)
    })

    it('returns the next page number', function () {
      pageService.currentPage = 1

      expect(pageService.nextPageNum()).toEqual(2)
    })

    it('returns the current page if at the last page', function () {
      pageService.currentPage = 3

      expect(pageService.nextPageNum()).toEqual(3)
    })
  })

  describe('#previousPageNum', function () {
    beforeEach(function () {
      pageService = new PageService(items, 1)
    })

    it('returns the previous page number', function () {
      pageService.currentPage = 2

      expect(pageService.previousPageNum()).toEqual(1)
    })

    it('returns the current page if there at the first page', function () {
      pageService.currentPage = 1

      expect(pageService.previousPageNum()).toEqual(1)
    })
  })
})
