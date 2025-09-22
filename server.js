const express = require("express");
const cors = require("cors");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const dataFile = path.join(__dirname, "data", "recipes.json");

app.use(cors());
app.use(express.json());


app.post("/api/recipes", async (req, res) => {
  try {
    let { title, ingredients, instructions, cookTime, difficulty } = req.body;


    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ error: "Title, ingredients, and instructions are required." });
    }


    let recipes = [];
    if (await fs.pathExists(dataFile)) {
      recipes = await fs.readJson(dataFile);
    }


    const newRecipe = {
      id: Date.now().toString(),
      title,
      ingredients,
      instructions,
      cookTime: cookTime || "N/A",
      difficulty: difficulty || "medium"
    };

    recipes.push(newRecipe);

    
    await fs.writeJson(dataFile, recipes, { spaces: 2 });

    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: "Server error while adding recipe" });
  }
});


app.get("/api/recipes", async (req, res) => {
  try {
    if (!(await fs.pathExists(dataFile))) {
      return res.json([]);
    }

    const recipes = await fs.readJson(dataFile);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Could not read recipes file" });
  }
});

app.get("/", (req, res) => {
  res.send("Recipe Sharing API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
