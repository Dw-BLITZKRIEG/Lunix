/***  setTimeout(() => {
    const jumpscare = document.getElementById("jumpscare");
    const audio = document.getElementById("screamaudio");

    jumpscare.style.display = "flex";
    audio.play();

    // Optional: Nach ein paar Sekunden wieder ausblenden oder zur Startseite zurück
    setTimeout(() => {
      jumpscare.style.display = "none";
      audio.play();
    }, 12000);
  }, 55000); // 5000 = 5 Sekunden



  setTimeout(() => {

    const audio2 = document.getElementById("screamaudio2");


    audio2.play();

  }, 85000); // 5000 = 5 Sekunden */


function getRandomDelay() {
  const min = 1 * 60 * 1000;  // 1 minute
  const max = 12 * 60 * 1000; // 12 minutes
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jumpscaresfx1() {
 const audio = document.getElementById("screamaudio");
audio.play()

  // After running, schedule the next run with a new random delay
  const nextDelay = getRandomDelay();
  console.log(`⏳ Waiting ${Math.floor(nextDelay / 60000)} minute(s) until next run...\n`);

  setTimeout(jumpscaresfx1, nextDelay);
}

// 🟢 Start the first cycle after a random delay
const initialDelay = getRandomDelay();
console.log(`🚀 First task will run in ${Math.floor(initialDelay / 60000)} minute(s)...\n`);

setTimeout(jumpscaresfx1, initialDelay);