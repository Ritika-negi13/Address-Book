let userSchema=require("../model/userschema");
let users=[
    {
        name: 'ritika',
        email: 'ritika@gmail.com',
        age: '21',
        address: 'Almora,Uttrakhand',
        phoneNumber: '9811461310'
    },
    {
        name: 'Ritika Negi',
        email: 'ritikanegi@gmail.com',
        age: '22',
        address: 'Almora,Uttrakhand',
        phoneNumber: '9310392217'
    }
]

function createUser(name,age,email,address,phoneNumber)
{
    let user={...userSchema};
    user.name=name;
    user.age=age;
    user.email=email;
    user.address=address;
    user.phoneNumber=phoneNumber;
    users.push(user);
}
function retrieveUser(email)
{
    return users.filter(function(val){
        return val.email==email;
    });
}

function updateUser(update,email){
    let i=users.findIndex((user)=>user.email==email);
    console.log(users);
    switch(update){
        case 'name':
            users[i].name=read.question("Enter your New Name: ");
            break;
        case 'age':
            users[i].age=read.question("Enter your New Age: ");
            break;
        case 'email':
            users[i].email=read.question("Enter your New Email: ");
            break;
        case 'address':
            users[i].address=read.question("Enter your New Address: ");
            break;
        case 'phoneNumber': 
            users[i].phoneNumber=read.question("Enter your New Phone Number: ");
            break;
        default:
            console.log("Invalid Value");
    }
}
function deleteUser(email){
   let i=users.findIndex((user)=>user.email==email);
   users.splice(i);
}
module.exports={
    createUser:createUser,
    retrieveUser:retrieveUser,
    updateUser:updateUser,
    deleteUser:deleteUser
};
