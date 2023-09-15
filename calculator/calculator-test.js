
it('should calculate the monthly rate correctly', function () {
  // ...
  const number = {
    amount: 1000,
    years: 3,
    rate: 5
  }

  expect(calculateMonthlyPayment(number)).toEqual('29.97');

});


it("should return a result with 2 decimal places", function() {
  // ..
  const number = {
    amount: 10526,
    years: 20,
    rate: 10
  }
  
  expect(calculateMonthlyPayment(number)).toEqual('101.58');

});

it("should handle long time loan", function () {
  const number = {
    amount: 10000,
    years: 10000,
    rate: 5
  }

  expect(calculateMonthlyPayment(number)).toEqual('41.67');

})

it("should handle large numbers", function () {
  const number = {
    amount: 1000000000,
    years: 10000,
    rate: 5
  }

  expect(calculateMonthlyPayment(number)).toEqual('4166666.67');

})

/// etc
