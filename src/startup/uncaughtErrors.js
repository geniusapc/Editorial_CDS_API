process.on('uncaughtException', function (err) {
  console.log(err);
  process.exit(1);
});

process.on('uncaughtRejection', function (err) {
  console.log(err);
  process.exit(1);
});
