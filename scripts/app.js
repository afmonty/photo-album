var $albums = [
	{
		albumName: "Christmas",
		albumPic: [
			{
				fileNm: "images/treeOrnament.jpeg",
				label: "Christmas Tree Ornament",
				href: "images/treeOrnament.html"
			},
			{
				fileNm: "images/wreath.jpeg",
				label: "Door Wreath",
				href: "images/wreath.html"
			},
			{
				fileNm: "images/santa.jpeg",
				label: "Santa Clause",
				href: "images/santa.html"
			}
		]
	},
	{
		albumName: "Coffee",
		albumPic: [
			{
				fileNm: "images/thinkCoffee.jpeg",
				label: "Coffee Heaven/Haven",
				href: "images/thinkCoffee.html"
			},
			{
				fileNm: "images/heartLatte.jpeg",
				label: "Latte wth love",
				href: "images/heartLatte.html"
			},
			{
				fileNm: "images/coffeeBeans.jpeg",
				label: "Beans Beans Beans",
				href: "images/coffeeBeans.html"
			}
		]
	},
	{
		albumName: "Beaches",
		albumPic: [
			{
				fileNm: "images/sunsetBeach.jpeg",
				label: "Beautiful Sunset",
				href: "images/sunsetBeach.html"
			},
			{
				fileNm: "images/footprintsBeach.jpeg",
				label: "Footprints",
				href: "images/footprintsBeach.html"
			},
			{
				fileNm: "images//blackandwhiteBeach.jpeg",
				label: "Beach",
				href: "images/blackandwhiteBeach.html"
			}
		]
	},
	{
		albumName: "Horses",
		albumPic: [
			{
				fileNm: "images/pony.jpeg",
				label: "My little pony",
				href: "images/pony.html"
			},
			{
				fileNm: "images/teethHorse.jpeg",
				label: "Happy Horse",
				href: "images/teethHorse.html"
			},
			{
				fileNm: "images/whiteHorse.jpeg",
				label: "Beautiful Horse",
				href: "images/whiteHorse.html"
			}
		]
	},
	{
		albumName: "Night",
		albumPic: [
			{
				fileNm: "images/moon.jpeg",
				label: "Moon-time",
				href: "images/moon.html"
			},
			{
				fileNm: "images/starryNight.jpeg",
				label: "Stars",
				href: "images/starryNight.html"
			},
			{
				fileNm: "images/nightSky.jpeg",
				label: "Night Sky",
				href: "images/nightSky.html"
			}
		]
	},
	{
		albumName: "flowers",
		albumPic: [
			{
				fileNm: "images/redPoppy.jpeg",
				label: "Red Poppy",
				href: "images/redPoppy.html"
			},
			{
				fileNm: "images/blossom.jpeg",
				label: "Tree in Bloom",
				href: "images/blossom.html"
			},
			{
				fileNm: "images/roses.jpeg",
				label: "Antique Roses",
				href: "images/roses.html"
			}
		]
	}
];

console.log($albums[3].albumPic[2]);

var clear = function(){
	$("#albumDisplay").empty();
}

$(".home").click(function(){
	$(".sidebar-nav").css("display", "none");
	$(".landing").css("display", "inline-block");
	$("#albumDisplay").empty();
})

$("#beaches, #beachesDiv").click(function() {
   $(".landing").css("display", "none");
   $(".sidebar-nav").css("display", "inline-block");
   clear();
	for(i=0; i<$albums[2].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '"+$albums[2].albumPic[i].href+"'>"
	  	+"<img src ='"+$albums[2].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[2].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});


$("#christmas, #christmasDiv").click(function() {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for(i=0; i<$albums[0].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '"+$albums[0].albumPic[i].href+"'>"
	  	+"<img src ='"+$albums[0].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[0].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});

$("#coffee, #coffeeDiv").click(function() {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for(i=0; i<$albums[1].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '"+$albums[1].albumPic[i].href+"'>"
	  	+"<img src ='"+$albums[1].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[1].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});


$("#flowers, #flowersDiv").click(function() {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for(i=0; i<$albums[5].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '"+$albums[5].albumPic[i].href+"'>"
	  	+"<img src ='"+$albums[5].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[5].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});

$("#horses, #horsesDiv").click(function() {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for(i=0; i<$albums[3].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '"+$albums[3].albumPic[i].href+"'>"
	  	+"<img src ='"+$albums[3].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[3].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});

$("#ns, #nsDiv").click(function() {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for(i=0; i<$albums[4].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '"+$albums[4].albumPic[i].href+"'>"
	  	+"<img src ='"+$albums[4].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[4].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});



$( ".addButton" ).click(function () {
  if ( $( ".input" ).is( ":hidden" ) ) {
    $( ".input" ).slideDown( "slow" );
  } else {
    $( ".input" ).slideUp();
  }
});

//$(".sidebar-nav").css("display", "inline-block");


