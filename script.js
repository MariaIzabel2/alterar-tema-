button{
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
}

const botao = document.getElementById("tema");

botao.addEventListener("click",function () {
    document.body.classList.toggle("dark");
    
});