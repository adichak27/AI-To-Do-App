# 📝 AI-To-Do-App — AI-Powered Todo App

AI-To-Do-App is a modern full-stack todo application that leverages **React**, **GraphQL**, and **OpenAI** to help users manage and generate intelligent todos. The app features a clean UI, fast performance, and several additional enhancements implemented for an optimized user experience.

---

## 🚀 Tech Stack

### **Frontend**
- [Next.js](https://nextjs.org/) with **TypeScript**
- [TailwindCSS](https://tailwindcss.com/) (via `shadcn/ui`)
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL communication
- [React Icons](https://react-icons.github.io/react-icons/) and `lucide-react` for UI
- [Framer Motion](https://www.framer.com/motion/) for animation

### **Backend**
- [FastAPI](https://fastapi.tiangolo.com/) with [Strawberry GraphQL](https://strawberry.rocks/)
- Python 3.11 with [Poetry](https://python-poetry.org/)
- [SQLite](https://www.sqlite.org/index.html) (via SQLAlchemy)
- [OpenAI API](https://platform.openai.com/docs/introduction)
- CORS, Uvicorn for ASGI hosting

---

## ✅ Features

- ✅ Add, complete, and delete todos
- ✅ Todos persist in a relational SQLite database
- ✅ GraphQL API for flexible data interaction
- ✅ AI-generated task suggestions via OpenAI
- ✅ Fully Dockerized setup with isolated frontend and backend
- ✅ Clean UI with modern styling and animation

---

### 🌟 Additional Features

- ✅ **Spinner** displays while waiting for LLM-generated todos
- ✅ **Spinner persists** even if the user refreshes the page
- ✅ **Modern UI polish** using TailwindCSS and ShadCN components
- ✅ **Dockerized deployment** via `docker-compose`

---

## 🛠️ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/AI-To-Do-App.git
cd AI-To-Do-App
```

### 2. **Set Environment Variables**

Populate the provided `env.template` files in both the `frontend` and `backend` directories.

#### `frontend/env.template`

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/graphql
```

#### `backend/env.template`

```env
OPENAI_API_KEY=your_openai_api_key
CORS_ORIGINS=["http://localhost:3000"]
DATABASE_URL=sqlite:///./todo.db
```

Then rename them:

```bash
cp frontend/env.template frontend/.env.local
cp backend/env.template backend/.env
```

### 3. **Run the App Locally with Docker**

```bash
docker compose up --build
```

Once complete, visit:

- 🌐 Frontend: [http://localhost:3000](http://localhost:3000)
- 🔌 Backend GraphQL API: [http://localhost:8000/graphql](http://localhost:8000/graphql)

---

## 📦 Project Structure

```
AI-To-Do-App/
├── frontend/        → Next.js frontend
├── backend/         → FastAPI backend
├── docker-compose.yml
├── README.md
```

---

## 💬 Contact

Maintained by [Your Name].  
Pull requests and suggestions are welcome!
