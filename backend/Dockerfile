FROM node:18-alpine

WORKDIR /app

# Copy package.json first
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 4000

# Run the app
CMD ["node", "index.js"]
