	AOS.init();

	/*モーダル*/
$(function(){
	$('.image').modaal({
		type: 'image'
	});
});

/**
 * 『Twitter』『Facebook』『LINE』のシェアボタンにサイトのタイトルとURLを出力
 */
window.addEventListener("load", function(){
	'use strict';
	var url        = ''; /* オリジナルのURLを使用したい場合 */
	var ttl        = ''; /* オリジナルのタイトルを使用したい場合 */
	var tw_hashtag = ''; /* Twitterのハッシュタグ。[カンマで複数指定可] */
	var tw_via     = ''; /* Twitterのアカウント名 */

	var og_url   = document.head.querySelector('meta[property="og:url"]');
	var head_ttl = document.title;
	var share_url = url ? url : og_url ? og_url.content : location.href;
	var share_ttl = ttl ? ttl : head_ttl ? head_ttl : '';

	share_url = encodeURI(share_url);
	share_ttl = encodeURI(share_ttl);
	var share_tw_hashtag = tw_hashtag ? '&hashtags=' + encodeURI(tw_hashtag) : '';
	var share_tw_via     = tw_via     ? '&via='      + encodeURI(tw_via)     : '';

	var share_wraps = [].slice.call(document.querySelectorAll('.js-share'));
	share_wraps.forEach(function(share_wrap,i){
		var share_btns =  [].slice.call(share_wrap.querySelectorAll('.js-share-btn'));
		share_btns.forEach(function(share_btn,j){
			var btn_name = share_btn.getAttribute("data-btn-name");
			switch (btn_name){
				case 'twitter':
					share_btn.setAttribute("href","https://twitter.com/intent/tweet?url=" + share_url + "&text=" + share_ttl + share_tw_hashtag + share_tw_via);
					break;
				case 'facebook':
					share_btn.setAttribute("href","https://www.facebook.com/sharer.php?u=" + share_url + "&t=" + share_ttl);
					break;
				case 'line':
					share_btn.setAttribute("href","http://line.me/R/msg/text/?" + share_ttl + "%20" + share_url);
					break;
			}
		});
	});
});

/*=SPメニュー=*/
$(document).ready(function() {
  $('.drawer').drawer();
});

/*スムーズスクロール*/
$('a[href^="#"]').click(function(){
	var speed = 500;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
});
/*スクロールで表示*/
$(window).on('load scroll', function(){
  if ($(window).scrollTop() > 100) {/*00までスクロールしたら表示*/
    $('.floating').fadeIn(600);/*フェードインにかける時間*/
   } else {
    $('.floating').fadeOut(300);
   }
});
