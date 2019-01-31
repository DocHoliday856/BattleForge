const Models = require('../models').Models;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, models;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, models] = await to(Models.findAll({where: whereStatement}));
    return res.json(models);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, model;
  let modelId = parseInt(req.params.modelId)
  res.setHeader('Content-Type', 'application/json');

  [err, model] = await to(Models.findById(modelId))
  if (!model) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(model);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, model, data;
    data = req.body;
  
  
    [err, model] = await to(Models.update(data, {
      where: {
        id: data.id
      }
    }));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
    }
  
    return res.json(model);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, model, modelInfo;

    modelInfo = req.body;

    [err, model] = await to(Models.create(modelInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, model] = await to(model.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(model);
  }
  module.exports.create = create;