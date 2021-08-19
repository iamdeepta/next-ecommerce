import BlogDetails from "../../components/Blog/blog-details";
import BlogSidebar from "../../components/Blog/blog-sidebar";
import Footer from "../../components/footer";
import Breadcrumb from "../../components/breadcrumb";
import Layout from "../../layouts/Main";
const BlogDetailsPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <section className="container">
        <div className="blog-details-page">
            <BlogDetails />
          <aside className="blog-sidebar">
            <BlogSidebar />
          </aside>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default BlogDetailsPage;
