const AIService = require('./AIService');
const { API_KEY, MODEL, TEMPERATURE, TOP_P } = require('../config/config');
const { Mistral } = require('mistralai');

class MistralService extends AIService {
    constructor() {
        super();
        if (!API_KEY) {
            throw new Error("MISTRAL_API_KEY is missing in environment variables.");
        }
        this.client = new Mistral(API_KEY);
    }

    async evaluateStartupIdea(idea) {
        const parameters = [
            "market demand", "competition", "feasibility", "innovation", "scalability",
            "revenue model", "target audience", "technical requirements", "regulatory environment",
            "team expertise"
        ];

        const prompt = `Evaluate the following startup idea based on the parameters: ${parameters.join(', ')}\n\nIdea: ${idea}`;

        try {
            const response = await this.client.fim.complete({
                model: MODEL,
                prompt,
                suffix: "",
                temperature: TEMPERATURE,
                top_p: TOP_P
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error in AI Evaluation:", error.message);
            throw new Error("AI Evaluation failed.");
        }
    }
}

module.exports = MistralService;
