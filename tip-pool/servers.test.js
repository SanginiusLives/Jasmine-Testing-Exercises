describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update table with correct text', function () {
    submitServerInfo();
    updateServerTable();

    let currentList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentList.length).toEqual(3);

  });

 


  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    ServerId = 0;
    allServers = {};
  });
});
