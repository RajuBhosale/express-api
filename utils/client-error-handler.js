const clientErrorHandler = function(err, req, res, next) {
  const responseData = {
    success: false,
    message: err.message || 'Something went wrong!',
  };
  if (err.code) {
    res.status(err.code);
  } else {
    res.status(500);
  }
  res.json(responseData);
};
// note: This was the default handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = clientErrorHandler;
