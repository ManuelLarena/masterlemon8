import Axios from 'axios';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/api';
import { EpisodeEntityApi } from './episode-collection.api-model';

// const url = `${process.env.BASE_API_URL}/episode/`;

interface GetEpisodeCollectionResponse {
  episodes: EpisodeEntityApi;
}

export const getEpisodeCollectionPage = async (
  page: number
): Promise<EpisodeEntityApi> => {
  const query = gql`
    query {
      episodes(page: ${page}) {
        info {
          pages
        }
        results {
          id
          name
          air_date
          episode
          characters {
            id
            name
            image
          }
          created
        }
      }
    }
  `;

  const {
    episodes,
  } = await graphqlClient.request<GetEpisodeCollectionResponse>(query);
  return episodes;
};

export const getSearchEpisodeCollection = async (
  name: string
): Promise<EpisodeEntityApi> => {
  const query = gql`
    query {
      episodes(filter: { name: "${name}" }) {
        info {
          pages
        }
        results {
          id
          name
          air_date
          episode
          characters {
            id
            name
            image
          }
          created
        }
      }
    }
  `;

  const {
    episodes,
  } = await graphqlClient.request<GetEpisodeCollectionResponse>(query);

  return episodes;
};
