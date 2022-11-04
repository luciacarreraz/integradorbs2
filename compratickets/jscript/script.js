function calcTotal() {
   let desc = 0
   let categoria = document.getElementById("categ").value;
   categoria = parseInt(categoria);
   if(categoria == 1) {
      desc = 80
   }
   if(categoria == 2) {
      desc = 50
   }
   if(categoria == 3) {
      desc = 15
   }
  
   let cant = document.getElementById("cantInput").value;
   cant = parseInt(cant);
   let total = 0;
   total = (cant * 200);
   total1 = total - ((desc * total) / 100)

      document.getElementById("cantTotal").innerHTML = "Total a Pagar: $" + total1;
}
function clearForm() {
      document.getElementById("cantTotal").innerHTML = "Total a Pagar: $";
}