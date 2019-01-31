const SubFactions = require('../models').SubFactions;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, subFactions;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, subFactions] = await to(SubFactions.findAll({where: whereStatement}));
    return res.json(subFactions);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, subFaction;
  let subFactionId = parseInt(req.params.subFactionId)
  res.setHeader('Content-Type', 'application/json');

  [err, subFaction] = await to(SubFactions.findById(subFactionId))
  if (!subFaction) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(subFaction);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, subFaction, data;
    data = req.body;
  
  
    [err, subFaction] = await to(SubFactions.update(data, {
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
  
    return res.json(subFaction);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, subFaction, subFactionInfo;

    subFactionInfo = req.body;

    [err, subFaction] = await to(SubFactions.create(subFactionInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, subFaction] = await to(subFaction.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(subFaction);
  }
  module.exports.create = create;