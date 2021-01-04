const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const shop = await shopService.getAll();
        res.send(shop);
    } catch (e) {
        res.status(500).send({ message: "Something went wrong" });
    }
};

module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const singleShop = await shopService.getById(id);
        res.send(singleShop);
    } catch (e) {
        res.status(500).send({ message: "Something went wrong" });
    }
};

module.exports.updateById = async (req, res, next) => {
    const id = req.params.id;
    const updateField = req.body;
    try {
        const shop = await shopService.updateShopData({ _id: id }, updateField, {
            new: true,
            runValidators: true,
        });
        return res.status(200).send(shop);
    } catch (e) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deleteShopData = await shopService.deleteById({ _id: id });
        return res.status(200).send(deleteShopData);
    } catch (e) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};
