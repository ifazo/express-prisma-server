# Express Prisma Server

This project is an Express.js server integrated with Prisma ORM for database operations. It provides a backend for your application with user authentication and data storage capabilities.

## Live Site

The live site for this project can be accessed at [express-prisma-server.onrender.com](https://express-prisma-server.onrender.com/).

## Testing

The server can be test by Postman by accessed at [here](https://www.postman.com/ifaz-team/workspace/ifaz-public-workspace/collection/27476393-4fc64944-a233-4e1b-9e39-aed5892aa072?action=share&creator=27476393).

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/27476393-4fc64944-a233-4e1b-9e39-aed5892aa072?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D27476393-4fc64944-a233-4e1b-9e39-aed5892aa072%26entityType%3Dcollection%26workspaceId%3Db51f2572-811c-4104-bb37-8ab14357641f)

## Technologies Used

- Express.js: A fast, unopinionated, minimalist web framework for Node.js.
- Prisma: A modern database toolkit for TypeScript and Node.js.
- bcrypt: A library to help you hash passwords.
- cors: Cross-Origin Resource Sharing middleware for Express.js.
- dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.
- jsonwebtoken: An implementation of JSON Web Tokens for authentication.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Nodemon: A utility that monitors for changes in your source code and automatically restarts your server.
- ts-node: TypeScript execution and REPL for Node.js.

## Setup

1. Clone the repository:


2. Navigate to the project directory:


3. Install dependencies:


4. Create a `.env` file in the root directory and configure environment variables:


5. Run database migrations:


6. Generate Prisma client:


7. Start the server:


## Development

- Run the server in development mode with hot reloading:


## License

This project is licensed by [@ifazo](https://github.com/ifazo). See the [LICENSE](LICENSE) file for details.
