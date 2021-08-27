import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import {AppUrl} from '../../pages/AppUrl.js';

export const CustomOrder = () => {

  const router = useRouter();

  const [co_name,setCoName] = useState("");
  const [co_phone,setCoPhone] = useState("");
  const [co_image,setCoImage] = useState("");
  
  const co_user_phone = typeof window !== 'undefined' ? localStorage.getItem("user-info") : null;


  async function submit_order(){

    if(localStorage.getItem("user-info")){

      if(co_name!='' && co_phone!='' && co_image!='' && co_user_phone!=''){

      const formData = new FormData();
      formData.append('co_name',co_name);
      formData.append('co_phone',co_phone);
      formData.append('co_image',co_image);
      formData.append('co_user_phone',co_user_phone);

      let result = await fetch(AppUrl.base_url+"addcustomorder",{
        method: 'POST',
        body: formData
      });
      result = await result.json();

      console.log(formData);

      if(result.success){

        setCoName("");
        setCoPhone("");
        setCoImage("");
      
        toast.success(result.success);

  
      }else{
      toast.error("Something went wrong. Please try again.");
      }
    
    }else{
      toast.error("Please enter name and number and select a file");
    }
    }else{

      router.push('/login');
      setTimeout(function(){
        toast.error("Please login first");
    },1000);
    }
  }
  return (
    <div className="container">
      <ToastContainer/>
      <div className="customOrder">
        <div className="heading">
          <h2>To order quickly now</h2>
        </div>
        <form className="customOrder-list">
          <div>
            <input
              className="customOrder-item customOrder-itemOne"
              type="text"
              placeholder="Your Fullname"
              value={co_name}
              onChange={(e)=>setCoName(e.target.value)}
              required
            />
            <input
              className="customOrder-item customOrder-itemTwo"
              type="text"
              placeholder="Your Phone Number"
              value={co_phone}
              onChange={(e)=>setCoPhone(e.target.value)}
              required
            />
            <input
              className="customOrder-item customOrder-itemTwo"
              type="hidden"
              placeholder="User Phone Number"
              value={co_user_phone}
              required
            />
            
          </div>
          <p>Please upload your shopping list</p>
          <div class="form-group file-area">
            <input
              type="file"
              name="co_image"
              id="co_image"
              
              onChange={(e)=>setCoImage(e.target.files[0])}
              required="required"
              multiple="multiple"
            />
            <div class="file-dummy">
              <div class="success">
                Great, your files are selected. Keep on.
              </div>
              <div class="default">Please Upload product List Image</div>
            </div>
          </div>
          <button className="CO-btn" type="button" onClick={submit_order}>
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};
export default CustomOrder;
