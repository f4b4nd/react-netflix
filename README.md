
# Netflix-Clone Project

- A Netflix clone using ReactJS, Typescript, Styled-components and Firebase.
- Movies are retrieved using this external API &nbsp;  :arrow_right: &nbsp; [<b>theMovieDB </b>]( https://www.themoviedb.org/documentation/api)

You can find a demo with this link :

[https://react-netflix-clone-f4b4nd.netlify.app/](https://react-netflix-clone-f4b4nd.netlify.app/)


![Image of f4b4nd's React Netflix Interface](https://raw.githubusercontent.com/f4b4nd/react-netflix/main/public/images/misc/react-netflix-screenshot.png)

<br />

# :rocket: Skills
:heavy_check_mark: &nbsp; Reproduce an existing web application <br />
:heavy_check_mark: &nbsp; User authentification <br />
:heavy_check_mark: &nbsp; Retrieve data from an external API <br />
:heavy_check_mark: &nbsp; Secure API requests <br />
:heavy_check_mark: &nbsp; Use React hooks and custom hooks <br />
:heavy_check_mark: &nbsp; Persist sessions <br />
  
<br />

# :pencil: Features
:ballot_box_with_check: &nbsp; Display a galery of movies by categories <br />
:ballot_box_with_check: &nbsp; Play the generic of movies <br />
:ballot_box_with_check: &nbsp; Display the informations details of movies <br />
:ballot_box_with_check: &nbsp; Add / Remove movie to wish list with persistance <br />
:ballot_box_with_check: &nbsp; Search for a movie <br />
:ballot_box_with_check: &nbsp; User account authentification (signin, signup, logout) <br />
:ballot_box_with_check: &nbsp; Responsive layout <br />

<br />

# :construction: Left to do
- Display all movies of a given category

<br />

# :wrench: Run locally
- Clone this repository
- :warning: To access services (<b>Firebase</b> for user authentification &nbsp;; &nbsp; <b>moviedb api</b> to retrieve movies), you need to use environment variables : <br />
:information_source: create a .env file at the root of the project, here's an example :arrow_down: :arrow_down: :arrow_down:	
```
    # FIREBASE CONFIG
    REACT_APP_API_KEY=xxx
    REACT_APP_AUTH_DOMAIN=xxx
    REACT_APP_PROJECT_ID=xxx
    REACT_APP_STORAGE_BUCKET=xxx
    REACT_APP_MESSAGING_SENDER_ID=xxx
    REACT_APP_APP_ID=xxx
    REACT_APP_MEASUREMENT_ID=xxx

    # MOVIEDB CONFIG
    REACT_APP_MOVIEDB_API_KEY=xxx
```

- Run the project : `npm run start`

<br />


# :hammer: Running tests
Unit tests are run with Jest

Run `npm run test`
