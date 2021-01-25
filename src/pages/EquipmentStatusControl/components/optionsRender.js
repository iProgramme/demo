import { Button, Select, message, Input, Menu, Dropdown, Drawer, Divider, Cascader, Modal, Layout } from 'antd';
import { useState, useRef } from 'react';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;

const functions = {};
export const Options = (props) =>
(<Dropdown
    overlay={
        <Menu onClick={({ key }) => {
            functions[key](true);
            functions.setItem(props.item);
        }}>
            <Menu.Item key="edit">重启充电桩</Menu.Item>
            <Menu.Item key="setOfflineChargePileVisible">下线充电桩</Menu.Item>
            <Menu.Item key="shangxian">上线充电桩</Menu.Item>
            <Menu.Item key="yuancheng">远程控制</Menu.Item>
            <Menu.Item key="setConfigureVisible">配置</Menu.Item>
            <Menu.Item key="upgrade">升级</Menu.Item>
        </Menu>
    }
>
    <a>
        更多 <DownOutlined />
    </a>
</Dropdown>
)
// 下线充电桩
export const OfflineChargePileModal = () => {
    const [offlineChargePileVisible, setOfflineChargePileVisible] = useState(false);
    const [item, setItem] = useState(false);
    functions.setOfflineChargePileVisible = setOfflineChargePileVisible;
    functions.setItem = setItem;
    return <Modal
        width={640}
        bodyStyle={{
            padding: '32px 40px 48px',
        }}
        destroyOnClose
        title='下线充电桩'
        visible={offlineChargePileVisible}
        bodyStyle={{ background: "#f0f2f5" }}
    >
        <Layout>
            <Select defaultValue="lucy" onChange={() => {}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </Layout>
    </Modal>;
}
// 配置 modal
export const ConfigureModal = () => {
    const [configureVisible, setConfigureVisible] = useState(false);
    const [item, setItem] = useState(false);
    functions.setConfigureVisible = setConfigureVisible;
    functions.setItem = setItem;
    return <Modal
        width={640}
        bodyStyle={{
            padding: '32px 40px 48px',
        }}
        destroyOnClose
        title='配置'
        visible={configureVisible}
        bodyStyle={{ background: "#f0f2f5" }}
    >
        <Layout>
            让对方提供一回家考虑
            {JSON.stringify(item)}
        </Layout>
    </Modal>;
}