import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import BlogGrid from "../../components/Blog/blog-grid";
import BlogSidebar from "../../components/Blog/blog-sidebar";

const Blog = () => {
  return (
    <Layout>
      <section className="blog-details-page">
        <BlogGrid />
        <aside className="blog-sidebar">
          <BlogSidebar />
        </aside>
      </section>
      <Footer />
    </Layout>
  );
};
export default Blog;
