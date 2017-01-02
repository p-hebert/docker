# NodeJS + MongoDB Docker Container Setup

## Installation & Setup

1. Step 1: Copy the files to your work directory
2. Step 2: Configure the config files and modify according to your needs
3. Step 3: You may have to `chmod +x ./docker/docker-start.sh ./server/start.sh`.
4. Step 4: Start the setup via `npm start` at the root or `./docker-start.sh` in the `/docker` folder.
5. Grab a coffee, and enjoy.

### Config Points
#### Config Files
All configuration files for the server and the mongo instances are available under the `.config` folder. You'll most likely want to change those usernames, dbnames, and passwords, along with the ip and port at which you raise that mongodb.

#### Enabling Syslog
Syslog functionality was commented out of the docker-compose.yml file,
but can be reactivated by simply uncommenting them.

#### Not using nodemon
The `/server/start.sh` script uses nodemon to ease development process. However you can modify the start.sh to call `npm start` instead to start the node server directly (you'll also need to modify the package.json accordingly).

## Environment
Tested with:
* Docker version 1.12.5, build 7392c3b
* docker-compose version 1.8.1, build 878cff1
* NodeJS v.6.9.2
* MongoDB version v3.4.1

Mongo image is based off docker/library/mongo/3.4 image, with improvements for running automated user population scripts.
