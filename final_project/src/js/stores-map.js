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
$('#storesTab [href="#paris"]').on('click', function (e) {
	e.preventDefault();
	$('tab-pane.active.show').tab('hidden')
	$(this).tab('show');
});
$('#storesTab [href="#london"]').on('click', function (e) {
	e.preventDefault();
	$(this).tab('show');
	$(!this).tab('dispose');
});
$('#storesTab [href="#ny"]').on('click', function (e) {
	e.preventDefault();
	$(this).tab('show');
	$(!this).tab('dispose');
});





/*$('[href="#london"]').on('click', initMap(london));
$('[href="#paris"]').on('click', initMap(paris));
$('[href="#ny"]').on('click', initMap(ny));*/