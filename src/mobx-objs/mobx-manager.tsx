import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export class MobxObjectsManager {
    private static __object: { [k in string]: any } = {}

    public static get<T>(classType: new(...args: any[]) => T, ...args: any[]): T {
        const name = classType.prototype.constructor.name;
        if (!MobxObjectsManager.__object[name]) {
            MobxObjectsManager.__object[name] = new classType(...args);
        }
        return MobxObjectsManager.__object[name];
    }

    public static remove(classType: new() => any) {
        const name = classType.prototype.constructor.name;
        if (!MobxObjectsManager.__object[name]) {
            return
        }
        MobxObjectsManager.__object[name] = null;
        delete MobxObjectsManager.__object[name];
    }
}

/**
 * a hook: 需要在父组件卸载的时候移除Mobx数据的时候
 */

export function useManualRemove(classType: new(...args: any[]) => any) {
    useEffect(() => {
        return () => MobxObjectsManager.remove(classType);
    }, [])
}

/**
 * 使用这个确保初始化组件有mobx对象
 */
export function withMobx<T>(classType: new(...args: any[]) => T, Comp: (...args: any) => JSX.Element) {
    MobxObjectsManager.get(classType);
    return Comp
}


export function mobxComp<PropsT, ClassName>(
    classType: new(...args: any[]) => ClassName
    , Comp: (props: PropsT) => JSX.Element) {
    return observer((props) => {
        useManualRemove(classType)
        return Comp(props as PropsT);
    })
}

