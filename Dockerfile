# Use the official node image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files into the container
COPY . .

# Define the command to run when the container starts
CMD ["npm", "run", "ai"]
