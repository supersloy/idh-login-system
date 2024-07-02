# IDH Login system
## How to use

### Development version

1) Download or clone the current repository
2) Create `.env.local` file in root directory similar to `.env`

```bash
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=myrealm
VITE_KEYCLOAK_CLIENT_ID=myclient
VITE_DATASETS_LINK=https://tab-with-datasets-test-1.onrender.com/
VITE_COMPETITION_LINK=http://linkexample2:port
VITE_GPT_TEACHER_LINK=https://link3
VITE_TREE_TASKS_LINK=http://link4
VITE_TASK_GENERATOR_LINK=http://link5
VITE_TASK_CHECKER_LINK=http://link6
```
3) Start the application locally or via Dockerfile
    * To start locally:
        * Install required node modules via `npm install`
        * Start and deploy application via `npm run start`
    * To start via Dockerfile
        * Build docker image via `docker build -t booking-frontend .`
        * Start the container `docker run booking-frontend`

4) Access the website using `80` port

### Setting up production version variables

To set up production server, frontend requires certain `.env` or `.env.local` file (`.env.local` has higher priority). 
There are 2 ways to create and fill the file:
1) Make it manually
There is an example in `Development version 2)`. Also, there is `.env` configured for production version in root folder.
2) Create it via `setenv.sh`
Set environmental variables `BACKEND_ADDRESS`, `CLIENT_ID`, and `REDIRECT_URI` according to your needs and use the shell script. It will automatically create `.env.local` file and fill it based on those environmental variables.

### Production version (dev server)

Skip steps 1-2 and follow only steps 4 and 5 of `Development version` instruction. If there is `.env.local` delete it.

### How to get static files 

1) Follow steps 1-3  of `Development version` instruction. 
2) Install required node modules via `npm install`
3) Create static files via `npm build`

This will create `dist` folder containing `html` file as user entry point and other files that are imported by the `html` file.

! The version (production or development) of the resulted build depends on `.env` or `.env.local` file. Read section `Setting up production version variables` for more info.