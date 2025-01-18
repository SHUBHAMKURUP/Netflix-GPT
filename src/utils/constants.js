export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzExYzU1MmZhYjAzYmFjNmZmMTY0YjMzZmZiZmNlYiIsIm5iZiI6MTczNjMyNDg4My40NDIsInN1YiI6IjY3N2UzNzEzMzRhNGU3NWU0OTdiMDJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71PqtVdqVJaiAmNbopwWfudjRzJeIMxtiNOYebmyNDA",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;
