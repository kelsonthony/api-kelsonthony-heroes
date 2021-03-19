const ContextStrategy = require('./src/db/strategies/base/contextStrategy')
const MongoDB = require('./src/db/strategies/mongodb')
const Postgres = require('./src/db/strategies/postgres')

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgress = new ContextStrategy(new Postgres())
contextPostgress.create()
