#!/bin/bash

# Exit if any command fails
set -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Set Node.js version (example: 18)
nvm use 22.12.0

# Check Node version
echo "Using Node version: $(node -v)"
# Define project paths
BACKEND_DIR="./eticko-backend"   # Path to your Spring Boot (Gradle) project
FRONTEND_DIR="./" # Path to your React project

# Start Spring Boot Backend using Gradle
echo "🚀 Starting Spring Boot Backend..."
cd "$BACKEND_DIR"
./gradlew build -x test
nohup ./gradlew bootRun > backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Start React Frontend

echo "🚀 Starting React Frontend..."
cd "$FRONTEND_DIR"
npm install
nohup npm run dev > frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Display process IDs
echo "✅ Both applications started successfully!"
echo "🔹 Backend PID: $BACKEND_PID (logs: backend/backend.log)"
echo "🔹 Frontend PID: $FRONTEND_PID (logs: frontend/frontend.log)"

# Stop both services gracefully on CTRL+C
trap "echo '🛑 Stopping services...'; kill $BACKEND_PID $FRONTEND_PID; exit 0" SIGINT SIGTERM

# Keep script running
while true; do
  sleep 1
done

