var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://admin:Collegien-77090@cluster0.uziie.mongodb.net/Babyccino?retryWrites=true&w=majority',
    options,
    function(err){
        if(err){
                    console.log(`error, failed to connect to the database because --> ${err}`)
    }
    else {
        console.log('*** Database Babyccino connection : Success ***');
      }
    }
)

module.exports = mongoose

