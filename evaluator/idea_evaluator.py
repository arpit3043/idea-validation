from mistralai import Mistral
from evaluator.config import Config

class IdeaEvaluator:
    def __init__(self):
        self.client = Mistral(api_key=Config.API_KEY)
        self.parameters = [
            "market demand",
            "competition",
            "feasibility",
            "innovation",
            "scalability",
            "revenue model",
            "target audience",
            "technical requirements",
            "regulatory environment",
            "team expertise"
        ]

    def evaluate_idea(self, idea):
        prompt = f"Evaluate the following startup idea based on the parameters: {', '.join(self.parameters)}\n\nIdea: {idea}"
        response = self.client.fim.complete(
            model="codestral-latest",
            prompt=prompt,
            suffix="",
            temperature=0,
            top_p=1,
        )
        evaluation = response.choices[0].message.content
        return {"idea": idea, "evaluation": evaluation}
