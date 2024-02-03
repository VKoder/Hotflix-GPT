export const BACK_IMG =
"https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
