A full-stack Employee Management System built using the MERN stack with:

🔐 Authentication (JWT)

👤 Role-based access (Admin/User)

👨‍💼 Employee CRUD with Pagination, Search, Filter & Sorting

🖼️ File Upload (Profile Image)

🧭 Protected Routes (Frontend + Backend)

📁 Folder Structure
Employee-Management-System/
│
├── backend/               # Node.js + Express + MongoDB
│   ├── config/            # DB & JWT config
│   ├── controllers/       # Route controller logic
│   ├── middleware/        # Auth & Role middlewares
│   ├── models/            # Mongoose Schemas
│   ├── routes/            # API endpoints
│   ├── uploads/           # Profile images (multer)
│   ├── server.js          # Backend main entry
│   └── package.json
│
├── frontend/              # React + Context API + Axios
│   ├── public/
│   ├── src/
│   │   ├── components/    # Navbar, Sidebar, Pagination, etc.
│   │   ├── context/       # AuthContext for state
│   │   ├── pages/         # All pages (CRUD)
│   │   ├── routes/        # Protected route setup
│   │   ├── api/axios.js   # API base URL config
│   │   └── App.jsx
│   └── package.json
│
└── README.md

🔧 Tech Stack
Layer	Technology
Frontend	React, Axios, React Router, Context API
Backend	Node.js, Express
Database	MongoDB + Mongoose
Auth	JWT + bcrypt
File Upload	Multer
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/employee-management-mern.git
cd employee-management-mern

2️⃣ Backend Setup (/backend)
cd backend
npm install

Create .env inside /backend
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000

Run backend server
npm run start


Backend runs on: http://localhost:5000

3️⃣ Frontend Setup (/frontend)
cd frontend
npm install

Create .env inside /frontend
VITE_API_URL=http://localhost:5000

Run frontend server
npm run dev


Frontend runs on: http://localhost:3000

🔐 Default Access Role
Role	Permissions
Admin	Add / Edit / Delete / View Employees
User	View only
🧪 API Endpoints
Method	Endpoint	Description	Access
POST	/api/auth/register	Register user	Public
POST	/api/auth/login	Login user	Public
GET	/api/employees	List employees (search / filter / sort / pagination)	Admin/User
POST	/api/employees	Add employee	Admin
PUT	/api/employees/:id	Edit employee	Admin
DELETE	/api/employees/:id	Delete employee	Admin
GET	/api/employees/:id	Employee details	Admin/User

📌 File Upload

Uses multer

Upload route handles: profileImage

Stored under /uploads
