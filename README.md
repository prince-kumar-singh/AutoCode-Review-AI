# AutoCode-Review-AI

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue)](https://react.dev/)
[![Express](https://img.shields.io/badge/Backend-Express%20JS-green)](https://expressjs.com/)

A full-stack AI-powered code review tool using React (Vite) for the frontend and Node.js (Express) for the backend, leveraging Google Gemini AI for code analysis and feedback.

---

## Features
- Paste or write code in the editor and get instant AI-powered code reviews.
- Reviews are formatted in Markdown with syntax highlighting.
- Modern React frontend with Vite for fast development.

## Example Screenshot
![AutoCode-Review-AI Screenshot](https://via.placeholder.com/900x400?text=AutoCode-Review-AI+Demo+Screenshot)

## Prerequisites
- Node.js (v16 or higher recommended)
- npm
- A Google Gemini API key (for backend AI service)

## Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd AutoCode-Review-AI
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory with the following content:
```
GEMINI_API_KEY=your_google_gemini_api_key_here
```

Start the backend server:
```bash
node server.js
```
The backend will run on [http://localhost:3000](http://localhost:3000)

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

## Usage
- Open the frontend in your browser.
- Enter or paste code in the editor.
- Click the **Review** button to get an AI-generated code review.

## Project Structure
```text
AutoCode-Review-AI/
├── Backend/
│   ├── package.json
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   └── services/
│   │       ├── ai.service.js
│   │       ├── controllers/
│   │       │   └── ai.controller.js
│   │       └── routes/
│   │           └── ai.routes.js
├── Frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── assets/
│   │       └── react.svg
├── README.md
├── .gitignore
└── package-lock.json
```

## Environment Variables
- `GEMINI_API_KEY` (required for backend): Your Google Gemini API key for AI code review.

## Troubleshooting
- **CORS errors:** Ensure both backend and frontend are running on the correct ports.
- **API key errors:** Make sure your `.env` file in `Backend/` is set up with a valid Gemini API key.
- **Port conflicts:** Change the default ports in the code or your environment if needed.