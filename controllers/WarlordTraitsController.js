const Warlords = require('../models').Warlords;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warlords;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, warlords] = await to(Warlords.findAll({where: whereStatement}));
    return res.json(warlords);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, warlord;
  let warlordId = parseInt(req.params.warlordId)
  res.setHeader('Content-Type', 'application/json');

  [err, warlord] = await to(Warlords.findById(warlordId))
  if (!warlord) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(warlord);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, warlord, data;
    data = req.body;
  
  
    [err, warlord] = await to(Warlords.update(data, {
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
  
    return res.json(warlord);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, warlord, warlordInfo;

    warlordInfo = req.body;

    [err, warlord] = await to(Warlords.create(warlordInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, warlord] = await to(warlord.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(warlord);
  }
  module.exports.create = create;