const Wargears = require('../models').Wargears;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, wargears;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, wargears] = await to(Wargears.findAll({where: whereStatement}));
    return res.json(wargears);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, wargear;
  let wargearId = parseInt(req.params.wargearId)
  res.setHeader('Content-Type', 'application/json');

  [err, wargear] = await to(Wargears.findById(wargearId))
  if (!wargear) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(wargear);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, wargear, data;
    data = req.body;
  
  
    [err, wargear] = await to(Wargears.update(data, {
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
  
    return res.json(wargear);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, wargear, wargearInfo;

    wargearInfo = req.body;

    [err, wargear] = await to(Wargears.create(wargearInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, wargear] = await to(wargear.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(wargear);
  }
  module.exports.create = create;