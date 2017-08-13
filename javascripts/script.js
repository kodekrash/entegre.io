
$( function() {

	$('#go-top').click( function( e ) {
		e.preventDefault();
		window.scrollTo(0,0);
	} );

	$('pre code').each( function( i, b ) {
		hljs.highlightBlock( b );
	} );
	
	$('.code-block-body .start-hide').hide();
	$('.code-block-body .start-show').show();

	$('.code-block-header button').click( function() {
		var i = $(this).parents('.code-block').prop('id');
		switch( $(this).attr('data-show') ) {
			case 'view':
				$('#' + i + ' .code-block-body-view').show();
				$('#' + i + ' .code-block-body-html').hide();
				$('#' + i + ' .code-block-body-code').hide();
			break;
			case 'html':
				$('#' + i + ' .code-block-body-view').hide();
				$('#' + i + ' .code-block-body-html').show();
				$('#' + i + ' .code-block-body-code').hide();
			break;
			case 'code':
				$('#' + i + ' .code-block-body-view').hide();
				$('#' + i + ' .code-block-body-html').hide();
				$('#' + i + ' .code-block-body-code').show();
			break;
		}
		$(this).siblings('button').removeClass( 'active' );
		$(this).addClass( 'active' );
		$(this).blur();
	} );

} );
