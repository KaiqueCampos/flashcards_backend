<h1 align='center'>Flashcards Backend</h1>
<p align="center">
  <img 
      src="https://user-images.githubusercontent.com/70600553/183260361-be4793d0-eeec-4bc4-8648-101df9c41570.jpeg"
      width=650
   /> 
   
   <br></br>
   ![Sem título](https://user-images.githubusercontent.com/70600553/183262144-2c15dc22-5e86-4aa7-b781-1e85330125d6.png)

</p>

# 📕 About this project 

Flashcards are cards that aim to test your memory, where the front of the card has the question and the back, the answer.

This project was made thinking about the creation of a platform where the user can create several collections, each one with its flashcards. 
For example: A user has a collection called "Mathematics" and inside it he has several Flashcards on the topic, to test his knowledge and strengthen memorization.

# 🚀🔥 Changes made to reach the next level 
 - [ ] Show only flashcards that need to be studied again
 - [ ] Calculation to define when the Flashcard should be revised based on its difficulty (easy, hard and medium)
 - [ ] Share collections with other users

# Technologies used
 - NodeJS
 - MySQL
 - Express
 - Sequelize
 - Jest
 - Nodemon
 - Supertest
 - Pino and Pino-pretty
 - bcrypt
 - jsonwebtoken
 - dotenv
 
# 💻 How to install?
```
# Clone the repository
$ git clone https://github.com/KaiqueCampos/flashcards_backend.git

# Enter the project directory
$ cd flashcards_backend

# Install project dependencies

$ yarn install
# or
$ npm install

# Check env.example to properly connect as a MySQL database.
# Create a file called .env.test and transfer the code block "Database for tests" to .env.test

# Run the server
$ yarn dev

# Run the tests
$ npm run test
$ npm run test:watch
$ npm run test:coverage
```
