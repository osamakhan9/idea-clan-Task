import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import mongoose from 'mongoose'
import {MONGO_URL} from './config/db.js'
import typeDefs from './SchemaGql.js'
import jwt from 'jsonwebtoken'
const SECRET_KEY = "SECRET1234" 


mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connection', ()=>{
  console.log('connected to mongoDB')
})

mongoose.connection.on('error', (err)=>{
  console.log('error to mongoDB',err)
})

// import models here -------------->
import './models/user.js'
import './models/post.js'


// import Resolvers here file -------->
import resolvers from './resolvers.js'


// const typeDefs = gql`
//    type Query{
//        get:String
//    }
// `;

// const resolvers = {
//     Query:{
//         get:()=>{
//             return "Hello world"
//         }
//     }
// }





const server = new ApolloServer({ 
    typeDefs, 
    resolvers,

	context:({req})=>{
     const {authorization} = req.headers
      if(authorization){
          const {userId} = jwt.verify(authorization ,SECRET_KEY)
           return {userId}
       }
	},

    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});