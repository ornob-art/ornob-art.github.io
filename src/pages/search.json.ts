import { getCollection } from 'astro:content';
import { getAutoBadge, getAutoExcerpt } from '../utils';

export async function GET() {
  const posts = await getCollection('posts');
  
  const searchData = posts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.data.title || '',
    author: post.data.author || '',
    category: post.data.category || '',
    badge: getAutoBadge(post),
    excerpt: getAutoExcerpt(post),
    image: post.data.image || null,
    content: post.body || ''
  }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
