const userSchema = new Schema({
   name: {
     type: String,
     required: true,
   },
   email: {
     type: String,
     required: true,
   },
   NID: {
     type: String,
     required: true,
   },
   address: {
     type: String,
     required: true,
   },
   password: {
     type: String, // Add password field
     required: true,
   },
 });
 