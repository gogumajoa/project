import {useState} from 'react';
import {BrowserRouter, useNavigate, Link } from 'react-router-dom';

function Login2() {
  
    const [loginId, setId] = useState(''); //const [state저장변수, state 갱신 함수 ] = useState(상태 초기 값);
    const [passwd, setPassword] = useState('');

    return(
        
        <div className="Login">      
            <form>
                <h1 className='Logo'>
                    <img src="img/Logo.png"/>
                </h1>
                <div className='section1'>  
                    <div>
                        <input
                            type='text' 
                            onChange={(e) => {
                                setId(e.target.value); //Id
                              }}
                            placeholder='아이디를 입력하세요'
                            className='input_id' 
                            value={loginId}
                            />
                    </div>
                    <div>
                        <input
                            type='password' 
                            onChange={(e) => {
                                setPassword(e.target.value); 
                              }}
                            placeholder='비밀번호를 입력하세요'
                            className='input_password' 
                            value={passwd} 
                            
                            />
                        
                    </div>
                    <div>
                        <Link to="/Join" className='join'>회원가입</Link>
    
                        <a href="/" className='find'>아이디/비밀번호 찾기</a>

                    </div>
                    <div style={{paddingTop: 60}}>
                        <button className='Log_btn'   //로그인 버튼
                        //onSubmit={handleLogin}
                        style={{
                            width: 320,
                            height: 45,
                            backgroundColor: '#1F3E1B',
                            borderRadius: 10,
                            fontSize : 18,
                            color: 'white'
                        }} >로그인</button>
                    </div>
                </div>
            </form>
        </div>
        
    );
};

export default Login2;
