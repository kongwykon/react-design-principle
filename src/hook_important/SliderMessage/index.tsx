

// everything can be hookable
import React, { useState, useEffect, useImperativeHandle, useLayoutEffect, useRef, forwardRef, } from 'react';

// SliderMessage

// the Component at the Top layer in App

const SliderMessage = forwardRef((props, ref) => {
    // 创建一个ref来引用组件实例
    useImperativeHandle(ref, () => ({
        show: () => {
            console.log('show');
        },
        hide: () => {
            console.log('hide');
        },
    }));

    return (
        <div>
            <h1>SliderMessage</h1>
        </div>
    );
});

// 创建并导出一个ref
export const sliderMessageRef = React.createRef<{
    show: () => void;
    hide: () => void;
}>();

function show() {
    sliderMessageRef.current!.show();
}
function hide() {
    sliderMessageRef.current!.hide();
}

function example() {
    return (
        <div>
            <SliderMessage ref={sliderMessageRef} />
            <button onClick={show}>show</button>
            <button onClick={hide}>hide</button>
        </div>
    );
}

// hope to export direct api for every corner component code
// use useImperativeHandle to export api
