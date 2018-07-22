# Blog-api

<div><strong><h4>Note:</h4></strong> This is a server side application for repo <strong>blog-frontend.</strong></div>


# Main stack #

* [node.js](http://nodejs.org)
* [express](http://expressjs.com)
* [Passport](http://passportjs.org) and [bcrypt](https://github.com/ncb000gt/node.bcrypt.js/)
* [sequelize](http://docs.sequelizejs.com/)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

For database is used postgresql.

Command for uploading database: 
```
psql -h hostname -d databasename -U username -f <path-to-file>/db.sql
```

# Installation #

```
git clone git@github.com:197291/blog-api.git
cd blog-api && npm install
```

# Running the application #

Running the app is as simple as:

```
npm start
```

Then open a browser: <http://localhost:4000>.
