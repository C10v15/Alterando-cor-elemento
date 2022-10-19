


const btnTrocaCor = document.getElementById("btn-troca-cor");

const squareBlue = document.querySelector(".bluee");

btnTrocaCor.addEventListener("click", trocarCor);

function trocarCor() {
  squareBlue.classList.remove("bluee");
  squareBlue.classList.add("yelloww"); 
}
