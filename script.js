//menu <!--
//var tombolMenu = $(".tombol-menu");
//var menu = $("nav .menu ul");

//function klikMenu() {
//    tombolMenu.click(function () {
 //       menu.toggle();
  // });
  //  menu.click(function () {
     //   menu.toggle();
   // });
//}

/*var hamburgerMenu = $(".hamburger-menu");

function toggleMenu() {
  menu.slideToggle();
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    hamburgerMenu.css("display", "block");
  }
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});