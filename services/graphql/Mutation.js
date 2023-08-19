import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

const commentObject = `
    $name: String!,
    $email: String!,
    $comment: String!,
    $slug: String!
`;

const commentData = `
    name: $name,
    email: $email,
    comment: $comment,
    post: {
        connect: {
            slug: $slug
        }
    }
`;

export const graphqlCMSMutation = new GraphQLClient(graphqlAPI, {
    headers: {
        authorization: `Bearer ${graphcmsToken}`
    }
});

export const CREATE_COMMENT = gql`
    mutation CreateComment(${commentObject}) {
        createComment(data: {${commentData}}) {
            id
        }
    }
`

export const PUBLISH_COMMENT = gql `
    mutation PublishComment ($postId : ID!) {
        publishComment(where: {id: $postId}, to: PUBLISHED) {
            id
          }
    }
`

export const UPDATE_VIEW_COUNT = gql`
    mutation updatePost ($slug : String!, $viewCount: Int!) {
        updatePost(data: {viewCount: $viewCount}, where: {slug:$slug}) {
            id
          }
    }
`

export const PUBLISH_POST = gql `
    mutation PublishPost ($postId : ID!) {
        publishPost(where: {id: $postId}, to: PUBLISHED) {
            id
          }
    }
`