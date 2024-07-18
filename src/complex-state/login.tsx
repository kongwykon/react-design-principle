import { useEffect, useReducer, useState } from "react";

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

function useOnLogin() {
    const init = {
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
    const [data, update] = useReducer(
        (state: LoginData, action: Action) => {
            // 策略模式
            switch (action.type) {
                case LoginSituations.ChangeAvatar:
                    return { ...state, ...action.data }
                case LoginSituations.Login:
                    return { ...state, ...action.data }
                default:
                    return state
            }
        },
        init
    );
    return { data, update }
}


/// 
function ComplexState() {
    const { data, update } = useOnLogin();
    useEffect(() => {
        if (data.status === 'just loaded') {
            console.log('just loaded');
            update({
                type: LoginSituations.Login,
                data: {
                    username: 'username',
                    password: 'password',
                    status: 'start to login'
                }
            });
        }
    }, [data.status])
    return (
        <div>
            <h1>ComplexState</h1>
            <input type="text" name='account' />
            <input type="password" name='password' />

            {/* 两种写法，视篇幅大小选择 */}
            {/* 1. 在UI的响应式中，同样做到简洁实现 */}
            <button onClick={() => void update({
                type: LoginSituations.Login,
                data: {
                    username: 'username',
                    password: 'password',
                    status: 'start to login'
                }
            })}>
                Log In
            </button>

            {/* 2. 这样写更为简洁，逻辑更为清晰 */}
            <button onClick={() => void whileClick({ update })}>
                Log In
            </button>

        </div >
    )
}

// 那么对应这个组件的函数可以写在同目录下的一个函数集合文件中，比如functions.ts
function whileClick({ update }: { update: (value: Action) => void }) {
    update({
        type: LoginSituations.Login,
        data: {
            username: 'username',
            password: 'password',
            status: 'start to login'
        }
    })
}
