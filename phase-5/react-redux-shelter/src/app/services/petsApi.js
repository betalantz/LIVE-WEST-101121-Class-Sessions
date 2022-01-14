import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints(builder){
        return {
            fetchPets: builder.query({
                query(){
                    return '/pets'
                },
                // Provides a list of `Pets` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Pets` element was added.
                providesTags: (result) => 
                result
                ? [...result.map(({id}) =>({id})),
                { id: 'LIST'}]
                : [{id: 'LIST'}]
            }),
            updatePet: builder.mutation({
                // alt syntax
                query: ({id, ...patch}) => ({
                    url: `/pets/${id}`,
                    method: 'PATCH',
                    body: patch
                }),
                // Invalidates all queries that subscribe to this Pet `id` only.
      // In this case, `fetchPets` will be re-run. `fetchPets` *might*  rerun, if this id was under its results.
                invalidatesTags: (result, error, {id}) => [{id}]
            })
        }
    }
})

export const { useFetchPetsQuery, useUpdatePetMutation } = petsApi