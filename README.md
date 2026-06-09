# Dev Team Meeting Scheduler

A full-stack web application for managing meetings across development teams in a tech company.

**Stack:** React + TypeScript | Node.js + Express + Sequelize | MySQL | Docker

---

## Running with Docker (recommended)

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Steps

```bash
docker compose up --build
```

That's it. Three containers will start:

| Container | Description | URL |
|---|---|---|
| `meetings-db-compose` | MySQL database | port 3306 |
| `meetings-backend-compose` | REST API | http://localhost:3010 |
| `meetings-front-compose` | React frontend | http://localhost:6124 |

Open **http://localhost:6124** in your browser.

### Stopping

```bash
docker compose down
```

To also wipe the database volume (full reset):

```bash
docker compose down -v
```

---

## Running locally (without Docker)

### Prerequisites
- Node.js 18+
- MySQL running locally with a database named `meetings`

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on **http://localhost:3000**

Configure `backend/config/default.json` with your MySQL credentials if needed.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on **http://localhost:5173**

---

## Project Structure

```
├── backend/        # Node.js + Express REST API
├── frontend/       # React + Vite app
├── database/       # MySQL schema + seed data (meeting.sql)
└── docker-compose.yaml
```

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/teams` | Get all teams |
| GET | `/meetings/by-team/:teamId` | Get meetings for a team |
| GET | `/meetings/:meetingId` | Get one meeting |
| POST | `/meetings` | Create a meeting |
| PATCH | `/meetings/:meetingId` | Update a meeting |
| DELETE | `/meetings/:meetingId` | Delete a meeting |

---

Built by Oz Domer — John Bryce Full-Stack Development Program
