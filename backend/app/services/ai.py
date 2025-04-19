import os
from dotenv import load_dotenv
from openai import AsyncOpenAI
load_dotenv()

client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))


async def generate_todo_suggestion(context: str) -> str:
    try:
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system","content": "You are a helpful assistant that only responds with a short, actionable todo item. Do not explain it or add extra text."},
                {"role": "user","content": f"Based on the following todos, suggest one more short todo:\n\n{context}"}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Failed to generate suggestion: {str(e)}" 