const Strategems = require('../models').Strategems;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, strategem;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, strategem] = await to(Strategems.findAll({where: whereStatement}));
    return res.json(strategem);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, strategem;
  let strategemId = parseInt(req.params.strategemId)
  res.setHeader('Content-Type', 'application/json');

  [err, strategem] = await to(Strategems.findById(strategemId))
  if (!strategem) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(strategem);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, strategem, data;
    data = req.body;
  
  
    [err, strategem] = await to(Strategems.update(data, {
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
  
    return res.json(strategem);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, strategem, strategemInfo;

    strategemInfo = req.body;

    [err, strategem] = await to(Strategems.create(strategemInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, strategem] = await to(strategem.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(strategem);
  }
  module.exports.create = create;