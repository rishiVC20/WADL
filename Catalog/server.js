const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/products", (req, res) => {
    fs.readFile("products.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Failed to read products." });
        }
        try {
            const products = JSON.parse(data); 
            if (!Array.isArray(products)) {
                return res.status(500).json({ error: "Products data is not an array" });
            }
            res.json(products); 
        } catch (error) {
            res.status(500).json({ error: "Invalid JSON format" });
        }
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
