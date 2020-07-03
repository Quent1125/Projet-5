function getRandomInt(max) { //fonction qui génère un nombre aléatoire entre 0 et le paramètre max
  return Math.floor(Math.random() * Math.floor(max));
}


function generateur(){  //fonction qui génère et affiche une citations
  const debutT1 = ["J'ai un rêve à accomplir,"  , "Je n'abandonnerai jamais,"  ,"N'abandonne pas,"  ,"Je ne vais pas m'enfuir en courant,"  ,"Un rêve irréalisable?"  ,"Un jour nous prendrons la mer "  ,"Continue ta route,"  ," Un jour, sans aucun doute,"  ,"Je les exterminerai tous,"  ,"Il ne faut pas me sous-estimer,"];
  const  milieuT1 = ["si je meurs en essayant,"  , "aussi longtemps que je continuerai à respirer dans ce monde,"  ,"le début est toujours le moment le plus difficile,"  ,"je ne reviens jamais sur mes mots,"  ,"c'est ça l'aventure,"  ,"et nous vivrons notre vie comme nous le voulons,"  ,"observe le monde de tes propres yeux et alors,"  ,"des amis qui te protégerons apparaîtront,"  ,"un à un jusqu'au dernier,"  ,"je vais tuer ce titan"];
  const finT1 = ["au moins j'aurai essayé !"  , "aussi longtemps que je tiendrai debout !"  ,"alors faisons de notre mieux jusqu'à la toute fin !"  ,"c'est mon nindô, ma devise de ninja ! "  ,"si on laisse passer cette occasion on le regrettera tout le restant de notre vie."
    ,"plus libre que quiconque !"  ,"peut-être qu'à la fin de ton voyage tu parviendras à une conclusion différente de la nôtre."  ,"personne est né dans ce monde pour être tout seul !"  ,"de mes propres mains..."  ,"et vous sauver tous les trois"];

  document.getElementById("citationZone").textContent = "" ;
  document.getElementById("titre1").style.display = "block";
  document.getElementById("citationZone").textContent += debutT1[getRandomInt(debutT1.length)] +" "+ milieuT1[getRandomInt(milieuT1.length)] +" "+ finT1[getRandomInt(finT1.length)]+"<br>" ;

}



document.getElementById("btn1").addEventListener('click',generateur,false); //une nouvelle citation est créé à chaque fois que l'on clique sur le bouton

