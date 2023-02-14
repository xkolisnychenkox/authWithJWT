const express = require('express'),
      path = require('path'),
      mongoose = require('mongoose'),
      cookieParser = require('cookie-parser'),
      signupRoutes = require('./routes/singup'),
      authMiddleware = require('./middleware/authMiddleware');


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', 'view');


mongoose.set('strictQuery', true);
mongoose.connect('connection string')
    .then(() => console.log('MongoDB connection established.'))
    .catch((error) => console.error("MongoDB connection failed:", error.message))

app.use(signupRoutes);

app.get('/', (req, res) => {res.render('home')});
app.get('/smoothies', authMiddleware.requireAuth, (req, res) => {res.render('smoothies')});

app.use('/', (req, res) => res.render('404'));
app.listen(PORT, () => {console.log(`Server listen port ${PORT}`)})

