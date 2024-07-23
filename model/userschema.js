const userSchema = {
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    address: {
        street:String ,
        city: String,
        state: String,
        country: String
    },
    phoneNumber: ''
};

module.exports = userSchema;

