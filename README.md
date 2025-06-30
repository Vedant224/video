# 📽️ YouTube Backend Clone

This is the backend implementation of a YouTube-like video sharing platform, built using **Node.js**, **Express**, and **MongoDB**. It provides a robust and scalable API for handling user authentication, video uploads, media storage, and user/video management.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Sign up / Login with hashed passwords using `bcrypt`
  - JWT-based authentication for route protection

- 📦 **Video Upload & Storage**
  - File uploads via `multer`
  - Media stored securely using Cloudinary

- 🧾 **Video Metadata Management**
  - Save and retrieve details like title, description, tags, etc.

- 👤 **User Management**
  - User profile and video tracking

- 📂 **RESTful APIs**
  - Clean and modular MVC architecture with well-defined routes

- 🛡️ **Middleware**
  - Auth middleware, error handling, and request logging

---

## 🧰 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT** (JSON Web Tokens)  
- **Multer**  
- **Cloudinary**  
- **Nodemon** (for development)

---
## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Vedant224/video.git
cd video
npm install
```
### 2. Set Up Environment Variables
Create a .env file in the root directory and add the following:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
✅ Make sure your .env file is listed in .gitignore.

### 3. Run the Server
```bash
npm start
 or
npm run dev
```

