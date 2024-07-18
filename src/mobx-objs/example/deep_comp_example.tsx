import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite';
import { MobxObjectsManager, useManualRemove, withMobx } from '../mobx-manager'

// store 缓存
class MyHugeTable {
    constructor() {
        makeAutoObservable(this);
    }
    data = { data: { data: 'data' } }

    needStorage: string = '123'

}

// 全局引用对象
export const hugeTableData: MyHugeTable = MobxObjectsManager.get(MyHugeTable);

// withMobx确保能在初始化拥有新的 hugeTableData
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BigTable = withMobx(MyHugeTable,
    observer(() => {
        // 卸载时清空
        useManualRemove(MyHugeTable);
        return (
            <div>
                {hugeTableData.data.data.data}
                <Son />
                <_Son />
            </div>
        )
    }));

const Son = observer(() => {
    return (<div>{hugeTableData.data.data.data}</div>)
})

const _Son = observer(() => {
    return (<div>{hugeTableData.data.data.data}</div>)
})