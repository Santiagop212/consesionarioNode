# Use node v20 as the base image
FROM node:20

# Set the working directory in the container
RUN mkdir  /usr/src/app

# Copy package.json and package-lock.json to the working directory
ENV HOST 0.0.0.0

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]

RUN npm install -g nodemon