<<<<<<< HEAD
FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install --force
COPY . .
CMD ["node", "src/index.js"]
=======
FROM node:alpine
WORKDIR /hospital-system 

COPY package.json .
RUN npm install --force

COPY . .
CMD ["npm", "start"]
>>>>>>> addd86508cb24d55bef9adf660f84498024b92ef
