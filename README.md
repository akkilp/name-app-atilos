# Solita Name App

Solita's preassignment for their dev academy position

## Install locally

1. Clone master
2. npm install for both front & backend
3. Launch postgres db running in docker container with 'npm run database' -script
   - settings can be managed via .env and docker.env files ( that are published in repo, which is normally bad practice)
   - if the docker container does not launch, try clean restart: https://docs.tibco.com/pub/mash-local/4.1.1/doc/html/docker/GUID-BD850566-5B79-4915-987E-430FC38DAAE4.html
4. npm start for front & backend
5. Go to clients port (default 3000) to experience the wild Solita-name experience

## Backend

Backend is built using object-oriented programming.

The database is populated with the names found in names.json files, when the server is ran.

Queries made to the database are implemented with typeORM.

The express API handles following  CRU (CreateReadUpdate) routes:
 
 #### INCLUDED IN THE USER INTERFACE
- GET /names/
  - Responds with all the names found in the database
  
- GET /names/{variable}
  - Looks for the passed variable and responds accordingly
  
 #### EXLUDED FROM THE USER INTERFACE
- POST /names/{variable}
  - Creates new name
 
- PATCH /names/{variable}
  - Increases the amount of name passed in as variable, if exists
  
 POST and PATCH routes work, expect the ranking is corrupted when updated due to the ranking is being implemented when the data is populated (and therefore the ranking isn't updated when queried in database). Look server/src/names/name.controller.ts for more information.
 
 Server handles errors accordingly, responding with proper HTTP messages using customized error classes found in server/src/errors folder.
 
 ## Database
 
 Database is running in docker container which in configured with docker-compose.yml and docker.env files. Postgres container also has pgadmin graphic user interface, which can be used to control the database. The pgadmin interface can be used in a browser in the port defined by docker-compose.yml file.
 
 ## User interface
 
 The frontend is built with create-react-app --typescript template. For CSS, this project uses tailwind.
 
 Routing is handled with react-router
 
 client/src folder is structured as follows:
 
 - assets 
   - all graphical assets: svg icons and animated loading spinner
    
 - components
   - compontents that build the pages
   
 - pages
   - single page and main page are only views in this project, which are build using components
 
 - hooks
   - custom hooks for api calls and for filtering the results
 
 
 
 
 
 
 
 
 


 
