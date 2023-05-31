# Blog Template
An blog template made with Nextjs + Strapi.

# Run instructions
Go to backend folder: `cd backend`

Copy .env.example data into a .env.local file `cp .env.example .env`

Generate Random Secrets for each Keys/Secret with the string 'tobemodified': https://www.md5hashgenerator.com/

Create a admin user, generate an API Token in settings > API Tokens. Copy the token and

Go back to the root folder

Copy .env.example data into a .env.local file `cp .env.example .env.local`

Copy the API Token and paste in the .env.local: NEXT_PUBLIC_STRAPI_API_URL

Go to the backend folder and run the strapi API: `yarn start` or `npm run start`

Go back to the root folder and run the next.js server: `yarn dev` or `npm run dev`

# Project screeshots

## Home

### Light Theme

### Desktop
![Home](https://github.com/VictorAugDB/blog-template/blob/main/project-images/screencapture-localhost-3000-2023-05-31-07_48_08.png)

### Mobile
![Home Mobile](https://github.com/VictorAugDB/blog-template/blob/main/project-images/screencapture-localhost-3000-2023-05-31-07_49_46.png)

### Dark
![Home Dark](https://github.com/VictorAugDB/blog-template/blob/main/project-images/screencapture-localhost-3000-2023-05-31-07_52_24.png)

## Post

### Desktop
![Post](https://github.com/VictorAugDB/blog-template/blob/main/project-images/screencapture-localhost-3000-articles-the-internet-s-own-boy-2023-05-31-07_50_44.png)

### Mobile
![Post Mobile](https://github.com/VictorAugDB/blog-template/blob/main/project-images/screencapture-localhost-3000-articles-the-internet-s-own-boy-2023-05-31-07_51_46.png)
