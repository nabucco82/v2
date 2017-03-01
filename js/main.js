var box_ani_time = 300; //.box 변형 
var relogoTop; //width 체크 logo탑 
var headerHeight; //header
var menu1_click = false;//리스트 적용
var menu2_click = false;//초기 리스트 적용



$(document).ready(function(){
	/*css file append*/
	$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='common/css/design_320.css' type='text/css' id='style01'>");
	$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='common/css/design_480.css' type='text/css' id='style02' disabled>");
	$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='common/css/design_768.css' type='text/css' id='style03' disabled>");
	$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='common/css/design_1024.css' type='text/css' id='style04' disabled>");

	$("#laodbar").animate({"width":"30%"},500); //초기 로딩

	var reWidth = $('body').width();//width 체크 logo탑
	if (reWidth >= 768){ //768
		relogoTop = "100";	
		headerHeight = "125";
	}else{ // 480
		relogoTop = "80";		
		headerHeight ="110";
	}//

});

$(window).scroll(function () {//스크롤 체크(닫기,상단이동)
	if ($(window).scrollTop() > headerHeight) {
		$(".page_top").fadeIn("fast");					
	}else{
		$(".page_top").fadeOut("fast");					
	}
});//

$(window).resize(function () {	
	var reWidth = $('body').width();//width 체크 logo탑
	if (reWidth >= 768){ //768
		relogoTop = "100";	
	}else{ //480		
		relogoTop = "80";		
	}
	$(".logo_object").stop().animate({top:relogoTop},"fast"); //로고 top
	setResolution();
});

$(window).load(function(){
	loadingbar();//로딩
	//********* loadingbar *********//
	function loadingbar(){
		$(".laodbarBox .txt").fadeOut("fast");
		$("#laodbar").css("display","block");
		$("#laodbar").animate({"width":"50%"},20,function(){ //load_ani
			$(this).animate({"width":"100%"},100,function(){
				$(".laodbarBox").fadeOut("fast",function(){
					$(this).css("width","1");
					first_ani();//first_Ani 
				});					
			});
		});
		return false;
	}
	function first_ani(){//first_Ani
		$(".logo_object").animate({"top": "3%"},200,function(){ 			
			$(this).animate({top:relogoTop},100,function(){
				$(".logo_object .logo_pattern").fadeIn("fast");//로고
				$(".bg_dot1").fadeIn("slow");//점선
				$(".bg_dot2").fadeIn("slow");//점선
				$("#footer .ft_lt").fadeIn("fast");//푸터_lacation
				$("#footer .ft_rt").fadeIn("fast");//푸터_contact
				$(".bg_rt").fadeIn(10,function(){//상단 손
					$(".bg_rt .img").animate({top:'-200%',right:'-70%'},500,function(){
						$(".bg_rt .img").animate({top:'-300%',right:'-80%'},500);
					});
				});//
				$(".menubar").fadeIn("fast",function(){//상단 메뉴
					$(".menubar .menu1").animate({"top":"20"},200,function(){
						$(".menubar .menu1").animate({"top":"0"},500);
					});
					$(".menubar .menu2").animate({"top":"20"},220,function(){
						$(".menubar .menu2").animate({"top":"0"},520);
					});
					$(".menubar .menu3").animate({"top":"20"},240,function(){
						$(".menubar .menu3").animate({"top":"0"},540,function(){
							bbg_haschange(); //bbg Start
						});
					});
				});//
			});		
		});		
	}//end

	//*** bbg_haschange ***//	
	function bbg_haschange(){
		var cache = {
			'': $('.ajax-default')
		};
		$(window).bind( 'hashchange', function(e) {	
			var url = $.param.fragment();			
			$( 'a.page-current' ).removeClass( 'page-current' );			

			$( '.ajax-content' ).children( ':visible' ).fadeOut("fast",function(){
				url && $( 'a[href="#' + url + '"]' ).addClass( 'page-current');
				if(menu1_click){
						$( 'a.menu1' ).addClass( 'page-current');
				}				 
				if ( cache[ url ] ) {
					cache[ url ].fadeIn("fast",function(){
							$('#container').isotope({itemSelector : '.box'});// 리스트						
					});			
				} else {
					cache[ url ] = $( '<div class="add-page"/>' ).appendTo( '.ajax-content' ).load( url, function(){
							$( '#loading_div' ).stop().fadeOut("fast",function(){
								$( '.ajax-content' ).fadeIn("fast",function(){
									$('#container').isotope({itemSelector : '.box'}); //리스트									
								});	
								$('.ajax-content').dequeue();
							});					
							if ( status == "error" ) {  alert("새로고침하세요"); }
					});
				}
				if(url==""){//빈페이지면 이동; 			
					location.href = "#works/"					
				}
				$(".pg_loading").css("display","block");//로딩
			});
		})	
		$(window).trigger( 'hashchange' );		
	}//end

	function hand_click(){//click_hand
		$(".bg_rt .img").stop().animate({top:'-200%',right:'-70%'},500,function(){
			$(".bg_rt .img").animate({top:'-300%',right:'-80%'},500);
		});		
	}

	/*menuclick start*/
	$('.menu1').click(function(){  
		hand_click();
		menu1_click = true;	
	});
	$('.menu2').click(function(){
		hand_click();
		menu1_click = false;
	});
	$('.menu3').click(function(){
		hand_click();
		menu1_click = false;
	
		$('#map_canvas').fadeIn("slow",function(){
				initialize(); //구글맵
		});		

	});//end*/

	setResolution(); //반응형
});

