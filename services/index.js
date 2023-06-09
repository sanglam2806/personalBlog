import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featureImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
    
    `

    const results = await request(graphqlAPI, query);
    console.log(results.postsConnection.edges);
    return results.postsConnection.edges;
}

export const getRecentPosts = async() => {
  const query = gql`
  query GetPostDetails () {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      featureImage {
        url
      }
      createdAt
      slug
    }
  }
  `

  const results = await request(graphqlAPI, query);
  return results.posts;
}

export const getSimilarPosts = async(categories, slug) => {
  const query = gql`
    query GetPostDetails ($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
        last: 3
      ) {
        title
        featureImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const results = await request(graphqlAPI, query,{ slug, categories } );
  return results.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories{
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query);
  return result.categories;
}

export const getPostDetail = async (slug) => {
  const query = gql`
  query GetPostDetail ($slug: String!) {
    post(where: { slug: $slug}) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      createdAt
      slug
      title
      excerpt
      featureImage {
        url
      }
      categories {
        name
        slug
      }
      content {
        raw
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const getComments = async (slug) => {
  try {
  const query = gql`
    query GetCommentsPost($slug: String!) {
      comments (where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
  } catch (error){
    console.log(error);
  }
};