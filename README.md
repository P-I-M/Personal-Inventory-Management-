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
https://boiling-woodland-97764.herokuapp.com/ 

## Languages/Technology Used
Bcrypt <br />
Bootstrap <br />
Sequelize <br />
Dotenv <br />
Express <br />
Handlebars <br />
MySQL2 <br />
Cloudinary <br />
Node <br />
Heroku <br />
Javascript <br />
CSS <br />

## Screenshots

### Homepage:
![homepage](./public/images/screenshot.jpg?raw=true) <br /><br />

### Creating a new user:
![creating a user](./public/images/screenshot1.jpg?raw=true) <br /><br />

### Adding a product:
![adding a product](./public/images/screenshot2.jpg?raw=true) <br /><br />

### Your calendar:
![personal calendar](./public/images/screenshot3.jpg?raw=true) <br /><br />

## License

  This project is licensed under the MIT license.
  
## Contributing
If you would like to contribute, please reach out to us. You can find our contact information in the  "Questions?" section below.

## Questions?

If you have any questions about the project, contact us at: 

