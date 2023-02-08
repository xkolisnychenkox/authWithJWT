const express = require('express'),
      path = require('path'),
      mongoose = require('mongoose'),
      loginRoutes = require('./routes/login'),
      signupRoutes = require('./routes/singup');


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'view');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://dima:1312@cluster0.ekn9fvm.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connection established.'))
    .catch((error) => console.error("MongoDB connection failed:", error.message))

app.use(loginRoutes);
app.use(signupRoutes);

app.get('/', (req, res) => {res.render('home')});
app.get('/smoothies', (req, res) => {res.render('smoothies')});


//Routes
app.use('/', (req, res) => res.render('404'));

app.listen(PORT, () => {console.log(`Server listen port ${PORT}`)})

