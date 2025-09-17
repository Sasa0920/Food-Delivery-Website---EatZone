# ---------- Build Stage ----------
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json & package-lock.json first to leverage caching
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine AS production

# Copy build artifacts from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose default nginx port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
