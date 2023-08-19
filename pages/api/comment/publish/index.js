import { graphqlCMSMutation, PUBLISH_COMMENT } from '@services/graphql/Mutation';

export default async function publishComment(req, res) {
    try{
        const result = await graphqlCMSMutation.request(PUBLISH_COMMENT, {
            postId: req.body.postId,
        });
        return res.status(200).send(result);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}