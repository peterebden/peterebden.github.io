(function() {
    var els = document.getElementsByTagName('sup');
    for (var i = 0; i < els.length; i++) {
	els[i].addEventListener('click', function(event) {
	    var sib = event.currentTarget.nextElementSibling;
	    sib.style.display = sib.style.display === 'none' ? 'block' : 'none';
	    event.stopPropagation();
	    event.preventDefault();
	    return false;
	});
    }
    document.body.addEventListener('click', function(event) {
	for (var i = 0; i < els.length; i++) {
	    els[i].nextElementSibling.style.display = 'none';
	}
    });
})();
