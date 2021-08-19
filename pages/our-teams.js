import Layout from "../layouts/Main";
import Footer from "../components/footer";

const Producer = () => {
  return (
    <Layout>
      <section className="producer-page faq-page">
      <div className="faq-header">
        <div className="container">
          <h2 className="producer-heading">Our Teams</h2>
          <p>
            Meet with Our Super Heros
          </p>
        </div>
      </div>
        <div className="container">
          <div className="producer-content">
            <div className="producer-item">
              <img
                src="https://useruploads.cdn-thecorrespondent.com/image/DuGGFJYfEdVc7SxPFNesVS-BP0Y=/380x440/tc-useruploads-images/af5ec81a74834b9db03938b6a1a4217e.png"
                alt="image not found"
              />
              <h3 className="team-name">
                Dawid Wojtasiak
              </h3>
              <code>
                CEO & Founder
              </code>
            </div>
            <div className="producer-item">
              <img
                src="https://useruploads.cdn-thecorrespondent.com/image/7jbtp0V82dRDs2LSPF65ESB-WmM=/380x440/tc-useruploads-images/0579320eff90412486e9d439ccb3bc3e.png"
                alt="image not found"
              />
              <h3 className="team-name">
                Dawid Wojtasiak
              </h3>
              <code>
                Web Developer
              </code>
            </div>
            <div className="producer-item">
              <img
                src="https://useruploads.cdn-thecorrespondent.com/image/DuGGFJYfEdVc7SxPFNesVS-BP0Y=/380x440/tc-useruploads-images/af5ec81a74834b9db03938b6a1a4217e.png"
                alt="image not found"
              />
              <h3 className="team-name">
                Dawid Wojtasiak
              </h3>
              <code>
                Web Developer
              </code>
            </div>
            <div className="producer-item">
              <img
                src="https://useruploads.cdn-thecorrespondent.com/image/DuGGFJYfEdVc7SxPFNesVS-BP0Y=/380x440/tc-useruploads-images/af5ec81a74834b9db03938b6a1a4217e.png"
                alt="image not found"
              />
              <h3 className="team-name">
                Dawid Wojtasiak
              </h3>
              <code>
                Web Developer
              </code>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default Producer;
