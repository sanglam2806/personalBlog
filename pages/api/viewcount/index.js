import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function increaseView(req, res) {
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${graphcmsToken}`,
        }
    });

    const query = gql`
        mutation UpdatePost ($viewCount: Int!, $slug: String!){
            updatePost(data: {viewCount: $viewCount}, where: {slug: $slug}) {
                id
            }
            publishPost(where: {slug: $slug}, to: PUBLISHED)
        }
    `;

    try{
        const result = await graphQLClient.request(query, {
            viewCount: req.body.viewCount,
            slug: req.body.slug,
        });
        return res.status(200).send(result);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}


