function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generateur(nb){
  document.getElementById("citationZone").innerText = "" ;
  let debut = ["debut1", "debut2","debut3","debut4","debut5","debut6","debut7","debut8","debut9","debut10"];
  let milieu = ["millieu1","millieu2","millieu3","millieu4","millieu5","millieu6","millieu7","millieu8","millieu9","millieu10"];
  let fin = ["fin1","fin2","fin3","fin4","fin5","fin6","fin7","fin8","fin9","fin10"];
  for (let i = 0 ; i<nb ; i++){

    let  texte = "citation"+ (i+1) +  " :" + debut[getRandomInt(debut.length)] + milieu[getRandomInt(milieu.length)] + fin[getRandomInt(fin.length)]+ " \n" ;
    document.getElementById("citationZone").innerText += texte ;
  }

}
