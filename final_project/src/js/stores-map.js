var london = {lat: 51.5124729, lng: -0.1420052};
var paris = {lat: 48.8640047, lng: 2.3316908};
var ny = {lat: 40.7683004, lng: -73.9844432};

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: london,
		zoom: 17,
		disableDefaultUI: true,
		styles: [
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#444444"
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
			{
				"color": "#f2f2f2"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": 45
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "simplified"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"color": "#46bcec"
			},
			{
				"visibility": "on"
			}
			]
		}
		]
	});

	var markerImg = '../img/map-marker.svg'

	var marker1 = new google.maps.Marker({position: london, map: map, icon: markerImg});
	var marker2 = new google.maps.Marker({position: paris, map: map, icon: markerImg});
	var marker3 = new google.maps.Marker({position: ny, map: map, icon: markerImg});

/*	$('#storesTab button').on('click', function (e) {
		var target = $(this).attr('href').slice(1);
		map.setCenter(target);
	});*/


	$('[href="#paris"]').on('click', function() {
		map.setCenter(paris);
	});

	$('[href="#ny"]').on('click', function() {
		map.setCenter(ny);
	});

	$('[href="#london"]').on('click', function() {
		map.setCenter(london);
	});

};


///Local Stores Tabs///
$('#storesTab button').on('click', function (e) {
	e.preventDefault();
	$('#storesTabContent .tab-pane').removeClass('active show');
	const tabID = $(this).attr('href');
	$(tabID).addClass('active show');
});





/*$('[href="#london"]').on('click', initMap(london));
$('[href="#paris"]').on('click', initMap(paris));
$('[href="#ny"]').on('click', initMap(ny));*/