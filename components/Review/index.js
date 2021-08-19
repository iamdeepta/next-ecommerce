import Rater from 'react-rater';

const review = ({ punctuations }) => {
    return (

        <div className="product-punctuation__values">
            <Rater total={5} interactive={false} rating={2} />
        </div>
    );
};

export default review;
