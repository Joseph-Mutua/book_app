import { gql } from "@apollo/client";

export const GET_BOOK = gql`
  query {
    book {
      pages {
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;
