import Link from "next/link";
const SaveBanner = () => {
  return (
    <section className="saveTime-Wrap">
      <div className="container">
        <div className="saveTime">
          <h2>We Save your serious</h2>
          <div id="flip">
            <div>
              <div>Time</div>
            </div>
            <div>
              <div>lifeStyle</div>
            </div>
            <div>
              <div>Everything</div>
            </div>
          </div>
          <Link href="#">
            <a>view pans</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaveBanner;
