export const increaseViewCount = async (obj) => {
  const result = await fetch('/api/viewcount/increase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const pusblishPost = async (postId) => {
    const result = await fetch('/api/viewcount/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({postId}),
    });
    return result.json();
};
