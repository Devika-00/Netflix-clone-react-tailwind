export const baseUrl = "https://api.themoviedb.org/3";
export const API_KEY ="bef28744695303f6a13e4b9ea922cc24"

export const banner_url = `${baseUrl}/trending/all/day?api_key=${API_KEY}&language=en-US`;

export const baseImage = "https://image.tmdb.org/t/p/original/";

export const orginals = `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US`;
export const action =  `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedies = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const Trending = `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const Romance = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`; 
export const Horror  = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27` ;

export const trialer_base_url = "https://api.themoviedb.org/3/movie/";
