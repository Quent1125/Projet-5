


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generateur(nb){
  let debut = ["debut1", "debut2","debut3","debut4","debut5","debut6","debut7","debut8","debut9","debut10"];
  let milieu = ["millieu1","millieu2","millieu3","millieu4","millieu5","millieu6","millieu7","millieu8","millieu9","millieu10"];
  let fin = ["fin1","fin2","fin3","fin4","fin5","fin6","fin7","fin8","fin9","fin10"];
  document.write("<p>");
  for (let i = 0 ; i<nb ; i++){

    document.write("<br>citation", i+1, " :" ,debut[getRandomInt(debut.length)],milieu[getRandomInt(milieu.length)],fin[getRandomInt(fin.length)]);
  }
  document.write("</p><br> <form> <input id='nb' type='number' max='5' min='1' required> <input type='submit' id='btn1' value='Générer' onclick='generateur(document.getElementById('nb').value);return false;'> <input type='submit' id='btn2' value='Arrêter'> </form>");

}



