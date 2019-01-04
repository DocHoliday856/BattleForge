const Rules = require('../models').Rules;
const validator = require('validator');

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, rules;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, rules] = await to(Rules.findAll({where: whereStatement}));
    return res.json(rules);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, rule;
  let ruleId = parseInt(req.params.ruleId)
  res.setHeader('Content-Type', 'application/json');

  [err, rule] = await to(Rules.findById(ruleId))
  if (!rule) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(rule);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, rule, data;
    data = req.body;
  
  
    [err, rule] = await to(Rules.update(data, {
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
  
    return res.json(rule);
  }
  module.exports.update = update;
  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, rule, ruleInfo;

  ruleInfo = req.body;
    [err, rule] = await to(Rules.create(ruleInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, rule] = await to(rule.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(rule);
  }
  module.exports.create = create;