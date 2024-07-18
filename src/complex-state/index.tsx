import { useReducer, useState } from "react";


function ComplexState() {
    /// 说明：以下代码演示了如何在一个组件中多个state
    /// 同时需要响应的时候最好去选择使用一个reducer并且加上策略模式
    /// 使用多个 useReducer
    const [state1, setState1] = useState({})
    const [state2, setState2] = useState({})
    const [state3, setState3] = useState({})
    const [state4, setState4] = useState({})
    const [state5, setState5] = useState({})
    const [state6, setState6] = useState({})
    const [state7, setState7] = useState({})
    const [state8, setState8] = useState({})
    const [state9, setState9] = useState({})
    const [state10, setState10] = useState({})
    const [state11, setState11] = useState({})
    const [state12, setState12] = useState({})
    const [state13, setState13] = useState({})
    const [state14, setState14] = useState({})
    const [state15, setState15] = useState({})
    //              |
    //              |
    //              |
    //              ⬇️
    const [dispatch1, setDispatch1] = useReducer(
        (state: any, action: any) => {
            switch (action.type) {
                case 'add':
                    return { ...state, ...action.payload }
                case 'delete':
                    return { ...state, ...action.payload }
                default:
                    return state
            }
        },
        {}
    );
    //              |
    //              |
    //              |
    //              ⬇️
    const { dispatch2, setDispatch2 } = useComplexStateAsReducer();
}

function useComplexStateAsReducer() {
    const [dispatch2, setDispatch2] = useReducer(
        (state: any, action: any) => {
            // 策略模式
            switch (action.type) {
                case 'add':
                    return { ...state, ...action.payload }
                case 'delete':
                    return { ...state, ...action.payload }
                default:
                    return state
            }
        },
        {}
    );
    return { dispatch2, setDispatch2 }
}
