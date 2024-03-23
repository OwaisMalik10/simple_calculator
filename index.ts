#! /usr/bin/env node
 
import chalk from "chalk";

import inquirer from "inquirer";


const answers =await inquirer.prompt([
    {messege:"enter firstNumber",type:"number",name:"firstNumber"},
    {messege:"enter secondNumber",type:"number",name:"secondNumber"},
{
    messege:"Select one of the operators to perform operation",
    type:'list',
    name:"operators",
    choices:["Addition", "Subtraction", "Multiplication", "Division","percentage"],
},
]);


if(answers.operators === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
    else if(answers.operators === "Subtraction"){
        console.log(answers.firstNumber - answers.secondNumber);
   }
   else if(answers.operators === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(answers.operators === "Division"){
    console.log(answers.firstNumber / answers.secondNumber);
}
else{
    console.log("please select valid operators");
    }
    console.log(chalk.yellow .bgRed.bold("THE END!"));
    

