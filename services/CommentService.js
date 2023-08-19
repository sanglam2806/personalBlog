export const submitComment = async (obj) => {
  const result = await fetch('/api/comment/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const publishComment = async (postId) => {
  const result = await fetch('/api/comment/publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({postId}),
  });
  return result.json();
};