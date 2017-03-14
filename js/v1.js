$(function(){
  			// menu toggle 스크립트
  			$("#menu_toggle").on({
  				click : function(){
  					if($(this).hasClass("on") == true){
  						$(this).removeClass("on");
  						$("#header .sidebar").css({"width":"0px"});
  						$("#header .gnb .action").css({"padding-right":"49px"});
  					}else if($(this).hasClass("on") == false){
  					$(this).addClass("on");
  						$("#header .sidebar").css({"width":"230px"});
  						$("#header .gnb .action").css({"padding-right":"210px"});
  					}
  				}
  			}); 			
});

  $(window).scroll(function(){
  			var st = $(window).scrollTop();
  			console.log(st);
  				$(".bar_background").css({"opacity": (st * 0.01) });
  				$("video").css({"opacity":(0.2- 0.001*st)});
  			// if( st > 100){
  			// 	$(".bar_background").css({"opacity": (st * 0.01) });
  			// } else{
  			// 	$(".bar_background").css({"opacity":0});
  			// }
        // btn_top 상단 버튼 
        if( $(document).scrollTop() < $(window).height()){
                $(".btn_top").css("display" ,"none");

              }else{
                $(".btn_top").css("display" , "block" );
              }
  		});
 
  	var lastScrollTop = 0;
    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        if(st < lastScrollTop) {
        	// upscroll code
            // console.log('up 1');
            $("#header").css({"top":"0"});
        }
        else {
            // downscroll code
            // console.log('down 1');
            $("#header").css({"top":"-100px"});
        }
        lastScrollTop = st;
    });
  	
 	 	$(function(){
 	 		var $masonry = $('.masonry').isotope({
 				 // options
			});
 	 		
 	 		$('.filter-group').on( 'click', 'button', function() {

  				var filterValue = $(this).attr('data-filter');
  				console.log(filterValue);
  				$masonry.isotope({ filter: filterValue });
			});

		});
 	
			// prodcut_header 높이값 설정
						$(function(){
							$(".product_header").height( $(window).height() );
							
							var $windowH = $(window).height();
								
								$(".updown").on( 'click' , function(){
									console.log(1)
									 $('html, body').stop().animate({
            								scrollTop : $windowH
       						});
									

								});	


							$(window).resize(function(){
								$(".product_header").height( $(window).height());
								
										var $windowH2 = $(window).height();

									$(".updown").on( 'click' , function(){
										console.log(1)
										 $('html, body').stop().animate({
	            								scrollTop : $windowH2
	       										 }, 500);
									

									});	

								});

							$(".btn_top").click(function() {
		        						$("html, body").animate({ scrollTop : 0 }, 500 );
		   							 });
                   // fullpreview 클릭 이벤트              
              $('.fullpreview').on( 'click', function(){
                // $('.case_preview .modal').find('popup').removeClass('popup');
                $('.case_preview .modal').addClass('popup');
              });

              $('.close').on( 'click', function() {
                
                $('.modal').removeClass('popup');
              });

						});

						$(window).scroll( function() {
						 	if( $(document).scrollTop() < $(window).height()){
								$(".btn_top").css("display" ,"none");

							}else{
								$(".btn_top").css("display" , "block" );
							}
						 });
