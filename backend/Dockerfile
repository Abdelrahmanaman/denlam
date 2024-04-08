# Use an official Node.js 20.9.0 runtime as a parent image
FROM node:20.9.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to utilize Docker cache
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Rebuild native modules to ensure compatibility with the Docker container's architecture

# Copy the current directory contents into the container at /app
COPY . .

# Make port 1337 available to the world outside this container
EXPOSE 1337

# Run npm start when the container launches
CMD npm run  develop
