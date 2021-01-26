import { Select, Form, Input, Menu, Dropdown, Modal, Layout, Switch } from 'antd';
import React, { useState, useRef } from 'react';
import { DownOutlined } from '@ant-design/icons';
import fieldName from '@/common/fieldName';
import ProTable from '@ant-design/pro-table';
const { Option } = Select;

const functions = {};
// 操作下拉框
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
            <Menu.Item key="setUpgradeVisible">升级</Menu.Item>
        </Menu>
    }
>
    <a>
        更多 <DownOutlined />
    </a>
</Dropdown>
)

// 下线原因
const offlineReason = [
    { label: '升级改造', value: 'upgrade' },
    { label: '故障维修', value: 'failRepair' },
    { label: '运营停用', value: 'operateStop' },
    { label: '周期巡检', value: 'cycleCheck' },
    { label: '年检', value: 'yearCheck' },
]
// 下线充电桩 modal
export const OfflineChargePileModal = () => {
    const [offlineChargePileVisible, setOfflineChargePileVisible] = useState(false);
    const [item, setItem] = useState(false);
    functions.setOfflineChargePileVisible = setOfflineChargePileVisible;
    functions.setItem = setItem;

    const formRef = React.createRef();
    const handleOk = () => {
        setOfflineChargePileVisible(false)
    }
    const handleCancel = () => {
        setOfflineChargePileVisible(false)
    }

    return <Modal
        width={320}
        bodyStyle={{
            padding: '32px 40px 48px',
        }}
        destroyOnClose
        title='下线充电桩'
        visible={offlineChargePileVisible}
        bodyStyle={{ background: "#f0f2f5" }}
        onOk={handleOk}
        onCancel={handleCancel}
    >
        <Form ref={formRef} name="control-ref" onFinish={() => { }}>
            <Form.Item name="gender" label="下线原因">
                <Select onChange={() => { }}>
                    {
                        offlineReason.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)
                    }
                </Select>
            </Form.Item>
        </Form>
    </Modal>;
}


// 工作模式
const workMode = [
    { label: '扫码充电', value: 'aaa' },
    { label: '扫码充电1', value: 'aaa1' },
    { label: '扫码充电2', value: 'aaa2' },
    { label: '扫码充电3', value: 'aaa3' },
    { label: '扫码充电4', value: 'aaa4' },
]
// 配置 modal
export const ConfigureModal = () => {
    const [configureVisible, setConfigureVisible] = useState(false);
    const [item, setItem] = useState(false);
    functions.setConfigureVisible = setConfigureVisible;
    functions.setItem = setItem;

    const formRef = React.createRef();
    const handleOk = () => {
        setConfigureVisible(false)
    }
    const handleCancel = () => {
        setConfigureVisible(false)
    }

    return <Modal
        width={320}
        bodyStyle={{
            padding: '32px 40px 48px',
        }}
        destroyOnClose
        title='配置'
        visible={configureVisible}
        bodyStyle={{ background: "#f0f2f5" }}
        onOk={handleOk}
        onCancel={handleCancel}
    >
        <Form ref={formRef} name="control-ref" onFinish={() => { }}>
            <Form.Item name="gender" label="工作模式">
                <Select onChange={() => { }}>
                    {
                        workMode.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name="gender3" label="充电截止SOC">
                <Input suffix="%" />
            </Form.Item>
            <Form.Item name="gender2" label="断网后是否结束充电">
                <Switch checkedChildren="是" unCheckedChildren="否" defaultChecked />
            </Form.Item>
            <Form.Item name="gender1" label="断网后停止充电时间">
                <Input suffix="秒" placeholder="0-600" />
            </Form.Item>
        </Form>
    </Modal>;
}


// 升级 modal 的 columns
const upgradeColumns = [
    {
        title: fieldName.versionName,
        dataIndex: 'versionName',
        render: val => val,
    },
    {
        title: fieldName.fileVersion,
        dataIndex: 'fileVersion',
        render: val => val,
    },
    {
        title: fieldName.publishDate,
        dataIndex: 'publishDate',
        render: val => val,
    },
    {
        title: fieldName.upgradePackageAttr,
        dataIndex: 'upgradePackageAttr',
        render: val => val,
    },
    {
        title: fieldName.updateDetail,
        dataIndex: 'updateDetail',
        render: val => val,
    },
    {
        title: fieldName.applicableHardwareVersion,
        dataIndex: 'applicableHardwareVersion',
        render: val => val,
    },
    {
        title: fieldName.applicableSoftwareVersion,
        dataIndex: 'applicableSoftwareVersion',
        render: val => val,
    },
    {
        title: '推送历史',
        // dataIndex: 'aaa',
        render: val => val,
    },
    {
        title: '是否设为默认更新版本',
        // dataIndex: 'aaa',
        render: val => val,
    },
]
// 升级 modal
export const UpgradeModal = () => {
    const [upgradeVisible, setUpgradeVisible] = useState(false);
    const [item, setItem] = useState(false);
    functions.setUpgradeVisible = setUpgradeVisible;
    functions.setItem = setItem;

    const handleOk = () => {
        setUpgradeVisible(false)
    }
    const handleCancel = () => {
        setUpgradeVisible(false)
    }
    return (
        <Modal
            width={1000}
            bodyStyle={{
                padding: '32px 40px 48px',
            }}
            destroyOnClose
            title='升级'
            visible={upgradeVisible}
            bodyStyle={{ background: "#f0f2f5" }}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <ProTable
                columns={upgradeColumns}
                request={(params, sorter, filter) => {
                    console.log(params, sorter, filter);
                    // return Promise.resolve({
                    //     data: tableListDataSource,
                    //     success: true,
                    // });
                }}
                rowKey="outUserNo"
                pagination={{
                    showQuickJumper: true,
                }}
                toolBarRender={false}
                search={false}
            />
        </Modal>
    )
}