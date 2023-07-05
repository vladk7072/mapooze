import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerRtk = createApi({
  reducerPath: "registerRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  }),
  endpoints: (build) => ({
    // getItemFilm: build.query<TopFilmType, string>({
    //   query: (body) => ({
    //     url: `v2.2/films/${body}`,
    //     headers: {
    //       "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
    //       "Content-Type": "application/json",
    //     },
    //   }),
    // }),
  }),
});


export const {  } = registerRtk;