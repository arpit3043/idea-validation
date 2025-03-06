const fs = require('fs');

class FileHandler {
    static saveMarkdown(evaluation, filename = "evaluation.md") {
        const content = `# Startup Idea Evaluation\n\n## Idea\n${evaluation.idea}\n\n## Evaluation\n${evaluation.evaluation}`;
        fs.writeFileSync(filename, content, "utf8");
        console.log(`Evaluation saved to ${filename}`);
    }
}

module.exports = FileHandler;
