import Layout from '../layouts/Main';
import Link from 'next/link';
import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import AppUrl from './AppUrl.js';


export default function RegisterPage() { 

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [type,setType]=useState("");

  let btn_background_customer = '';
  let btn_background_spm = '';

  if(type=='Customer'){
  btn_background_customer = {
    
    backgroundColor: '#4c8000'
  }
  btn_background_spm = {
    
    backgroundColor: 'black'
  }

}else if(type=='SPM'){
  btn_background_customer = {
    
    backgroundColor: 'black'
  }
  btn_background_spm = {
    
    backgroundColor: '#4c8000'
  }
}else{
  btn_background_customer = {
    
    backgroundColor: 'black'
  }
  btn_background_spm = {
    
    backgroundColor: 'black'
  }

}

  const router = useRouter();


  // function customer_type(e){

  //   setUserType(e.target.value='Customer');
  // }

  // function spm_type(){

  //   setUserType(e.target.value='SPM');
  // }

async function signUp(){

  let item ={name, phone, email, password, type};

  //console.log(item);
  if(name!='' && phone!='' && email!='' && password!='' && type!=''){
  let result = await fetch(AppUrl.base_url+"register",{
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      "Content-Type": 'application/json',
      "Accept" : 'application/json'
    }
  });
  result = await result.json();
  //console.log("result", result);
  //toast.success(result.success);
  if(result.success){
    router.push('/verification');
    setTimeout(function(){
      toast.success("Please check your sms");
    },1000);

  }
  toast.error(result.error);
}else{

  toast.error("Please fill up all the fields");
}

}
return(
  <Layout>
    <ToastContainer />
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/login">
            <a><i className="icon-left"></i> Back to Login</a>
          </Link>
        </div>
        <div className="form-block">
          <div className="form-logo">
            <img className="rs-l" src="/images/logo.png" alt="logo" />
          </div>
          <h2 className="form-block__title">Registration as a</h2>
          <div className="reg-log-role">
          <button className="cus" onClick={(e)=>setType(e.target.value='Customer')} style={btn_background_customer}>Customer</button><button className="or">OR</button><button className="ser" onClick={(e)=>setType(e.target.value='SPM')} style={btn_background_spm}>Service point manager</button>
          </div>          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" value={password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder="Password" />
            </div>

            <div className="form__input-row">
              <input type="hidden" className="form__input" name="type" value={type} placeholder="user type" />
            </div>

            {/* <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div> */}
            {/* <div className="form__btns">
              <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
              <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
            </div> */}
            <button type="button" className="btn btn--rounded btn--yellow btn-submit" onClick={signUp}>Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
}
  
//export default RegisterPage
  