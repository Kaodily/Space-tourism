$(document).ready(function () {
  $(".moon").click(function () {
    $(".Text").text(
      " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’rethere, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    );
      $(".h1").text("moon");
      $('.averageDistance').text('384,400 km')
      $('.estimatedTime').text('3 days')
      $('.destinationImage').attr('src','/starter-code/assets/destination/image-moon.png')
  });
  $(".mars").click(function () {
    $(".Text").text(
      " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    );
      $(".h1").text("mars");
      $('.averageDistance').text('225 mil. km')
    $('.estimatedTime').text(' 9 months')
    $('.destinationImage').attr('src','/starter-code/assets/destination/image-mars.png')
  });
  $(".europa").click(function () {
    $(".Text").text(
      " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    );
      $(".h1").text("europa");
      $('.averageDistance').text('628 mil. km')
    $('.estimatedTime').text('3 years')
    $('.destinationImage').attr('src','/starter-code/assets/destination/image-europa.png')
  });
  $(".titan").click(function () {
    $(".Text").text(
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    );
      $(".h1").text("titan");
      $('.averageDistance').text(' 1.6 bil. km')
    $('.estimatedTime').text('7 years') 
    $('.destinationImage').attr('src','/starter-code/assets/destination/image-titan.png')
  });
  $('.commander').click(function () {
    $('.crewTitle').text('Commander')
    $('.crewName').text('Douglas Hurley')
    $('.crewBio').text('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.')
      $('.crewImage').attr('src','/starter-code/assets/crew/image-douglas-hurley.png')
  })
  $('.missionSpecialist').click(function () {
    $('.crewTitle').text('Mission Specialist')
    $('.crewName').text('Mark Shuttleworth')
    $('.crewBio').text(' Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist.')
      $('.crewImage').attr('src','/starter-code/assets/crew/image-mark-shuttleworth.png')
  })
  $('.pilot').click(function () {
    $('.crewTitle').text('Pilot')
    $('.crewName').text('Victor Glover')
    $('.crewBio').text(' Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a  station systems flight engineer. ')
     $('.crewImage').attr('src','/starter-code/assets/crew/image-victor-glover.png')
  })
  $('.flightEngineer').click(function () {
    $('.crewTitle').text('Flight Engineer')
    $('.crewName').text('Anousheh Ansari')
    $('.crewBio').text('  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ')
     $('.crewImage').attr('src','/starter-code/assets/crew/image-anousheh-ansari.png')
  })
  $('.Number1').click(function () {

    $('.techHeading').text(' Launch vehicle')
    $('.techParagraph').text('  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it\'s quite anawe-inspiring sight on the launch pad!')
      $('.techImage').attr('src','/starter-code/assets/technology/image-launch-vehicle-landscape.jpg')
      $('.techImage1').attr('src','/starter-code/assets/technology/image-launch-vehicle-portrait.jpg')
  })
  $('.Number2').click(function () {
 
    $('.techHeading').text('  Spaceport')
    $('.techParagraph').text('  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,  by analogy to the seaport for ships or airport for aircraft. Based in the  famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. ')
     $('.techImage').attr('src','/starter-code/assets/technology/image-spaceport-landscape.jpg')
     $('.techImage1').attr('src','/starter-code/assets/technology/image-spaceport-portrait.jpg')
  })
  $('.Number3').click(function () {
 
    $('.techHeading').text('  Space capsule')
    $('.techParagraph').text('  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry  capsule to reenter the Earth \'s atmosphere without wings. Our capsule is where  you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.')
     $('.techImage').attr('src','/starter-code/assets/technology/image-space-capsule-landscape.jpg')
     $('.techImage1').attr('src','/starter-code/assets/technology/image-space-capsule-portrait.jpg')
  })
  $('.close').click(function () {
    $('.mobileNav').css('display','none')
  })
  $('.hamburger').click(function () {
    $('.mobileNav').css('display','block')
 
  })
});

