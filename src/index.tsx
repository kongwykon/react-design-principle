import React from "react";
import ReactDOM from "react-dom";
import { UseStateExample } from './base/component/UseState'
import { UseEffectExample } from './base/component/UseEffect'
import { UseStopwatchForExample } from "./base/component/useReducer";
import { UseForwardRefForMain } from "./base/component/forwardRef";
import SendCompAsRefForMain from "./base/component/sendCompAsRef";
import UseRefForMain from "./base/component/useRef";
import ForModalGlobalForMain from "./base/component/ForModalGlobal";
import AppReactTracked from "./base/component/ReactTracked/app";
import { RefOnCompUsageForMain } from "./base/refForAComp.tsx/refOnCompUsage";
import { myTimer, TimerView } from "./mobx-objs/example/index";
import UseLayoutEffectExample from "./base/component/UseLayoutEffectAndOther";
import CheckAppendListRerender from "./base/component/TEST_AppendListRerender";
import AppWithRefToFunction from "./base/refExposeMethod/calendar";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#D6E8F7ed', width: '100%', flex: 1 }}>
            <h6>This is base</h6>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <UseStateExample />
                <UseEffectExample />
                <UseStopwatchForExample />
                <SendCompAsRefForMain />
                <UseRefForMain />
                <UseForwardRefForMain />
                <ForModalGlobalForMain />
                <RefOnCompUsageForMain />
                <AppReactTracked />
                <TimerView timer={myTimer} />
                <UseLayoutEffectExample />
                <CheckAppendListRerender />
                <AppWithRefToFunction />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
