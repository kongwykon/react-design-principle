//可以让父组件获取并执行子组件内某些自定义函数(方法)

import React, { useRef, useImperativeHandle, useLayoutEffect, forwardRef } from 'react';

function Child(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        value: 'hello world',
    }));
    useLayoutEffect(() => {
        bindRef = inputRef;
    }, [inputRef.current])
    return <input ref={inputRef} />;
}

function Parent() {
    const childRef = useRef(null);
    const handleClick = () => {
        childRef.current.focus();
        console.log(childRef.current.value);
    };
    return (
        <div>
            <Child ref={childRef} />
            <button onClick={handleClick}>focus</button>
        </div>
    );
}

// now you can use bindRef means inputRef at everywhere
export let bindRef = null;

function example() {
    return (
        <Parent />
    )
}
