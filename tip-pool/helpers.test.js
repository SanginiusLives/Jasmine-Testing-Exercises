describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    
    });

    it ('should sum totals on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    })

    it ('should calculate tip percents on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 10)).toEqual(10);
    })

    it ('should append correct value on appendTd()', function () {
        let newRow = document.createElement('tr');
        appendTd(newRow, "Work")

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerHTML).toEqual('Work');
    })

    it('should create remove btn on removeRow()', function () {
        let newRow = document.createElement('tr');
        
        appendDelete(newRow);

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerHTML).toEqual('X');


      }) 

      it('should delete tr on removeRow', function () {
        let btn = document.querySelectorAll(".deleteBtn");
        btn[0].click();
        
        expect(Object.keys(allServers).length).toEqual(0);

      }) 
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });