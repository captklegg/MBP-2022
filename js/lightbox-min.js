$(document).ready(function(){"use strict";$(".lightbox").click(function(){var i=$(this).attr("src");$("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='"+i+"'></div>"),$(".close-lightbox, .img-popup").click(function(){$(".img-popup").fadeOut(500,function(){$(this).remove()}).addClass("lightboxfadeout")})}),$(".lightbox").click(function(){$(".img-popup").fadeIn(500)})});