import { graphqlCMSMutation, UPDATE_VIEW_COUNT } from '@services/graphql/Mutation';

export default async function submitComment(req, res) {
    try{
        const result = await graphqlCMSMutation.request(UPDATE_VIEW_COUNT, {
            slug: req.body.slug,
            viewCount: req.body.viewCount
        });
        console.log(result);
        return res.status(200).send(result.updatePost);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
