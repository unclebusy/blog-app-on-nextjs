import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

export const generationMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
  return {
    title: id,
  };
};

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);

  return (<>
  <h1>{post.title}</h1>
    <p>{post.body}</p>
  </>)
};

export default Post;
