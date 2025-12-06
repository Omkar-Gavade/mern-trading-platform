📌 Zerodha Trading Platform – MERN Clone

A full-stack Zerodha (Kite) trading platform clone, built using the MERN stack, featuring real-time BUY/SELL order execution, automated holdings updates, dynamic P&L computation, and a professional trading dashboard UI.

This repository contains:
	•	✔ Backend (Node.js + Express + MongoDB)
	•	✔ Trading Dashboard (React.js)
	•	✔ Landing Page (Zerodha-style)

⸻

🚀 Features

📈 Dynamic Holdings
	•	Auto-updating holdings after BUY/SELL
	•	Current value, investment, P&L, % change
	•	Chart.js vertical bar graph
	•	Net change + Day change color-coded (profit/loss)

🛒 Order Execution (BUY/SELL)
	•	Zerodha-style draggable BUY/SELL modals
	•	Quantity/Price inputs
	•	Validation:
	•	Can’t sell more than owned
	•	Can’t sell non-existing holdings
	•	Auto-refresh holdings on order success

📊 Dashboard Summary
	•	Total investment
	•	Current value
	•	P&L with real-time percentage
	•	Equity margin section

⭐ WatchList
	•	Hover actions (Buy / Sell / Analytics / More)
	•	Live color indicators (up/down)

👤 Profile Dropdown
	•	Smooth animated dropdown
	•	User ID + Logout

🧾 Orders Page
	•	Shows executed and placed orders

⸻

🛠 Tech Stack

Frontend:
	•	React.js
	•	React Router
	•	Chart.js
	•	Axios
	•	Material UI
	•	Custom CSS

Backend:
	•	Node.js
	•	Express.js
	•	MongoDB (Mongoose)
	•	dotenv

Database:
	•	MongoDB Atlas

⸻

📁 Folder Structure

Zerodha/
│
├── backend/
│   ├── index.js
│   ├── models/
│   ├── schemas/
│   └── package.json
│
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── index.js
│   │   └── index.css
│   └── public/
│
├── frontend/
│   ├── public/
│   ├── src/landing_page/
│   └── package.json
│
└── README.md


⸻

⚙️ Installation & Setup

1️⃣ Clone repository

git clone https://github.com/Omkar-Gavade/mern-trading-platform.git
cd mern-trading-platform


⸻

🔧 Backend Setup

cd backend
npm install

Create a .env file:

MONGO_URL=your_mongo_connection_string
PORT=3002

Start backend:

npm start


⸻

🎨 Dashboard Setup

cd dashboard
npm install
npm start

Runs on:

👉 http://localhost:3000

⸻

🌐 Landing Page Setup (Optional)

cd frontend
npm install
npm start

Runs on:

👉 http://localhost:5173 or http://localhost:3001

⸻

🔌 API Endpoints

1️⃣ Get Holdings

GET /holdings

2️⃣ Get Orders

GET /orders

3️⃣ Create Order (BUY/SELL)

POST /newOrder

Sample Request:

{
  "name": "INFY",
  "qty": 2,
  "price": 1550.50,
  "mode": "BUY"
}


⸻

📷 Screenshots (Add your images later)

assets/dashboard.png
assets/holdings.png
assets/order-window.png
assets/watchlist.png
assets/graph.png


⸻

⭐ Future Enhancements
	•	Live market price API integration
	•	WebSocket real-time updates
	•	CO, BO, SL-M, SL order types
	•	Portfolio analytics
	•	Dark mode

⸻

🙌 Author

👤 Omkar Gavade
