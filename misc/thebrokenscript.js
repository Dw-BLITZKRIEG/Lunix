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

  }, 85000); // 5000 = 5 Sekunden 


module.exports = {
  process
};


function getRandomDelay() {
  const min = 1 * 60 * 1000;  // 1 minute
  const max = 12 * 60 * 1000; // 12 minutes
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDelay2() {
  const min = 3 * 30 * 1000;  // 3 minute
  const max = 15 * 30 * 1000; // 15 minutes
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/





/**function jumpscaresfx1() {
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








// you will become one of us (lore still wip)

function jumpscaresfx2() {

 const audio = document.getElementById("screamaudio3");
 const audio2 = document.getElementById("screamaudio4");
 const jumpscare = document.getElementById("jumpscare2");

 
     audio2.play();

   setTimeout(() => {
   jumpscare.style.display = "flex";
    audio.play();
    }, 5000);
    
    setTimeout(() => {
      jumpscare.style.display = "none";

    }, 9000);

  // After running, schedule the next run with a new random delay
  const nextDelay = getRandomDelay2();
  console.log(`${Math.floor(nextDelay / 60000)} minute(s) until next run...\n`);

  setTimeout(jumpscaresfx2, nextDelay);
}
const initialDelay2 = getRandomDelay2();

console.log(`error 345/error.run`);

setTimeout(jumpscaresfx2, initialDelay2);
*/