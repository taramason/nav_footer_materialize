

$(document).ready(function(){


  $(".button").click(function(){
    var data2 =
  {
    "status": "000",
    "kiosks": [
      {
        "kiosk_code": "00024415",
        "mpid": "00024415",
        "address": "318-320 Cedar Ave, Pittsburgh, PA 15212 United States",
        "location_name": "Giant Eagle",
        "latitude": 40.4514,
        "longitude": -80.0009,
        "distance_miles": "0.47606814686577087",
        "max_voucher_value": 1000
      },
      {
        "kiosk_code": "00000328",
        "mpid": "00000328",
        "address": "2021 Wharton Ave., Pittsburgh, PA 15203 United States",
        "location_name": "Giant Eagle",
        "latitude": 40.4309,
        "longitude": -79.9774,
        "distance_miles": "1.421931925302614",
        "max_voucher_value": 1000
      },
      {
        "kiosk_code": "00000336",
        "mpid": "00000336",
        "address": "Parkway Center Mall, Pittsburgh, PA 15220 United States",
        "location_name": "Giant Eagle",
        "latitude": 40.4234,
        "longitude": -80.0407,
        "distance_miles": "2.998457570219458",
        "max_voucher_value": 1000
      }
    ]
  }
    var $xhr = $.getJSON('https://reqres.in/api/users');

    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
        // .each here for data
        // $('<p>').text(data.data[0].first_name + " " + data.data[0].last_name).appendTo(".results");  //my test append


        console.log(data.data[0]);
    });
  });




})
