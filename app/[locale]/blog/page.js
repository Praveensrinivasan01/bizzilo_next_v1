import { fetchBlogs, fetchCategories, fetchTrendingBlogs } from '../../../lib/api';
import BlogPage from '../../../components/BlogPage';

const Page = async ({ searchParams }) => {
   const searchQuery = searchParams?.search;

   console.log("searchQuery", searchQuery);

  const [blogs, categories] = await Promise.all([
    fetchBlogs(searchQuery),
    fetchCategories(),
    // fetchTrendingBlogs(),
  ]);

  const latestBlog = blogs?.results?.length > 0 ? blogs.results[0] : null;

  return (
    <main>
      <BlogPage
        latestBlog={latestBlog}
        // trendingBlogs={trendingBlogs.results}
        categorizedBlogs={blogs.results}
        categories={[{ id: 'all', name: 'All' }, ...(categories.results || [])]}
      />
    </main>
  );
};

export default Page;
