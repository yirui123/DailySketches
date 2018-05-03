var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

function clickLike(){
  $('.coreSpriteHeartOpen').click();
}

setInterval(function() {
  clickLike();

  setTimeout(function () {
        $(document).scrollTop($(document).height());
    }, 100);


}, 200);

setTimeout(function () {
      $(document).scrollTop($(document).height());
  }, 100);
  

//-------------------\\

function clickNext(){
  $('.coreSpriteRightPaginationArrow').click();
}

$(window).scroll(function(){
  setInterval(function() {
    clickLike();
    clickNext()
  }, 500);
})


$( "._mck9w" ).mouseover(function() {
  $( ".coreSpriteHeartSmall" ).click();
});
