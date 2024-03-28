import * as promptsync from 'prompt-sync';

const pt = promptsync();

const num1 = parseInt(pt("Enter first number: "));
const num2 = parseInt(pt("Enter second number: "));
const operator = pt("Enter the operator: ")

let ans;
switch(operator){
    case '+':
        ans= num1+num2;
        console.log(ans);
        break;
    
    case '-':
        ans= num1-num2;
        console.log(ans);
        break;
    
    case '*':
        ans= num1*num2;
        console.log(ans);
        break;
    
    case '/':
        ans= num1/num2;
        console.log(ans);
        break;
    
    default:
        console.log("Invalid Operator")
}
