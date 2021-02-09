//トップページへ戻る
$(".top-page").click(function(){
    $("html, body").animate({"scrollTop":0}, 500);
  });
  
$(window).on("scroll", function(){
    if($(this).scrollTop() > 100){
      $(".top-page").show();
    }else{
      $(".top-page").hide();
    }
  });


// リンク先まで飛ばす
$(".button-red a[href], a[href], .button-header-md a[href]").click(function(){
    const speed = 500;
    const headerHight = 62;
    const id = $(this).attr("href");
    const position = $(id).offset().top - headerHight;
    $("html, body").animate({"scrollTop": position}, speed);
    return false;
  });


// トグルメニュー
$(".toggleQuestion-item-title-wrap").each(function(){
    $(this).on("click", function(){
        $("+.toggleQuestion-p-wrap p", this).slideToggle();
        if($(this).find("i").is(".fa-chevron-up")){
            $(this).find(".fa-chevron-up").removeClass().addClass("fas fa-chevron-down");
        }else{
            $(this).find(".fa-chevron-down").removeClass().addClass("fas fa-chevron-up");
        };
    });
  });


  $(".flow-item-big").each(function(){
      $(this).on("click", function(){
          if (window.matchMedia( "(max-width: 768px)" ).matches) {
            $("+.flow-small", this).slideToggle();
            if($(this).find("i").is(".fa-angle-up")){
                $(this).find("i").removeClass().addClass("fas fa-angle-down");
            }else{
                $(this).find("i").removeClass().addClass("fas fa-angle-up");
            };
        };
    });
});