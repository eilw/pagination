function PageService (items, perPage = 20) {
  this.items = items
  this.perPage = perPage
  this.currentPage = 1
  this.totalPages = Math.ceil(items.length / this.perPage)
}

PageService.prototype.pageItems = function (page) {
  this.currentPage = page
  return this.items.slice(this._startIndex(), this._endIndex())
}

PageService.prototype.nextPageNum = function () {
  if (this.currentPage < this.totalPages) {
    return (this.currentPage + 1)
  }

  return this.totalPages
}

PageService.prototype.previousPageNum = function () {
  if (this.currentPage === 1) {
    return this.currentPage
  }

  return (this.currentPage - 1)
}

PageService.prototype._startIndex = function () {
  return ((this.currentPage - 1) * this.perPage)
}

PageService.prototype._endIndex = function () {
  return (this._startIndex() + this.perPage)
}
