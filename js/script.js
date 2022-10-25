document.querySelector('#calculate').onclick = function(){
  var bill = Number(document.getElementById('amount').value);
  var tip = document.getElementById('rangeValue').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  var tipValue = bill * (tip/100)
  var finalBill = bill + tipValue
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount')
  var totalBillWithTip = document.querySelector('#totalBillWithTip')

tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value =finalBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}