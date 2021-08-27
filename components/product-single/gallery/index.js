import {useRouter} from 'next/router';
import { useState,useEffect } from "react";
import {AppUrl} from '../../../pages/AppUrl.js';
import YoutubeEmbed from "./YoutubeEmbed";
const Gallery = ({ images }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  const router = useRouter();

  var path = router.query.pid;

  const [data1,setData1] = useState([]);
  const [image_all,setImageAll] = useState('');
  useEffect(async ()=>{

    let result1 = await fetch(AppUrl.base_url+"singleproduct/"+path,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result1 = await result1.json();
    setData1(result1);
    setImageAll(result1['0'].img1);
  },[]);

  let image1 = '';
  let image2 = '';
  let image3 = '';
  let image4 = '';
  let image5 = '';
  //let image_all = '';

  data1.map((item)=>
   image1 = item.img1);

   data1.map((item)=>
   image2 = item.img2);

   data1.map((item)=>
   image3 = item.img3);

   data1.map((item)=>
   image4 = item.img4);

   data1.map((item)=>
   image5 = item.img5);


   function showImage(img){
    
    setImageAll(img);
   }

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {/* {images.map((image, index) => */}
         {/* {images.slice(0, 5).map((image, index) => */}
        {/* ( */}
          {/* <div key={index} className="product-gallery__thumb"> */}
          <div className="product-gallery__thumb">
            {/* <img className="pro-img" src={images} onClick={() => setSelectedPhoto(index)} alt="img" /> */}
            <img className="pro-img" src={AppUrl.base_url+"storage/app/"+image1} alt="img" onClick={()=>showImage(image1)} />
          </div>
        {/* ))} */}
        <div className="product-gallery__thumb">
            {/* <img className="pro-img" src={images} onClick={() => setSelectedPhoto(index)} alt="img" /> */}
            <img className="pro-img" src={AppUrl.base_url+"storage/app/"+image2} alt="img" onClick={()=>showImage(image2)} />
          </div>
          <div className="product-gallery__thumb">
            {/* <img className="pro-img" src={images} onClick={() => setSelectedPhoto(index)} alt="img" /> */}
            <img className="pro-img" src={AppUrl.base_url+"storage/app/"+image3} alt="img" onClick={()=>showImage(image3)} />
          </div>
          <div className="product-gallery__thumb">
            {/* <img className="pro-img" src={images} onClick={() => setSelectedPhoto(index)} alt="img" /> */}
            <img className="pro-img" src={AppUrl.base_url+"storage/app/"+image4} alt="img" onClick={()=>showImage(image4)} />
          </div>
          <div className="product-gallery__thumb">
            {/* <img className="pro-img" src={images} onClick={() => setSelectedPhoto(index)} alt="img" /> */}
            <img className="pro-img" src={AppUrl.base_url+"storage/app/"+image5} alt="img" onClick={()=>showImage(image5)} />
          </div>
      </div>

      <div className="product-gallery__image">
        {/* <img src={images[selectedPhoto]} alt="img" /> */}
        <img src={AppUrl.base_url+"storage/app/"+image_all} alt="img" style={{objectFit:'contain'}} />
        <button onClick={toggle} className="pro-video-btn">🔴Product Demo</button>
      </div>
      <div className="proudct-video" style={{
        display: showMe?"block":"none"
      }}>
        <button className="crossBtn" onClick={toggle}><i className="icon-cancel"></i></button>
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
    </section>
  );
};

export default Gallery;
