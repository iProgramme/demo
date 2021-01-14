import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Input, Drawer, Divider } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
// import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
/**
 * 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
    const hide = message.loading('正在添加');

    try {
        await addRule({ ...fields });
        hide();
        message.success('添加成功');
        return true;
    } catch (error) {
        hide();
        message.error('添加失败请重试！');
        return false;
    }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async (fields) => {
    const hide = message.loading('正在配置');

    try {
        await updateRule({
            name: fields.name,
            desc: fields.desc,
            key: fields.key,
        });
        hide();
        message.success('配置成功');
        return true;
    } catch (error) {
        hide();
        message.error('配置失败请重试！');
        return false;
    }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
    const hide = message.loading('正在删除');
    if (!selectedRows) return true;

    try {
        await removeRule({
            key: selectedRows.map((row) => row.key),
        });
        hide();
        message.success('删除成功，即将刷新');
        return true;
    } catch (error) {
        hide();
        message.error('删除失败，请重试');
        return false;
    }
};

const TableList = () => {
    /**
     * 新建窗口的弹窗
     */
    const [createModalVisible, handleModalVisible] = useState(false);
    /**
     * 分布更新窗口的弹窗
     */

    const [updateModalVisible, handleUpdateModalVisible] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const actionRef = useRef();
    const [currentRow, setCurrentRow] = useState();
    const [selectedRowsState, setSelectedRows] = useState([]);
    /**
     * 国际化配置
     */

    const intl = useIntl();
    const columns = [
        {
            title: 'mac/设备名称',
            dataIndex: 'name',
            hideInTable: true,
            render: (dom, entity) => {
                return (
                    <a
                        onClick={() => {
                            setCurrentRow(entity);
                            setShowDetail(true);
                        }}
                    >
                        {dom}
                    </a>
                );
            },
        },
        {
            title: '设备名称',
            dataIndex: 'name',
            valueType: 'option',
            renderText: (val) => `${val} 万`
        },
        {
            title: 'mac地址',
            dataIndex: 'name',
            valueType: 'option',
            renderText: (val) => `${val} 万`
        },
        {
            title: '枪数量',
            dataIndex: 'name',
            valueType: 'option',
            renderText: (val) => `${val} 万`
        },
        {
            title: '枪详情',
            dataIndex: 'name',
            valueType: 'option',
            render: (_, record) => <a href="">详情</a>
        },
        {
            title: '设备类型',
            dataIndex: 'type',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.default"
                            defaultMessage="关闭"
                        />
                    ),
                    status: 'Default',
                },
            },
        },
        {
            title: '额定功率',
            dataIndex: 'name',
            valueType: 'option',
            renderText: (val) => `${val} 万`
        },
        {
            title: '设备协议',
            valueType: 'option',
            dataIndex: 'name',
            renderText: (val) => `${val} 万`
        },
        {
            title: '型号',
            dataIndex: 'model',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.default"
                            defaultMessage="关闭"
                        />
                    ),
                    status: 'Default',
                },
            },
        },
        {
            title: '状态',
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.default"
                            defaultMessage="关闭"
                        />
                    ),
                    status: 'Default',
                },
            },
        },
        {
            title: '硬件版本',
            dataIndex: 'hardwareVersion',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.default"
                            defaultMessage="关闭"
                        />
                    ),
                    status: 'Default',
                },
            },
        },
        {
            title: '软件版本',
            dataIndex: 'softwareVersion',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.default"
                            defaultMessage="关闭"
                        />
                    ),
                    status: 'Default',
                },
            },
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => (
                <>
                    <a>
                        操作
                    </a>
                    <Divider type="vertical" />
                    <a href="">关联车位锁</a>
                </>
            ),
        },


    ];
    return (
        <PageContainer>
            <ProTable
                headerTitle={intl.formatMessage({
                    id: 'pages.searchTable.title',
                    defaultMessage: '查询表格',
                })}
                actionRef={actionRef}
                rowKey="key"
                search={{
                    labelWidth: 120,
                }}
                toolBarRender={() => [
                    <Button
                        type="primary"
                        key="primary"
                        onClick={() => {
                            handleModalVisible(true);
                        }}
                    >
                        <PlusOutlined />{' '}
                        <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
                    </Button>,
                ]}
                request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
                columns={columns}
                rowSelection={{
                    onChange: (_, selectedRows) => {
                        setSelectedRows(selectedRows);
                    },
                }}
            />
            {selectedRowsState?.length > 0 && (
                <FooterToolbar
                    extra={
                        <div>
                            <FormattedMessage
                                id="pages.searchTable.chosen"
                                defaultMessage="已选择"
                            />{' '}
                            <a
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                {selectedRowsState.length}
                            </a>{' '}
                            <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
                            &nbsp;&nbsp;
                            <span>
                                <FormattedMessage
                                    id="pages.searchTable.totalServiceCalls"
                                    defaultMessage="服务调用次数总计"
                                />{' '}
                                {selectedRowsState.reduce((pre, item) => pre + item.callNo, 0)}{' '}
                                <FormattedMessage
                                    id="pages.searchTable.tenThousand"
                                    defaultMessage="万"
                                />
                            </span>
                        </div>
                    }
                >
                    <Button
                        onClick={async () => {
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            actionRef.current?.reloadAndRest?.();
                        }}
                    >
                        <FormattedMessage
                            id="pages.searchTable.batchDeletion"
                            defaultMessage="批量删除"
                        />
                    </Button>
                    <Button type="primary">
                        <FormattedMessage
                            id="pages.searchTable.batchApproval"
                            defaultMessage="批量审批"
                        />
                    </Button>
                </FooterToolbar>
            )}
            <ModalForm
                title={intl.formatMessage({
                    id: 'pages.searchTable.createForm.newRule',
                    defaultMessage: '新建规则',
                })}
                width="400px"
                visible={createModalVisible}
                onVisibleChange={handleModalVisible}
                onFinish={async (value) => {
                    const success = await handleAdd(value);

                    if (success) {
                        handleModalVisible(false);

                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }}
            >
                <ProFormText
                    rules={[
                        {
                            required: true,
                            message: (
                                <FormattedMessage
                                    id="pages.searchTable.ruleName"
                                    defaultMessage="规则名称为必填项"
                                />
                            ),
                        },
                    ]}
                    width="md"
                    name="name"
                />
                <ProFormTextArea width="md" name="desc" />
            </ModalForm>
            {/* <UpdateForm
                onSubmit={async (value) => {
                    const success = await handleUpdate(value);

                    if (success) {
                        handleUpdateModalVisible(false);
                        setCurrentRow(undefined);

                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }}
                onCancel={() => {
                    handleUpdateModalVisible(false);
                    setCurrentRow(undefined);
                }}
                updateModalVisible={updateModalVisible}
                values={currentRow || {}}
            /> */}

            <Drawer
                width={600}
                visible={showDetail}
                onClose={() => {
                    setCurrentRow(undefined);
                    setShowDetail(false);
                }}
                closable={false}
            >
                {currentRow?.name && (
                    <ProDescriptions
                        column={2}
                        title={currentRow?.name}
                        request={async () => ({
                            data: currentRow || {},
                        })}
                        params={{
                            id: currentRow?.name,
                        }}
                        columns={columns}
                    />
                )}
            </Drawer>
        </PageContainer>
    );
};

export default TableList;
