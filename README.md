# Real-Time Smart Campus Digital Twin

A live virtual campus management platform powered by Spring Boot, React, and real-time technologies.

## Overview

This project is an advanced Object-Oriented Programming (AOOP) academic project designed to act as a "Digital Twin" of a university campus. It tracks and visualizes real-time status for classrooms, buses, parking, cafeteria, events, and emergencies.

The project strictly fulfills all required syllabus topics, explicitly implementing Java Collections (ArrayList, Stack, Queue, Set, Comparable, Comparator), Java File I/O Streams, multithreading, and raw Java Socket programming alongside modern frameworks like Spring Boot and React.

## Technology Stack

- **Backend:** Java 21, Spring Boot 3, Spring Web, Spring Security (JWT), Spring Data JPA, Spring WebSocket
- **Frontend:** React.js, TypeScript, Vite, Tailwind CSS, React Router, Axios
- **Database:** PostgreSQL (via Docker)
- **Real-Time Communication:** 
  - Browser UI updates: Spring WebSocket (STOMP)
  - Device/Mock Sensors (Bus Driver): Raw Java `ServerSocket` and Socket Client

## Architecture

The system uses a layered modular monolith architecture.
1. **Frontend:** React SPA consuming REST APIs and subscribing to STOMP WebSocket topics.
2. **Backend:** Spring Boot exposing REST endpoints.
3. **Data Ingestion:** A standalone raw Java Socket server running on a dedicated port (`9090`) to receive continuous location updates from mock clients (Bus Drivers), validating and persisting them before broadcasting to the frontend via WebSocket.

## Prerequisites
- Java 21+
- Node.js 18+
- Maven
- Docker and Docker Compose

## Local Setup

### 1. Database Setup
```bash
docker-compose up -d
```
This will start a PostgreSQL instance on port `5432` with the database `smart_campus`.

### 2. Backend Setup
```bash
cd backend
mvn spring-boot:run
```
The backend will run on port `8080`. The raw Socket server will run on port `9090`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`.

## Demo Accounts
*(To be populated in Phase 2)*
- student@campus.local / password
- teacher@campus.local / password
- security@campus.local / password
- driver@campus.local / password
- cafeteria@campus.local / password
- admin@campus.local / password

## Course Syllabus Implementation

| Syllabus Topic | Project Implementation |
| :--- | :--- |
| **Spring Boot** | Main backend architecture. |
| **ArrayList** | Available room processing, class schedules, and search logic. |
| **Queue** | Complaint processing based on priority. |
| **Stack** | Admin action history (Undo functionality). |
| **Set** | Unique event registration and unique online user sessions. |
| **Comparable** | `Classroom` sorting by building code and room number. |
| **Comparator** | Custom sorting for classroom capacity, events, and complaints. |
| **FileReader/Writer** | Writing and reading a plain text `campus-activity.log`. |
| **File I/O Streams** | Binary image uploads for Lost & Found items. |
| **Object I/O Streams** | Serialization of `CampusStateSnapshot` for system backups. |
| **Threads (Runnable)** | `BusSimulationTask` and background Notification worker. |
| **Socket Client/Server**| Multi-client raw socket server for bus location updates. |

## Development Phases
- [x] Phase 1: Foundation
- [ ] Phase 2: Authentication
- [ ] Phase 3: Campus Core
- [ ] Phase 4: Classroom and Attendance
- [ ] Phase 5: Collections Modules
- [ ] Phase 6: File I/O
- [ ] Phase 7: Threads and Sockets
- [ ] Phase 8: Web Socket Real-Time Features
- [ ] Phase 9: Operational Modules
- [ ] Phase 10: Analytics and AI
- [ ] Phase 11: Testing and Deployment
