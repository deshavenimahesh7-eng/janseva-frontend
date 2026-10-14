# Janseva Frontend (React + CSS, without Vite)

This frontend uses React, CSS, Webpack, and Babel. The backend remains the separate Spring Boot + MySQL project in `../janseva-backend`.

## Requirements
- Node.js 18.12 or newer
- npm

## Install dependencies
Open a terminal in this folder and run:

```powershell
npm install
```

## Run the frontend
```powershell
npm run dev
```
Then open http://localhost:5173.

## Build for production
```powershell
npm run build
```
Webpack generates the browser entry document automatically in `dist/`; no HTML source file is maintained in the project. The generated `dist/` folder is build output and can be recreated at any time.

## Backend API address
The default API address is `http://localhost:8080/api`. To override it in PowerShell before starting/building, set `$env:API_URL="http://localhost:8080/api"`.

## Backend
Start Spring Boot separately from `../janseva-backend` using `mvn spring-boot:run`. Configure MySQL credentials in the backend's `src/main/resources/application.properties` before starting it.
