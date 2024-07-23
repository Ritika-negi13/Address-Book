// user schema  defined
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
    phoneNumber: String
};

module.exports = userSchema;

