import { observer } from 'mobx-react-lite';
import { makeAutoObservable, runInAction } from 'mobx';
import { useContext, createContext, useEffect } from "react";

// 定义登录数据类型
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

class LoginStore implements LoginSituations {
    username = ''
    password = ''
    token = ''
    loging = false
    prefix = ''
    suffix = ''
    nickname = ''
    avatar = ''
    email = ''
    phone = ''
    status = ''
    constructor() {
        makeAutoObservable(this);
    }
    login(): void { }
    logout(): void { }
    load(): void { }
    register(): void { }
    forgetPassword(): void { }
    resetPassword(): void { }
    changePassword(): void { }
    changeEmail(): void { }
    changePhone(): void { }
    changeNickname(): void { }
    changeAvatar(): void { }
    changeStatus(): void { }
    changePrefix(): void { }
    changeSuffix(): void { }
    changeToken(): void { }
    changeUsername(): void { }
}

interface LoginSituations {
    load(): void
    login(): void;
    logout(): void;
    register(): void;
    forgetPassword(): void;
    resetPassword(): void;
    changePassword(): void;
    changeEmail(): void;
    changePhone(): void;
    changeNickname(): void;
    changeAvatar(): void;
    changeStatus(): void;
    changePrefix(): void;
    changeSuffix(): void;
    changeToken(): void;
    changeUsername(): void;
}

const login_store = new LoginStore();
// 使用示例
export const LoginPage = observer(() => {
    useEffect(() => {
        if (login_store?.status === 'just loaded') {
            console.log('just loaded');
            /// 那么此处代码仅仅写了接口代码，而不暴露具体的逻辑代码在UI组件中
            /// 使得UI组件更加简洁，逻辑更加清晰
            login_store.load();
        }
    }, [login_store]);
    return (
        <div>
            <h1>ComplexState</h1>
            <input type="text" name='account' />
            <input type="password" name='password' />
            {/* 在UI的响应式中，同样做到简洁实现 */}
            <button onClick={login_store.login}>Log In</button>
        </div>
    )
}) 
