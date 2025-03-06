from evaluator.idea_evaluator import IdeaEvaluator
from evaluator.markdown_generator import MarkdownGenerator

def main():
    idea = input("Enter your startup idea: ")
    evaluator = IdeaEvaluator()
    evaluation = evaluator.evaluate_idea(idea)
    print("Startup Idea Evaluation:\n", evaluation)

    markdown_generator = MarkdownGenerator()
    filename = f"{evaluation['idea'][:30].replace(' ', '_')}.md"  # Truncate and sanitize filename
    markdown_generator.save_as_markdown(evaluation, filename)

if __name__ == "__main__":
    main()

