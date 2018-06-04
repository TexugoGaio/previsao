function mostraDiv(id,div){
    var div1;
    var div2;

    div1 = document.getElementById(id).style.display;
    div2 = document.getElementById(div).style.display;

    if(div2=="none" || div2== ""){
        document.getElementById(div).style.display = "block";
    }

    document.getElementById(id).style.display = "none"; 
	return false;
}