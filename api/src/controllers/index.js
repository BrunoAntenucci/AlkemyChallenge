class ModelCrud {
    constructor(model) {
        this.model = model
    };

    getAllElements = (req, res, next) => {
        return this.model.findAll()
            .then((element) => res.send(element))
            .catch((error) => next(error))
    };
    
    getById = (req, res, next) => {
        const id = req.params.id
        return this.model.findByPk(id)
            .then((element) => res.send(element))
            .catch((error) => next(error))
    };
    
    addElement = (req, res, next) => {
        const element = req.body;
        return this.model.create({
            ...element,
        })
            .catch((error) => next(error))
    };
    
    modifyElement = (req, res, next) => {
        const id = req.params.id;
        const element = req.body;
        return this.model.update(element, {
            where: {
                id,
            }
        })
            .then((updatedElement) => {
                res.send(updatedElement)
            })
    
            .catch((error) => next(error))
    };
    
    deleteElement = (req, res, next) => {
        const id = req.params.id;
        return this.model.destroy({
            where: {
                id,
            }
        })
            .then(() => {
                res.sendStatus(200)
            })
            .catch((error) => next(error))
    };
}

module.exports = ModelCrud;