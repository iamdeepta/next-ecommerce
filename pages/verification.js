import Layout from '../layouts/Main';
import Link from 'next/link';
import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import AppUrl from './AppUrl.js';


export default function VerificationPage() { 

  const [code,setCode] = useState("");


  

  const router = useRouter();


  
async function verify(){

  let item ={code};

  //console.log(item);
  if(code!=''){
  let result = await fetch(AppUrl.base_url+"account/verify",{
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
    router.push('/login');
    setTimeout(function(){
    toast.success(result.success);
},1000);
  }
  toast.error(result.error);
}else{

  toast.error("Please enter the code you received");
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
          <h2 className="form-block__title">Verify yourself</h2>
                   
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" value={code} onChange={(e)=>setCode(e.target.value)} placeholder="Code" type="text" />
            </div>
      
            <button type="button" className="btn btn--rounded btn--yellow btn-submit" onClick={verify}>Verify</button>

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
  