# Solita Name App

Solita's preassignment for their dev academy position

# Install locally

1. Clone master
2. npm install for both front & backend
3. Launch postgres db running in docker container with 'npm run database' -script
  - settings can be managed via .env and docker.env files ( that are published in repo, which is normally bad practice)
  - if the docker container does not launch, try clean restart: https://docs.tibco.com/pub/mash-local/4.1.1/doc/html/docker/GUID-BD850566-5B79-4915-987E-430FC38DAAE4.html
4. npm start for front & backend
5. Go to clients port (default 3000) to experience the wild Solita-name experience
