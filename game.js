	inhrugz=[true,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false];



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
		level=14;
	}


} else
{
alert("Je kunt nog niet verder, misschien mis je nog iets!   :)");
}

//var volgendknop = document.getElementById('volgend');
//if (level==0) {
//	volgendknop.style.visibility=== 'visible';
//}else{
//	if (kaars.style.visibility === 'visible'){
//		volgendknop.style.visibility=== 'visible';
//	}else{volgendknop.style.visibility==='hidden'}
 
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

	if (level==12) {
		level=6;
	}
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
		if (level==0 || level==1) {document.getElementById("vorig").style.visibility="hidden";} else 	{document.getElementById("vorig").style.visibility="visible";}
		if (level==3 || level==6) {
			document.getElementById("extra1").style.visibility="visible";
			document.getElementById("extra2").style.visibility="visible";
			} else {
			document.getElementById("extra1").style.visibility="hidden";
			document.getElementById("extra2").style.visibility="hidden";
			}
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
		"Oeps gaat niet verder" ];

document.getElementById("levelnummer").innerHTML = "Jouw locatie: "  + kamer[level];

console.log (meldp(level)+" en "+meldn(level) +" "+"kasteel"+level+".gif" )
document.getElementById("vorig").innerHTML = meldp(level);
document.getElementById("volgend").innerHTML = meldn(level);	
document.getElementById("kasteel").src = "kasteel"+level+".gif";
console.log (document.getElementById("kasteel").src) ;
}

/*verder*/
function meldn(){
var tekstmelden = ["Klik om te starten","Deur 2","Deur 3","Deur 4","Deur 5","Deur 6", "Deur 7", "Deur 8","Deur 9","Deur 10","Deur 6", "Deur dicht", "Deur val", "Deur gevangenis", "dood" ];
var  loc=level
return tekstmelden[loc];
}

/*terug*/
function meldp(){
var tekstmelden = ["Oeps hier kan je niet terug","Naar begin niet mogelijk","Naar 1","Naar 2","Naar 3","Naar 4","Naar 5","Naar 6","Einde","Naar 3","Naar 9","Naar 6","Naar 3","Naar 6","Level 14" ];
var  loc=level
return tekstmelden[loc];
}



function uilinv(){
document.getElementById("uiltje").style.visibility="hidden";
document.getElementById("invuil").style.visibility="visible";
inhrugz[level]=true;
}

function uilmov(){
document.getElementById("uiltje").style.visibility="visible";
}

function uildbl(){
document.getElementById("uiltje").style.visibility="visible";
document.getElementById("invuil").style.visibility="hidden";
}



function sleutelinv(){
document.getElementById("sleutel").style.visibility="hidden";
document.getElementById("invsleutel").style.visibility="visible";
inhrugz[1]=true;
}

function sleutelmov(){
document.getElementById("sleutel").style.visibility="visible";
}

function sleuteldbl(){
document.getElementById("sleutel").style.visibility="visible";
document.getElementById("invsleutel").style.visibility="hidden";
}



function kaarsinv(){
document.getElementById("kaars").style.visibility="hidden";
document.getElementById("invkaars").style.visibility="visible";
inhrugz[9]=true;
}


function kaarsmov(){
document.getElementById("kaars").style.visibility="visible";
}

function kaarsdbl(){
document.getElementById("kaars").style.visibility="visible";
document.getElementById("invkaars").style.visibility="hidden";
}



function megainv(){
document.getElementById("mega").style.visibility="hidden";
document.getElementById("invmega").style.visibility="visible";
inhrugz[3]=true;
}


function megamov(){
document.getElementById("mega").style.visibility="visible";
}

function megadbl(){
document.getElementById("mega").style.visibility="visible";
document.getElementById("invmega").style.visibility="hidden";
}



function maginv(){
document.getElementById("mag").style.visibility="hidden";
document.getElementById("invmag").style.visibility="visible";
inhrugz[12]=true;
}


function magmov(){
document.getElementById("mag").style.visibility="visible";
}

function magdbl(){
document.getElementById("mag").style.visibility="visible";
document.getElementById("invmag").style.visibility="hidden";
}

