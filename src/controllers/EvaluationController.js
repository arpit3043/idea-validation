const MistralService = require('../services/MistralService');
const FileHandler = require('../utils/FileHandler');

class EvaluationController {
    constructor() {
        this.aiService = new MistralService();
    }

    async evaluateIdea(idea) {
        if (!idea) {
            throw new Error("Idea cannot be empty.");
        }

        console.log("Evaluating startup idea...");
        const evaluation = await this.aiService.evaluateStartupIdea(idea);
        
        const evaluationResult = {
            idea,
            evaluation
        };

        FileHandler.saveMarkdown(evaluationResult);
        return evaluationResult;
    }
}

module.exports = EvaluationController;
