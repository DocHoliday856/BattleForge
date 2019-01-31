const Objectives = require('../models').Objectives;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, objectives;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, objectives] = await to(Objectives.findAll({where: whereStatement}));
    return res.json(objectives);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, objective;
  let objectiveId = parseInt(req.params.objectiveId)
  res.setHeader('Content-Type', 'application/json');

  [err, objective] = await to(Objectives.findById(objectiveId))
  if (!objective) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(objective);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, objective, data;
    data = req.body;
  
  
    [err, objective] = await to(Objectives.update(data, {
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
  
    return res.json(objective);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, objective, objectiveInfo;

    objectiveInfo = req.body;

    [err, objective] = await to(Objectives.create(objectiveInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, objective] = await to(objective.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(objective);
  }
  module.exports.create = create;