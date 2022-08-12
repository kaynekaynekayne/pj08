import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Auth = () => {
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [account, setAccount]=useState(true);
    const {login, signup, loginWithGoogle}=useAuth();

    const toggleAccount=()=>setAccount(prev=>!prev);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            if(account){
                await login(email, password);
            }else{
                await signup(email, password);
            }
        }catch(err){
            console.log(err.message); 
        }
    };
    
    const handleGoogleLogin=async(e)=>{
        e.preventDefault();
        try{
            await loginWithGoogle();
        } catch(err){
            console.log(err.message);
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                    type="submit"
                >{account ? "Log in" : "Sign up"}</button>
            </form>
            {account && 
                <div>
                    <button
                        type="submit"
                        onClick={handleGoogleLogin}
                    >google</button>
                </div>
            }
            <div>
                <span>{account ? "You don't have an account?" : "Do you already have an account?"}</span>
                <span onClick={toggleAccount}>{account ? "Sign up" : "Log in"}</span>
            </div>
        </section>
    );
};

export default Auth;