(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var $albums = [{
	albumName: "christmas",
	albumPic: [{
		fileNm: "images/treeOrnament.jpeg",
		label: "Christmas Tree Ornament",
		href: "images/treeOrnament.html"
	}, {
		fileNm: "images/wreath.jpeg",
		label: "Door Wreath",
		href: "images/wreath.html"
	}, {
		fileNm: "images/santa.jpeg",
		label: "Santa Clause",
		href: "images/santa.html"
	}]
}, {
	albumName: "coffee",
	albumPic: [{
		fileNm: "images/thinkCoffee.jpeg",
		label: "Coffee Heaven/Haven",
		href: "images/thinkCoffee.html"
	}, {
		fileNm: "images/heartLatte.jpeg",
		label: "Latte wth love",
		href: "images/heartLatte.html"
	}, {
		fileNm: "images/coffeeBeans.jpeg",
		label: "Beans Beans Beans",
		href: "images/coffeeBeans.html"
	}]
}, {
	albumName: "beaches",
	albumPic: [{
		fileNm: "images/sunsetBeach.jpeg",
		label: "Beautiful Sunset",
		href: "images/sunsetBeach.html"
	}, {
		fileNm: "images/footprintsBeach.jpeg",
		label: "Footprints",
		href: "images/footprintsBeach.html"
	}, {
		fileNm: "images//blackandwhiteBeach.jpeg",
		label: "Beach",
		href: "images/blackandwhiteBeach.html"
	}]
}, {
	albumName: "horses",
	albumPic: [{
		fileNm: "images/pony.jpeg",
		label: "My little pony",
		href: "images/pony.html"
	}, {
		fileNm: "images/teethHorse.jpeg",
		label: "Happy Horse",
		href: "images/teethHorse.html"
	}, {
		fileNm: "images/whiteHorse.jpeg",
		label: "Beautiful Horse",
		href: "images/whiteHorse.html"
	}]
}, {
	albumName: "night",
	albumPic: [{
		fileNm: "images/moon.jpeg",
		label: "Moon-time",
		href: "images/moon.html"
	}, {
		fileNm: "images/starryNight.jpeg",
		label: "Stars",
		href: "images/starryNight.html"
	}, {
		fileNm: "images/nightsky.jpeg",
		label: "Night Sky",
		href: "images/nightsky.html"
	}]
}, {
	albumName: "flowers",
	albumPic: [{
		fileNm: "images/redPoppy.jpeg",
		label: "Red Poppy",
		href: "images/redPoppy.html"
	}, {
		fileNm: "images/blossom.jpeg",
		label: "Tree in Bloom",
		href: "images/blossom.html"
	}, {
		fileNm: "images/roses.jpeg",
		label: "Antique Roses",
		href: "images/roses.html"
	}]
}];

var clear = function clear() {
	$("#albumDisplay").empty();
};

$(".home").click(function () {
	$(".sidebar-nav").css("display", "none");
	$(".landing").css("display", "inline-block");
	$("#albumDisplay").empty();
});

$(".albumLink").on('click', function (event) {
	var $clicked = $(this).data('album');
	console.log(this);
	console.log($clicked);
	var filtered = $albums.filter(function (albumObj) {
		if ($clicked === albumObj.albumName) {
			return true;
		} else {
			return false;
		}
	});
	console.log(filtered[0].albumPic); //this is returning a single object.  Get albumPic out of this object
	displayAlbum(filtered[0]);
});
//let filtAlbum = filtered[0];

function displayAlbum(filtAlbum) {
	console.log("in disply function");
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	console.log(filtAlbum);
	for (var i = 0; i < filtAlbum.albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + filtAlbum.albumPic[i].href + "'>" + "<img src ='" + filtAlbum.albumPic[i].fileNm + "'/>" + "<h3>" + filtAlbum.albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
	}
};

$("#christmas, #christmasDiv").click(function () {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();

	for (var i = 0; i < $albums[0].albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + $albums[0].albumPic[i].href + "'>" + "<img src ='" + $albums[0].albumPic[i].fileNm + "'/>" + "<h3>" + $albums[0].albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
	};
});

$("#coffee, #coffeeDiv").click(function () {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for (var i = 0; i < $albums[1].albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + $albums[1].albumPic[i].href + "'>" + "<img src ='" + $albums[1].albumPic[i].fileNm + "'/>" + "<h3>" + $albums[1].albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
	};
});

// $("#flowers, #flowersDiv").click(function() {
// 	$(".landing").css("display", "none");
// 	$(".sidebar-nav").css("display", "inline-block");
// 	clear();
// 	for(let i=0; i<$albums[5].albumPic.length; i++) {
// 	  $("#albumDisplay").append(
// 	  	"<div class='col-sm-6 col-md-4'>"
// 	  	+"<div class='thumbnail'>"
// 	  	+"<a href = '"+$albums[5].albumPic[i].href+"'>"
// 	  	+"<img src ='"+$albums[5].albumPic[i].fileNm+"'/>"
// 	  	+"<h3>"+$albums[5].albumPic[i].label+
// 		"</h3>"+"</a>"+"</div>"+"</div>");
// 	};	
// });

$("#horses, #horsesDiv").click(function () {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for (var i = 0; i < $albums[3].albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + $albums[3].albumPic[i].href + "'>" + "<img src ='" + $albums[3].albumPic[i].fileNm + "'/>" + "<h3>" + $albums[3].albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
	};
});

$("#ns, #nsDiv").click(function () {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for (var i = 0; i < $albums[4].albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + $albums[4].albumPic[i].href + "'>" + "<img src ='" + $albums[4].albumPic[i].fileNm + "'/>" + "<h3>" + $albums[4].albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
	};
});

$(".addButton").click(function () {
	if ($(".input").is(":hidden")) {
		$(".input").slideDown("slow");
	} else {
		$(".input").slideUp();
	}
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQUksVUFBVSxDQUNiO0FBQ0MsWUFBVyxXQUFYO0FBQ0EsV0FBVSxDQUNUO0FBQ0MsVUFBUSwwQkFBUjtBQUNBLFNBQU8seUJBQVA7QUFDQSxRQUFNLDBCQUFOO0VBSlEsRUFNVDtBQUNDLFVBQVEsb0JBQVI7QUFDQSxTQUFPLGFBQVA7QUFDQSxRQUFNLG9CQUFOO0VBVFEsRUFXVDtBQUNDLFVBQVEsbUJBQVI7QUFDQSxTQUFPLGNBQVA7QUFDQSxRQUFNLG1CQUFOO0VBZFEsQ0FBVjtDQUhZLEVBcUJiO0FBQ0MsWUFBVyxRQUFYO0FBQ0EsV0FBVSxDQUNUO0FBQ0MsVUFBUSx5QkFBUjtBQUNBLFNBQU8scUJBQVA7QUFDQSxRQUFNLHlCQUFOO0VBSlEsRUFNVDtBQUNDLFVBQVEsd0JBQVI7QUFDQSxTQUFPLGdCQUFQO0FBQ0EsUUFBTSx3QkFBTjtFQVRRLEVBV1Q7QUFDQyxVQUFRLHlCQUFSO0FBQ0EsU0FBTyxtQkFBUDtBQUNBLFFBQU0seUJBQU47RUFkUSxDQUFWO0NBdkJZLEVBeUNiO0FBQ0MsWUFBVyxTQUFYO0FBQ0EsV0FBVSxDQUNUO0FBQ0MsVUFBUSx5QkFBUjtBQUNBLFNBQU8sa0JBQVA7QUFDQSxRQUFNLHlCQUFOO0VBSlEsRUFNVDtBQUNDLFVBQVEsNkJBQVI7QUFDQSxTQUFPLFlBQVA7QUFDQSxRQUFNLDZCQUFOO0VBVFEsRUFXVDtBQUNDLFVBQVEsaUNBQVI7QUFDQSxTQUFPLE9BQVA7QUFDQSxRQUFNLGdDQUFOO0VBZFEsQ0FBVjtDQTNDWSxFQTZEYjtBQUNDLFlBQVcsUUFBWDtBQUNBLFdBQVUsQ0FDVDtBQUNDLFVBQVEsa0JBQVI7QUFDQSxTQUFPLGdCQUFQO0FBQ0EsUUFB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LEVBQUUsYUFBRixFQUFpQixLQUFqQixDQUF1QixZQUFXO0FBQ2pDLEdBQUUsVUFBRixFQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsTUFBN0IsRUFEaUM7QUFFakMsR0FBRSxjQUFGLEVBQWtCLEdBQWxCLENBQXNCLFNBQXRCLEVBQWlDLGNBQWpDLEVBRmlDO0FBR2pDLFNBSGlDO0FBSWpDLE1BQUksSUFBSSxJQUFFLENBQUYsRUFBSyxJQUFFLFFBQVEsQ0FBUixFQUFXLFFBQVgsQ0FBb0IsTUFBcEIsRUFBNEIsR0FBM0MsRUFBZ0Q7QUFDOUMsSUFBRSxlQUFGLEVBQW1CLE1BQW5CLENBQ0Msb0NBQ0MseUJBREQsR0FFQyxhQUZELEdBRWUsUUFBUSxDQUFSLEVBQVcsUUFBWCxDQUFvQixDQUFwQixFQUF1QixJQUF2QixHQUE0QixJQUYzQyxHQUdDLGFBSEQsR0FHZSxRQUFRLENBQVIsRUFBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLE1BQXZCLEdBQThCLEtBSDdDLEdBSUMsTUFKRCxHQUlRLFFBQVEsQ0FBUixFQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkIsR0FDVixPQUxFLEdBS00sTUFMTixHQUthLFFBTGIsR0FLc0IsUUFMdEIsQ0FERCxDQUQ4QztFQUFoRCxDQUppQztDQUFYLENBQXZCOztBQWlCQSxFQUFHLFlBQUgsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBWTtBQUNsQyxLQUFLLEVBQUcsUUFBSCxFQUFjLEVBQWQsQ0FBa0IsU0FBbEIsQ0FBTCxFQUFxQztBQUNuQyxJQUFHLFFBQUgsRUFBYyxTQUFkLENBQXlCLE1BQXpCLEVBRG1DO0VBQXJDLE1BRU87QUFDTCxJQUFHLFFBQUgsRUFBYyxPQUFkLEdBREs7RUFGUDtDQURzQixDQUF4QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciAkYWxidW1zID0gW1xuXHR7XG5cdFx0YWxidW1OYW1lOiBcImNocmlzdG1hc1wiLFxuXHRcdGFsYnVtUGljOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvdHJlZU9ybmFtZW50LmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQ2hyaXN0bWFzIFRyZWUgT3JuYW1lbnRcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvdHJlZU9ybmFtZW50Lmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy93cmVhdGguanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJEb29yIFdyZWF0aFwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy93cmVhdGguaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3NhbnRhLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiU2FudGEgQ2xhdXNlXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL3NhbnRhLmh0bWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGFsYnVtTmFtZTogXCJjb2ZmZWVcIixcblx0XHRhbGJ1bVBpYzogW1xuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3RoaW5rQ29mZmVlLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQ29mZmVlIEhlYXZlbi9IYXZlblwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy90aGlua0NvZmZlZS5odG1sXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvaGVhcnRMYXR0ZS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkxhdHRlIHd0aCBsb3ZlXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL2hlYXJ0TGF0dGUuaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL2NvZmZlZUJlYW5zLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQmVhbnMgQmVhbnMgQmVhbnNcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvY29mZmVlQmVhbnMuaHRtbFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0YWxidW1OYW1lOiBcImJlYWNoZXNcIixcblx0XHRhbGJ1bVBpYzogW1xuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3N1bnNldEJlYWNoLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQmVhdXRpZnVsIFN1bnNldFwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9zdW5zZXRCZWFjaC5odG1sXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvZm9vdHByaW50c0JlYWNoLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiRm9vdHByaW50c1wiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9mb290cHJpbnRzQmVhY2guaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzLy9ibGFja2FuZHdoaXRlQmVhY2guanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJCZWFjaFwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9ibGFja2FuZHdoaXRlQmVhY2guaHRtbFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0YWxidW1OYW1lOiBcImhvcnNlc1wiLFxuXHRcdGFsYnVtUGljOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvcG9ueS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIk15IGxpdHRsZSBwb255XCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL3BvbnkuaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3RlZXRoSG9yc2UuanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJIYXBweSBIb3JzZVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy90ZWV0aEhvcnNlLmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy93aGl0ZUhvcnNlLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQmVhdXRpZnVsIEhvcnNlXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL3doaXRlSG9yc2UuaHRtbFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0YWxidW1OYW1lOiBcIm5pZ2h0XCIsXG5cdFx0YWxidW1QaWM6IFtcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9tb29uLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiTW9vbi10aW1lXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL21vb24uaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3N0YXJyeU5pZ2h0LmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiU3RhcnNcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvc3RhcnJ5TmlnaHQuaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL25pZ2h0c2t5LmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiTmlnaHQgU2t5XCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL25pZ2h0c2t5Lmh0bWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGFsYnVtTmFtZTogXCJmbG93ZXJzXCIsXG5cdFx0YWxidW1QaWM6IFtcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9yZWRQb3BweS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIlJlZCBQb3BweVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9yZWRQb3BweS5odG1sXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvYmxvc3NvbS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIlRyZWUgaW4gQmxvb21cIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvYmxvc3NvbS5odG1sXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvcm9zZXMuanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJBbnRpcXVlIFJvc2VzXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL3Jvc2VzLmh0bWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXTtcblxuXG5cbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuXHQkKFwiI2FsYnVtRGlzcGxheVwiKS5lbXB0eSgpO1xufTtcblxuJChcIi5ob21lXCIpLmNsaWNrKCAoKSA9PiB7XG5cdCQoXCIuc2lkZWJhci1uYXZcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdCQoXCIubGFuZGluZ1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xuXHQkKFwiI2FsYnVtRGlzcGxheVwiKS5lbXB0eSgpO1xufSk7XG5cblxuXG5cbiAkKFwiLmFsYnVtTGlua1wiKS5vbignY2xpY2snLGZ1bmN0aW9uIChldmVudCkge1xuXHRsZXQgJGNsaWNrZWQgPSAkKHRoaXMpLmRhdGEoJ2FsYnVtJyk7XG5cdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRjb25zb2xlLmxvZygkY2xpY2tlZCk7XG5cdGxldCBmaWx0ZXJlZCA9ICRhbGJ1bXMuZmlsdGVyKCAoYWxidW1PYmopID0+IHtcblx0XHRpZigkY2xpY2tlZCA9PT0gYWxidW1PYmouYWxidW1OYW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XG5cdH0pXG5cdGNvbnNvbGUubG9nKGZpbHRlcmVkWzBdLmFsYnVtUGljKTsvL3RoaXMgaXMgcmV0dXJuaW5nIGEgc2luZ2xlIG9iamVjdC4gIEdldCBhbGJ1bVBpYyBvdXQgb2YgdGhpcyBvYmplY3RcbiBcdGRpc3BsYXlBbGJ1bShmaWx0ZXJlZFswXSk7XG4gfSk7XG4vL2xldCBmaWx0QWxidW0gPSBmaWx0ZXJlZFswXTtcblxuXHRcbmZ1bmN0aW9uIGRpc3BsYXlBbGJ1bShmaWx0QWxidW0pIHtcblx0Y29uc29sZS5sb2coXCJpbiBkaXNwbHkgZnVuY3Rpb25cIilcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZyhmaWx0QWxidW0pO1xuXHRmb3IodmFyIGk9MDsgaTxmaWx0QWxidW0uYWxidW1QaWMubGVuZ3RoOyBpKyspIHtcblx0ICAkKFwiI2FsYnVtRGlzcGxheVwiKS5hcHBlbmQoXG5cdCAgXHRcIjxkaXYgY2xhc3M9J2NvbC1zbS02IGNvbC1tZC00Jz5cIlxuXHQgIFx0K1wiPGRpdiBjbGFzcz0ndGh1bWJuYWlsJz5cIlxuXHQgIFx0K1wiPGEgaHJlZiA9ICdcIitmaWx0QWxidW0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcblx0ICBcdCtcIjxpbWcgc3JjID0nXCIrZmlsdEFsYnVtLmFsYnVtUGljW2ldLmZpbGVObStcIicvPlwiXG5cdCAgXHQrXCI8aDM+XCIrZmlsdEFsYnVtLmFsYnVtUGljW2ldLmxhYmVsK1xuXHRcdFwiPC9oMz5cIitcIjwvYT5cIitcIjwvZGl2PlwiK1wiPC9kaXY+XCIpO1xuXHR9XHRcbn07XG5cblxuXG5cblxuXG4kKFwiI2NocmlzdG1hcywgI2NocmlzdG1hc0RpdlwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG5cdGNsZWFyKCk7XG5cblx0Zm9yKHZhciBpPTA7IGk8JGFsYnVtc1swXS5hbGJ1bVBpYy5sZW5ndGg7IGkrKykge1xuXHQgICQoXCIjYWxidW1EaXNwbGF5XCIpLmFwcGVuZChcblx0ICBcdFwiPGRpdiBjbGFzcz0nY29sLXNtLTYgY29sLW1kLTQnPlwiXG5cdCAgXHQrXCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPlwiXG5cdCAgXHQrXCI8YSBocmVmID0gJ1wiKyRhbGJ1bXNbMF0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcblx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1swXS5hbGJ1bVBpY1tpXS5maWxlTm0rXCInLz5cIlxuXHQgIFx0K1wiPGgzPlwiKyRhbGJ1bXNbMF0uYWxidW1QaWNbaV0ubGFiZWwrXG5cdFx0XCI8L2gzPlwiK1wiPC9hPlwiK1wiPC9kaXY+XCIrXCI8L2Rpdj5cIik7XG5cdH07XHRcbn0pO1xuXG4kKFwiI2NvZmZlZSwgI2NvZmZlZURpdlwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG5cdGNsZWFyKCk7XG5cdGZvcihsZXQgaT0wOyBpPCRhbGJ1bXNbMV0uYWxidW1QaWMubGVuZ3RoOyBpKyspIHtcblx0ICAkKFwiI2FsYnVtRGlzcGxheVwiKS5hcHBlbmQoXG5cdCAgXHRcIjxkaXYgY2xhc3M9J2NvbC1zbS02IGNvbC1tZC00Jz5cIlxuXHQgIFx0K1wiPGRpdiBjbGFzcz0ndGh1bWJuYWlsJz5cIlxuXHQgIFx0K1wiPGEgaHJlZiA9ICdcIiskYWxidW1zWzFdLmFsYnVtUGljW2ldLmhyZWYrXCInPlwiXG5cdCAgXHQrXCI8aW1nIHNyYyA9J1wiKyRhbGJ1bXNbMV0uYWxidW1QaWNbaV0uZmlsZU5tK1wiJy8+XCJcblx0ICBcdCtcIjxoMz5cIiskYWxidW1zWzFdLmFsYnVtUGljW2ldLmxhYmVsK1xuXHRcdFwiPC9oMz5cIitcIjwvYT5cIitcIjwvZGl2PlwiK1wiPC9kaXY+XCIpO1xuXHR9O1x0XG59KTtcblxuXG4vLyAkKFwiI2Zsb3dlcnMsICNmbG93ZXJzRGl2XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuLy8gXHQkKFwiLmxhbmRpbmdcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4vLyBcdCQoXCIuc2lkZWJhci1uYXZcIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcbi8vIFx0Y2xlYXIoKTtcbi8vIFx0Zm9yKGxldCBpPTA7IGk8JGFsYnVtc1s1XS5hbGJ1bVBpYy5sZW5ndGg7IGkrKykge1xuLy8gXHQgICQoXCIjYWxidW1EaXNwbGF5XCIpLmFwcGVuZChcbi8vIFx0ICBcdFwiPGRpdiBjbGFzcz0nY29sLXNtLTYgY29sLW1kLTQnPlwiXG4vLyBcdCAgXHQrXCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPlwiXG4vLyBcdCAgXHQrXCI8YSBocmVmID0gJ1wiKyRhbGJ1bXNbNV0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcbi8vIFx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1s1XS5hbGJ1bVBpY1tpXS5maWxlTm0rXCInLz5cIlxuLy8gXHQgIFx0K1wiPGgzPlwiKyRhbGJ1bXNbNV0uYWxidW1QaWNbaV0ubGFiZWwrXG4vLyBcdFx0XCI8L2gzPlwiK1wiPC9hPlwiK1wiPC9kaXY+XCIrXCI8L2Rpdj5cIik7XG4vLyBcdH07XHRcbi8vIH0pO1xuXG4kKFwiI2hvcnNlcywgI2hvcnNlc0RpdlwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG5cdGNsZWFyKCk7XG5cdGZvcihsZXQgaT0wOyBpPCRhbGJ1bXNbM10uYWxidW1QaWMubGVuZ3RoOyBpKyspIHtcblx0ICAkKFwiI2FsYnVtRGlzcGxheVwiKS5hcHBlbmQoXG5cdCAgXHRcIjxkaXYgY2xhc3M9J2NvbC1zbS02IGNvbC1tZC00Jz5cIlxuXHQgIFx0K1wiPGRpdiBjbGFzcz0ndGh1bWJuYWlsJz5cIlxuXHQgIFx0K1wiPGEgaHJlZiA9ICdcIiskYWxidW1zWzNdLmFsYnVtUGljW2ldLmhyZWYrXCInPlwiXG5cdCAgXHQrXCI8aW1nIHNyYyA9J1wiKyRhbGJ1bXNbM10uYWxidW1QaWNbaV0uZmlsZU5tK1wiJy8+XCJcblx0ICBcdCtcIjxoMz5cIiskYWxidW1zWzNdLmFsYnVtUGljW2ldLmxhYmVsK1xuXHRcdFwiPC9oMz5cIitcIjwvYT5cIitcIjwvZGl2PlwiK1wiPC9kaXY+XCIpO1xuXHR9O1x0XG59KTtcblxuJChcIiNucywgI25zRGl2XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQkKFwiLmxhbmRpbmdcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdCQoXCIuc2lkZWJhci1uYXZcIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcblx0Y2xlYXIoKTtcblx0Zm9yKGxldCBpPTA7IGk8JGFsYnVtc1s0XS5hbGJ1bVBpYy5sZW5ndGg7IGkrKykge1xuXHQgICQoXCIjYWxidW1EaXNwbGF5XCIpLmFwcGVuZChcblx0ICBcdFwiPGRpdiBjbGFzcz0nY29sLXNtLTYgY29sLW1kLTQnPlwiXG5cdCAgXHQrXCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPlwiXG5cdCAgXHQrXCI8YSBocmVmID0gJ1wiKyRhbGJ1bXNbNF0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcblx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1s0XS5hbGJ1bVBpY1tpXS5maWxlTm0rXCInLz5cIlxuXHQgIFx0K1wiPGgzPlwiKyRhbGJ1bXNbNF0uYWxidW1QaWNbaV0ubGFiZWwrXG5cdFx0XCI8L2gzPlwiK1wiPC9hPlwiK1wiPC9kaXY+XCIrXCI8L2Rpdj5cIik7XG5cdH07XHRcbn0pO1xuXG5cblxuJCggXCIuYWRkQnV0dG9uXCIgKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIGlmICggJCggXCIuaW5wdXRcIiApLmlzKCBcIjpoaWRkZW5cIiApICkge1xuICAgICQoIFwiLmlucHV0XCIgKS5zbGlkZURvd24oIFwic2xvd1wiICk7XG4gIH0gZWxzZSB7XG4gICAgJCggXCIuaW5wdXRcIiApLnNsaWRlVXAoKTtcbiAgfVxufSk7Il19