function contact_load(){//contact 로드
	$(".contact_contents").fadeIn("slow",function(){			
		initialize(); //구글맵		
	});			
}//contact 로드 - end/

//*********# 구글맵 #*********//
function initialize() {//구글맵
	var myLatlng = new google.maps.LatLng(37.5419343, 126.9387304); 
	var mapOptions = {
		zoom: 17,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var image = 'common/img/map_maker.png';
	var myLatLng = new google.maps.LatLng(37.5419343, 126.9387304);
	var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
	});
}

//*********# 반응형 #*********//
function setResolution() { 	

	var sWidth = $('body').width();		
	if (sWidth >= 995 ){ // 995

		if(menu2_click==false){//초기 진입시
			$(".box").css("height","264");
			$(".box").css("width","264");							
		}

		$('#style01').attr('disabled', true);
		$('#style02').attr('disabled', true);
		$('#style03').attr('disabled', true);
		$('#style04').removeAttr('disabled');
		img_change4();
	}else if(sWidth < 995 && sWidth >= 768 ){ //768
		$('#style01').attr('disabled', true);
		$('#style02').attr('disabled', true);
		$('#style03').removeAttr('disabled');
		$('#style04').attr('disabled', true);
		img_change3();
	}else if(sWidth < 768 && sWidth > 479 ){ //480		
		$('#style01').attr('disabled', true);
		$('#style02').removeAttr('disabled');
		$('#style03').attr('disabled', true);
		$('#style04').attr('disabled', true);
		img_change2();
	}else{ //320
		$('#style01').removeAttr('disabled', true);
		$('#style02').attr('disabled', true);
		$('#style03').attr('disabled', true);
		$('#style04').attr('disabled', true);
		img_change1();
	}
	function img_change1(){//320
		$("#header").stop().animate({height:50},200);
		$(".box").css("height","150");
		$(".box").css("width","150");
		isotope_listing(); //리스트생성
		$(".bg_rt").stop().animate({right:'162px'});//hand img
	}
	function img_change2(){//480
		$(".box").css("height","180");
		$(".box").css("width","180");
		isotope_listing(); //리스트생성
		$(".bg_rt").stop().animate({right:'162px'});//hand img
	}
	function img_change3(){//768
		$(".box").css("height","230");
		$(".box").css("width","230");
		isotope_listing(); //리스트생성
		$(".bg_rt").stop().animate({right:'122px'});//hand img
	}
	function img_change4(){//995
		$(".box").stop().animate({height:'244px',width:'244px'},box_ani_time,function(){//리스트박스 크기
			isotope_listing(); //리스트생성
			menu2_click = true;
		});
		$(".bg_rt").stop().animate({right:'200px'});//hand img
	}
}/*end*/

function isotope_listing(){//리스트생성
	$('#container').isotope({itemSelector : '.box'});
	return false;
}

//*********# 모바일폰 viewport 공통화 #*********//
var switchMetaContent = function() {
    if (/AppleWebKit/.test(navigator.userAgent)) {
        document.write ("<meta name=\"viewport\" content=\"user-scalable=yes, initial-scale = 1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width\" />");
    } else if (/Opera/.test(navigator.userAgent) && !/Opera Mini/.test(navigator.userAgent)) {
        document.write ("<meta name=\"viewport\" content=\"user-scalable=yes, initial-scale = 0.75, maximum-scale=0.75, minimum-scale=0.75\" />");
    } else {
        document.write ("<meta name=\"viewport\" content=\"user-scalable=yes, initial-scale = 1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width\" />");
    }
};/*end*/

switchMetaContent();

//* Isotope #container Center정렬 **//
$.Isotope.prototype._getCenteredMasonryColumns = function() {
	this.width = this.element.width();
	
	var parentWidth = this.element.parent().width();	

	var colW = this.options.masonry && this.options.masonry.columnWidth ||
								this.$filteredAtoms.outerWidth(true) ||
								parentWidth;
	
	var cols = Math.floor( parentWidth / colW );
	cols = Math.max( cols, 1 );

	this.masonry.cols = cols;
	this.masonry.columnWidth = colW;
};

$.Isotope.prototype._masonryReset = function() {
	this.masonry = {};
	this._getCenteredMasonryColumns();
	var i = this.masonry.cols;
	this.masonry.colYs = [];
	while (i--) {
		this.masonry.colYs.push( 0 );
	}
};

$.Isotope.prototype._masonryResizeChanged = function() {
	var prevColCount = this.masonry.cols;
	this._getCenteredMasonryColumns();
	return ( this.masonry.cols !== prevColCount );
};

$.Isotope.prototype._masonryGetContainerSize = function() {
	var unusedCols = 0,
			i = this.masonry.cols;
	while ( --i ) {
		if ( this.masonry.colYs[i] !== 0 ) {
			break;
		}
		unusedCols++;
	}	
	return {
				height : Math.max.apply( Math, this.masonry.colYs ),
				width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
			};
};