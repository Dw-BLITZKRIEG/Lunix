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

function getRandomDelay2() {
  const min = 1 * 30 * 1000;  // 1 minute
  const max = 2 * 30 * 1000; // 12 minutes
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






function jumpscaresfx1() {
 const audio = document.getElementById("screamaudio");
audio.play()

  // After running, schedule the next run with a new random delay
  const nextDelay = getRandomDelay();
  console.log(`${Math.floor(nextDelay / 60000)} minute(s) until next run...\n`);

  setTimeout(jumpscaresfx1, nextDelay);
}


const initialDelay = getRandomDelay();
console.log(`error 345.run`);

setTimeout(jumpscaresfx1, initialDelay);








// error msg (lmao)

function jumpscaresfx2() {

 const audio = document.getElementById("screamaudio");
 const jumpscare = document.getElementById("jumpscare2");


   jumpscare.style.display = "flex";
    audio.play();

    
    setTimeout(() => {
      jumpscare.style.display = "none";
      audio.play();
    }, 12000);

  // After running, schedule the next run with a new random delay
  const nextDelay = getRandomDelay2();
  console.log(`${Math.floor(nextDelay / 60000)} minute(s) until next run...\n`);

  setTimeout(jumpscaresfx2, nextDelay);
}
const initialDelay2 = getRandomDelay2();

console.log(`error 345/error.run`);

setTimeout(jumpscaresfx2, initialDelay2);