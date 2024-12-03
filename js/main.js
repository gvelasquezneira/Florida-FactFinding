var map = L.map('map').setView([28.296825, -82.804454], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/gvelasquezneira/cm44kq8p1015e01rw5906d9e9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3ZlbGFzcXVlem5laXJhIiwiYSI6ImNtM3E4MjFuYTBtZzAybG9hN3dsaW5wNGIifQ.fa1AyQBlhc3wA__mrYUF0w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);