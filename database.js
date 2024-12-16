//database.js
const mongoose=require('mongoose');

const URI='mongodb+srv://superuser:admin@miclusterapi.xt5ng.mongodb.net/cristian2425?retryWrites=true&w=majority&appName=MiClusterApi';

mongoose.connect(URI)
    .then(db=>console.log('DB is Connected!'))
    .catch(err=>console.error(err));

module.exports=mongoose;