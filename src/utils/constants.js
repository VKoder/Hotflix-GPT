export const BACK_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg";

export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGUzODQ3OTJhZGQwMjM0ZTg3OTJlNmY4ODZmM2E0MyIsInN1YiI6IjY1YmJhODMwZDdjZDA2MDE3YjUzZmUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2kvw56lD3bpvsxIQitaTb0m99OfFyCSgs_zdzPeJrc",
  },
};

export const IMG_LINK = "https://image.tmdb.org/t/p/original";

export const MULTI_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;