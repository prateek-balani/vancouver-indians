# Stage 1: Build the production assets using Node and Vite
FROM node:20 as build

WORKDIR /app

# Copy package files; remove package-lock.json if present to avoid the bug.
COPY package.json .

# Install dependencies while skipping optional dependencies (removed for now cuz npm has a bug related to optional dependencies)
RUN npm install

# Copy the rest of your source code
 COPY . .

RUN npm run build

FROM nginx:stable-alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy my version of it 
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the production build output (assuming it is in "dist")
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 80 (Nginx listens on 80 inside the container)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]