// 新建充电桩
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Row, Col, Input, Layout, Switch } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
// import { queryRule, updateRule, addRule, removeRule } from './service';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import fieldName from '@/common/fieldName';

const NewChargePile = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const intl = useIntl();

    return (
        <Layout>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentName} label={fieldName.equipmentName} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.macAddress} label={fieldName.macAddress} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.ratedVoltage} label={fieldName.ratedVoltage} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.gunNumber} label={fieldName.gunNumber} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.ratedPower} label={fieldName.ratedPower} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.gunName + '1'} label={fieldName.gunName + '1'} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.gunCode + '1'} label={fieldName.gunCode + '1'} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.gunName + '2'} label={fieldName.gunName + '2'} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.gunCode + '2'} label={fieldName.gunCode + '2'} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentModel} label={fieldName.equipmentModel} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentManufacturerCode} label={fieldName.equipmentManufacturerCode} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentType} label={fieldName.equipmentType} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentManufacturerStartDate} label={fieldName.equipmentManufacturerStartDate} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentManufacturerName} label={fieldName.equipmentManufacturerName} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.equipmentManufacturerCode} label={fieldName.equipmentManufacturerCode} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.chargingInterfaceType} label={fieldName.chargingInterfaceType} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.ratedVoltageUpper} label={fieldName.ratedVoltageUpper} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.reatedCurrent} label={fieldName.reatedCurrent} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.ratedVoltagelower} label={fieldName.ratedVoltagelower} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.ratedPower} label={fieldName.ratedPower} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item name={fieldName.nationalStandard} label={fieldName.nationalStandard} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>

                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <label htmlFor="是否启用："></label>
                        <Switch checkedChildren="开启" unCheckedChildren="禁用" defaultChecked />
                    </Col>
                    <br />
                    <br />
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">
                            确认
                            </Button>
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            取消
                            </Button>
                    </Col>
                </Row>
            </Form>
        </Layout>
    );
};

export default NewChargePile;
