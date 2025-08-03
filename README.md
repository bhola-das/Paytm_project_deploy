# 💳 E-Wallet Web Application

A secure and responsive digital wallet web application inspired by platforms like Paytm. This app allows users to sign up, log in, view their wallet balance, and perform transactions such as sending or receiving money.

---

## 🚀 Tech Stack

### Frontend:
- **React.js**
- **JavaScript**
- **Tailwind CSS**
- **Vite** (for blazing-fast dev server and builds)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **JWT** (for secure authentication)
- **bcryptjs** (for password hashing)

---

## 🔐 Key Features

-  User Registration & Login (JWT-based)
-  Encrypted Password Storage
-  Wallet Balance Tracking
-  Send/Receive Money Between Users
-  Transaction History 
-  Responsive UI with Tailwind CSS


---

## 🛠️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/bhola-das/E_wallet_project.git
cd paytm-project

cd backend
npm install
# Add .env with MONGO_URI, JWT_SECRET
npm run dev

cd ../frontend
npm install
npm run dev

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


