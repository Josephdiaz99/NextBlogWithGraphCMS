
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};


export const getRecentPosts=async()=>{

    const query=gql`
    query GetPostDetails(){
        post(
            orderBy:createdAt_ASC
            last:3
            ){
                title
                featuredImage{
                    url
                }
                createAt
                slug
            }
       
    }
    `
    const result = await request(graphqlAPI, query);
    return result.post;
}

// export const getSimilarPosts = async (categories, slug) => {
//     const query = gql`
//       query GetPostDetails($slug: String!, $categories: [String!]) {
//         posts(
//           where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
//           last: 3
//         ) {
//           title
//           featuredImage {
//             url
//           }
//           createdAt
//           slug
//         }
//       }
//     `;
//     const result = await request(graphqlAPI, query, { slug, categories });
  
//     return result.posts;
//   };























