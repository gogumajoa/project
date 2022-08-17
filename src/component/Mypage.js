import {BrowserRouter, useNavigate, Link } from 'react-router-dom';
import "./Mypage.css";

function Mypage() {

    return(
        <div className="Join">      
            <form>
                <div className='top'>
                        <Link to="/Mypage">MYPAGE</Link>
                        <Link to="/Login">LOGIN</Link>
                        <Link to="/Join">JOIN</Link>
                </div>
                <h1 className='Logo'>
                    <img src="img/Logo.png"/>
                </h1>
            </form>
        </div>
    );
};

export default Mypage;
