# Use the official Node.js image as the base
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json /
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

EXPOSE 3000

# Set the command to run the app
CMD ["npx", "tsx", "index.ts"]