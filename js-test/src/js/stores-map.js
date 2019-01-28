var london = {lat: 51.5124729, lng: -0.1420052};
var paris = {lat: 48.8640047, lng: 2.3316908};
var ny = {lat: 40.7683004, lng: -73.9844432};

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: london,
		zoom: 17
	});
	var marker1 = new google.maps.Marker({position: london, map: map});
	var marker2 = new google.maps.Marker({position: paris, map: map});
	var marker3 = new google.maps.Marker({position: ny, map: map});

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
$('#myTab [href="#paris"]').on('click', function (e) {
  e.preventDefault();
  $(this).tab('show');
});
$('#myTab [href="#london"]').on('click', function (e) {
  e.preventDefault();
  $(this).tab('show');
});
$('#myTab [href="#ny"]').on('click', function (e) {
  e.preventDefault();
  $(this).tab('show');
});





/*$('[href="#london"]').on('click', initMap(london));
$('[href="#paris"]').on('click', initMap(paris));
$('[href="#ny"]').on('click', initMap(ny));*/