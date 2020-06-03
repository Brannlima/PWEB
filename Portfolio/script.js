function agradecimento(){
    alert("Obrigado por entrar em contato!");
}
window.onscroll = function() {scrollFunction()};
                
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
}