import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

async def generate_todo_suggestion(context: str) -> str:
    try:
        response = await openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that suggests todo items."},
                {"role": "user", "content": f"Suggest a todo item related to: {context}"}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Failed to generate suggestion: {str(e)}" 