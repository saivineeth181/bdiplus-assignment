
# Task Management System


## Technologies Used

- **Backend**: FastAPI
- **Frontend**: ReactJS with Bootstrap for UI
- **Database**: SQLite

---

## Setup Instructions

### Prerequisites

1. **Python 3.8+** installed on your system.
2. **Node.js and npm** installed for the React frontend.
3. **FastAPI and required Python packages** installed in a virtual environment.

---

### Backend Setup (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/saivineeth181/bdiplus-assignment.git
   cd bdiplus-assignment/backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. Run the backend server:
   ```bash
   uvicorn app.main:app
   ```

The backend will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

### Frontend Setup (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## Run Instructions

1. Ensure both backend and frontend servers are running:
   - Backend: [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - Frontend: [http://localhost:3000](http://localhost:3000)

2. Open the frontend in your browser at [http://localhost:3000](http://localhost:3000).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
