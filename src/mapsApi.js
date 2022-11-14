// Initialize and add the map
function initMap() {
  // The location of Uluru
  const Brasil = { lat: -14.235004, lng: -51.92528 };

  const Estados = [
    ['captador1',{ lat: -22.9068467, lng: -43.1728965 }],
    ['captador2',{ lat: 1.5957682, lng: -60.58206759999999 }],
    ['captador3',{ lat: -5.402580299999999, lng: -36.954107 }],
  ];
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Brasil,
  });
  // The marker, positioned at Uluru
  Estados.forEach((item) => {
    let nome
    let local
    [nome, local] = item
    let caixa = document.createElement('div')
    caixa.innerText = nome

    let marker = new google.maps.Marker({
      position: local,
      map: map,
    });

    let infowindow = new google.maps.InfoWindow({
      content: caixa,
      ariaLabel: "teste",
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });

  });
}
window.initMap = initMap;
