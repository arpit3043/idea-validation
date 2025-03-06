const readline = require('readline');
const EvaluationController = require('./controllers/EvaluationController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const controller = new EvaluationController();

rl.question("Enter your startup idea: ", async (idea) => {
    try {
        const evaluation = await controller.evaluateIdea(idea);
        console.log("\nStartup Idea Evaluation:\n", evaluation);
    } catch (error) {
        console.error("Error:", error.message);
    }
    rl.close();
});
