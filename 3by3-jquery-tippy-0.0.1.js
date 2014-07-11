/**
 * Tippy is a light weight tooltip plugin. It turns text in title attributes of
 * elements into little tooltips that appear when the user moves their mouse
 * over the element.
 *
 * Tippy can be assigned to the body or just to one or more specific element:
 * $('body').tippy();
 * OR
 * $('.help').tippy();
 *
 * You can style your tips using the 'tippy' CSS class. By default the tool tip
 * will appear 20px above and 10 pixels left of the parent's top left corner. It
 * will flip if it gets too close to a screen edge.
 *
 * The available settings are as follows:
 *
 * cssClass: specify a different CSS class for styling your tips
 * offsetTop: tootltip position top - pixels relative to the top of the parent
 * offsetLeft: tootltip position left - pixels relative to the left of the parent
 * boundary: the minimum distance the tooltip can be from the screen edge before flipping
 *
 * Copyright (c) 2014 Ben Levy
 * Released under the MIT License
 *
 */

(function($){
	$.fn.tippy = function( options ) {
		var settings = $.extend({
			'cssClass': 'tippy',
			'offsetTop': -20,
			'offsetLeft': 10,
			'boundary': 10
			}, options );

		return this.each(function() {
			var container = $(this);
			var tooltip, position, title, top, left, offsetTop, offsetLeft;

			container.on('mouseover', '[title]', function(){
				if(tooltip != undefined){
					tooltip.remove();
				}

				title = $(this).attr('title');
				$(this).css('cursor', 'pointer');
				position = $(this).offset();

				tooltip = $('<div>').html(title);
				tooltip.addClass(settings.cssClass);
				tooltip.css('position', 'absolute');
				tooltip.appendTo('body');

				// calculate top position and flip if required
				offsetTop = settings.offsetTop;
				if(settings.offsetTop > 0){
					offsetTop += tooltip.height();
				}else{
					offsetTop -= tooltip.height();
				}
				top = position.top + offsetTop;
				if((top < settings.boundary)){
					top = position.top + $(this).height() + settings.boundary;
				}

				// calculate left position and flip if required
				offsetLeft = settings.offsetLeft;
				left = position.left + offsetLeft;
				if((left + tooltip.width()) > ($('body').width() - settings.boundary)){
					left = (left - tooltip.width()) - settings.boundary;
				}

				tooltip.css('top', top);
				tooltip.css('left', left);
				$(this).attr('title', '');
			});

			container.on('mouseout', '[title]', function(){
				tooltip.remove();
				$(this).attr('title', title);
			});

		});
	};

}( jQuery ));