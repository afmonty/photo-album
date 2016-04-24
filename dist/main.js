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
	albumName: "ns",
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
	var filtered = $albums.filter(function (albumObj) {
		if ($clicked === albumObj.albumName) {
			return true;
		} else {
			return false;
		}
	});
	displayAlbum(filtered[0]);
});

function displayAlbum(filtAlbum) {
	$(".landing").css("display", "none");
	$(".sidebar-nav").css("display", "inline-block");
	clear();
	for (var i = 0; i < filtAlbum.albumPic.length; i++) {
		$("#albumDisplay").append("<div class='col-sm-6 col-md-4'>" + "<div class='thumbnail'>" + "<a href = '" + filtAlbum.albumPic[i].href + "'>" + "<img src ='" + filtAlbum.albumPic[i].fileNm + "'/>" + "<h3>" + filtAlbum.albumPic[i].label + "</h3>" + "</a>" + "</div>" + "</div>");
	}
};

},{}]},{},[1]);
