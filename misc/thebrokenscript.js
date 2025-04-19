  setTimeout(() => {
    const jumpscare = document.getElementById("jumpscare");
    const audio = document.getElementById("screamaudio");

    jumpscare.style.display = "flex";
    audio.play();

    // Optional: Nach ein paar Sekunden wieder ausblenden oder zur Startseite zurück
    setTimeout(() => {
      jumpscare.style.display = "none";
      audio.play();
    }, 12000);
  }, 25000); // 5000 = 5 Sekunden



  setTimeout(() => {

    const audio2 = document.getElementById("screamaudio2");


    audio2.play();

  }, 45000); // 5000 = 5 Sekunden