// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// // Port
// const port =  4200;
// const cors = require('cors');

// // Mongoose connection with mongodb
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/itemdb')
//     .then(() => { // if all is ok we will be here
//       console.log('Start');
//     })
//     .catch(err => { // if error we will be here
//         console.error('App starting error:', err.stack);
//         process.exit(1);
//     });


// // Required application specific custom router module
// var itemRouter = require('./src/routes/itemRouter');

// // Use middlewares to set view engine and post json data to the server
// app.use(express.static('public'));
// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.use('/items', itemRouter);



// // Routes
// app.get('/', (req, res) => {
//   res.send("Hello");
// })

// app.get('/login', (req, res) => {
//   res.send("Login");
// })

// // Start the server
// app.listen(port, ()=> {
//   console.log(`Running on ${port}`);
// })
const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

