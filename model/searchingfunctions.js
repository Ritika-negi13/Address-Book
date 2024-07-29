let userSchema=require("./userschema.js");

// Function to search by name
function searchByName(name) {
    if (userSchema.name === name) {
        console.log(`Name: ${userSchema.name}`);
        console.log(`Age: ${userSchema.age}`);
        console.log(`Email: ${userSchema.email}`);
        console.log(`Address: ${userSchema.address}`);
        console.log(`Phone Number: ${userSchema.phoneNumber}`);
    }
}

//function to search by age
function searchByAge(age) {
    if (userSchema.age === age) {
        console.log(`Name: ${userSchema.name}`);
        console.log(`Age: ${userSchema.age}`);
        console.log(`Email: ${userSchema.email}`);
        console.log(`Address: ${userSchema.address}`);
        console.log(`Phone Number: ${userSchema.phoneNumber}`);
    }
}

//function to search by email
function searchByEmail(email) {
    if (userSchema.email === email) {
        console.log(`Name: ${userSchema.name}`);
        console.log(`Age: ${userSchema.age}`);
        console.log(`Email: ${userSchema.email}`);
        console.log(`Address: ${userSchema.address}`);
        console.log(`Phone Number: ${userSchema.phoneNumber}`);
    }
}

//function to search by phone number
function searchByPhoneNumber(phoneNumber) {
    if (userSchema.phoneNumber === phoneNumber) {
        console.log(`Name: ${userSchema.name}`);
        console.log(`Age: ${userSchema.age}`);
        console.log(`Email: ${userSchema.email}`);
        console.log(`Address: ${userSchema.address}`);
        console.log(`Phone Number: ${userSchema.phoneNumber}`);
    }
}
