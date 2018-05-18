var map;
//function call to the google maps api
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(37.228943, -80.412042),
    mapTypeId: 'roadmap'
  });
  //declaring array of hashes containing the coordinates for tour locations, as well as their order letter
  var features = [
    {
      position: new google.maps.LatLng(37.22743145, -80.41319839),
      label: 'Start'
    }, {
      position: new google.maps.LatLng(37.22739995, -80.41291502),
      label: 'A'
    }, {
      position: new google.maps.LatLng(37.22716423, -80.41267197),
      label: 'B'
    }, {
      position: new google.maps.LatLng(37.22695313, -80.41179547),
      label: 'C'
    }, {
      position: new google.maps.LatLng(37.22842733, -80.41286654),
      label: 'D-1'
    }, {
      position: new google.maps.LatLng(37.2287791, -80.41318796),
      label: 'D'
    }, {
      position: new google.maps.LatLng(37.22925958, -80.4123673),
      label: 'E'
    }, {
      position: new google.maps.LatLng(37.2288403, -80.41123121),
      label: 'F'
    }, {
      position: new google.maps.LatLng(37.22870863, -80.41041367),
      label: 'F-1'
    }, {
      position: new google.maps.LatLng(37.22956711, -80.40992977),
      label: 'G'
    }, {
      position: new google.maps.LatLng(37.2290798, -80.40937524),
      label: 'H'
    }, {
      position: new google.maps.LatLng(37.2287078, -80.40969664),
      label: 'I'
    }, {
      position: new google.maps.LatLng(37.23031953, -80.41045674),
      label: 'J'
    }, {
      position: new google.maps.LatLng(37.23034635, -80.41076776),
      label: 'K'
    }, {
      position: new google.maps.LatLng(37.23061877, -80.41097428),
      label: 'L'
    }, {
      position: new google.maps.LatLng(37.23096227, -80.41143867),
      label: 'M'
    }, {
      position: new google.maps.LatLng(37.23100398, -80.41169023),
      label: 'N'
    }, {
      position: new google.maps.LatLng(37.23012281, -80.41194347),
      label: 'O'
    }, {
      position: new google.maps.LatLng(37.23079578, -80.41264093),
      label: 'P'
    }, {
      position: new google.maps.LatLng(37.23111093, -80.41298585),
      label: 'Q'
    }, {
      position: new google.maps.LatLng(37.23112708, -80.41321825),
      label: 'R'
    }, {
      position: new google.maps.LatLng(37.23063595, -80.41393186),
      label: 'S'
    }, {
      position: new google.maps.LatLng(37.23056476, -80.41368329),
      label: 'T'
    }, {
      position: new google.maps.LatLng(37.22985792, -80.41294791),
      label: 'U'
    }, {
      position: new google.maps.LatLng(37.22955705, -80.41339462),
      label: 'V'
    }, {
      position: new google.maps.LatLng(37.22968457, -80.41423473),
      label: 'W'
    }, {
      position: new google.maps.LatLng(37.229369, -80.415716),
      label: 'X'
    }, {
      position: new google.maps.LatLng(37.227936, -80.414357),
      label: 'Y'
    }, {
      position: new google.maps.LatLng(37.22766609, -80.41404681),
      label: 'Z'
    }, {
      position: new google.maps.LatLng(37.22787539, -80.41368364),
      label: 'End'
    }
  ];
  //iterating through array to map out the markers on the google maps pane
  features.forEach((feature) => {
    var marker = new google.maps.Marker({
      position: feature.position,
      label: feature.label,
      map: map
    });
  });
}
