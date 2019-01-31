const Factions = require('../models').Factions;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, factions;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, factions] = await to(Factions.findAll({where: whereStatement}));
    return res.json(factions);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, faction;
  let factionId = parseInt(req.params.factionId)
  res.setHeader('Content-Type', 'application/json');

  [err, faction] = await to(Factions.findById(factionId))
  if (!faction) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(faction);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, faction, data;
    data = req.body;
  
  
    [err, faction] = await to(Factions.update(data, {
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
  
    return res.json(faction);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, faction, factionInfo;

  factionInfo = req.body;
    [err, faction] = await to(Factions.create(factionInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, faction] = await to(faction.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(faction);
  }
  module.exports.create = create;