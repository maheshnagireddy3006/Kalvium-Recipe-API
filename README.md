# Recipe Sharing API

This project is a simple backend for managing recipes.

## How to run locally

bash
npm install
npm start


The server runs on http://localhost:3000

## Endpoints

### Add Recipe
- *POST* /api/recipes
- Body (JSON):
json
{
  "title": "Pasta",
  "ingredients": ["noodles", "sauce"],
  "instructions": "Boil noodles and add sauce",
  "cookTime": "15m"
}

- Returns the created recipe.

### Get All Recipes
- *GET* /api/recipes
- Returns all stored recipes.

## Deployment

- Deployed on Render with Node.js
- Server listens on process.env.PORT || 3000
