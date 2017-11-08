$('.pagespeed-form').on('submit', function(e){
	e.preventDefault();
	var height = $(this).parent().height();
	$(this).parent().css({'minHeight':height});

	$(this).fadeOut();
	
	var test_url = $(this).find('.test_url').val();
	if(!test_url.includes('http')){
		test_url = 'http://'+ test_url;
	}
	runPagespeed(test_url);
});