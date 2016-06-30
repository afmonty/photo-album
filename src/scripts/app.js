
var $albums = [
	{
		albumName: "christmas",
		albumPic: [
			{
				fileNm: "./dist/images/treeOrnament.jpeg",
				label: "Christmas Tree Ornament",
				href: "./dist/images/treeOrnament.html"
			},
			{
				fileNm: "./dist/images/wreath.jpeg",
				label: "Door Wreath",
				href: "./dist/images/wreath.html"
			},
			{
				fileNm: "./dist/images/santa.jpeg",
				label: "Santa Clause",
				href: "./dist/images/santa.html"
			}
		]
	},
	{
		albumName: "coffee",
		albumPic: [
			{
				fileNm: "./dist/images/thinkCoffee.jpeg",
				label: "Coffee Heaven/Haven",
				href: "./dist/images/thinkCoffee.html"
			},
			{
				fileNm: "./dist/images/heartLatte.jpeg",
				label: "Latte wth love",
				href: "./dist/images/heartLatte.html"
			},
			{
				fileNm: "./dist/images/coffeeBeans.jpeg",
				label: "Beans Beans Beans",
				href: "./dist/images/coffeeBeans.html"
			}
		]
	},
	{
		albumName: "beaches",
		albumPic: [
			{
				fileNm: "./dist/images/sunsetBeach.jpeg",
				label: "Beautiful Sunset",
				href: "./dist/images/sunsetBeach.html"
			},
			{
				fileNm: "./dist/images/footprintsBeach.jpeg",
				label: "Footprints",
				href: "./dist/images/footprintsBeach.html"
			},
			{
				fileNm: "./dist/images//blackandwhiteBeach.jpeg",
				label: "Beach",
				href: "./dist/images/blackandwhiteBeach.html"
			}
		]
	},
	{
		albumName: "horses",
		albumPic: [
			{
				fileNm: "./dist/images/pony.jpeg",
				label: "My little pony",
				href: "./dist/images/pony.html"
			},
			{
				fileNm: "./dist/images/teethHorse.jpeg",
				label: "Happy Horse",
				href: "./dist/images/teethHorse.html"
			},
			{
				fileNm: "./dist/images/whiteHorse.jpeg",
				label: "Beautiful Horse",
				href: "./dist/images/whiteHorse.html"
			}
		]
	},
	{
		albumName: "ns",
		albumPic: [
			{
				fileNm: "./dist/images/moon.jpeg",
				label: "Moon-time",
				href: "./dist/images/moon.html"
			},
			{
				fileNm: "./dist/images/starryNight.jpeg",
				label: "Stars",
				href: "./dist/images/starryNight.html"
			},
			{
				fileNm: "./dist/images/nightsky.jpeg",
				label: "Night Sky",
				href: "./dist/images/nightsky.html"
			}
		]
	},
	{
		albumName: "flowers",
		albumPic: [
			{
				fileNm: "./dist/images/redPoppy.jpeg",
				label: "Red Poppy",
				href: "./dist/images/redPoppy.html"
			},
			{
				fileNm: "./dist/images/blossom.jpeg",
				label: "Tree in Bloom",
				href: "./dist/images/blossom.html"
			},
			{
				fileNm: "./dist/images/roses.jpeg",
				label: "Antique Roses",
				href: "./dist/images/roses.html"
			}
		]
	}
];



const clear = () => {
	$("#albumDisplay").empty();
};

$(".home").click( () => {
	$(".sidebar-nav").css("display", "none");
	$(".landing").css("display", "inline-block");
	$("#albumDisplay").empty();
});




 $(".albumLink").on('click',function (event) {
	let $clicked = $(this).data('album');
	let filtered = $albums.filter( (albumObj) => {
		if($clicked === albumObj.albumName) {
			return true;
		} else {
			return false;
		}
	
	})
 	displayAlbum(filtered[0]);
 });


	
function displayAlbum(filtAlbum) {
	$(".landing").css("display", "none");
	$("header").css("display", "block");
	$(".sidebar-nav").css("display", "inline-block");
    clear();
	for(var i=0; i<filtAlbum.albumPic.length; i++) {
	  $("#albumDisplay").append(
	  	`<div class='col-sm-6 col-md-4'>
		   <div class='thumbnail'>
		     <a href = '${filtAlbum.albumPic[i].href}'>
		       <img src ='${filtAlbum.albumPic[i].fileNm}'/>
		       <h3>${filtAlbum.albumPic[i].label}</h3>
		     </a>
		   </div>
		  </div>`
		  )
	}	
};










