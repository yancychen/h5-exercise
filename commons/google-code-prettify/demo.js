$(function(){
	function rphtml(s) {
		return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	var preblocks = $('.preblock');
	if(preblocks && preblocks.length > 0){
		preblocks.each(function(){
			var preblock = '<pre class="prettyprint linenums">' + rphtml($(this).html()) + '</pre>';
			$(preblock).insertAfter($(this));
		});
		
	}

	/*var prettyprints = $('.prettyprint');
	if(prettyprints && prettyprints.length > 0){
		prettyprints.each(function(){
			$(this).html(rphtml($(this).html()));
		});
	}*/
	prettyPrint();
});

