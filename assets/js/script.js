






$("#poring1, #poring16, #poring2, #poring4, #poring5, #poring14, #poring15, #poring6, #poring12, #poring13, #poring7, #poring16, #poring8, #poring9, #poring10, #poring17, #poring11, #poring12, #poring13").click( function() {
    alert("I am not the correct poring.");
});


$("#poring3").click( function() {
	$("#poring1, #poring3, #poring16, #poring2, #poring4, #poring5, #poring14, #poring15, #poring6, #poring12, #poring13, #poring7, #poring16, #poring8, #poring9, #poring10, #poring17, #poring11, #poring12, #poring13").fadeOut(1000), function() {
    // alert("Congratulations! I am the correct Poring");
	}
	correct.innerHTML = "CONGRATULATIONS You Got ME!";

	$("#poring").fadeIn(3000), function () {
	poring.style.display = "block";
	}

});

