let read=require("./node_modules/readline-sync");
let user=require("./service/service.js")
console.log("!! WELCOME !!");
let flag=true;
while(flag==true)
{
    console.log("1. To add user");
    console.log("2. To search user");
    console.log("3. To modify any value in existing user");
    console.log("4. To delete user");
    let i=read.question("enter your choice : ");
    switch(i){
        case '1':{
            //adding new user 
                let name=read.question("Enter your Name: ");
                let age=read.question("Enter your Age: ");
                let email=read.question("Enter your Email: ");
                let address=read.question("Enter your Address: ");
                let phoneNumber=read.question("Enter your Phone Number: ");
                user.createUser(name,age,email,address,phoneNumber);
                break;
            }
        case '2':{
            //retrieving user value using email
                email=read.question("Enter your user's Email to retrieve data : ");
                console.log(user.retrieveUser(email));
                read.question();
                break;
            }
        case '3':{
            //updating value in user
                let update = read.question("what do you want to update:");
                email=read.question("enter email of user :");
                user.updateUser(update,email);
                break;
        }
        case '4':{
            //deleting user 
                email=read.question("enter email of user to delete:");
                user.deleteUser(email);
                break;
            }
            
        default:{
            //to break thhe flow of switch
                console.log("Invalid value");
                flag=false;
                break;
            }
    }
   
} 


