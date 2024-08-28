FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json before running npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Use environment variable to allow overriding the command (useful for production)
CMD ["npm", "run", "dev"]
