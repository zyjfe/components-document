import React, { useMemo, useState } from 'react';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';

export type ProModalProps = ModalProps & {
    trigger?: JSX.Element;
    onVisibleChange?: (visible: boolean) => void;
}
const ProModal: React.FC<ProModalProps> = (props) => {
    const { children, trigger, onOk, onVisibleChange } = props;
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
            <Modal
                visible={visible}
                onCancel={() => {
                    setVisible(false);
                    onVisibleChange && onVisibleChange(false);
                }}
                {...props}
                onOk={async (e) => {
                    await onOk?.(e);
                    setVisible(false);
                    onVisibleChange && onVisibleChange(false);
                }}
            >
                {children}
            </Modal>
            {triggerDom}
        </>
    )
}
export default ProModal;