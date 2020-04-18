const {ApolloServer, gql} = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ()=>{
    const miContext= "contexto"
    return miContext
  }
})

server.listen(8000,() =>{
  console.log("Server listo 8000 http://localhost:8000")
})