import {BrowserRouter,  Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import {useState} from 'react';
import AuthService from '../services/auth.service';
import { getBottomNavigationUtilityClass } from '@mui/material';
import axios from 'axios'

//state 생성 후 state를 value로 넣어준다.

export default function Login() {
  const navigate=useNavigate();
  const [loginId, setId] = useState(''); //const [state저장변수, state 갱신 함수 ] = useState(상태 초기 값);
  const [passwd, setPassword] = useState('');

  //asyns : 비동기함수
 const handleLogin = async (e) => {
    e.preventDefault();
    //e.preventDefault는 고유 동작을 중단, 사실 이건 잘 모르겠는데 예시코드에 있길래 일단 그대로...
    try{
        await AuthService.login(loginId, passwd).then( //이메일 비밀번호 매개변수로 로그인, 백엔드 정보 일치시
            () => {
              <Link to="/Join"></Link>
              //navigate("/"); //로그인 성공시 메인 페이지 이동 일단은 회원가입으로 가도록 해놧음
              alert('로그인에 성공하셨습니다.');
              window.location.reload();
            },
            (error) => {
              console.log(error); 

            }
          );
        } catch (err) {
          console.log(err);
      
        }
      };
    	

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

                    <div>
                        <Link to="/Join" className='join'>회원가입</Link>
                        <a href="/" className='find'>아이디/비밀번호 찾기</a>

                    </div>

                    </div>
                    <div style={{paddingTop: 60}}>
                        <button className='Log_btn'   //로그인 버튼
                        onClick={handleLogin}
                        /*onClick={()=>{
                          axios.post("http://43.200.205.215:8080/auth/login"),{
                            loginId: loginId,
                            passwd : passwd
                          .then((res)=>{
                          console.log(res);
                          navigate('/Main')
                        })
                        .catch((error)=>{console.log(error);})
                          }} 
                      }*/
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

