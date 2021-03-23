# Personal-Inventory-Management-
Repo for Project 2 - Group 6

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Images](#images)

## General info
Personal-Inventory-Management or P-I-M is an app to help originze your food, clohtes, furniture, and accesories. <br>
It keeps track of what you have and its experation date so you can easily can keep track of what you own and don't over buy <br>
It's the perfect companion to keep your place, and head clutter free!
	
## Technologies
Project is created with:
* Javascript
* Handlebars
* css
	
## Setup
//Clone the repository with:
git clone https://github.com/P-I-M/Personal-Inventory-Management-.git

//Install the dependices:
npm i

// Ensure you have set up MySQL and you have a legacy password to log in with ****

// Create a .env file in the root of the folder and fill out the following with your information:
DB_NAME='mnmlize'
DB_USER='root'
DB_PW='password'

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


##usage 
Use this to make an app for easy orginization 

##Deployed Link
-insert link here-

##Technology used
    "bcrypt": "^5.0.1", <br>
    "bootstrap": "^3.4.1", <br>
    "connect-session-sequelize": "^7.1.1", <br>
    "dotenv": "^8.2.0", <br>
    "express": "^4.17.1", <br>
    "express-handlebars": "^5.2.1", <br>
    "express-session": "^1.17.1", <br>
    "handlebars": "^4.7.7", <br>
    "jest": "^26.6.3", <br>
    "mysql2": "^2.2.5", <br>
    "sequelize": "^6.5.1" <br>
 
## Images
![Screenshot (9)](https://user-images.githubusercontent.com/40303668/112070514-351c0d80-8b44-11eb-9073-d1f3ef1a7870.png)

