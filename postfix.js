const readline = require('readline');

function evaluatePostfix(expression) {
    const stack = [];
    
    for (const char of expression) {
        if (!isNaN(parseInt(char))) {
            stack.push(parseInt(char));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            
            switch (char) {
                case '+': stack.push(operand1 + operand2); break;
                case '-': stack.push(operand1 - operand2); break;
                case '*': stack.push(operand1 * operand2); break;
                case '/': stack.push(operand1 / operand2); break;
            }
        }
    }
    
    return stack.pop();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter postfix expression: ", (expression) => {
    const result = evaluatePostfix(expression);
    console.log(`Result: ${result}`);
    rl.close();
});
