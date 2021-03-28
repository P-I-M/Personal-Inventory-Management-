# M N M LIZE - Personal Inventory Management Site

![GitHub license](https://img.shields.io/badge/license-MIT-ff69b4.svg)

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed](#deployed)
- [Languages](#languages)
- [Screenshots](#screenshots)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

As a consumer in the current state of the world who has been stockpiling supplies, and at the same time has been trying to live a minimalist lifestyle, I need a personal inventory management system that will help me organize everything in my life as well as avoid over consumption.

We decided to create an organizer tool for your personal inventory: M N M LIZE

## Installation

```
// Clone the repository to your local machine using:|

git clone git@github.com:P-I-M/Personal-Inventory-Management-.git

// Install all the dependencies by typing code:
npm i

// Ensure you have set up MySQL and you have a legacy password to log in with ****

// Create a .env file in the root of the folder and fill out the following with your information:
DB_NAME='inventory_db'
DB_USER='root'
DB_PW='examplepassword'

// From the root folder, login to your MySQL using:
mysql -u root -p

// Then, run this command to create the database:
source db/schema.sql;

// Then quit the MySQL shell by typing
quit;

// Seed the test data into the database by typing:
npm run seeds

// Then use the below command to start the server:
npm start

```
## Usage
Use this site to organize your life and live a minimalist lifestyle.

## Deployed application link
https://mnmlize.herokuapp.com/ 

## Languages/Technology Used
[Bcrypt](https://www.npmjs.com/package/bcrypt "Bcrypt")<br />
[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/ "Bootstrap")<br />
[Sequelize](https://sequelize.org/ "Sequelize")<br />
[Dotenv](https://www.npmjs.com/package/dotenv "Dotenv")<br />
[Express](https://expressjs.com/ "Express")<br />
[Handlebars](https://handlebarsjs.com/ "Handlebars")<br />
[MySQL2](https://www.npmjs.com/package/mysql2 "MySQL2")<br />
[Cloudinary](https://www.npmjs.com/package/cloudinary "Cloudinary")<br />
[Node](https://nodejs.org/en/docs/ "Node")<br />
[Heroku](https://devcenter.heroku.com/ "Heroku")<br />
[Moment.js](https://momentjs.com/ "Moment.js")<br />
[JQuery](https://jquery.com/ "JQuery")<br />
[Javascript](https://www.javascript.com/ "Javascript")<br />
[CSS](https://www.w3schools.com/css/ "CSS")<br />



## Screenshots

### Homepage:
![homepage](./public/images/screenshot.jpg?raw=true) <br /><br />

### Dashboard:
![dashboard](./public/images/screenshot1.jpg?raw=true) <br /><br />

### Adding a product:
![adding a product](./public/images/screenshot2.jpg?raw=true) <br /><br />
![adding a product detailed](./public/images/screenshot3.jpg?raw=true) <br /><br />

  
## Contributing
If you would like to contribute, please reach out to us. You can find our contact information in the  "Questions?" section below.

## Questions?

If you have any questions about the project, contact us at: https://github.com/orgs/P-I-M/people

## License

This project is licensed under the MIT license.

Copyright (c) 2021 https://github.com/P-I-M

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.