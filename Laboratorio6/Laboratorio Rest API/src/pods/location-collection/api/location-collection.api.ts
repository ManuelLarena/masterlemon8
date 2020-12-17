import Axios from 'axios';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/api';
import {
  LocationEntityApi,
} from './location-collection.api-model';

// const url = `${process.env.BASE_API_URL}/location/`;

interface GetLocationCollectionResponse {
  locations: LocationEntityApi;
}

export const getLocationCollectionPage = async (
  page: number
): Promise<LocationEntityApi> => {
  const query = gql`
  query {
    locations(page: ${page}) {
      info {
        pages
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
  `;
  const {
    locations,
  } = await graphqlClient.request<GetLocationCollectionResponse>(query);

  return locations;
};

export const getSearchLocationCollection = async (
  name: string
): Promise<LocationEntityApi> => {
  const query = gql`
    query {
      locations(filter: {name: "${name}"}) {
        info {
          pages
        }
        results {
          id
          name
          type
          dimension
          created
        }
      }
    }
  `;

  const {
    locations,
  } = await graphqlClient.request<GetLocationCollectionResponse>(query);
  console.log(locations);
  return locations;
};
