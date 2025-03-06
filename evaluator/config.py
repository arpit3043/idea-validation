import os

# Configuration for the Mistral API
class Config:
    API_KEY = os.getenv("MISTRAL_API_KEY")
    if not API_KEY:
        raise ValueError("Please set the MISTRAL_API_KEY environment variable.")
