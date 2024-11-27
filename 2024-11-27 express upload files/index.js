import express from 'express';
import root from './lib/dirname.js';
import path from 'path';
import multer from 'multer';
const app = express();

// staticFilePath is the path that navigates to public folder from our project
const staticFilePath = path.join(root, 'public');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype === 'image/jpeg') {
      cb(null, path.join(staticFilePath, 'uploads'));
    } else {
      cb(null, path.join(root, 'uploadsss'));
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const uploadMw = multer({ storage });

// const uploadMw = multer({ dest: path.join(staticFilePath, 'uploads') });

// app.use('/public', express.static(staticFilePath));
app.post('/profile', uploadMw.single('profiline'), (req, res) => {
  console.log(req.file);
  res.redirect('/');
});

const isLoggedIn = true;
app.get('/', (req, res) => {
  //Patikrinimas ar naudotojas yra prisijunges
  if (isLoggedIn) res.sendFile(path.join(staticFilePath, 'index.html'));
  else res.sendFile(path.join(staticFilePath, 'login.html'));
});

app.listen(8585, () => {
  console.log('Server connect on http://localhost:8585');
});

console.log(root);
