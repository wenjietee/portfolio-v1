document.addEventListener('DOMContentLoaded', () => {
	let elems = document.querySelectorAll('.fixed-action-btn');
	M.FloatingActionButton.init(elems);
});

// when window reach bottom
// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

//     }
// };
