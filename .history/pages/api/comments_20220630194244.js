/*Cualquier archivo en pages/api/* estara mapeado y se tratado como un endpoint al llamar a la pagina */
import { GraphQLClient } from "graphql-request";

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function comments(req,res){
    const {name, email,slug,comment}=req.body
    const GraphQLClient=new GraphQLClient(graphqlAPI,{
        headers:{
            authorization:`Bearer ${process.env.GRAPHCMS_TOKEN} `
        }
    })
    const query=gql`
    mutation CreateComment($name: String!,$email: String!,$comment: String!, $slug:String!){
        createComment(data: {name:$name, email:$email, comment:$comment, post:{ connect: {slug:$slug} } }) { id }
    }
    `

    try {
        const result=await GraphQLClient.request(query,req.body)
        return res.status(200).send(result)

    } catch (error) {
        console.log(error)
    }

 

   
}