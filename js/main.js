var map = L.map('map').setView([28.296825, -82.804454], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/gvelasquezneira/cm44kq8p1015e01rw5906d9e9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3ZlbGFzcXVlem5laXJhIiwiYSI6ImNtM3E4MjFuYTBtZzAybG9hN3dsaW5wNGIifQ.fa1AyQBlhc3wA__mrYUF0w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

const counties = [
    {"CountyName":"Alachua County","Latitude":29.6741,"Longitude":-82.3550},
    {"CountyName":"Broward County","Latitude":26.1901,"Longitude":-80.3657},
    {"CountyName":"Duval County","Latitude":30.3322,"Longitude":-81.6557},
    {"CountyName":"Hillsborough County","Latitude":27.9506,"Longitude":-82.4572},
    {"CountyName":"Leon County","Latitude":30.4407,"Longitude":-84.2816},
    {"CountyName":"Miami-Dade County","Latitude":25.7617,"Longitude":-80.1918},
    {"CountyName":"Orange County","Latitude":28.5383,"Longitude":-81.3792},
    {"CountyName":"Pinellas County","Latitude":27.8764,"Longitude":-82.7770},
];


    for (let i = 0; i < counties.length; i++) {
        L.marker([counties[i].Latitude, counties[i].Longitude])
            .bindPopup('<h3>' + counties[i].CountyName + '</h3>')
            .addTo(map);
    }