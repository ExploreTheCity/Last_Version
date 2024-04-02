function initMap() {
    var hotelLocation = { lat: 36.8616, lng: 30.6370 };
     var map = new google.maps.Map(document.getElementById('map'), {
       center: hotelLocation,
       zoom: 14,
     });
     var marker = new google.maps.Marker({
       position: hotelLocation,
       map: map,
       title: '{{ city[1] }}', 
     });
   }