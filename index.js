function addingEventListener() {
	const input = document.getElementById('button');
	input.addEventListener("click", call);
}

function call() {
	alert('I was clicked');
}

addingEventListener();
