# Task Management API – DevOps CI/CD Pipeline Project

## Project Overview

This project is a containerized Task Management API developed using Node.js, Express.js, and MongoDB. The application provides CRUD functionality for managing tasks and demonstrates a complete DevOps CI/CD pipeline implementation using Jenkins, Docker, SonarQube, Jest testing, monitoring metrics, and automated deployment.

The project was developed as part of a DevOps continuous integration and continuous deployment assignment.

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Docker
* Jenkins
* SonarQube
* Jest
* Prometheus Metrics
* GitHub
* JWT Authentication

---

# Features

* REST API implementation
* CRUD operations for task management
* Docker containerization
* Automated Jenkins CI/CD pipeline
* Automated testing using Jest
* Code quality analysis using SonarQube
* Monitoring metrics endpoint
* Health check endpoint
* Automated deployment using Docker

---

# API Endpoints

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| GET    | /health        | Application health check |
| GET    | /metrics       | Monitoring metrics       |

---

# Project Structure

```bash
task-management-api/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── tests/
│   └── server.js
│
├── Dockerfile
├── Jenkinsfile
├── package.json
├── sonar-project.properties
└── README.md
```

---

# CI/CD Pipeline Stages

The Jenkins pipeline automates the software delivery lifecycle through the following stages:

## 1. Checkout Stage

Clones the GitHub repository into the Jenkins workspace.

## 2. Install Dependencies

Installs all Node.js dependencies using npm.

## 3. Test Stage

Executes automated unit tests using Jest.

## 4. Code Quality Analysis

Performs static code analysis using SonarQube.

## 5. Quality Gate

Validates code quality thresholds before deployment.

## 6. Docker Build Stage

Builds the Docker image for the application.

## 7. Security Scan Stage

Configured for Trivy vulnerability scanning.

## 8. Deployment Stage

Deploys the application container automatically.

## 9. Monitoring Stage

Checks application monitoring metrics endpoint.

---

# Jenkins Pipeline

The Jenkins pipeline is implemented using a Jenkinsfile stored in the GitHub repository.

Pipeline Features:

* Automated builds
* Continuous integration
* Automated testing
* Static code analysis
* Docker deployment
* Monitoring validation

---

# Docker Setup

## Build Docker Image

```bash
docker build -t task-api .
```

## Run Docker Container

```bash
docker run -d -p 3000:3000 task-api
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://mongodb:27017/taskdb
JWT_SECRET=mysecretkey
```

---

# Running the Application Locally

## Install Dependencies

```bash
npm install
```

## Start Application

```bash
npm start
```

---

# Running Tests

```bash
npm test
```

---

# SonarQube Analysis

This project uses SonarQube for:

* Code quality analysis
* Code smell detection
* Maintainability checks
* Security vulnerability analysis

---

# Monitoring

The application exposes Prometheus-compatible metrics at:

```bash
http://localhost:3000/metrics
```

Health monitoring endpoint:

```bash
http://localhost:3000/health
```

---

# Screenshots Included in Report

The report includes:

* Jenkins successful pipeline build
* SonarQube dashboard
* Docker container execution
* Postman API testing
* Jenkins stage execution
* Monitoring metrics endpoint
* CRUD API operations

---

# Challenges Faced

Several challenges were encountered during implementation:

* Jenkins container permission issues
* Docker socket access configuration
* SonarQube integration setup
* JWT authentication configuration
* Docker networking between services
* Monitoring endpoint integration

These issues were resolved through Docker privilege configuration, Jenkins reconfiguration, and environment variable management.

---

# Learning Outcomes

This project provided hands-on experience in:

* CI/CD pipeline development
* Docker containerization
* Automated testing
* DevOps workflow automation
* Monitoring and observability
* Static code analysis
* Continuous deployment strategies

---

# Repository

GitHub Repository:

https://github.com/Saipriya753/devops-task-management-api

---

# Author
Saipriya Pyata

