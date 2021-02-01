// 站点管理 - 站点库
import { PlusOutlined } from '@ant-design/icons';
import { Button, message, DatePicker, Input, Drawer, Divider, Cascader } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
// import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
// import CreateForm from './components/CreateForm';
import moment from 'moment';

// import { queryRule, updateRule, addRule, removeRule } from './service';
import fieldName from '@/common/fieldName';
import { WorkStatus, TroubleReasons } from '@/common/selectItems';
// import { Options, ConfigureModal, OfflineChargePileModal, UpgradeModal, } from './components/optionsRender';
import request from '@/utils/request';
import TransferDataModal from '@/components/TransferData';
const { RangePicker } = DatePicker;

async function queryRule(params) {
    return request('/api/rule', {
        params,
    });
}
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


const DataStatistics = () => {
    /**
     * 新建窗口的弹窗
     */
    const [createModalVisible, handleModalVisible] = useState(false);
    /**
     * 分布更新窗口的弹窗
     */

    const [transferTitle, setTransferTitle] = useState('');
    const [showDetail, setShowDetail] = useState(false);
    const actionRef = useRef();
    const [currentRow, setCurrentRow] = useState();
    const [selectedRowsState, setSelectedRows] = useState([]);
    const [areaValue, setAreaValue] = useState([]);
    const [transferDataVisible, setTransferDataVisible] = useState(false);
    const [leftData, setLeftData] = useState(false);
    const [rightData, setRightData] = useState(false);
    const onChangeArea = (v) => {
        console.log(v);
        setAreaValue(v);
    }

    const dateFormat = 'YYYY/MM/DD';



    // 打开穿梭框
    const openTransferData = (record, title) => {
        setTransferDataVisible(true);
        console.log(record)
        setTransferTitle(title)
        // 根据 recored 搜索
        // setTransferData(record)
    }
    // 关闭穿梭框
    const onCancel = () => setTransferDataVisible(false);

    const intl = useIntl();
    const columns = [
        // 省市区
        {
            title: fieldName.provinceCityArea,
            dataIndex: 'provinceCityArea',
            hideInTable: true,
            renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
                if (type === 'form') {
                    return null;
                }
                return <Cascader options={window.ChinaAreaData} onChange={onChangeArea} value={areaValue} changeOnSelect expandTrigger="hover"></Cascader>;
            },
        },
        {
            title: fieldName.siteName,
            dataIndex: 'siteName',
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.dateRange,
            dataIndex: 'dateRange',
            hideInTable: true,
            renderFormItem: (_, record) => (
                <RangePicker
                    // defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                />
            )
        },

        {
            title: fieldName.totalPiles,
            dataIndex: 'totalPiles',
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.macAddress,
            dataIndex: 'macAddress',
            hideInSearch: true,
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.gunCode,
            dataIndex: 'gunCode',
            hideInSearch: true,
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.cycleChargeCumulative,
            dataIndex: 'cycleChargeCumulative',
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.cycleChargeNumber,
            dataIndex: 'cycleChargeNumber',
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.totalChargeCumulative,
            dataIndex: 'totalChargeCumulative',
            render: (_, record) => <a onClick={() => openTransferData(record, fieldName.relateChargeStake)}>{fieldName.relateChargeStake}</a>,
        },
        {
            title: fieldName.gunNumber,
            dataIndex: 'gunNumber',
            hideInTable: true,
            render: (_, record) => <a onClick={() => openTransferData(record, fieldName.relatedPolicy)}>{fieldName.relatedPolicy}</a>,
        },
        {
            title: fieldName.cycleChargeMoney,
            dataIndex: 'cycleChargeMoney',
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.totalChargeNumber,
            dataIndex: 'totalChargeNumber',
            renderText: (val) => `${val} `
        },
        {
            title: fieldName.totalChargeMoney,
            dataIndex: 'totalChargeMoney',
            renderText: (val) => `${val} `
        },
        {
            title: '查看详情',
            dataIndex: 'option',
            hideInSearch: true,
            render: (_, record) => (
                <>
                    <a>订单详情</a>
                </>
            ),
        },

    ];
    return (
        <PageContainer header={{ title: '' }}>
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
                request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
                toolBarRender={() => [
                    <Button
                        type="primary"
                        key="primary"
                        onClick={() => {
                            handleModalVisible(true);
                        }}
                    >
                        <PlusOutlined />{' '}
                        模板导出
                    </Button>
                ]}
                // request={(params, sorter, filter) => queryRule(params)}
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
            <TransferDataModal
                visible={transferDataVisible}
                title={transferTitle}
                leftData={leftData}
                rightData={rightData}
                onCancel={onCancel}
            />
        </PageContainer>
    );
};

export default DataStatistics;
