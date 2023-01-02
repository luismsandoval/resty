# Component Based UI

## Lab 29 - Advanced State with Reducers

### Requirements

- `<App />`: Use a reducer to store and manage all application state: loading, results, history

  - Add to history array in state after every api call
    - method, url, results (json)

- `<History />`: Iterates the history array in state and shows the previous API calls

### Application Flow

- User enters API URL

- User selects a REST method

- User submits the request with "submit" button

- App fetches data from API

- Displays the results

- Stores history of API calls

- Displays history

### Technical Requirements

- Replace any component state managements to use derived state from useReducer with a reducer function and intitial state.

### Testing

- React testing library framework
