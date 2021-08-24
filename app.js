var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var etudiantRouter = require('./routes/etudiants');
var conventionsRouter = require('./routes/conventions');
var attestationsRouter = require('./routes/attestations');

var app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Api',
      version: '1.0.0'
    }
  },
  apis: ['app.js']
}

const swaggerDoc = swaggerJsdoc(swaggerOptions)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * @swagger
 * /etudiant/list:
 *  get:
 *    description: Get all Students
 *    responses:
 *      200:
 *        description: success
 *  
 * /etudiant/etudiant:
 *  get:
 *    description: Get one student
 *    parameters:
 *    - name: idEtudiant
 *    in: path
 *    required: true
 *    type: string
 *  responses:
 *      200:
 *        description: success
 * 
 * /conventions/list:
 *  get:
 *    description: Get all conventions
 *    responses:
 *      200:
 *        description: success
 * 
 * /attestations/list:
 *  get:
 *    description: Get all attestations
 *    responses:
 *      200:
 *        description: success
*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/etudiant', etudiantRouter);
app.use('/conventions', conventionsRouter);
app.use('/attestations', attestationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
