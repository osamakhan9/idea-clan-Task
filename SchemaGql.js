
import { gql } from "apollo-server";

const typeDefs = gql`

type Query {
    users: [User]
    user(_id:ID!): User
    posts: [postwithName]
    ipost(by:ID!): [Post]
  }

  type postwithName{
	name: String
	by:IdName
  }
  type IdName{
	_id: String
	name: String
  }
  
  type User{
    _id: ID!
    name: String
    email: String
    password: String
	posts(by:ID!): [Post]
  }

  type Post{
    name:String
    by:ID
  }

  type Token{
    token:String
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
    loginUser(userLogin:Userlogin!): Token
	 createPost(name:String!):String
    
  }

  input UserInput{
    name: String!
    email: String!
    password: String!
  }

  input Userlogin{
    email: String!
    password: String!
  }

`;

export default typeDefs