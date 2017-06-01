function naarvolgend()
{
console.log ("van "+level);
level=level+1;	
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

function actueellevel()
{
console.log("actueellevel " + level);

if (level==null) {level=0;}	
if (level==-1) {level=0;}	
if (level==8) {document.getElementById("volgend").hidden=true;} else {document.getElementById("volgend").hidden=false;}
if (level==0) {document.getElementById("vorig").hidden=true;} else 	{document.getElementById("vorig").hidden=false;}

kamer = [
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
var tekstmelden = ["Klik om te starten","Naar 2","Naar 3","Naar 4","Naar 5","Oeps gaat niet verder" ];
var  loc=level
return tekstmelden[loc];
}

function meldp(){
var tekstmelden = ["Oeps hier kan je niet terug","Naar begin","Naar 1","Naar 2","Naar 3","Terug Naar 4" ];
var  loc=level
return tekstmelden[loc];
}



function uilinv(){
document.getElementById("uiltje").hidden=true;
document.getElementById("invuil").hidden=false;
}


function uilmov(){
document.getElementById("uiltje").style.display="blink";
}

