function GitHubService () {
  this.PER_PAGE = 100
  this.url = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=' + this.PER_PAGE
}

GitHubService.prototype.getData = function () {
  return jQuery.get(this.url)
}
