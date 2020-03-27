var user,mess="Bun venit ";
user=prompt("Nume:");
if (user)
	alert(mess+user+" !");
else
	alert(mess +"utilizatorule !");

function gotop () {
	 var url="res/probleme.html";
	  location.replace(url);
}