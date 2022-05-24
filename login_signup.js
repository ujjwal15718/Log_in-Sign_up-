const fs = require('fs')
const input = require('readline-sync')

console.log("1. Press 1 for sign_up\n2. Press 2 for Log_in");
const op = input.question('Enter your option: ')
function option() {
    if (op == 1) {
        return sign_up()
    }
    else if (op === 2) {
        return Log_in()       
    }
    else{
        console.log("please input valid input");
        return
    }

    function sign_up() {
        if (fs.existsSync('progress.txt')) {
            let file = fs.readFileSync("progress.txt")
            email = input.question("Enter your E-mail: ");
            if ((email.includes('@')) && (email.includes("gmail.com"))) {
                if (file.includes(email)) {
                    console.log("you have already sign_up, please log_in");
                }
                else {
                    let name = input.question("Enter your name: ");
                    let age = input.question("Enter your age: ")
                    let password = input.question("Enter your password: ")
                    fs.appendFileSync("progress.txt", `[${name} ${email} ${age} ${password}]\n`)
                    console.log("You have sign up successfully...");
                }
            }
            else {
                console.log("your E-mail is invalid, please try again...");
            }

        }
        else {
            fs.writeFileSync("progress.txt", '')
            sign_up();
        }
    }

    function Log_in() {
        let read = fs.readFileSync("progress.txt", "utf8");
        let email = input.question("Enter your E-mail for conforming: ");
        let password = input.question("Enter you PASSWORD for conformation: ");
        if ((read.includes(email)) && (read.includes(password))) {
            console.log("Your Login is Successfully");

        }
        else {
            console.log("Your Password or email may be is wrong, try again ");

        }
    }
    Log_in();
}
option();