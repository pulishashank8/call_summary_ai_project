# 📞 Call Summary AI

Call Summary AI is a web app that allows users to upload `.mp3` voice notes or call recordings, transcribe them using AI, and receive a concise summary. Useful for WhatsApp voice notes, call recordings, or meetings.

---

## 📁 Project Structure

call_summary_ai_project/
├── frontend/               # React frontend  
│   ├── public/  
│   └── src/  
│       ├── App.js  
│       ├── CallSummary.js  
│       └── ...  
├── backend/                # Flask backend  
│   ├── app.py  
│   └── requirements.txt  
└── README.md

---

## ⚙️ Prerequisites

- Node.js (for frontend)
- Python 3.9+ (for backend)
- (Optional) FFmpeg for audio conversion

---

## ⚛️ Frontend Setup (React)

1. Go to the frontend directory:

   cd frontend

2. Install dependencies:

   npm install

3. Start the development server:

   npm start

App runs at http://localhost:3000

---

## 🐍 Backend Setup (Flask)

1. Go to the backend directory:

   cd backend

2. (Optional) Create virtual environment:

   python -m venv venv  
   venv\Scripts\activate  (Windows)  
   source venv/bin/activate  (Mac/Linux)

3. Install requirements:

   pip install -r requirements.txt

4. Run the server:

   python app.py

Backend runs at http://localhost:5000

---

## 🔗 API Call (Frontend → Backend)

fetch("http://localhost:5000/summarize", {
  method: "POST",
  body: formData
});

---

## 📦 Example `requirements.txt`

Flask  
Flask-CORS  
openai  
whisper

---

## ⚠️ Troubleshooting

| Problem                  | Fix |
|--------------------------|------------------------------|
| "Something went wrong"   | Check if backend is running  |
| CORS error               | Use Flask-CORS               |
| File upload fails        | Check `formData` setup       |
| `Module not found`       | Fix import paths or file names |

---

## 🚧 TODO

- [ ] Show transcription before summary  
- [ ] Add loader during processing  
- [ ] Deploy to Vercel + Render  
- [ ] Support other audio formats


