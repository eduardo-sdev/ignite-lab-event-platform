import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osrfiz16om01w7gndqcet9/master',
    cache: new InMemoryCache()
})
