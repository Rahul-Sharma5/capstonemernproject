const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*   useCreateIndex: true, */
    /* useFindAndModify:false */
}).then(() => {
    console.log(`Mongodb Connection successful..`);
}).catch((err) => console.log(`Mongodb Connection Failed ${err}`));



/* mongoose.connect('mongodb+srv://Rahul:Rahul05@cluster0.0h9ed7c.mongodb.net/fullstack?retryWrites=true&w=majority')

mongoose.connection.on('error', err =>{
    console.log('Mongodb Connection Failed');
});

mongoose.connection.on('connected', connected =>{
    console.log('Mongodb Connection successful..');
}); */