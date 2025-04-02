# Student Attendance Management System

A full-stack web application for managing student attendance in educational institutions. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication and authorization (Admin/Teacher roles)
- Student management
- Course management
- Attendance tracking and reporting
- Dashboard with statistics
- Responsive design

## Project Structure

The project is divided into two main parts:

- **client**: Frontend React application
- **server**: Backend API with Express and MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

### Clone the repository

```
git clone https://github.com/chaisthra/student.git
cd student
```

### Server Setup

1. Navigate to the server directory:

```
cd server
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file based on `.env.example` and update the values:

```
cp .env.example .env
```

4. Start the server:

```
npm run dev
```

The server will run on http://localhost:5001

### Client Setup

1. Navigate to the client directory:

```
cd client
```

2. Install dependencies:

```
npm install
```

3. Start the client:

```
npm start
```

The client will run on http://localhost:3000

## Note

This repository contains the basic structure of the project. For the full codebase with all features, please contact the repository owner.

## License

This project is licensed under the MIT License.
