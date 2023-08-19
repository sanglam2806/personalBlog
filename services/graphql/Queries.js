import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const graphqlCMS = new GraphQLClient(graphqlAPI);

const category = `
    id,
    name,
    slug
`
const comment = `
    id,
    name,
    createdAt,
    email,
    comment
`
const post = `
    id,
    author {
        bio,
        name,
        id,
        photo {
          url
        }
      },
    createdAt,
    slug,
    title,
    viewCount,
    excerpt,
    isJapanese,
    featureImage {
        url,
    },
    categories {
        name,
        slug,
    },
    content {
        raw
    },
    photosByPost {
        photo {
            url
        }
    }
`
const author = `
    photo {
        url
    },
    bio,
    name
`

export const QUERY_SLUG_CATEGORIES =  gql `
    {
        categories (){
            name
            slug
        }
    }
`

export const QUERY_POSTS_BY_CATEGORY = gql`
    query GetPostsByCategory($categorySlug: String!) {
        posts(
            orderBy: createdAt_DESC,
            where: {categories_some: {slug: $categorySlug}}
        ) {
            ${post}
        }
    }
`

export const QUERY_POSTS_BY_PAGE = gql `
    {
        posts(
            orderBy: createdAt_DESC
        ) {
            ${post}
        }
    }
`

export const QUERY_TOP4_POST = gql `
    {
        posts(
            orderBy: createdAt_DESC
            first: 4
        ) {
            ${post}
        }
    }
`

export const QUERY_POST_DETAIL = gql `
    query GetPostDetail ($slug: String!) {
        post(where: { slug: $slug}) {
            ${post}
        }
    }
`

export const QUERY_SIMILAR_POSTS = gql `
    query GetPostDetails ($slug: String!, $categories: [String!]) {
        posts(
            where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories}}},
            orderBy: createdAt_DESC,
            first: 3
        ) {
            ${post}
        }
    }
`

export const QUERY_FEATURE_POSTS = gql`
    query GetFeaturedPost() {
        posts (where: {featuredPost: true}
            orderBy: createdAt_DESC
        ) {
            ${post}
        }
    }
`

export const QUERY_COMMENTS_BY_POST = gql `
    query GetCommentsPost($slug: String!) {
        comments(
            where: {post: {slug:$slug}}
        ) {
            ${comment}
        }
    }
`

export const QUERY_AUTHOR = gql `
    {
        authors {
            ${author}
        }
    }
`