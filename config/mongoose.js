const mongoose = require('mongoose');





// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
// mongodb+srv://vishwajeet:<password>@thapaapi1.xhpu59j.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://user1:user1@cluster0.gaqmv3e.mongodb.net/Polling?retryWrites=true&w=majority');


const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
