var db = require ("../models");

//Method definitions
module.exports = {
    findAll: function(req, res){
        console.log(req.query);

        db.Article
            .find(req.query)
            .sort({date: -1})
            .then(function(dbArticle) {
                res.json(dbArticle);
            });
    },
};