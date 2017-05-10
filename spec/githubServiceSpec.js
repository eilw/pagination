describe('GitHubService', function () {
  var service

  beforeEach(function () {
    service = new GitHubService()
  })

  describe('#getData', function () {
    it('makes a get request to the service url', function () {
      spyOn(jQuery, 'get')
      service.url = 'www.test.com'

      service.getData()
      expect(jQuery.get).toHaveBeenCalledWith('www.test.com')
    })
  })
})
