import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-primary text-white p-3">
          <h1>Student Attendance System</h1>
        </header>
        <main className="flex-grow-1">
          <div className="container py-4">
            <div className="card">
              <div className="card-body">
                <h2>Welcome to the Student Attendance System</h2>
                <p>This is a placeholder for the actual application.</p>
                <p>To set up the complete project:</p>
                <ol>
                  <li>Follow the instructions in the README.md file</li>
                  <li>Install all dependencies for both server and client</li>
                  <li>Configure your MongoDB connection</li>
                  <li>Start both the server and client applications</li>
                </ol>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-dark text-white p-3 text-center">
          <p className="mb-0">&copy; 2025 Student Attendance System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 