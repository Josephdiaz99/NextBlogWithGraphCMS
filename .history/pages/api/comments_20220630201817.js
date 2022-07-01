/*Cualquier archivo en pages/api/* estara mapeado y se tratado como un endpoint al llamar a la pagina */
import { gql, GraphQLClient } from 'graphql-request';



const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken=process.env.GRAPHCMS_TOKEN

export default async function comments(req,res){
    console.log(graphcmsToken)
    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
          authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
      });
    
      const query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
          createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
        }
      `;

    try {
        const result=await graphQLClient.request(query,req.body)
        return res.status(500).send(error)

    } catch (error) {
        console.log(error)
    }

 

   
}