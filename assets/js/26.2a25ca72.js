(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{172:function(n,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"封装nodejs-连接mysql并执行sql语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装nodejs-连接mysql并执行sql语句","aria-hidden":"true"}},[this._v("#")]),this._v(" 封装nodejs 连接mysql并执行sql语句")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const mysql = require('mysql');\nconst config = require('./config');\nfunction getConn(config) {\n  return  mysql.createConnection({\n    host: config.host,\n    user: config.dbUser,\n    password: config.dbPassword,\n    database: config.database\n  });\n}\nasync function execSql(sql) {\n  const db = getConn(config);\n  return new Promise(function (resolve, reject) {\n    db.query(sql, (err, res = []) => {\n      if (err) {\n        reject(err);\n      }\n      resolve(res);\n      db.end();\n    });\n  });\n}\nexport default execSql;\n")])])])])}],!1,null,null,null);e.default=r.exports}}]);