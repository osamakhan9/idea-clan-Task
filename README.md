## GraphQL Server with User and Post Functionalities
<hr/>
This Project contains a Node.js application using Express and Apollo Server for GraphQL API implementation. It includes user registration and login functionality with MongoDB database integration.
<hr/>

## Technologies Used

- Express.js: Web application framework for Node.js.
- Apollo Server Express: GraphQL server for Express.js.
- Mongoose: MongoDB object modeling for Node.js.
- bcryptjs: Library for hashing passwords.
- jsonwebtoken: Implementation of JSON Web Tokens.
  <hr/>

  ## Functionalities
### User Authentication
- **User Registration** : Users can register with a email, name, and password.

- **Login User** : Registered users can log in using their email and password.

### Post Management
- **Create Post (authorization)** : authorization users can create posts. Only logged-in users can create posts, and posts are associated with the user who created them.

- **Get User Posts (authorization)** : Authenticated users can retrieve their own posts. Only posts belonging to the logged-in user are returned.


## Project Structure
  - config/
    - db.js: MongoDB connection configuration.
  - SchemaGql
    - GraphQL Schema typeDefs `gql` operations.
  - models/
    - user.js: Mongoose model for User schema.
    - post.js: Mongoose model for Post schema.
  - Resolvers/
    - Resolvers for user operations.
    - GraphQL type definitions for user operations.
    - Resolvers for post operations.
  - index.js: Entry point for the server.

<hr/>


## GraphQL Endpoint
**Access the GraphQL endpoint in your browser or client application**

**GraphQL Endpoint** : http://localhost:9000/graphql

Use this endpoint to interact with the GraphQL server, execute queries, and perform mutations.


## Usage
### User Operations
 - **registerUser**
```bash
mutation createUser($userNew:UserInput!){
user:signupUser(userNew:$userNew){
  _id
  email
  name
  password
}
}
```
- **registerUser Query Variables**
- For Example
```bash
{
"userNew":{
"name":"osamakhan",
  "email":"osamn@gmail.com",
  "password":"1234"
}
}
```
<br/>

- **loginUser**
```bash
mutation Login($userLogin:Userlogin!){
user:loginUser(userLogin:$userLogin){
  token
}
}

```
- **loginUser Query Variables**
- For Example
```bash
{
"userLogin":{
  "email":"sana@123gmail.com",
  "password":"1234"
}
}
```


## Authorization Header for Posting and Retrieving Posts

After logging in and receiving the token, use the generated token for authorization by adding it to the headers as follows:

- **Key**: Authorization
- **Value**: Bearer ${Token}

This authorization header should be included when making requests to post new content or retrieve posts for authenticated users.

### Post Operations

- **createPost**
```bash
mutation CreatePost{
createPost(name:"I am nice Post")
}
```
 - authorization with your genrator token
  ```bash
{
"authorization":"Your token here"
}
```

- **getUserPosts**
```bash
query getAllPost{
posts{
name
  by{
_id
    name
  }
}
}
```
<hr/>
<h3 align="center"><a href="https://idea-clan-task.onrender.com/"><strong>Want to see live preview »</strong></a></h3>

## Demo 

<table>
  <tr>
    <td><img maxW="50%" src="https://github.com/osamakhan9/idea-clan-Task/assets/101393695/22c6a337-0b14-4fb2-8a23-1b056a580bed"  alt="home" /></td>
    <td><img maxW="50%" src="https://github.com/osamakhan9/idea-clan-Task/assets/101393695/fea7ea2b-a51a-4ae2-a135-c91ff357e15d"  alt="coupons" /></td>
  </tr>
  <tr>
   <td><img src="https://github.com/osamakhan9/idea-clan-Task/assets/101393695/5f993054-592d-4366-8adc-da863818745b"  alt="shop" /></td>
    <td><img src="https://github.com/osamakhan9/idea-clan-Task/assets/101393695/932d05b8-4d6b-4e9e-964c-8e5cd060ed07"  alt="log" /></td>
  </tr>
  
</table>
<hr/>

## Setup

1. **Clone the repository** 
```bash
  git clone 
```
2. **Install dependencies**
```bash
  cd 
  npm install
```

3. **Set up environment variables** 
Create a .env file with the following variables:
```bash
PORT = 4000

SECRET_KEY = your_secret_key

MONGODB_URL = your_mongodb_uri
```
4. **Start the server**
```bash
npm start
Access the server at :- http://localhost:4000/
```
<hr/>
## Contact

If you want to contact me, you can reach me through below handles. <br />
- okosama06@gmail.com
- Mobile Number :- 7376772385
  
© 2022 Mohammad osama khan

## Show your support

Give a ⭐️ if you like this project!


