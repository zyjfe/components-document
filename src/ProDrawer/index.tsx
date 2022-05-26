
import React, { useMemo, useState } from 'react';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';

export type ProDrawerProps = DrawerProps & {
    trigger?: JSX.Element;
    onVisibleChange?: (visible: boolean) => void;
}
const ProDrawer: React.FC<ProDrawerProps> = (props) => {
    const { children, trigger, onVisibleChange } = props;
    const [visible, setVisible] = useState(false);

    const triggerDom = useMemo(() => {
        if (!trigger) {
            return null;
        }
        return React.cloneElement(trigger, {
            key: 'trigger',
            ...trigger.props,
            onClick: async (e: any) => {
                setVisible(true);
                onVisibleChange && onVisibleChange(true);
                trigger.props?.onClick?.(e);
            }
        })
    }, [trigger]);
    return (
        <>
            <Drawer
                visible={visible}
                onClose={() => {
                    setVisible(!visible);
                    onVisibleChange && onVisibleChange(false);
                }}
                {...props}
            >
                {children}
            </Drawer>
            {triggerDom}
        </>
    )
}
export default ProDrawer;