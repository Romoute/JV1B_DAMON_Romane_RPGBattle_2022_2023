////////////////////////////////////////////////////////////
//Ce qui ne marche pas ou pas fait 
///////Animation persos
///////Boutons attaque spéciale donc pas de systeme de mana
///////Les heros peuvent utiliser la meme actions 2 tours de suite
//Normalement le reste marche :))
//Bon courage !

/////////////////////////////////////////////////////////
//Variables
var dialoguehtml = document.getElementById("dialogue");
var Mob1Image= document.getElementById('Monstre1');
var Mob2Image= document.getElementById('Monstre2');
var Mob3Image= document.getElementById('Monstre3');
var Hero1Image= document.getElementById('Player1');
var Hero2Image= document.getElementById('Player2');
var Hero3Image= document.getElementById('Player3');
var Hero4Image= document.getElementById('Player4');
var ActionNoirATK = document.getElementById('taille_competenceNATK');
var ActionRougeATK = document.getElementById('taille_competenceRATK');
var ActionVioletATK = document.getElementById('taille_competenceVATK');
var ActionBleuATK =  document.getElementById('taille_competenceBATK');
var ActionNoirDEF = document.getElementById('taille_competenceNDEF');
var ActionRougeDEF = document.getElementById('taille_competenceRDEF');
var ActionVioletDEF = document.getElementById('taille_competenceVDEF');
var ActionBleuDEF =  document.getElementById('taille_competenceBDEF');
var ActionNoirSPE = document.getElementById('taille_competenceNSPE');
var ActionRougeSPE = document.getElementById('taille_competenceRSPE');
var ActionVioletSPE = document.getElementById('taille_competenceVSPE');
var ActionBleuSPE =  document.getElementById('taille_competenceBSPE');
var HpMonstre1html=document.getElementById('InfoCroco');
var HpMonstre2html=document.getElementById('InfoMonstre1');
var HpMonstre3html=document.getElementById('InfoCroco2');
var DegatHero1 = Math.floor(Math.random()*20);
var DegatHero2 = Math.floor(Math.random()*20);
var DegatHero3 = Math.floor(Math.random()*20);
var DegatHero4 = Math.floor(Math.random()*20);
//var SpeHero1 = ;
//var SpeHero2 = ;
//var SpeHero3 = ;
//var SpeHero4 = ; 
var DegatMonstre = 0;
var CibleRDM = 0;
var HpHero1html = document.getElementById('hpHero1');
var HpHero2html = document.getElementById('hpHero2');
var HpHero3html = document.getElementById('hpHero3');
var HpHero4html = document.getElementById('hpHero4');
var HpMonstre1 = "50";
var HpMonstre2 = "50";
var HpMonstre3 = "50";
var HpHero1= "100";
var HpHero2= "100";
var HpHero3= "100";
var HpHero4= "100";
var RetourDegat = 0;
var ReposteGoal = 4;
var verifDefB = false;
var verifDefR = false;
var verifDefV = false;
var verifDefN = false;
var mortn = false;
var mortr = false;
var mortb = false;
var mortv = false;
var DefenseHero1 =Math.floor(Math.random()*0);
var DefenseHero2 =Math.floor(Math.random()*0);
var DefenseHero3 =Math.floor(Math.random()*0);
var DefenseHero4 =Math.floor(Math.random()*0);


////////////////////////////////////////////

//Bouton boite


function s_vieux() {
    var div = document.getElementById("skill_vieux");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieuxR.style.display ="none";
      skill_vieuxV.style.display ="none";
      skill_vieuxB.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }


function s_vieuxR() {
    var div = document.getElementById("skill_vieuxR");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieux.style.display ="none";
      skill_vieuxV.style.display ="none";
      skill_vieuxB.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }


function s_vieuxV() {
    var div = document.getElementById("skill_vieuxV");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieuxR.style.display ="none";
      skill_vieuxB.style.display ="none";
      skill_vieux.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }

