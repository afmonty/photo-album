var $albums = [
	{
		albumName: "Christmas",
		albumPic: [
			{
				fileNm: "images/treeOrnament.jpeg",
				label: "Christmas Tree Ornament",
			},
			{
				fileNm: "images/wreath.jpeg",
				label: "Door Wreath",
			},
			{
				fileNm: "images/santa.jpeg",
				label: "Santa Clause",
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
				href: "images/coffeeBeans.jpeg"
			}
		]
	},
	{
		albumName: "Beaches",
		albumPic: [
			{
				fileNm: "images/sunsetBeach.jpeg",
				label: "Beautiful Sunset",
			},
			{
				fileNm: "images/footprintsBeach.jpeg",
				label: "Footprints",
			},
			{
				fileNm: "images//blackandwhiteBeach.jpeg",
				label: "Beaches",
			}
		]
	},
	{
		albumName: "Horses",
		albumPic: [
			{
				fileNm: "images/pony.jpeg",
				label: "My little pony",
			},
			{
				fileNm: "images/teethHorse.jpeg",
				label: "Happy Horse",
			},
			{
				fileNm: "images/whiteHorse.jpeg",
				label: "Beautiful Horse",
			}
		]
	},
	{
		albumName: "Night",
		albumPic: [
			{
				fileNm: "images/moon.jpeg",
				label: "Moon-time",
			},
			{
				fileNm: "images/starryNight.jpeg",
				label: "Stars",
			},
			{
				fileNm: "images/nightSky.jpeg",
				label: "Night Sky",
			}
		]
	},
	{
		albumName: "flowers",
		albumPic: [
			{
				fileNm: "images/redPoppy.jpeg",
				label: "Red Poppy",
			},
			{
				fileNm: "images/blossom.jpeg",
				label: "Tree in Bloom",
			},
			{
				fileNm: "images/roses.jpeg",
				label: "Antique Roses",
			}
		]
	}
];

console.log($albums[3].albumPic[2]);

var clear = function(){
	$("#albumDisplay").empty();
}


$("#beaches").click(function() {
   $(".landing").css("display", "none");
   clear();
	for(i=0; i<$albums[2].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '#'>"
	  	+"<img src ='"+$albums[2].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[2].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});


$("#christmas").click(function() {
	$(".landing").css("display", "none");
	clear();
	for(i=0; i<$albums[0].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '#'>"
	  	+"<img src ='"+$albums[0].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[0].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});

$("#coffee").click(function() {
	$(".landing").css("display", "none");
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


$("#flowers").click(function() {
	$(".landing").css("display", "none");
	clear();
	for(i=0; i<$albums[5].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '#'>"
	  	+"<img src ='"+$albums[5].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[5].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});

$("#horses").click(function() {
	$(".landing").css("display", "none");
	clear();
	for(i=0; i<$albums[3].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '#'>"
	  	+"<img src ='"+$albums[3].albumPic[i].fileNm+"'/>"
	  	+"<h3>"+$albums[3].albumPic[i].label+
		"</h3>"+"</a>"+"</div>"+"</div>");
	};	
});

$("#ns").click(function() {
	$(".landing").css("display", "none");
	clear();
	for(i=0; i<$albums[4].albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	"<div class='col-sm-6 col-md-4'>"
	  	+"<div class='thumbnail'>"
	  	+"<a href = '#'>"
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

//$(".sidebar-nav").css("display", "none");


