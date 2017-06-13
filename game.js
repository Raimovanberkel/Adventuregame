	inhrugz=[true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true];



function naarvolgend()
{

console.log(inhrugz[level]);

if (inhrugz[level]==true)
{	  

	if (level==6) {
		level=13;
	} 	else
	  {
		level=level+1;
		}


	if (level==11) {
		level=6;
	}

	if (level==12) {
	document.getElementById("volgend").style.visibility="hidden";	;
	}


} else
{
alert("Je kunt nog niet verder, misschien mis je nog iets!   :')");
}


console.log ("naar volgend "+level);
actueellevel(level);
}

function naarvorig()
{
	if (level==12) {
		level=4;
	}
	else{
		if (level==9) {
			level=4;
		}
	}
if (level==13) {
	level=7;


}

console.log ("van  "+level);
level=level-1;	
console.log ("naar vorig "+level);
actueellevel(level);
}

function naarextra1 (){
if (level==3) {
level=9;
}
else {
	if (level==6) {
		level=7;
	}
}

console.log ("naar extra "+level);
actueellevel(level);
}

function naarextra2 (){
	if (level==3) {
		level=12; 
	} else 
	{
		if (level==6)
			{level=11
			}


	}

console.log ("naar extra "+level);
actueellevel(level);
}


function actueellevel()
{
console.log("actueellevel " + level);

	if (level==null) {level=0;}	
	if (level==-1) {level=0;}	
	if (level==8) {
	document.getElementById("volgend").style.visibility="hidden" ;
	document.getElementById("vorig").style.visibility="hidden";
	} else { 
		if (level==0 || level==1 || level==12) {document.getElementById("vorig").style.visibility="hidden";} else {document.getElementById("vorig").style.visibility="visible";}
		if (level==3 || level==6) {
			document.getElementById("extra1").style.visibility="visible";
			document.getElementById("extra2").style.visibility="visible";
			} else {
			document.getElementById("extra1").style.visibility="hidden";
			document.getElementById("extra2").style.visibility="hidden";
			}
		}

if (level==12 || level==14) {
	document.getElementById("volgend").style.visibility="hidden";} else {document.getElementById("volgend").style.visibility="visible";
}




/*voorwerpen*/
		if (level==1) {
			if (inhrugz[1]==false) {
				document.getElementById("sleutel").style.visibility="visible";
			} else {
				document.getElementById("sleutel").style.visibility="hidden";
			}

		document.getElementById("kaars").style.visibility="visible";
		}else{
		document.getElementById("sleutel").style.visibility="hidden";	
		document.getElementById("kaars").style.visibility="hidden";}

	if (level==2) {document.getElementById("mega").style.visibility="visible";}else{document.getElementById("mega").style.visibility="hidden";}
	if (level==12) {document.getElementById("mag").style.visibility="visible";}else{document.getElementById("mag").style.visibility="hidden";}
	if (level==4) {document.getElementById("pen").style.visibility="visible";}else{document.getElementById("pen").style.visibility="hidden";}
	if (level==4) {document.getElementById("papier").style.visibility="visible";}else{document.getElementById("papier").style.visibility="hidden";}
	if (level==10) {document.getElementById("taart").style.visibility="visible";}else{document.getElementById("taart").style.visibility="hidden";}
	if (level==10) {document.getElementById("ham").style.visibility="visible";}else{document.getElementById("ham").style.visibility="hidden";}
	if (level!==9){document.getElementById("vuur").style.visibility="hidden"}
	if (level!==7){document.getElementById("ham1").style.visibility="hidden"}
	if (level!==7){document.getElementById("taart1").style.visibility="hidden"}
	if (level==1) {document.getElementById("raam1").style.visibility="visible";}else{document.getElementById("raam1").style.visibility="hidden";}
	if (level==2) {document.getElementById("raam2").style.visibility="visible";}else{document.getElementById("raam2").style.visibility="hidden";}
	if (level==12) {document.getElementById("lichtknop").style.visibility="visible";}else{document.getElementById("Lichtknop").style.visibility="hidden";}
	if (level==14) {
		var audio = new Audio('skelet.mp3');
		audio.play();}

if (level==8) {
		var audio = new Audio('trompet.mp3');
		audio.play();}

kamer = [
		"Het Kasteel",
		"Torenkamer", 
		"1e trappenhuis", 
		"Overloop", 
		"Zitkamer",
		"2e Trappenhuis",
		"Souterrain",
		"Kelder",
		"Uitgang",
		"Eetkamer",
		"Keuken",
		"Boogkamer",
		"Slaapkamer",
		"Kerker",
		"AAAAAH" ];

document.getElementById("levelnummer").innerHTML = "Jouw locatie: "  + kamer[level];

console.log (meldp(level)+" en "+meldn(level) +" "+"kasteel"+level+".gif" )
document.getElementById("vorig").innerHTML = meldp(level);
document.getElementById("volgend").innerHTML = meldn(level);	
document.getElementById("kasteel").src = "kasteel"+level+".gif";
console.log (document.getElementById("kasteel").src) ;
}

