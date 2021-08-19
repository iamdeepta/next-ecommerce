import Rater from 'react-rater';

const Punctuation = ({ punctuations }) => {
  return (
    <form className="product-punctuation" action="">
      <div className="product-punctuation__values">
        <h3>4.5</h3>
        <Rater total={5} interactive={false} rating={2} />
        <p><i className="icon-avatar"></i>81 all opinions</p>
      </div>
      
      <div className="product-punctuation__rates">
        <ul className="punctuations-lists">
          <li className="punctuation-item">
             <label for="huey">
              <Rater total={1} interactive={false} rating={1} />
              <span>1</span>
              <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
              <input type="radio" id="huey" className="checkbox__check" name="drone" value="huey"/>
             </label>
          </li>
          <li className="punctuation-item">
             <label for="huey">
              <Rater total={1} interactive={false} rating={1} />
              <span>2</span>
              <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
              <input type="radio" id="huey" className="checkbox__check" name="drone" value="huey"/>
             </label>
          </li>
          <li className="punctuation-item">
             <label for="huey">
              <Rater total={1} interactive={false} rating={1} />
              <span>3</span>
              <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
              <input type="radio" id="huey" className="checkbox__check" name="drone" value="huey"/>
             </label>
          </li>
          <li className="punctuation-item">
             <label for="huey">
              <Rater total={1} interactive={false} rating={1} />
              <span>4</span>
              <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
              <input type="radio" id="huey" className="checkbox__check" name="drone" value="huey"/>
             </label>
          </li>
          <li className="punctuation-item">
             <label for="huey">
              <Rater total={1} interactive={false} rating={1} />
              <span>5</span>
              <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
              <input type="radio" id="huey" className="checkbox__check" name="drone" value="huey"/>
             </label>
          </li>
        </ul>
      </div>
      <div className="punctuation-btn-wrapper">
          <textarea placeholder="Write your review"></textarea>
          <button type="submit" className="btn btn--rounded btn--yellow">Add Review</button>
      </div>
    </form>
  );
};
  
export default Punctuation;
    