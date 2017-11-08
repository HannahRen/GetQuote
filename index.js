function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var colors1= ['#ff9999','#ff8533','#ffff66','#b3ff66','#99ccff','#9999ff','#b3cccc','#d9b3ff','#ff9f80'];
var currentQuote = '', currentAuthor = '';
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400,toolbar=0,location=0 ,statusbar=0,menubar=0');
}
function getQuote() {
  $.getJSON("newQuote.json",function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r);
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      var index = Math.floor(Math.random() * currentQuote.length);
      $(".quote-text").animate({
          opacity: 0.3
        }, 50,
        function() {
          $(this).animate({
            opacity: 1
          }, 150);
          $('#text').text(r.quote[index]);
        });

      $(".quote-author").animate({
          opacity: 0.3
        }, 50,
        function() {
          $(this).animate({
            opacity: 1
          }, 150);
          $('#author').html(r.author[index]);
        });

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 50);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 150);
  });
}

function getChineseQuote(){
  $.ajax({
    type:'GET',
    url:'ChineseQuote.json',
    dataType:'json',
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r);
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      var index = Math.floor(Math.random() * currentQuote.length);
      $(".quote-text").animate({
          opacity: 0.3
        }, 50,
        function() {
          $(this).animate({
            opacity: 1
          }, 150);
          $('#text').text(r.quote[index]);
        });

      $(".quote-author").animate({
          opacity: 0.3
        }, 50,
        function() {
          $(this).animate({
            opacity: 1
          }, 150);
          $('#author').html(r.author[index]);
        });
        var color = Math.floor(Math.random() * colors1.length);
        $("html body").animate({
          backgroundColor: colors1[color],
          color: colors1[color]
        }, 50);
        $(".button").animate({
          backgroundColor: colors1[color]
        }, 150);
      }
    });
  }

$(document).ready(function() {
  getQuote();
  getChineseQuote();
  $('#new-quote').on('click', getQuote);
  $('#cn-quote').on('click', getChineseQuote);
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/login');
    }
  });
  $('#facebook-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.facebook.com/login');
    }
  });
});
