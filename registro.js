<script type="text/javascript">
$(document).ready(function(){
  loadExpensesCategories();
  loadIncomeCategories();
});
function loadExpensesCategories(){
  $.mobile.loading("show");
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://finanzapersonal.tribus.com.uy/categoriasIngresos",
    success: function(data){
      resultsExpenses = data;
      showListExpenses();
    }
  });
}
function showListExpenses(){
   console.log(resultsExpenses);
  for(var i = 0; i < resultsExpenses.length ; i++){
    var aux = resultsExpenses[i];
    $('#category').append("<option value="+ i +">" + aux +"</option>");
  }
}
function loadIncomeCategories(){
  $.mobile.loading("show");
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://finanzapersonal.tribus.com.uy/categoriasGastos",
    success: function(data){
      resultsIncome = data;
      showListIncome();
    }
  });
}
function showListIncome(){
   console.log(resultsIncome);
  for(var i = 0; i < resultsIncome.length ; i++){
    var aux = resultsIncome[i];
    $('#clientDdl').append("<option value="+ i +">" + aux +"</option>");
  }
}



</script>
