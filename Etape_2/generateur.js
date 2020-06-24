function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generateur(type){
  document.getElementById("citationZone").innerHTML = "" ;
  const debutT1 = ["J'ai un rêve à accomplir,"  , "Je n'abandonnerai jamais,"  ,"N'abandonne pas,"  ,"Je ne vais pas m'enfuir en courant,"  ,"Un rêve irréalisable?"  ,"Un jour nous prendrons la mer "  ,"Continue ta route,"  ," Un jour, sans aucun doute,"  ,"Je les exterminerai tous,"  ,"Il ne faut pas me sous-estimer,"];
  const  milieuT1 = ["si je meurs en essayant,"  , "aussi longtemps que je continuerai à respirer dans ce monde,"  ,"le début est toujours le moment le plus difficile,"  ,"je ne reviens jamais sur mes mots,"  ,"c'est ça l'aventure,"  ,"et nous vivrons notre vie comme nous le voulons,"  ,"observe le monde de tes propres yeux et alors,"  ,"des amis qui te protégerons apparaîtront,"  ,"un à un jusqu'au dernier,"  ,"je vais tuer ce titan"];
  const finT1 = ["au moins j'aurai essayé !"  , "aussi longtemps que je tiendrai debout !"  ,"alors faisons de notre mieux jusqu'à la toute fin !"  ,"c'est mon nindô, ma devise de ninja ! "  ,"si on laisse passer cette occasion on le regrettera tout le restant de notre vie."
    ,"plus libre que quiconque !"  ,"peut-être qu'à la fin de ton voyage tu parviendras à une conclusion différente de la nôtre."  ,"personne est né dans ce monde pour être tout seul !"  ,"de mes propres mains..."  ,"et vous sauver tous les trois"];

  const debutT2 = ["Maman disait toujours,"  , "Mais vous savez,"  ,"S'il y a une chose que l'histoire de l'évolution nous a enseignée, c'est que"  ,"Je suis malhonnête, et tu peux toujours être sûr que"  ," J'ai l'impression que "  ,"Je lis dans vos yeux,"  ,"Voyez-vous, je pense que"  ,"Et sincèrement je pense que"  ,"Tu vois,"  ,"J’ai conscience que"];
  const  milieuT2 = ["la vie, c'est comme une boîte de chocolats,"  , "l'on peut trouver le bonheur même dans les moments les plus sombres,"  ,"la vie ne peut pas être retenue."  ,"homme malhonnête va être malhonnête,"  ,"mes yeux vont mieux,"  ,"la même peur qui pourrait saisir mon coeur,"  ,"ce qui vous terrifie tellement,"  ,"vous devriez reprendre vos esprits,"  ,"le monde se divise en deux catégories,"  ,"ce sera dur,"];
  const finT2 = ["on ne sait jamais sur quoi on va tomber."  , "il suffit de se souvenir, d'allumer la lumière."  ,"la vie se libère, elle s'étend à de nouveaux territoires"  ,"franchement, ce sont les hommes honnêtes qu'il faut surveiller."  ,"au lieu d'un grand flou noir, je vois un grand flou lumineux."  ,"un jour peut venir, où le courage des Hommes faillira."  ,"c'est moi."  ,"absorber un tranquillisant, et essayer de faire le point."  ,"ceux qui ont un pistolet chargé et ceux qui creusent." ,"mais c’est ce que je veux. "];

  if (type === "2"){
    return debutT2[getRandomInt(debutT2.length)] +" "+ milieuT2[getRandomInt(milieuT2.length)] +" "+ finT2[getRandomInt(finT2.length)]+"<br>" ;
  } else {
    if (type === "1"){
      return debutT1[getRandomInt(debutT1.length)] +" "+ milieuT1[getRandomInt(milieuT1.length)] +" "+ finT1[getRandomInt(finT1.length)]+"<br>" ;
    } else {
      document.getElementById("citationZone").innerHTML += "Pas de type séléctionner";
    }
  }



}


function afficher() {

  const nb = document.getElementById('nb').value;
  const type = document.getElementById('typesC').value;
  document.getElementById("citationZone").innerHTML = "" ;
  if (nb > 0){
    if (type !== "" ){
      document.getElementById("titre1").style.display = "block";
      document.getElementById("form2").style.display = "block";

      document.getElementById("citationZone").innerHTML += "Citation "+ (i+1) +  " : " +generateur(type)+"<br>" ;
    } else {
      document.getElementById("citationZone").innerHTML += "Pas de type séléctionner";
    }

  } else {
    document.getElementById("citationZone").innerHTML = "Pas de nombre de citation séléctionner" ;
  }
}





document.getElementById("btn2").addEventListener('click', function(){
    document.getElementById('nb').value = "";
    document.getElementById('typesC').value = "";
    document.getElementById("titre1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("citationZone").innerHTML = "" ;
    },false);



document.getElementById("btn1").addEventListener('click',afficher,false);

