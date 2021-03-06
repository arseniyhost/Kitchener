const express = require('express');
const app = express.Router();
const auth = require('../../middleware/auth');

// Recipe Model
const Recipe = require('../../models/Recipe')

app.get(`/`, (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    Recipe.find()
        .then(recipes => {
            if (page || limit) {
                const result = {
                    totalRecipeCount: recipes.length
                }
                result.result = recipes.slice(startIndex, endIndex);
                return res.json(result);
            } else {
                const result = {
                    totalRecipeCount: recipes.length
                }

                result.result = recipes;
                return res.json(result);
            }
        })

});

app.get(`/:id`, (req, res) => {
    const id = req.params.id;
    const details = { 'id': id };
    Recipe.findOne(details, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    })
});

app.post(`/`, (req, res) => {
    let newRecipe = Recipe.create(req.body);
    newRecipe.save().then(recipe => res.json(recipe));
});

app.put(`/:id`, async (req, res) => {
    const { id } = req.params;

    let recipe = await Recipe.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        error: false,
        recipe
    })
})

app.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    // const idRecipe = { 'id': id};
    Recipe.findByIdAndDelete(id)
        .then(recipe => recipe.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = app;