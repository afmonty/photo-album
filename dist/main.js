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
		console.log(albumObj);
	});
	console.log(filtered); //this is returning a single object.  Get albumPic out of this object
});

function displayAlbum() {
	console.log("in disply function");
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	console.log($index);
	for (var i = 0; i < $albums[$index].albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + $albums[$index].albumPic[i].href + "'>" + "<img src ='" + $albums[$index].albumPic[i].fileNm + "'/>" + "<h3>" + $albums[$index].albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQUksVUFBVSxDQUNiO0FBQ0MsWUFBVyxXQUFYO0FBQ0EsV0FBVSxDQUNUO0FBQ0MsVUFBUSwwQkFBUjtBQUNBLFNBQU8seUJBQVA7QUFDQSxRQUFNLDBCQUFOO0VBSlEsRUFNVDtBQUNDLFVBQVEsb0JBQVI7QUFDQSxTQUFPLGFBQVA7QUFDQSxRQUFNLG9CQUFOO0VBVFEsRUFXVDtBQUNDLFVBQVEsbUJBQVI7QUFDQSxTQUFPLGNBQVA7QUFDQSxRQUFNLG1CQUFOO0VBZFEsQ0FBVjtDQUhZLEVBcUJiO0FBQ0MsWUFBVyxRQUFYO0FBQ0EsV0FBVSxDQUNUO0FBQ0MsVUFBUSx5QkFBUjtBQUNBLFNBQU8scUJBQVA7QUFDQSxRQUFNLHlCQUFOO0VBSlEsRUFNVDtBQUNDLFVBQVEsd0JBQVI7QUFDQSxTQUFPLGdCQUFQO0FBQ0EsUUFBTSx3QkFBTjtFQVRRLEVBV1Q7QUFDQyxVQUFRLHlCQUFSO0FBQ0EsU0FBTyxtQkFBUDtBQUNBLFFBQU0seUJBQU47RUFkUSxDQUFWO0NBdkJZLEVBeUNiO0FBQ0MsWUFBVyxTQUFYO0FBQ0EsV0FBVSxDQUNUO0FBQ0MsVUFBUSx5QkFBUjtBQUNBLFNBQU8sa0JBQVA7QUFDQSxRQUFNLHlCQUFOO0VBSlEsRUFNVDtBQUNDLFVBQVEsNkJBQVI7QUFDQSxTQUFPLFlBQVA7QUFDQSxRQUFNLDZCQUFOO0VBVFEsRUFXVDtBQUNDLFVBQVEsaUNBQVI7QUFDQSxTQUFPLE9BQVA7QUFDQSxRQUFNLGdDQUFOO0VBZFEsQ0FBVjtDQTNDWSxFQTZEYjtBQUNDLFlBQVcsUUFBWDtBQUNBLFdBQVUsQ0FDVDtBQUNDLFVBQVEsa0JBQVI7QUFDQSxTQUFPLGdCQUFQO0FBQ0EsUUFB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WCxDQUEvQjs7QUFlQSxFQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FBdUIsWUFBVztBQUNqQyxHQUFFLFVBQUYsRUFBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE1BQTdCLEVBRGlDO0FBRWpDLEdBQUUsY0FBRixFQUFrQixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxjQUFqQyxFQUZpQztBQUdqQyxTQUhpQztBQUlqQyxNQUFJLElBQUksSUFBRSxDQUFGLEVBQUssSUFBRSxRQUFRLENBQVIsRUFBVyxRQUFYLENBQW9CLE1BQXBCLEVBQTRCLEdBQTNDLEVBQWdEO0FBQzlDLElBQUUsZUFBRixFQUFtQixNQUFuQixDQUNDLG9DQUNDLHlCQURELEdBRUMsYUFGRCxHQUVlLFFBQVEsQ0FBUixFQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsSUFBdkIsR0FBNEIsSUFGM0MsR0FHQyxhQUhELEdBR2UsUUFBUSxDQUFSLEVBQVcsUUFBWCxDQUFvQixDQUFwQixFQUF1QixNQUF2QixHQUE4QixLQUg3QyxHQUlDLE1BSkQsR0FJUSxRQUFRLENBQVIsRUFBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLEdBQ1YsT0FMRSxHQUtNLE1BTE4sR0FLYSxRQUxiLEdBS3NCLFFBTHRCLENBREQsQ0FEOEM7RUFBaEQsQ0FKaUM7Q0FBWCxDQUF2Qjs7QUFpQkEsRUFBRyxZQUFILEVBQWtCLEtBQWxCLENBQXdCLFlBQVk7QUFDbEMsS0FBSyxFQUFHLFFBQUgsRUFBYyxFQUFkLENBQWtCLFNBQWxCLENBQUwsRUFBcUM7QUFDbkMsSUFBRyxRQUFILEVBQWMsU0FBZCxDQUF5QixNQUF6QixFQURtQztFQUFyQyxNQUVPO0FBQ0wsSUFBRyxRQUFILEVBQWMsT0FBZCxHQURLO0VBRlA7Q0FEc0IsQ0FBeEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgJGFsYnVtcyA9IFtcblx0e1xuXHRcdGFsYnVtTmFtZTogXCJjaHJpc3RtYXNcIixcblx0XHRhbGJ1bVBpYzogW1xuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3RyZWVPcm5hbWVudC5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkNocmlzdG1hcyBUcmVlIE9ybmFtZW50XCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL3RyZWVPcm5hbWVudC5odG1sXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvd3JlYXRoLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiRG9vciBXcmVhdGhcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvd3JlYXRoLmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9zYW50YS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIlNhbnRhIENsYXVzZVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9zYW50YS5odG1sXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRhbGJ1bU5hbWU6IFwiY29mZmVlXCIsXG5cdFx0YWxidW1QaWM6IFtcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy90aGlua0NvZmZlZS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkNvZmZlZSBIZWF2ZW4vSGF2ZW5cIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvdGhpbmtDb2ZmZWUuaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL2hlYXJ0TGF0dGUuanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJMYXR0ZSB3dGggbG92ZVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9oZWFydExhdHRlLmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9jb2ZmZWVCZWFucy5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkJlYW5zIEJlYW5zIEJlYW5zXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL2NvZmZlZUJlYW5zLmh0bWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGFsYnVtTmFtZTogXCJiZWFjaGVzXCIsXG5cdFx0YWxidW1QaWM6IFtcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9zdW5zZXRCZWFjaC5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkJlYXV0aWZ1bCBTdW5zZXRcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvc3Vuc2V0QmVhY2guaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL2Zvb3RwcmludHNCZWFjaC5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkZvb3RwcmludHNcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvZm9vdHByaW50c0JlYWNoLmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy8vYmxhY2thbmR3aGl0ZUJlYWNoLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQmVhY2hcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvYmxhY2thbmR3aGl0ZUJlYWNoLmh0bWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGFsYnVtTmFtZTogXCJob3JzZXNcIixcblx0XHRhbGJ1bVBpYzogW1xuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3BvbnkuanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJNeSBsaXR0bGUgcG9ueVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9wb255Lmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy90ZWV0aEhvcnNlLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiSGFwcHkgSG9yc2VcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvdGVldGhIb3JzZS5odG1sXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvd2hpdGVIb3JzZS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkJlYXV0aWZ1bCBIb3JzZVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy93aGl0ZUhvcnNlLmh0bWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGFsYnVtTmFtZTogXCJuaWdodFwiLFxuXHRcdGFsYnVtUGljOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvbW9vbi5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIk1vb24tdGltZVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9tb29uLmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9zdGFycnlOaWdodC5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIlN0YXJzXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL3N0YXJyeU5pZ2h0Lmh0bWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmlsZU5tOiBcImltYWdlcy9uaWdodHNreS5qcGVnXCIsXG5cdFx0XHRcdGxhYmVsOiBcIk5pZ2h0IFNreVwiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9uaWdodHNreS5odG1sXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRhbGJ1bU5hbWU6IFwiZmxvd2Vyc1wiLFxuXHRcdGFsYnVtUGljOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGZpbGVObTogXCJpbWFnZXMvcmVkUG9wcHkuanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJSZWQgUG9wcHlcIixcblx0XHRcdFx0aHJlZjogXCJpbWFnZXMvcmVkUG9wcHkuaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL2Jsb3Nzb20uanBlZ1wiLFxuXHRcdFx0XHRsYWJlbDogXCJUcmVlIGluIEJsb29tXCIsXG5cdFx0XHRcdGhyZWY6IFwiaW1hZ2VzL2Jsb3Nzb20uaHRtbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWxlTm06IFwiaW1hZ2VzL3Jvc2VzLmpwZWdcIixcblx0XHRcdFx0bGFiZWw6IFwiQW50aXF1ZSBSb3Nlc1wiLFxuXHRcdFx0XHRocmVmOiBcImltYWdlcy9yb3Nlcy5odG1sXCJcblx0XHRcdH1cblx0XHRdXG5cdH1cbl07XG5cblxuXG5jb25zdCBjbGVhciA9ICgpID0+IHtcblx0JChcIiNhbGJ1bURpc3BsYXlcIikuZW1wdHkoKTtcbn07XG5cbiQoXCIuaG9tZVwiKS5jbGljayggKCkgPT4ge1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLmxhbmRpbmdcIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcblx0JChcIiNhbGJ1bURpc3BsYXlcIikuZW1wdHkoKTtcbn0pO1xuXG5cblxuXG4gJChcIi5hbGJ1bUxpbmtcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0bGV0ICRjbGlja2VkID0gJCh0aGlzKS5kYXRhKCdhbGJ1bScpO1xuXHRjb25zb2xlLmxvZyh0aGlzKTtcblx0Y29uc29sZS5sb2coJGNsaWNrZWQpO1xuXHRsZXQgZmlsdGVyZWQgPSAkYWxidW1zLmZpbHRlciggKGFsYnVtT2JqKSA9PiB7XG5cdFx0aWYoJGNsaWNrZWQgPT09IGFsYnVtT2JqLmFsYnVtTmFtZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coYWxidW1PYmopO1xuXHR9KVxuXHRjb25zb2xlLmxvZyhmaWx0ZXJlZCk7Ly90aGlzIGlzIHJldHVybmluZyBhIHNpbmdsZSBvYmplY3QuICBHZXQgYWxidW1QaWMgb3V0IG9mIHRoaXMgb2JqZWN0XG4gfSk7XG5cblxuXHRcbmZ1bmN0aW9uIGRpc3BsYXlBbGJ1bSgpIHtcblx0Y29uc29sZS5sb2coXCJpbiBkaXNwbHkgZnVuY3Rpb25cIilcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZygkaW5kZXgpO1xuXHRmb3IodmFyIGk9MDsgaTwkYWxidW1zWyRpbmRleF0uYWxidW1QaWMubGVuZ3RoOyBpKyspIHtcblx0ICAkKFwiI2FsYnVtRGlzcGxheVwiKS5hcHBlbmQoXG5cdCAgXHRcIjxkaXYgY2xhc3M9J2NvbC1zbS02IGNvbC1tZC00Jz5cIlxuXHQgIFx0K1wiPGRpdiBjbGFzcz0ndGh1bWJuYWlsJz5cIlxuXHQgIFx0K1wiPGEgaHJlZiA9ICdcIiskYWxidW1zWyRpbmRleF0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcblx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1skaW5kZXhdLmFsYnVtUGljW2ldLmZpbGVObStcIicvPlwiXG5cdCAgXHQrXCI8aDM+XCIrJGFsYnVtc1skaW5kZXhdLmFsYnVtUGljW2ldLmxhYmVsK1xuXHRcdFwiPC9oMz5cIitcIjwvYT5cIitcIjwvZGl2PlwiK1wiPC9kaXY+XCIpO1xuXHR9XHRcbn07XG5cblxuXG5cblxuXG4kKFwiI2NocmlzdG1hcywgI2NocmlzdG1hc0RpdlwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG5cdGNsZWFyKCk7XG5cblx0Zm9yKHZhciBpPTA7IGk8JGFsYnVtc1swXS5hbGJ1bVBpYy5sZW5ndGg7IGkrKykge1xuXHQgICQoXCIjYWxidW1EaXNwbGF5XCIpLmFwcGVuZChcblx0ICBcdFwiPGRpdiBjbGFzcz0nY29sLXNtLTYgY29sLW1kLTQnPlwiXG5cdCAgXHQrXCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPlwiXG5cdCAgXHQrXCI8YSBocmVmID0gJ1wiKyRhbGJ1bXNbMF0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcblx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1swXS5hbGJ1bVBpY1tpXS5maWxlTm0rXCInLz5cIlxuXHQgIFx0K1wiPGgzPlwiKyRhbGJ1bXNbMF0uYWxidW1QaWNbaV0ubGFiZWwrXG5cdFx0XCI8L2gzPlwiK1wiPC9hPlwiK1wiPC9kaXY+XCIrXCI8L2Rpdj5cIik7XG5cdH07XHRcbn0pO1xuXG4kKFwiI2NvZmZlZSwgI2NvZmZlZURpdlwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG5cdGNsZWFyKCk7XG5cdGZvcihsZXQgaT0wOyBpPCRhbGJ1bXNbMV0uYWxidW1QaWMubGVuZ3RoOyBpKyspIHtcblx0ICAkKFwiI2FsYnVtRGlzcGxheVwiKS5hcHBlbmQoXG5cdCAgXHRcIjxkaXYgY2xhc3M9J2NvbC1zbS02IGNvbC1tZC00Jz5cIlxuXHQgIFx0K1wiPGRpdiBjbGFzcz0ndGh1bWJuYWlsJz5cIlxuXHQgIFx0K1wiPGEgaHJlZiA9ICdcIiskYWxidW1zWzFdLmFsYnVtUGljW2ldLmhyZWYrXCInPlwiXG5cdCAgXHQrXCI8aW1nIHNyYyA9J1wiKyRhbGJ1bXNbMV0uYWxidW1QaWNbaV0uZmlsZU5tK1wiJy8+XCJcblx0ICBcdCtcIjxoMz5cIiskYWxidW1zWzFdLmFsYnVtUGljW2ldLmxhYmVsK1xuXHRcdFwiPC9oMz5cIitcIjwvYT5cIitcIjwvZGl2PlwiK1wiPC9kaXY+XCIpO1xuXHR9O1x0XG59KTtcblxuXG4vLyAkKFwiI2Zsb3dlcnMsICNmbG93ZXJzRGl2XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuLy8gXHQkKFwiLmxhbmRpbmdcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4vLyBcdCQoXCIuc2lkZWJhci1uYXZcIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcbi8vIFx0Y2xlYXIoKTtcbi8vIFx0Zm9yKGxldCBpPTA7IGk8JGFsYnVtc1s1XS5hbGJ1bVBpYy5sZW5ndGg7IGkrKykge1xuLy8gXHQgICQoXCIjYWxidW1EaXNwbGF5XCIpLmFwcGVuZChcbi8vIFx0ICBcdFwiPGRpdiBjbGFzcz0nY29sLXNtLTYgY29sLW1kLTQnPlwiXG4vLyBcdCAgXHQrXCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPlwiXG4vLyBcdCAgXHQrXCI8YSBocmVmID0gJ1wiKyRhbGJ1bXNbNV0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcbi8vIFx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1s1XS5hbGJ1bVBpY1tpXS5maWxlTm0rXCInLz5cIlxuLy8gXHQgIFx0K1wiPGgzPlwiKyRhbGJ1bXNbNV0uYWxidW1QaWNbaV0ubGFiZWwrXG4vLyBcdFx0XCI8L2gzPlwiK1wiPC9hPlwiK1wiPC9kaXY+XCIrXCI8L2Rpdj5cIik7XG4vLyBcdH07XHRcbi8vIH0pO1xuXG4kKFwiI2hvcnNlcywgI2hvcnNlc0RpdlwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0JChcIi5sYW5kaW5nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHQkKFwiLnNpZGViYXItbmF2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG5cdGNsZWFyKCk7XG5cdGZvcihsZXQgaT0wOyBpPCRhbGJ1bXNbM10uYWxidW1QaWMubGVuZ3RoOyBpKyspIHtcblx0ICAkKFwiI2FsYnVtRGlzcGxheVwiKS5hcHBlbmQoXG5cdCAgXHRcIjxkaXYgY2xhc3M9J2NvbC1zbS02IGNvbC1tZC00Jz5cIlxuXHQgIFx0K1wiPGRpdiBjbGFzcz0ndGh1bWJuYWlsJz5cIlxuXHQgIFx0K1wiPGEgaHJlZiA9ICdcIiskYWxidW1zWzNdLmFsYnVtUGljW2ldLmhyZWYrXCInPlwiXG5cdCAgXHQrXCI8aW1nIHNyYyA9J1wiKyRhbGJ1bXNbM10uYWxidW1QaWNbaV0uZmlsZU5tK1wiJy8+XCJcblx0ICBcdCtcIjxoMz5cIiskYWxidW1zWzNdLmFsYnVtUGljW2ldLmxhYmVsK1xuXHRcdFwiPC9oMz5cIitcIjwvYT5cIitcIjwvZGl2PlwiK1wiPC9kaXY+XCIpO1xuXHR9O1x0XG59KTtcblxuJChcIiNucywgI25zRGl2XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQkKFwiLmxhbmRpbmdcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdCQoXCIuc2lkZWJhci1uYXZcIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcblx0Y2xlYXIoKTtcblx0Zm9yKGxldCBpPTA7IGk8JGFsYnVtc1s0XS5hbGJ1bVBpYy5sZW5ndGg7IGkrKykge1xuXHQgICQoXCIjYWxidW1EaXNwbGF5XCIpLmFwcGVuZChcblx0ICBcdFwiPGRpdiBjbGFzcz0nY29sLXNtLTYgY29sLW1kLTQnPlwiXG5cdCAgXHQrXCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPlwiXG5cdCAgXHQrXCI8YSBocmVmID0gJ1wiKyRhbGJ1bXNbNF0uYWxidW1QaWNbaV0uaHJlZitcIic+XCJcblx0ICBcdCtcIjxpbWcgc3JjID0nXCIrJGFsYnVtc1s0XS5hbGJ1bVBpY1tpXS5maWxlTm0rXCInLz5cIlxuXHQgIFx0K1wiPGgzPlwiKyRhbGJ1bXNbNF0uYWxidW1QaWNbaV0ubGFiZWwrXG5cdFx0XCI8L2gzPlwiK1wiPC9hPlwiK1wiPC9kaXY+XCIrXCI8L2Rpdj5cIik7XG5cdH07XHRcbn0pO1xuXG5cblxuJCggXCIuYWRkQnV0dG9uXCIgKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIGlmICggJCggXCIuaW5wdXRcIiApLmlzKCBcIjpoaWRkZW5cIiApICkge1xuICAgICQoIFwiLmlucHV0XCIgKS5zbGlkZURvd24oIFwic2xvd1wiICk7XG4gIH0gZWxzZSB7XG4gICAgJCggXCIuaW5wdXRcIiApLnNsaWRlVXAoKTtcbiAgfVxufSk7Il19
