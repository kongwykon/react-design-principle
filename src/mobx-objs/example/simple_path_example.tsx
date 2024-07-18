import { makeAutoObservable } from 'mobx';
import React from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite';
// 管理data的类
class ExampleMobx {
    constructor() {
        makeAutoObservable(this);
    }
    boo: boolean = false

    data: {} = {}

    setBooTrue() {
        this.boo = true
    }

    setDate(data: any) {
        this.data = data
    }

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Example = observer(
    () => {
        const exampleMobx = useLocalObservable(() => new ExampleMobx())
        return (
            <div>
                {exampleMobx.boo}

                <button onClick={() => {
                    exampleMobx.setDate('abc');
                }}></button>

                <Son exampleMobx={exampleMobx} />
            </div>
        )
    }
)

const Son = observer(
    ({ exampleMobx }: { exampleMobx: ExampleMobx }) => {
        return (
            <div>
                <button onClick={() => { exampleMobx.setBooTrue(); }}></button>
            </div>
        )
    }
)