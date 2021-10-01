function readMore() {
  var dots = document.getElementById("dots"); //deklarimi i variablave
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    //kushti if, pyesim nqs display eshte none
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";

    // $("#more").css("display","none");
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function moreRead() {
  var threeDots = document.getElementById("three-dots"); //deklarimi i variablave
  var again = document.getElementById("read");
  var clickBtn = document.getElementById("readMoreBtn");

  if (threeDots.style.display === "none") {
    threeDots.style.display = "inline";
    clickBtn.innerHTML = "Read more";
    again.style.display = "none";
  } else {
    threeDots.style.display = "none";
    clickBtn.innerHTML = "Read less";
    again.style.display = "inline";
  }
}

$(document).ready(function () {
  $(".searchWrap input ").focus(function () {
    $(".content-table").show("normal");
  });

  $(".searchWrap input").blur(function () {
    if (!$(this).val()) {
      $(".content-table").hide("normal");
    }
  });
});

$(document).ready(function () {
  $('#nav-icon3').click(function () {
    $('#nav-icon3').hide();
    $('#close-icon').show();
  });
  $("#close-icon").click(function () {
    $("#nav-icon3").show();
      $("#close-icon").hide();

  });

});
