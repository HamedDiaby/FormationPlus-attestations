const mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://FormationPlus:s1RFToOX2jnN9KXi@cluster0.fb4qt.mongodb.net/FormationPlus?retryWrites=true&w=majority', 
    options, function(err) {
        console.log('***** DB CONNECT STATUS =====>', err);
    }
);

module.exports = mongoose;