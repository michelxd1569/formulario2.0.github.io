const $btn = document.querySelector("button"),
      $form = document.querySelector("form");

$form.addEventListener("keyup", e => {
  let disabled = false;
  
  if ($form.nombre.value === "")   disabled = true; 
  if ($form.email.value === "") disabled = true;
  
  (disabled === true)
  ? $btn.disabled = true
  : $btn.disabled = false;
})

window.onload=function(){
    let numero = document.getElementById("numRandom");
    numero.value = Math.floor((Math.random() * (999999 - 0 + 1))+ 0);
}