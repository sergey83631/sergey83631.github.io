$(function(){
  // fixed header
  let header=$("#header");
  let intro=$("#intro");
  let introH;
  let scrollPos=$(window).ScrollTop;

  $(window).on("scroll load resize", function(){
    introH= intro.innerHeight();
    scrollPos=$(this).ScrollTop;

    if(scrollPos<introH){
      header.addClass("fixed");

    } else{
      header.removeClass("fixed");

    }
  });

  // smooth scroll
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId=$(this).data("scroll");
    let elementoffset=$(elementId).offset().top;
    console.log(elementoffset);

    $("html,body").animate({
      scrollTop:elementoffset -70
    }, 700);
    });


  // navToggle
  let nav = $("nav");
  let navToggle = $("navToggle");
  navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");
  });


});
