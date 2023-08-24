var total = 0;
varhasilTotal = document.getElementById("hasilTotal");
var harga = 0;

const listBarang = document.querySelectorAll("#item");
listBarang.forEach((item)=> {
item.addEventListener("click", function(e){
    var pilihMenu = e.target;
    harga = pilihMenu.querySelector("#cost");
    if (pilihMenu.classList.contains("pilih")) {
        pilihMenu.classList.remove("pilih");
        total -= parseFloat(harga.innerHTML);
    }else {
        pilihMenu.classList.add("pilih");
        total += parseInt(harga.innerHTML) ;
    }
    hasilTotal.innerHTML = "Total = " +total;
  });
});