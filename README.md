# 🍳 Kalvium Recipe Sharing API

This is a backend API for managing recipes. Built with **Node.js + Express** and deployed on **Render**.

---

## 🚀 Features
- Add new recipes (`POST /api/recipes`)
- Get all recipes (`GET /api/recipes`)
- Stores recipes in `recipes.json`
- Auto-generates unique IDs
- Defaults difficulty to "medium"

---

## 📌 Endpoints

### 1. Add Recipe
**POST** `/api/recipes`  
Body (JSON):
```json
{
  "title": "Pasta",
  "ingredients": "Noodles, Tomato Sauce, Cheese",
  "instructions": "Boil pasta, add sauce, mix",
  "cookTime": "20 mins"
}
