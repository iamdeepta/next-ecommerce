const BlogSidebar = () => {
  return (
    <div className="blog-sidebar-content">
      <div class="serch-form">
        <form action="#">
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">
            <i class="icon-search"></i>
          </button>
        </form>
      </div>
      <div class="categories">
        <h4 class="title">Categories</h4>
        <ul class="categories-list">
          <li>
            <a href="#" class="active">
              <span>Oil &amp; gas</span>
              <span>(7)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Manufacturing</span>
              <span>(7)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Chemical Research</span>
              <span>(0)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Agriculture</span>
              <span>(0)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Mechanical</span>
              <span>(0)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Entrepreneurs</span>
              <span>(1)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Technology</span>
              <span>(0)</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="recent-post-widget">
        <h4 class="title">Recent Post</h4>
        <ul class="post-list">
          <li>
            <div class="post">
              <div class="post-img">
                <img
                  src="https://ecom.makgr.com/assets/images/blogs/15542700251-min.jpg"
                  alt=""
                />
              </div>
              <div class="post-details">
                <a href="#">
                  <h4 class="post-title">How to design effective arts?</h4>
                </a>
                <p class="date">Jan 03 - 2019</p>
              </div>
            </div>
          </li>
          <li>
            <div class="post">
              <div class="post-img">
                <img
                  src="https://ecom.makgr.com/assets/images/blogs/15542698954-min.jpg"
                  alt=""
                />
              </div>
              <div class="post-details">
                <a href="#">
                  <h4 class="post-title">How to design effective arts?</h4>
                </a>
                <p class="date">Jan 03 - 2019</p>
              </div>
            </div>
          </li>
          <li>
            <div class="post">
              <div class="post-img">
                <img
                  src="https://ecom.makgr.com/assets/images/blogs/15557542831-min.jpg"
                  alt=""
                />
              </div>
              <div class="post-details">
                <a href="#">
                  <h4 class="post-title">How to design effective arts?</h4>
                </a>
                <p class="date">Jan 03 - 2019</p>
              </div>
            </div>
          </li>
          <li>
            <div class="post">
              <div class="post-img">
                <img
                  src="https://ecom.makgr.com/assets/images/blogs/15542700322-min.jpg"
                  alt=""
                />
              </div>
              <div class="post-details">
                <a href="#">
                  <h4 class="post-title">How to design effective arts?</h4>
                </a>
                <p class="date">Jan 03 - 2019</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tags">
        <h4 class="title">Tags</h4>
        <ul class="tags-list">
          <li>
            <a href="#">Business </a>
          </li>
          <li>
            <a href="#">Research </a>
          </li>
          <li>
            <a href="#">Mechanical </a>
          </li>
          <li>
            <a href="#">Process </a>
          </li>
          <li>
            <a href="#">Innovation </a>
          </li>
          <li>
            <a href="#">Engineering </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BlogSidebar;
