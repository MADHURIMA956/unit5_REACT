import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3001/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (id) => `users/${id}`,
      }),
    }),
  })