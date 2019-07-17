# 封装nodejs 连接mysql并执行sql语句
```
const mysql = require('mysql');
const config = require('./config');
function getConn(config) {
  return  mysql.createConnection({
    host: config.host,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.database
  });
}
async function execSql(sql) {
  const db = getConn(config);
  return new Promise(function (resolve, reject) {
    db.query(sql, (err, res = []) => {
      if (err) {
        reject(err);
      }
      resolve(res);
      db.end();
    });
  });
}
export default execSql;
```