/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

 let clicks = 0;
const button = document.getElementById("btn__element");
button.addEventListener("click", (e) => {
  e.preventDefault();
  clicks += 1;
  document.getElementById("btn__state").innerHTML = clicks;
});