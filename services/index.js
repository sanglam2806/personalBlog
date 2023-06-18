import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query Assets {
      postsConnection(
        orderBy: createdAt_DESC
        first: 4
      ) {
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
    return results.postsConnection.edges;
}

export const getRecentPosts = async() => {
  const query = gql`
  query GetPostDetails () {
    posts(
      orderBy: createdAt_DESC
      first: 3
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
        orderBy: createdAt_DESC
        first: 3
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
      photosByPost {
        photo {
          url
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, { slug });
  console.log(result);
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

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPost() {
      posts (where: {featuredPost: true}
        orderBy: createdAt_DESC
        ) {
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
        featureImage {
          url
        }
      }
    }
  `
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getAllPost = async () => {
  const query = gql`
  query Assets {
    postsConnection(
      orderBy: createdAt_DESC
    ) {
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
  return results.postsConnection.edges;
}


export const getPostsByCategory = async (categorySlug) => {
  const query = gql`
  query Assets($categorySlug: String!) {
    postsConnection(
      where: {categories_some: {slug: $categorySlug}}
      orderBy: createdAt_DESC
    ) {
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
  const results = await request(graphqlAPI, query, { categorySlug });
  console.log(results);
  return results.postsConnection.edges;
}