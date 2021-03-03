'use strict';


function handleError (err, req, res, next){
  res.status(500).json({status: 500, msg: 'broke for some reason'});
  next();
}

module.exports = handleError;
