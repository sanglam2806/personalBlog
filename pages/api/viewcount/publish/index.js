import { graphqlCMSMutation, PUBLISH_POST } from '@services/graphql/Mutation';

export default async function publishComment(req, res) {
    try{
        console.log('---------------')
        console.log(req.body.postId)
        const result = await graphqlCMSMutation.request(PUBLISH_POST, {
            postId: req.body.postId,
        });
        return res.status(200).send(result);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}