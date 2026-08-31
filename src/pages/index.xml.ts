import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const blog = await getCollection('blog');
  const sortedPosts = blog.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  
  return rss({
    title: "Dinesh Pai's blog",
    description: 'Field notes on investments and capital markets',
    site: context.site.toString(),
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/blog/${post.slug}/`,
    })),
  });
}
