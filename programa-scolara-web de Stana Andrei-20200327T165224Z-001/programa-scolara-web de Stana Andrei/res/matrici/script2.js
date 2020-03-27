window.onscroll = function() {scrollFunction()};

function scrollFunction()
 {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
 document.getElementById("topBtn").style.display = "block";
 else
 document.getElementById("topBtn").style.display = "none";  
}

function topFunction()
 {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollWin(scrollval) {
	if (scrollval==undefined)
		scrollval=0;
	else
	{
     var curr_scroll;
	 curr_scroll=document.documentElement.scrollTop;
	}		
	scrollval-=curr_scroll;
    window.scrollBy(0, scrollval);
}

function go_main() {
	  var url="../../index.html";
	  location.replace(url);
}

function go_main2() {
	  var url="../index.html";
	  location.replace(url);
}
