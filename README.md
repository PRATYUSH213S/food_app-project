<img width="402" height="262" alt="image" src="https://github.com/user-attachments/assets/ca0d05f1-f331-491b-867a-a62751248c7f" /># Food-delivery-App Project

A full-stack food delivery application built with a monorepo structure:

## Project Structure

```
/ (root)
├── backend   # Node.js/Express REST API and server-side code
└── frontend  # ReactJS web app (client)
```

---

## Key Features

- 🚚 **Realtime Map Live Tracking** (Google Maps + Socket.io)
- ✅ **Google Authentication** (Google One Tap Login)
- 💳 **Razorpay Payment Gateway Integration**
- 🔑 **Password Reset with Email OTP**
- 🛒 **Cart, Checkout & Order History**
- User authentication & roles
- Shop & item management
- Order placement & real-time tracking
- Delivery assignment to delivery boys
- Dashboard for users and owners
- Modern responsive UI
## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/PRATYUSH213S/food-delivery-web-application.git
cd food-delivery-web-application
```

### 2. Install dependencies
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Set up environment variables
- Create `.env` files in `backend/` and `frontend/` as required by your project.

### 4. Run the apps
#### Start Backend API
```bash
cd backend
npm start
```
#### Start Frontend React App
```bash
cd ../frontend
npm run dev
```

---

## Technologies
- **Backend:** Node.js, Express, MongoDB, JWT, Socket.io
- **Frontend:** React, Redux, Vite

---

## License
This project is licensed for educational/personal use.

---


_Clone, run, hack, and enjoy!_
