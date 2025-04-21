var express = require("express"); 
const fs = require('fs');
var app = express(); 
var path = require("path"); 
app.get('/',function(req,res){ 
  res.sendFile(path.join(__dirname+'/index.html')); 
  //__dirname : It will resolve to your project folder. 
}); 
app.use(express.static(__dirname + '/'));
app.listen(3000); 
console.log("Server running at Port 3000"); 



// Trust proxy to get real IP from Glitch (Glitch uses proxies)
app.set('trust proxy', true);

// Log IPs on every request
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`New visitor: ${ip}`);

  // Save to a file (in-memory only on Glitch)
  fs.appendFileSync('ip-log.txt', `${new Date().toISOString()} - ${ip}\n`);

  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Glitch! Your IP has been logged.');
});

// Keep Glitch app alive
const listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});