function s_vieuxB() {
    var div = document.getElementById("skill_vieuxB");
    if (div.style.display === "none") {
      div.style.display = "block";
      skill_vieuxR.style.display ="none";
      skill_vieuxV.style.display ="none";
      skill_vieux.style.display ="none";
    } else {
      div.style.display = "none";
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bouton attaque des heros et riposte des ennemis



function choix_competence_atq_Noir(){
  dialoguehtml.innerHTML="Choisissez une cible";             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre;          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2;
  Mob3Image.onclick=DamageSurMonstre3;
  ActionNoirATK.onclick=null;            //remet en null onclick sur mob
  ActionNoirDEF.onclick=null;            //remet en null onclick sur mob
  ActionNoirSPE.onclick=null;            //remet en null onclick sur mob
}


function choix_competence_atq_Rouge(){
  dialoguehtml.innerHTML="Choisissez une cible";             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre;          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2;
  Mob3Image.onclick=DamageSurMonstre3;
  ActionRougeATK.onclick=null;            //remet en null onclick sur mob
  ActionRougeDEF.onclick=null;            //remet en null onclick sur mob
  ActionRougeSPE.onclick=null;            //remet en null onclick sur mob
}


function choix_competence_atq_Violet(){
  dialoguehtml.innerHTML="Choisissez une cible";             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre;          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2;
  Mob3Image.onclick=DamageSurMonstre3;
  ActionVioletATK.onclick=null;            //remet en null onclick sur mob
  ActionVioletDEF.onclick=null;            //remet en null onclick sur mob
  ActionVioletSPE.onclick=null;            //remet en null onclick sur mob
}


function choix_competence_atq_Bleu(){
  dialoguehtml.innerHTML="Choisissez une cible";             //changement indication ds dialogue
  Mob1Image.onclick=DamageSurMonstre;          //changement du onclick sur le monstre (quand appuyer execute...) qui est null de base ( fait rien)
  Mob2Image.onclick=DamageSurMonstre2;
  Mob3Image.onclick=DamageSurMonstre3;
  ActionBleuATK.onclick=null;            //remet en null onclick sur mob
  ActionBleuDEF.onclick=null;            //remet en null onclick sur mob
  ActionBleuSPE.onclick=null;            //remet en null onclick sur mob
}


function DamageSurMonstre(){        
  DegatHero1 = Math.floor(Math.random()*20);              //nbre random entre 0-20
  console.log(DegatHero1);           //renvoie degatdu hero ds la console (useless)
  HpMonstre1html.innerHTML= HpMonstre1-=DegatHero1;        //enleve degat du hero a hp du monstre
  dialoguehtml.innerHTML="Vous infligez " +  DegatHero1 + " sur le monstre.";   //changement  indication ds dialogue
  verifVieMob1();        //lancement verif vie du monstre
  Mob2Image.onclick=null;            //remet en null onclick sur mob
  Mob1Image.onclick=null;            //remet en null onclick sur mob
  Mob3Image.onclick=null;            //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  RetourDegat+=1;
  console.log(RetourDegat);
}

console.log(RetourDegat);

function DamageSurMonstre2(){        
  DegatHero1 = Math.floor(Math.random()*20);              //nbre random entre 0-20
  console.log(DegatHero1);           //renvoie degatdu hero ds la console (useless)
  HpMonstre2html.innerHTML= HpMonstre2-=DegatHero1;        //enleve degat du hero a hp du monstre
  dialoguehtml.innerHTML="Vous infligez " +  DegatHero1 + " sur le monstre.";   //changement  indication ds dialogue
  verifVieMob2();        //lancement verif vie du monstre
  Mob2Image.onclick=null;            //remet en null onclick sur mob
  Mob1Image.onclick=null;            //remet en null onclick sur mob
  Mob3Image.onclick=null;           //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  RetourDegat+=1;
  console.log(RetourDegat);
}


function DamageSurMonstre3(){        
  DegatHero1 = Math.floor(Math.random()*20);              //nbre random entre 0-20
  console.log(DegatHero1);           //renvoie degatdu hero ds la console (useless)
  HpMonstre3html.innerHTML= HpMonstre3-=DegatHero1;        //enleve degat du hero a hp du monstre
  dialoguehtml.innerHTML="Vous infligez " +  DegatHero1 + " sur le monstre.";   //changement  indication ds dialogue
  verifVieMob3();        //lancement verif vie du monstre
  Mob2Image.onclick=null;            //remet en null onclick sur mob
  Mob1Image.onclick=null;            //remet en null onclick sur mob
  Mob3Image.onclick=null;            //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  RetourDegat+=1;
}
   
function Hero1SeulFois(){
  

}



function verifVieMob1(){
  if (HpMonstre1<=0){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Mob1Image.style.visibility="hidden";      //fait disparaitre le monstre
    dialoguehtml.innerHTML="Bien joué !";
  }
}

function verifVieMob2(){
  if (HpMonstre2<=0){       //si les hp du monstre sont en dessous ou egal a 0 alors:
    Mob2Image.style.visibility="hidden";      //fait disparaitre le monstre
    dialoguehtml.innerHTML="Tu dead ça !";
  }
}

function verifVieMob3(){
  if (HpMonstre3<=0){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Mob3Image.style.visibility="hidden";      //fait disparaitre le monstre
    dialoguehtml.innerHTML="Wawwww !";      //changement indication ds dialogue
  }
}

function verifVieuxN(){
  if (HpHero1<=0 && mortn==false){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Hero1Image.style.visibility="hidden";      //fait disparaitre le monstre
    mortn=true;
    dialoguehtml.innerHTML="Le vieux en costard noir est mort !";      //changement indication ds dialogue
    ReposteGoal-=1;
  }
}

function verifVieuxR(){
  if (HpHero2<=0 && mortr==false){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Hero2Image.style.visibility="hidden";      //fait disparaitre le monstre
    mortr=true;
    dialoguehtml.innerHTML="Le vieux en costard Rouge est mort !";      //changement indication ds dialogue
    ReposteGoal-=1;
  }
}

function verifVieuxV(){
  if (HpHero3<=0 && mortv==false){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Hero3Image.style.visibility="hidden";      //fait disparaitre le monstre
    mortv=true;
    dialoguehtml.innerHTML="Le vieux en costard Violet est mort !";      //changement indication ds dialogue
    ReposteGoal-=1;
  }
}

function verifVieuxB(){
  if (HpHero4<=0 && mortb==false){       //si les hp du monstre sont en dessous ou egale a 0 alors:
    Hero4Image.style.visibility="hidden";      //fait disparaitre le monstre
    mortb=true;
    dialoguehtml.innerHTML="Le vieux en costard bleu est mort !";      //changement indication ds dialogue
    ReposteGoal-=1;
  }
}


function VerifAttaqueMonstre(){

  CibleRDM = Math.floor(Math.random()*5);
  console.log("ciblerdm"+CibleRDM);
  DegatMonstre = Math.floor(Math.random()*30);      //nbre random entre 0-30
    
    if(CibleRDM==1){
      if(verifDefN==true){
        verifDefN=false;
      }else{
        HpHero1html.innerHTML=HpHero1-=DegatMonstre;    //enleve degat du monstre a hp du hero
      }
    }

    if(CibleRDM==2){
      if(verifDefR==true){
        verifDefR=false;
      }else{
        HpHero2html.innerHTML=HpHero2-=DegatMonstre;   //enleve degat du monstre a hp du hero
      }
    }

    if(CibleRDM==3){
      if(verifDefV==true){
        verifDefV=false;
      }else{
        HpHero3html.innerHTML=HpHero3-=DegatMonstre;   //enleve degat du monstre a hp du hero
      }
    }
    
    if(CibleRDM==4){
      if(verifDefB==true){
        verifDefB=false;
      }else{
        HpHero4html.innerHTML=HpHero4-=DegatMonstre;  //enleve degat du monstre a hp du hero
      }
    }

    if(CibleRDM==0){
      dialoguehtml.innerHTML="Le monstre loupe son attaque ";
    }
    
    verifVieuxN()
    verifVieuxR()
    verifVieuxB()
    verifVieuxV()

    dialoguehtml.innerHTML="Le monstre vous inflige " +  DegatMonstre;    //changement indication ds dialogue
}


function MonsterDamage(){
  if (RetourDegat==ReposteGoal){ 
  for(i=0;i<3;i++){
    console.log(i);
    setTimeout(VerifAttaqueMonstre,500);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
  }
  setTimeout(ResetAll,2000);
  }
}


function ResetAll(){
  console.log("reset");
  RetourDegat=0;
  console.log(RetourDegat);
  if(HpHero1>0){
    ActionNoirATK.onclick=choix_competence_atq_Noir;
    ActionNoirDEF.onclick=choix_competence_def_Noir;        
    ActionNoirSPE.onclick=choix_competence_spe_Noir;
  }  
  if(HpHero2>0){
    ActionRougeATK.onclick=choix_competence_atq_Rouge;
    ActionRougeDEF.onclick=choix_competence_def_Rouge;           
    ActionRougeSPE.onclick=choix_competence_spe_Rouge; 
  }         
  if(HpHero3>0){
    ActionVioletATK.onclick=choix_competence_atq_Violet;
    ActionVioletDEF.onclick=choix_competence_def_Violet;           
    ActionVioletSPE.onclick=choix_competence_spe_Violet;
  }
  if(HpHero4>0){
    ActionBleuATK.onclick=choix_competence_atq_Bleu;
    ActionBleuDEF.onclick=choix_competence_def_Bleu;            
    ActionBleuSPE.onclick=choix_competence_spe_Bleu;
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//Bouton defense



function choix_competence_def_Noir(){
  verifDefN = true;
  dialoguehtml.innerHTML="Vous vous défendez, vous ne subirez aucun degat en cas d'attaque sur vous" //changement indication ds dialogue
  RetourDegat+=1;
  ActionNoirATK.onclick=null;            //remet en null onclick sur mob
  ActionNoirDEF.onclick=null;            //remet en null onclick sur mob
  ActionNoirSPE.onclick=null;            //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
}

function choix_competence_def_Rouge(){
  verifDefR = true;
  dialoguehtml.innerHTML="Vous vous défendez, vous ne subirez aucun degat en cas d'attaque sur vous" //changement indication ds dialogue
  RetourDegat+=1;
  ActionRougeATK.onclick=null;            //remet en null onclick sur mob
  ActionRougeDEF.onclick=null;            //remet en null onclick sur mob
  ActionRougeSPE.onclick=null;            //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
}

function choix_competence_def_Violet(){
  verifDefV = true;
  dialoguehtml.innerHTML="Vous vous défendez, vous ne subirez aucun degat en cas d'attaque sur vous" //changement indication ds dialogue
  RetourDegat+=1;
  ActionVioletATK.onclick=null;            //remet en null onclick sur mob
  ActionVioletDEF.onclick=null;            //remet en null onclick sur mob
  ActionVioletSPE.onclick=null;            //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
}

function choix_competence_def_Bleu(){
  verifDefB = true;
  dialoguehtml.innerHTML="Vous vous défendez, vous ne subirez aucun degat en cas d'attaque sur vous" //changement indication ds dialogue
  RetourDegat+=1;
  ActionBleuATK.onclick=null;            //remet en null onclick sur mob
  ActionBleuDEF.onclick=null;           //remet en null onclick sur mob
  ActionBleuSPE.onclick=null;            //remet en null onclick sur mob
  setTimeout(MonsterDamage,1000);       //timeout + verif Attaque de monstre (ripposte) (1000=1sec)
}




///////////////////////////////////////////////////////////////////////////////////////////////////
// Bouton Attaque spéciale 
//Ne marche pas encore




function choix_competence_spe_Bleu(){
  SpeHero1 = Math.floor(Math.random())
}

function choix_competence_spe_Noir(){
  

}

function choix_competence_spe_Violet(){

}

function choix_competence_spe_Rouge(){

}





