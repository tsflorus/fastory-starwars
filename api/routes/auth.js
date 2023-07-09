const Bcrypt = require("bcrypt");

const users = [
  {
    username: 'Luke',
    password: '$2a$12$GINMFeFwcJk8EoqySGLVS.ra6Gb8y9/AdejVj4nr2vScKQo/IX.Am',
    name: 'Luke Skywalker',
    id: '28874idj8'
  }
]

exports.login = async (request) => {
  const {username, password} = request.payload;

  if (!username || !password) {
    throw new Error('Missing credentials');
  }

  const user = users.find((user) => user.username === username);

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await Bcrypt.compare(password, user.password)

  if (isPasswordValid) {
    request.cookieAuth.set({id: user.id});
    return user;
  } else {
    throw new Error('Invalid credentials');
  }
}
