$(function() {
 $( "#showRightPush" ).click(function() {
		  $( "body" ).toggleClass( "pushedLeft" );
		});
		
	 $( ".pushedLeft .pusher>.hero-unit,.pushedLeft .pusher>.container" ).click(function() {
		 	$( "body" ).removeClass( "pushedLeft" );
		  
		});
	
    
  $(function() {

  var $container = $('.posts'), 
  	  $pagewrap = $('.pusher');

  if ($pagewrap.hasClass('index')) {
	  $container.masonry({
	      itemSelector: '.block',
		  gutter: 24,
		  columnWidth: ".photo"
	    }),
	  $container.infinitescroll({
    navSelector: ".pager",
    // selector for the paged navigation (it will be hidden)
    nextSelector: ".pager .nextPage",
    // selector for the NEXT link (to page 2)
    itemSelector: ".post",
    // selector for all items you'll retrieve
    bufferPx: 10000,
    extraScrollPx: 12000,
    loadingImg: "http://b.imagehost.org/0548/Untitled-2.png",
    loadingText: "<em>loading</em>",
  },
	  // call masonry as a callback.
	  function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
       
       $container.masonry( 'appended', $newElems, true );
       
        // ensure that images load before adding to masonry layout	
        $newElems.imagesLoaded(function(){
          // show elems now they're ready
            $newElems.animate({ opacity: 1 });
        });
      }
	  
	  );} else {
		  $('.photoset-inner').photosetGrid({highresLinks: true,layout: '23232',onComplete: function(){
			  $(".highres-link").attr("data-lightbox","photo-lightbox");
		  }});
	  }
  
  $("body").addClass("loaded");
});

$.stellar.positionProperty.transfade = {
  setPosition: function(element, newLeft, originalLeft, newTop, originalTop) {
    var distance = newTop - originalTop;
    var rate = $(window).height() / 4;
    element.css('opacity', 1 + (distance / rate));
  }
};
	
$(window).stellar({hideDistantElements: false,positionProperty: 'transfade'});


 var header = $("header .navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.addClass("shadowed");
        } else {
            header.removeClass("shadowed");
        }
    });



});


/**
 * photoset-grid - v1.0.1
 * 2014-04-08
 * jQuery plugin to arrange images into a flexible grid
 * http://stylehatch.github.com/photoset-grid/
 *
 * Copyright 2014 Jonathan Moore - Style Hatch
 */
