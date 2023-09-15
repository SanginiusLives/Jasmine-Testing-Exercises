describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 10;
    });
  
    it('should add a new Payment to Payment table on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('10');
      expect(allPayments['payment1'].tipPercent).toEqual(10);
    });
  
    it('should not update payment table with no value onSubumitPaymentInfo()', function () {
        billAmtInput.value = 0;
        submitPaymentInfo();
        

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should append on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);

    })

    it('should create curPayment on createCurPayment()', function () {
        let newPayment = {
            billAmt: '100',
            tipAmt: '10',
            tipPercent: 10
        }

        expect(createCurPayment()).toEqual(newPayment);
    })

    
  
  
    afterEach(function() {
      // teardown logic
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      paymentTbody.innerHTML = '';
      PaymentId = 0;
      allPayments = {};
      billAmtInput.value = '';
      tipAmtInput.value = '';
    });
  });
  