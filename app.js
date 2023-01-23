var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const route= require('./src/routers/index.routes');
var app = express();
app.use(compression());

app.use(cors());
app.use(morgan(':method :url :status - :response-time ms'));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use('/', route);


app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/archivos')));
app.use(express.static(path.join(__dirname, 'apidoc')));


app.use('/', route);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    error : err.message.toString(),
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500).json({
    error : err.message.toString(),
  });

});

module.exports = app;