!function(a,b,c,d){"use strict";function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="photosetGrid",g={width:"100%",gutter:"0px",highresLinks:!1,lowresWidth:500,rel:"",onInit:function(){},onComplete:function(){}};e.prototype={init:function(){this.options.onInit(),this._setupRows(this.element,this.options),this._setupColumns(this.element,this.options)},_callback:function(a){this.options.onComplete(a)},_setupRows:function(b,c){if(c.layout)this.layout=c.layout;else if(a(b).attr("data-layout"))this.layout=a(b).attr("data-layout");else{for(var d="",e=1,f=0;f<a(b).find("img").length;f++)d+=e.toString();this.layout=d}this.rows=this.layout.split("");for(var g in this.rows)this.rows[g]=parseInt(this.rows[g],10);var h=a(b).find("img"),i=0;a.each(this.rows,function(a,b){var c=i,d=i+b;h.slice(c,d).wrapAll('<div class="photoset-row cols-'+b+'"></div>'),i=d}),a(b).find(".photoset-row:not(:last-child)").css({"margin-bottom":c.gutter})},_setupColumns:function(c,d){var e=this,f=function(e){function f(){var b=a(c).width().toString();b!==a(c).attr("data-width")&&(g.each(function(){var b=a(this).find("img:eq(0)");a(this).find("img").each(function(){var c=a(this);c.attr("height")<b.attr("height")&&(b=a(this)),parseInt(c.css("width"),10)>d.lowresWidth&&c.attr("data-highres")&&c.attr("src",c.attr("data-highres"))});var c=b.attr("height")*parseInt(b.css("width"),10)/b.attr("width"),e=Math.floor(.025*c);a(this).height(c-e),a(this).find("img").each(function(){var b=a(this).attr("height")*parseInt(a(this).css("width"),10)/a(this).attr("width"),d=.5*(c-b)+"px";a(this).css({"margin-top":d})})}),a(c).attr("data-width",b))}var g=a(c).find(".photoset-row"),h=a(c).find("img");d.highresLinks?(h.each(function(){var b;b=a(this).attr(a(this).attr("data-highres")?"data-highres":"src"),a(this).wrapAll('<a href="'+b+'" class="photoset-cell highres-link" />')}),d.rel&&h.parent().attr("rel",d.rel)):h.each(function(){a(this).wrapAll('<div class="photoset-cell" />')});var i=a(c).find(".photoset-cell"),j=a(c).find(".cols-1 .photoset-cell"),k=a(c).find(".cols-2 .photoset-cell"),l=a(c).find(".cols-3 .photoset-cell"),m=a(c).find(".cols-4 .photoset-cell"),n=a(c).find(".cols-5 .photoset-cell");a(c).css({width:d.width}),g.css({clear:"left",display:"block",overflow:"hidden"}),i.css({"float":"left",display:"block","line-height":"0","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),h.css({width:"100%",height:"auto"}),e&&h.each(function(){a(this).attr("height",a(this).height()),a(this).attr("width",a(this).width())}),j.css({width:"100%"}),k.css({width:"50%"}),l.css({width:"33.3%"}),m.css({width:"25%"}),n.css({width:"20%"});var o=parseInt(d.gutter,10);a(c).find(".photoset-cell:not(:last-child)").css({"padding-right":o/2+"px"}),a(c).find(".photoset-cell:not(:first-child)").css({"padding-left":o/2+"px"}),f(),a(b).on("resize",function(){f()})},g=!0,h=!0;a(c).find("img").each(function(){h&=!!a(this).attr("height")&!!a(this).attr("width")}),g=!h,g?a(c).imagesLoaded(function(){f(g),e._callback(c)}):(f(g),e._callback(c))}},a.fn[f]=function(b){return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})};var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(b){function c(){var c=a(m),d=a(n);i&&(n.length?i.reject(k,c,d):i.resolve(k)),a.isFunction(b)&&b.call(g,k,c,d)}function e(a){f(a.target,"error"===a.type)}function f(b,d){b.src!==h&&-1===a.inArray(b,l)&&(l.push(b),d?n.push(b):m.push(b),a.data(b,"imagesLoaded",{isBroken:d,src:b.src}),j&&i.notifyWith(a(b),[d,k,a(m),a(n)]),k.length===l.length&&(setTimeout(c),k.unbind(".imagesLoaded",e)))}var g=this,i=a.isFunction(a.Deferred)?a.Deferred():0,j=a.isFunction(i.notify),k=g.find("img").add(g.filter("img")),l=[],m=[],n=[];return a.isPlainObject(b)&&a.each(b,function(a,c){"callback"===a?b=c:i&&i[a](c)}),k.length?k.bind("load.imagesLoaded error.imagesLoaded",e).each(function(b,c){var e=c.src,g=a.data(c,"imagesLoaded");return g&&g.src===e?void f(c,g.isBroken):c.complete&&c.naturalWidth!==d?void f(c,0===c.naturalWidth||0===c.naturalHeight):void((c.readyState||c.complete)&&(c.src=h,c.src=e))}):c(),i?i.promise(g):g};var i,j,k,l=a.event,m={_:0},n=0;i=l.special.throttledresize={setup:function(){a(this).on("resize",i.handler)},teardown:function(){a(this).off("resize",i.handler)},handler:function(b,c){var d=this,e=arguments;j=!0,k||(setInterval(function(){n++,(n>i.threshold&&j||c)&&(b.type="throttledresize",l.dispatch.apply(d,e),j=!1,n=0),n>9&&(a(m).stop(),k=!1,n=0)},30),k=!0)},threshold:0}}(jQuery,window,document);