function naarvolgend()
{
	if (level==6) {
		level=13;
	} else{
	level=level+1;
	}

	if (level==11) {
		level=6;
	}
console.log ("van "+level);
console.log ("naar volgend "+level);
actueellevel(level);
}

function naarvorig()
{
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

kamer = [
		"Het Kasteel",
		"Torenkamer", 
		"Eerste trappenhuis", 
		"Overloop", 
		"Zitkamer",
		"Tweede Trappenhuis",
		"Souterrain",
		"Kelder",
		"Uitgang",
		"Eetkamer",
		"Keuken",
		"Boogkamer",
		"Slaapkamer",
		"Kerker",
		"Oeps gaat niet verder" ];

document.getElementById("levelnummer").innerHTML = "Huidige locatie: "  + kamer[level];

console.log (meldp(level)+" en "+meldn(level) +" "+"kasteel"+level+".gif" )
document.getElementById("vorig").innerHTML = meldp(level);
document.getElementById("volgend").innerHTML = meldn(level);	
document.getElementById("kasteel").src = "kasteel"+level+".gif";
console.log (document.getElementById("kasteel").src) ;
}


function meldn(){
var tekstmelden = ["Klik om te starten","Deur 2","Deur 3","Deur 4","Deur 5","Deur 6", "Deur 13", "Deur 8","Einde","Deur 10","Deur 6", "Deur dicht", "Deur val", "Deur gevangenis", "Oeps gaat niet verder" ];
var  loc=level
return tekstmelden[loc];
}

function meldp(){
var tekstmelden = ["Oeps hier kan je niet terug","Naar begin niet mogelijk","Naar 1","Naar 2","Naar 3","Naar 4","Naar 5","Naar 6","Einde","Naar 3","Naar 9","Naar 6","Naar 3","Naar 6","Level 14?" ];
var  loc=level
return tekstmelden[loc];
}



function uilinv(){
document.getElementById("uiltje").style.visibility="hidden";
document.getElementById("invuil").style.visibility="visible";

}


function uilmov(){
document.getElementById("uiltje").style.visibility="visible";
}
