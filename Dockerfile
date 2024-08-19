# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire React project into the container
COPY . .

# Step 6: Build the React app
#RUN npm run build

# Step 7: Use a lightweight web server like nginx to serve the static files
# FROM nginx:alpine

# # Step 8: Copy the build files from the previous stage to the nginx html directory
# COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the outside world
EXPOSE 3000

# Step 10: Start when the container launches
CMD ["npm", "start"]
