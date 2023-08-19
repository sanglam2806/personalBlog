import { graphqlCMSMutation, CREATE_COMMENT } from '@services/graphql/Mutation';

export default async function submitComment(req, res) {
    try{
        const result = await graphqlCMSMutation.request(CREATE_COMMENT, {
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
            slug: req.body.slug,
        });
        return res.status(200).send(result.createComment);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
