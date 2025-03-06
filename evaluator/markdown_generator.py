import os

class MarkdownGenerator:
    def __init__(self, output_dir="outputs/evaluations"):
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)

    def save_as_markdown(self, evaluation_json, filename):
        md_content = f"# Startup Idea Evaluation\n\n## Idea\n{evaluation_json['idea']}\n\n## Evaluation\n{evaluation_json['evaluation']}"
        filepath = os.path.join(self.output_dir, filename)
        with open(filepath, "w") as md_file:
            md_file.write(md_content)
