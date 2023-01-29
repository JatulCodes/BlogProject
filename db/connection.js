const mongoose = require ('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex: true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((err) => console.log({err}));
