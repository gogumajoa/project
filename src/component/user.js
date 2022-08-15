/*

//user.js (Redux module)

//API통신을 통해 서버에 id,pwd를 제공하고 유저 정보와 토큰을 받아 저장
const loginDB = (Id, password) => {
    return function (dispatch, getState, { history }) {
      axios({
        method: "post",
        url: "http://43.200.205.215:8080/swagger-ui/index.html#/auth-controller/loginUsingPOST",
        data: {
          Id: Id,
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          dispatch(
            setUser({
              Id: res.data.Id,
              nickname: res.data.nickname,
            })
          );
          const accessToken = res.data.token;
          //쿠키에 토큰 저장
          setCookie("is_login", `${accessToken}`);
          document.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  //회원가입 API
  const signUpDB = (Id, password, nickname) => {
    return function (dispatch, getState, { history }) {
      axios({
        method: "post",
        url: "http://43.200.205.215:8080/swagger-ui/index.html#/auth-controller/signupUsingPOST",
        data: {
          email: Id,
          password: password,
          nickname: nickname,
        },
      })
        .then((res) => {
          window.alert(res.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

//로그인 유지 API
//서버에서 토큰을 받아 유효성 검증 후 사용자 정보를 내려주어 로그인 상태 유지
const loginCheckDB = () => {
    return function (dispatch, getState, { history }) {
      const token = getCookie("is_login");
      axios({
        method: "post",
        url: "http://43.200.205.215:8080/swagger-ui/index.html#/auth-controller/reissueUsingPOST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => { 
          dispatch(
            setUser({
              email: res.data.email,
              nickname: res.data.nickname,
            })
          );
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    };
  };*/