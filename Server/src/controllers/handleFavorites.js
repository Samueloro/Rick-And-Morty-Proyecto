let myFavorites = [];

function postFav(req, res) {
    const character = req.body;
    myFavorites.push(character)
    res.json(myFavorites)
};

function deleteFav(req, res) {
    const id = req.params.id;
    myFavorites = myFavorites.filter(character => character.id != id)
    res.json(myFavorites)
};

module.exports = { postFav, deleteFav };
