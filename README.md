# Project Name

This website helps you keep a log of all your contacts

---

## Table of Contents

- [Frontend Deployment (Vercel)](https://dashboard.render.com/web/srv-d1tci73e5dus73degl70/deploys/dep-d1tdq9adbo4c73dgdd80)  
- [Backend Deployment (Render)](https://vercel.com/new/shantels-projects-4d836263/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=contacts-keeper-f9pr2w0sw-shantels-projects-4d836263.vercel.app&projectName=contacts-keeper&s=https%3A%2F%2Fgithub.com%2FShantelKP%2Fcontacts-keeper&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1&flow-id=RuLyNnNrkfmW-R-xC8PCC)  
- [Live URLs](https://contacts-keeper-seven.vercel.app/)  
- [CI/CD Pipeline](#cicd-pipelin)  
- [Monitoring Setup](#monitoring-setup)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- User authentication 
- CRUD for posts
- Responsive UI 

---

## Tech Stack

- Frontend: React, Tailwind CSS, Vite  
- Backend: Node.js, Express  
- Database: MongoDB (Atlas or Render Managed)  
- Deployment: Vercel (Frontend), Render (Backend)  
- Monitoring: Sentry  

---

## Getting Started

### Prerequisites

- Node.js (v16+)  
- npm or pnpm or yarn  
- MongoDB Atlas or Render MongoDB instance  

---

## Environment Variables

Create `.env` files for frontend and backend:

### Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SENTRY_DSN=your_sentry_dsn_url
