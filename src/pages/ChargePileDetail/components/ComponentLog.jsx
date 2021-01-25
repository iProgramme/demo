// 设备日志
import React, { useRef } from 'react';
import { Modal, Layout, DatePicker, Card, Descriptions } from 'antd';
import {
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    StepsForm,
    ProFormRadio,
    ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { useIntl, FormattedMessage } from 'umi';
import { queryRule, updateRule, addRule, removeRule } from '../service';
import fieldName from '@/common/fieldName';

const ComponentLog = (props) => {
    const intl = useIntl();
    console.log(props.visible)
    const actionRef = useRef();
    const columns = [
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.updateForm.ruleName.nameLabel"
                    defaultMessage="日期选择"
                />
            ),
            dataIndex: 'logDate',
            hideInTable: true,
            renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
                return (
                    <DatePicker picker="month" />
                );
            },
        },
        {
            title: fieldName.reportDate,
            dataIndex: 'reportDate',
            hideInSearch: true,
            renderText: val => `val`
        },
        {
            title: fieldName.logDetail,
            dataIndex: 'logDetail',
            hideInSearch: true,
            renderText: val => `val`
        },
        
    ];
    return (
        <Modal
            width={640}
            bodyStyle={{
                padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={intl.formatMessage({
                id: 'pages.searchTable.updateForm.ruleConfig',
                defaultMessage: '设备日志',
            })}
            visible={props.visible}
            bodyStyle={{background: "#f0f2f5"}}
        >
            <Layout>
                <ProTable
                    headerTitle={'查询表格'}
                    actionRef={actionRef}
                    rowKey="key"
                    search={{
                        filterType: 'light',
                    }}
                    defaultCollapsed="false"
                    tableExtraRender={(_, data) => (
                        <Card>
                          <Descriptions size="small" column={2}>
                            <Descriptions.Item label={fieldName.chargingStation}>{data.length}</Descriptions.Item>
                            <Descriptions.Item label={fieldName.equipmentName}>{data.length}</Descriptions.Item>
                            <Descriptions.Item label={fieldName.macAddress}>{data.length}</Descriptions.Item>
                            <Descriptions.Item label={fieldName.gunCode}>{data.length}</Descriptions.Item>
                          </Descriptions>
                        </Card>
                      )}
                    request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
                    columns={columns}
                />
            </Layout>
        </Modal>

    );
};

export default ComponentLog;
