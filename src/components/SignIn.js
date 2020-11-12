import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'



class SignInModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            erroeMessage: ""
        };
    }

    handleSignIn = () => {
        const signInfo = {
            email: this.state.email,
            password: this.state.password,
            errorMessage: this.state.erroeMessage
        }


        if (!signInfo.email.length || !signInfo.password.length) {
            this.setState({
                erroeMessage: 'e-mail과 PW를 입력하세요.'
            })
        }
        else {
            axios.post('http', signInfo)
                .then(res => {
                    this.props.handleResponseSuccess()  //! 시우님께 어떤 것으로 구현했는지 물어보기
                })
                .catch(error => {
                    this.setState({
                        erroeMessage: this.state.erroeMessage
                    })
                })
        }
    }

    render() {
        return (
            <div className='modal hidden'>


                <div className='modal_overlay'></div>
                <div className='modal_content'>
                    <h1>너의 시간을 겟~⭐️</h1>

                    <div className='container'>

                        <div className='signUp_div'>
                            <NavLink to='/signup' className='signUp_link'>아직 회원이 아니신가요?</NavLink>
                            {/* <div onClick={this.handleClick} onChange={this.moveSignUp} id="to_signUp">아직 회원이 아니신가요?</div> */}
                        </div>

                        {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}

                        <img id='sign_in_img' src='https://t1.daumcdn.net/cfile/tistory/992C413B5D2ACF7C1D'></img>


                        <div className='container1'>

                            <div className='email_div'>
                                <span className='email_span'>e-mail</span>
                                <input type='email'></input>
                            </div>

                            <div className='PW_div'>
                                <span>PW</span>
                                <input type='password'></input>
                            </div>
                        </div>

                        <div className='findAccount_span'>
                            <span>
                                <NavLink to='/findaccount' className='findAccount_link'>e-mail | PW 찾기</NavLink>
                            </span>
                        </div>

                        <div>
                            <NavLink to="/todo">
                                <button className='loginButton'>로그인</button>
                            </NavLink>
                            <div>
                                <button className='loginButton'>Github 로그인</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default SignInModal;


