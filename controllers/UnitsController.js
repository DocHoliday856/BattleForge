const Units = require('../models').Units;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, units;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, units] = await to(Units.findAll({where: whereStatement}));
    return res.json(units);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, unit;
  let unitId = parseInt(req.params.unitId)
  res.setHeader('Content-Type', 'application/json');

  [err, unit] = await to(Units.findById(unitId))
  if (!unit) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(unit);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, unit, data;
    data = req.body;
  
  
    [err, unit] = await to(Units.update(data, {
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
  
    return res.json(unit);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, unit, unitInfo;

    unitInfo = req.body;

    [err, unit] = await to(Units.create(unitInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, unit] = await to(unit.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(unit);
  }
  module.exports.create = create;