/*verder*/
function meldn(){
var tekstmelden = ["Start","Deur 2","Deur 3","Rechter deur","Deur 5","Deur 6", "Rechter deur", "Deur 8","Deur 9","Deur 10","Deur 6", "Deur dicht", "Deur val", "Deur gevangenis"];
var  loc=level
return tekstmelden[loc];
}

/*terug*/
function meldp(){
var tekstmelden = ["Oeps hier kan je niet terug","Naar begin niet mogelijk","Naar 1","Naar 2","Naar 3","Naar 4","Naar 5","Naar 6","Einde","Naar 3","Naar 9","Naar 6","Naar 3","Naar 6","snel terug"];
var  loc=level
return tekstmelden[loc];
}



function uilinv(){
document.getElementById("uiltje").style.visibility="hidden";
document.getElementById("invuil").style.visibility="visible";
inhrugz[level]=true;
}

function sleutelinv(){
document.getElementById("sleutel").style.visibility="hidden";
document.getElementById("invsleutel").style.visibility="visible";
inhrugz[level]=true;
}

function kaarsinv(){
document.getElementById("kaars").style.visibility="hidden";
document.getElementById("invkaars").style.visibility="visible";
inhrugz[level]=true;
}

function megainv(){
document.getElementById("mega").style.visibility="hidden";
document.getElementById("invmega").style.visibility="visible";
inhrugz[level]=true;
}

function maginv(){
document.getElementById("mag").style.visibility="hidden";
document.getElementById("invmag").style.visibility="visible";
inhrugz[level]=true;
}

function taartinv(){
document.getElementById("taart").style.visibility="hidden";
document.getElementById("invtaart").style.visibility="visible";
inhrugz[level]=true;
}


function haminv(){
document.getElementById("ham").style.visibility="hidden";
document.getElementById("invham").style.visibility="visible";
inhrugz[level]=true;
}

function peninv(){
document.getElementById("pen").style.visibility="hidden";
document.getElementById("invpen").style.visibility="visible";
inhrugz[level]=true;
}

function papierinv(){
document.getElementById("papier").style.visibility="hidden";
document.getElementById("invpapier").style.visibility="visible";
inhrugz[level]=true; 
}


function vuuraan(){
	if (level==9){
document.getElementById("vuur").style.visibility="visible";}else{document.getElementById("vuur").style.visibility="hidden"}}

function hamfun(){
	if (level==7){
document.getElementById("ham1").style.visibility="visible";}else{document.getElementById("ham1").style.visibility="hidden"}}

function taartfun(){
	if (level==7){
document.getElementById("taart1").style.visibility="visible";}else{document.getElementById("taart1").style.visibility="hidden"}}

function raamfun1(){
	alert("Nee dit raam gaat echt niet open. En al kon het wel open, dan nog is dit geen goede vluchtweg. Tenzij je kunt vliegen natuurlijk.");
}

function raamfun2(){
	alert("Nee, dit is echt niet de snelste manier om weg te komen. Ook dit raam gaat niet open. En als je niet kunt vliegen, is het openbreken van dit raam ook geen goed idee.");
}

function megatekst(){
	if (level==13) {
		alert("Ha ha, er is hier helemaal niemand. Je zult echt op eigen kracht de uitgang moeten zien te vinden! Jammer joh!")
	}
}

function magtekst(){
	if (level==7) {
		alert("Tip! Neem de trap!")
	}
}	
