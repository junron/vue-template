# Backend

## Running the project
1. Install dependencies
    ```
    npm install
    ```
2. Compile and run TypeScript
    ```
    npm run start:dev
    ```
   This command automatically rebuilds project when files change.  
   API will be started on `http://localhost:3000`
   
## Project structure
- `.eslintrc.js`: Configures [eslint](https://eslint.org/) to enforce code formatting
- `tsconfig.js`: Configures TypeScript compile options
- `package.json`: Specifies project dependencies.
- `src`: Application code is here
    - `app.ts`: Root file, initializes application
    - `controllers`: Fetch and manipulate data from the database
    - `models`: Classes for database table definitions (Optional if using raw SQL)
    - `routes`: Maps HTTP requests to controller methods
    - `utils`: Miscellaneous functions

## Libraries
- [Express](https://expressjs.com/): Web server and API framework

## Other recommended libraries
- [Sequelize](https://sequelize.org/): Object-Relation Mapper (maps SQL to classes)
- [Multer](https://github.com/expressjs/multer): Express file upload
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) and [jwks-rsa](https://www.npmjs.com/package/jwks-rsa): JWTs and JWKs


## Deployment
To build the project, run
```
npm run build
```
Output files will be in `build`
