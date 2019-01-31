const Keywords = require('../models').Keywords;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, keywords;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, keywords] = await to(Keywords.findAll({where: whereStatement}));
    return res.json(keywords);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, keyword;
  let keywordId = parseInt(req.params.keywordId)
  res.setHeader('Content-Type', 'application/json');

  [err, keyword] = await to(Keywords.findById(keywordId))
  if (!keyword) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(keyword);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, keyword, data;
    data = req.body;
  
  
    [err, keyword] = await to(Keywords.update(data, {
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
  
    return res.json(keyword);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, keyword, keywordInfo;

    keywordInfo = req.body;

    [err, keyword] = await to(Keywords.create(keywordInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, keyword] = await to(keyword.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(keyword);
  }
  module.exports.create = create;