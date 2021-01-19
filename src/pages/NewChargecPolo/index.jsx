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
import filedName from '@/fieldName';

const NewChargecPolo = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const intl = useIntl();

    return (
        <Layout>
            <Layout>
                <Form
                    form={form}
                    name="advanced_search"
                    className="ant-advanced-search-form"
                    onFinish={onFinish}
                >
                    <Row gutter={24}>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentName} label={filedName.equipmentName} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.macAddress} label={filedName.macAddress} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.ratedVoltage} label={filedName.ratedVoltage} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.gunNumber} label={filedName.gunNumber} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.ratedPower} label={filedName.ratedPower} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.gunName + '1'} label={filedName.gunName + '1'} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.gunCode + '1'} label={filedName.gunCode + '1'} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.gunName + '2'} label={filedName.gunName + '2'} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.gunCode + '2'} label={filedName.gunCode + '2'} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentModel} label={filedName.equipmentModel} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentManufacturerCode} label={filedName.equipmentManufacturerCode} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentType} label={filedName.equipmentType} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentManufacturerStartDate} label={filedName.equipmentManufacturerStartDate} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentManufacturerName} label={filedName.equipmentManufacturerName} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.equipmentManufacturerCode} label={filedName.equipmentManufacturerCode} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.chargingInterfaceType} label={filedName.chargingInterfaceType} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.ratedVoltageUpper} label={filedName.ratedVoltageUpper} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.reatedCurrent} label={filedName.reatedCurrent} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.ratedVoltagelower} label={filedName.ratedVoltagelower} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.ratedPower} label={filedName.ratedPower} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Form.Item name={filedName.nationalStandard} label={filedName.nationalStandard} rules={[{ required: true, message: 'Input something!' }]}>
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <label htmlFor="是否启用："></label>
                            <Switch checkedChildren="开启" unCheckedChildren="禁用" defaultChecked />
                        </Col>
                        <br/>
                        <br/>
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
        </Layout>
    );
};

export default NewChargecPolo;
