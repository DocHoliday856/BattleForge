const Abilities = require('../models').Abilities;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, abilities;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, abilities] = await to(Abilities.findAll({where: whereStatement}));
    return res.json(abilities);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, ability;
  let abilityId = parseInt(req.params.abilityId)
  res.setHeader('Content-Type', 'application/json');

  [err, ability] = await to(Abilities.findById(abilityId))
  if (!ability) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(ability);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, ability, data;
    data = req.body;
  
  
    [err, ability] = await to(Abilities.update(data, {
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
  
    return res.json(ability);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, ability, abilityInfo;

    abilityInfo = req.body;

    [err, ability] = await to(Abilities.create(abilityInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, ability] = await to(ability.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(ability);
  }
  module.exports.create = create;