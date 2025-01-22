# Netflix GPT

Netflix GPT is a Netflix clone web application that integrates OpenAI's GPT-3.5 with the TMDB movie database to provide intelligent movie recommendations and search functionality. Users can sign up, sign in, and search for movies using natural language queries.

## Features

- **User Authentication**: Sign up and sign in using Firebase Authentication.
- **Movie Search**: Search for movies using natural language queries powered by OpenAI's GPT-3.5.
- **Movie Recommendations**: Get intelligent movie recommendations based on user input.
- **Language Support**: Multi-language support for a better user experience.
- **Responsive Design**: Fully responsive design for different devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management for managing application state.
- **Firebase**: Backend services for authentication and database.
- **OpenAI**: GPT-3.5 for natural language processing and movie recommendations.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variable**:
   Create a .env file in the root directory and add the following:

   ```plaintext
   REACT_APP_OPENAI_KEY=your-actual-openai-api-key-here
   REACT_APP_TMDB_KEY=your-actual-tmdb-api-key-here
   ```

4. **Start the development server**:
   ```bash
   npm run start
   ```

## Project Structure

```plaintext
netflix-gpt/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── GptSearchBar.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── firebase.js
│   │   ├── openai.js
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
├── README.md
```

## Usage

- **Sign Up / Sign In**: Create an account or sign in using your existing account.
- **Search Movies**: Use the search bar to enter natural language queries for movie recommendations.
- **Get Recommendations**: View the recommended movies based on your search query.

**Acknowledgements**
OpenAI for providing the GPT-3.5 API.
Firebase for backend services.
TMDB for the movie database API.
Tailwind CSS for the styling framework.
