/*Cualquier archivo en pages/api/* estara mapeado y se tratado como un endpoint al llamar a la pagina */

import { GraphQLClient } from "graphql-request";
import process from "process";

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
