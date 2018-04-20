function myMap()
{
  myCenter=new google.maps.LatLng(1.4010541, 103.9153112);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

function downloadResume() {
  var url = 'https://www.dropbox.com/s/h9r8dcnb64vc26g/TwinkleCapote_Resume_Revised.docx?dl=0';
  window.open(url, '_blank');
}

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

// Social Media
function openFacebook() {
    window.open('https://www.facebook.com/twinklemc91', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/twinklemc91', '_blank')
}

function openLinkedin() {
    window.open('https://www.linkedin.com/in/twinkle-capote-97191462/', '_blank')
}