/// 此文件用于演示传统class写法的复杂状态管理
///
import React, { Component } from 'react';

type LoginData = {
    username: string;
    password: string;
    token: string;
    loging: boolean;
    prefix: string;
    suffix: string;
    nickname: string;
    avatar: string;
    email: string;
    phone: string;
    status: string;
}

enum LoginSituations {
    Login = 'Login',
    Logout = 'Logout',
    Register = 'Register',
    ForgetPassword = 'ForgetPassword',
    ResetPassword = 'ResetPassword',
    ChangePassword = 'ChangePassword',
    ChangeEmail = 'ChangeEmail',
    ChangePhone = 'ChangePhone',
    ChangeNickname = 'ChangeNickname',
    ChangeAvatar = 'ChangeAvatar',
    ChangeStatus = 'ChangeStatus',
    ChangePrefix = 'ChangePrefix',
    ChangeSuffix = 'ChangeSuffix',
    ChangeToken = 'ChangeToken',
    ChangeUsername = 'ChangeUsername',
}

type Action = {
    type: LoginSituations,
    data: Partial<LoginData>
}

class ComplexState extends Component {
    state: LoginData = {
        username: '',
        password: '',
        token: '',
        loging: false,
        prefix: '',
        suffix: '',
        nickname: '',
        avatar: '',
        email: '',
        phone: '',
        status: '',
    }

    update = (action: Action) => {
        switch (action.type) {
            case LoginSituations.ChangeAvatar:
            case LoginSituations.Login:
                this.setState({ ...this.state, ...action.data });
                break;
            default:
                return;
        }
    }

    componentDidMount() {
        if (this.state.status === 'just loaded') {
            console.log('just loaded');
            this.update({
                type: LoginSituations.Login,
                data: {
                    username: 'username',
                    password: 'password',
                    status: 'start to login'
                }
            });
        }
    }

    whileClick = () => {
        this.update({
            type: LoginSituations.Login,
            data: {
                username: 'username',
                password: 'password',
                status: 'start to login'
            }
        });
    }

    render() {
        return (
            <div>
                <h1>ComplexState</h1>
                <input type="text" name='account' />
                <input type="password" name='password' />
                <button onClick={this.whileClick}>
                    Log In
                </button>
            </div >
        )
    }
}

export default ComplexState;

