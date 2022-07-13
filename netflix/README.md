
# Netflix-Clone Project

A Netflix clone using ReactJS, Styled-components, Firebase, and Fuse.js

This app is currently hosted on netlify :

https://react-netflix-clone-f4b4nd.netlify.app/


---

# How to set up and use
1. Clone/download the code
2. Create a .env file with :
- `SKIP_PREFLIGHT_CHECK=true`
- Firebase crendentials (apikey, etc.)
3. Run `docker-compose up`

---

# Running tests
## Unit tests with Jest
1. Run `docker exec -it web-node16 /bin/sh`
2. Run (in container): `cd netflix` then `yarn test`