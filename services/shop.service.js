const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.getAll = shop => {
    return Shop.find();
}

module.exports.getById = (updateId) => {
    return Shop.findById(updateId);
};

module.exports.updateShopData = (updateId, updateField, validators) => {
    return Shop.findOneAndUpdate(updateId, updateField, validators);
};

module.exports.deleteById = (deleteId) => {
    return Shop.findOneAndDelete(deleteId);
};