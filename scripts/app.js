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
				fileNm: "images/santa/jpeg",
				label: "Santa Clause",
			}
		]
	},
	{
		albumName: "Coffee",
		albumPic: [
			{
				fileNm: "images/thinkCoffe.jpeg",
				label: "Coffee Heaven/Haven",
			},
			{
				fileNm: "images/heartLatte.jpeg",
				label: "Latte wth love",
			},
			{
				fileNm: "images/coffeeBeans.jpeg",
				label: "Beans Beans Beans",
			}
		]
	},
	{
		albumName: "Beaches",
		albumPic: [
			{
				fileNm: "images'/sunsetBeach.jpeg",
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


$(".beaches").click(function() {
	for(i=0; i<$albums[2].albumPic.length; i++) {
	  $("#beaches").append("<a href = '#' class = 'thumbnail'><img src '"+$albums[2].albumPic[i].fileNm+"'/><h3>"+$albums[2].albumPic[i].label+
		"</h3></a>");
	};	
});

$(".christmas").click(function() {
	alert("christmas clicked");
	$(".chAlbum").css("display" , "inline-block");
});

$(".coffee").click(function() {
	alert("coffee clicked");
});

$(".flowers").click(function() {
	alert("flowers clicked");
	$(".flAlbum").css("display" , "inline-block");
});
$(".horses").click(function() {
	alert("horses clicked");

});

$(".ns").click(function() {
	alert("Night Sky clicked");
});


$( ".addButton" ).click(function () {
  if ( $( ".input" ).is( ":hidden" ) ) {
    $( ".input" ).slideDown( "slow" );
  } else {
    $( ".input" ).slideUp();
  }
});

//$(".sidebar-nav").css("display", "none");


