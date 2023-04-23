# SocialiteAPI

## Description
This application is the back-end for a social media website. It uses MongoDB and Mongoose to store and interact with user and thought data, and uses Express.js for routing.

## Table of Contents
- [SocialiteAPI](#socialiteapi)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Users](#users)
    - [Thoughts](#thoughts)
    - [Reactions](#reactions)
  - [Demo](#demo)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation
1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project and add your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost/social-network
```

4. Run `npm start` to start the server.

## Usage
The Social Network API provides endpoints for users, thoughts, and reactions.

To use this API, you can use tools like Insomnia (https://insomnia.rest/) or Postman (https://www.postman.com/).

### Users

- GET /api/users - get all users
- GET /api/users/:userId - get a single user by ID
- POST /api/users - create a new user
- PUT /api/users/:userId - update a user by ID
- DELETE /api/users/:userId - delete a user by ID
- POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
- DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list
### Thoughts

- GET /api/thoughts - get all thoughts
- GET /api/thoughts/:thoughtId - get a single thought by ID
- POST /api/thoughts - create a new thought
- PUT /api/thoughts/:thoughtId - update a thought by ID
- DELETE /api/thoughts/:thoughtId - delete a thought by ID
- POST /api/thoughts/:thoughtId/reactions - add a reaction to a thought by ID
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId - remove a reaction from a thought by ID

### Reactions

- POST /api/reactions - create a new reaction
- DELETE /api/reactions/:reactionId - delete a reaction by ID

## Demo

View a demo of the API here: https://drive.google.com/file/d/19MMLR398k_y-Iw2uH27DJHgH0WAHgLcD/view

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome. Please submit a pull request or issue for any bugs or feature requests.

## Questions

- Name - Ashlee Huff
- Email - huff.n.ashlee@gmail.com
- Github - https://github.com/ash12486/