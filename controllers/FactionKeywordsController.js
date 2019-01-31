const FKeywords = require('../models').FKeywords;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, fKeywords;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }


    [err, fKeywords] = await to(FKeywords.findAll({where: whereStatement}));
    return res.json(fKeywords);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, fKeyword;
  let fKeywordId = parseInt(req.params.fKeywordId)
  res.setHeader('Content-Type', 'application/json');

  [err, fKeyword] = await to(FKeywords.findById(fKeywordId))
  if (!fKeyword) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(fKeyword);
}
  module.exports.get = get;
  
  
  const update = async function (req, res) {
    let err, fKeyword, data;
    data = req.body;
  
  
    [err, fKeyword] = await to(FKeywords.update(data, {
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
  
    return res.json(fKeyword);
  }
  module.exports.update = update;


  
  const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, fKeyword, fKeywordInfo;

    fKeywordInfo = req.body;

    [err, fKeyword] = await to(FKeywords.create(fKeywordInfo));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422; // unprocessable entity
      return res.json({ success: false, error: err });
    }
    [err, fKeyword] = await to(fKeyword.save());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
  
    }
    res.statusCode = 201;
    return res.json(fKeyword);
  }
  module.exports.create = create;