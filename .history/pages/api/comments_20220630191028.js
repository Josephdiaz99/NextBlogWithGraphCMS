/*Cualquier archivo en pages/api/* estara mapeado y se tratado como un endpoint al llamar a la pagina */

import { GraphQLClient, GraphQLClient } from "graphql-request";
import process from "process";

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(req,res){
    const GraphQLClient=new GraphQLClient(graphqlAPI,{
        headers:{
            authorization:`Bearer ${process.env.GRAPHCMS_TOKEN} `
        }
    })
}