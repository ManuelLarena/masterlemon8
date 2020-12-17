import { GraphQLClient } from 'graphql-request';

const url = `${process.env.BASE_GRAPHQL_URL}`;

export const graphqlClient = new GraphQLClient(url);
