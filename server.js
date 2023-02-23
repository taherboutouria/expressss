const express = require('express');
const app = express();

// Custom middleware to restrict access to website outside of working hours
const restrictAccess = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour <= 17) {
    // It's a weekday between 9am and 5pm, so continue with the request
    next();
  } else {
    // It's outside of working hours, so send a 403 Forbidden response
    res.status(403).send('Access denied outside of working hours');
  }
};
app.use(restrictAccess)
// Routes for the three pages
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/routes/home.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname+ '/routes/services.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+ '/routes/contact.html');
});

app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname +'/routes/style.css')
})
app.get('/Taher_home_page_image_90s_designe_3d_9a5819ff-1dbf-47a3-92ba-bafc14a77243.png' ,(req, res)=>{
  res.sendFile(__dirname + '/Taher_home_page_image_90s_designe_3d_9a5819ff-1dbf-47a3-92ba-bafc14a77243.png')
})
app.get('/masdam_Modern_perpetual_motion_machine_future_3b509c77-0202-46f2-880c-b7efb2d902d4.png' ,(req, res)=>{
  res.sendFile(__dirname +'/masdam_Modern_perpetual_motion_machine_future_3b509c77-0202-46f2-880c-b7efb2d902d4.png')
})
app.get('/Taher_contact_page_90s_designe_3d_art_0322b666-24b2-4054-93e2-4322e94db6b8.png' ,(req, res)=>{
  res.sendFile(__dirname +'/Taher_contact_page_90s_designe_3d_art_0322b666-24b2-4054-93e2-4322e94db6b8.png')
})

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
