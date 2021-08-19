import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 
import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import AppUrl from './AppUrl.js';

const LoginPage = () => {

  const [phone,setPhone] = useState("");
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

  async function signIn(){

    let item ={phone, password, type};

  //console.log(item);
  if(phone!='' && password!='' && type!=''){
  let result = await fetch(AppUrl.base_url+"login",{
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
    router.push('/');
    setTimeout(function(){
      toast.success("Login Successful");
    },1000);

    localStorage.setItem("user-info",JSON.stringify(phone));

  }
  toast.error(result.error);
}else{

  toast.error("Please fill up all the fields");
}
  }
  //const { register, handleSubmit, errors } = useForm();

  // const onSubmit = async data => {
  //   const res = await postData(`${server}/api/login`, {
  //     number: data.number,
  //     password: data.password
  //   });
  // };

  return (
    <Layout>
      <ToastContainer/>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/">
              <a><i className="icon-left"></i> Back to Home</a>
            </Link>
          </div>

          <div className="form-block">
          <div className="form-logo">
            <img className="rs-l" src="/images/logo.png" alt="logo" />
          </div>
            <h2 className="form-block__title">Login as a</h2>
            <div className="reg-log-role">
          <button className="cus" onClick={(e)=>setType(e.target.value='Customer')} style={btn_background_customer}>Customer</button><button className="or">OR</button><button className="ser" onClick={(e)=>setType(e.target.value='SPM')} style={btn_background_spm}>Service point manager</button>
          </div>  
            
            <form className="form">
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="Phone Number" 
                  type="text" 
                  name="number"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />

              
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                
              </div>

              <input 
                  className="form__input" 
                  type="hidden" 
                  placeholder="Type" 
                  name="type"
                  value={type}
                />

              <div className="form__info">
                <div className="checkbox-wrapper">
                  {/* <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label> */}
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>

              <button type="button" className="btn btn--rounded btn--yellow btn-submit" onClick={signIn}>Sign in</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  