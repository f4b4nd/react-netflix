
# Netflix-Clone Project

A Netflix clone using ReactJS, Styled-components, Firebase, and Fuse.js

---

# How to set up and use
1. Clone/download the code
2. Create a .env file with `SKIP_PREFLIGHT_CHECK=true`
3. Add access to firebase : create a firebase-credentials.json in "netflix/src/lib/"
4. Run `docker-compose up`

---

# Running tests
## Unit tests with Jest
1. Run `docker exec -it web-node12 /bin/sh`
2. Run (in container): `cd netflix` then `yarn test`