


function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  for (var i in navs) {
	  if (navs.hasOwnProperty(i)) {
	    navs[i].className = 'show-class';
	  }
	}
}


function CardToggle(id) {

  	const element = document.querySelector("#" + id);
	if (element.classList.contains("fa-plus") == true){
		 document.getElementById(id).className = 'fas fa-minus fa-2x';
		 document.getElementById('card-' + id).className = 'parent';
	}else{
		document.getElementById(id).className = 'fas fa-plus fa-2x';
		document.getElementById('card-' + id).className = 'invisible';
	}
}

function InfoToggle(id){

	const element = document.querySelector("#" + id);
	if (element.classList.contains("fa-caret-down") == true){
		 document.getElementById(id).className = 'fas fa-caret-up fa-2x';
		 document.getElementById("info-" + id).className= 'show';
	}else{
		document.getElementById(id).className = 'fas fa-caret-down fa-2x';
		document.getElementById("info-" + id).className = 'noshow';
	}

}

