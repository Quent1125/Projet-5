function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generateur(nb,type){
  document.getElementById("citationZone").innerHTML = "" ;
  const debutT1 = ["debut1T1", "debut2T1","debut3T1","debut4T1","debut5T1","debut6T1","debut7T1","debut8T1","debut9T1","debut10T1"];
  const  milieuT1 = ["millieu1T1","millieu2T1","millieu3T1","millieu4T1","millieu5T1","millieu6T1","millieu7T1","millieu8T1","millieu9T1","millieu10T1"];
  const finT1 = ["fin1T1","fin2T1","fin3T1","fin4T1","fin5T1","fin6T1","fin7T1","fin8T1","fin9T1","fin10T1"];

  const debutT2 = ["debut1T2", "debut2T2","debut3T2","debut4T2","debut5T2","debut6T2","debut7T2","debut8T2","debut9T2","debut10T2"];
  const  milieuT2 = ["millieu1T2","millieu2T2","millieu3T2","millieu4T2","millieu5T2","millieu6T2","millieu7T2","millieu8T2","millieu9T2","millieu10T2"];
  const finT2 = ["fin1T2","fin2T2","fin3T2","fin4T2","fin5T2","fin6T2","fin7T2","fin8T2","fin9T2","fin10T2"];
  let texte = "";
  if (nb > 0){
    if (type !== "" ){
      document.getElementById("titre1").style.display = "block";
      document.getElementById("form2").style.display = "block";
      if (type === "2" ){
        for (let i = 0 ; i<nb ; i++){
          texte = "Citation "+ (i+1) +  " : " + debutT2[getRandomInt(debutT2.length)] +" "+ milieuT2[getRandomInt(milieuT2.length)] +" "+ finT2[getRandomInt(finT2.length)]+"<br>" ;
          document.getElementById("citationZone").innerHTML += texte ;
        }
      }
      if (type === "1"){
        for (let i = 0 ; i<nb ; i++){
          texte = "Citation "+ (i+1) +  " : " + debutT1[getRandomInt(debutT1.length)] +" "+ milieuT1[getRandomInt(milieuT1.length)] +" "+ finT1[getRandomInt(finT1.length)]+"<br>" ;
          document.getElementById("citationZone").innerHTML += texte ;
        }
      }
    } else {
      document.getElementById("citationZone").innerHTML += "Pas de type séléctionner";
    }

  } else {
    document.getElementById("citationZone").innerHTML = "Pas de nombre de citation séléctionner" ;
  }
}


document.getElementById("btn2").addEventListener('click', document.location.reload(true));


document.getElementById("btn1").addEventListener('click',generateur(document.getElementById('nb').value,document.getElementById('typesC').value));