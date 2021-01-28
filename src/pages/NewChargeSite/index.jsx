// 新建充电站点
// import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Row, Col, Input, Layout, Switch, TimePicker, Tabs, Radio, Select,  } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
// import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
// import ProTable from '@ant-design/pro-table';
// import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
// import ProDescriptions from '@ant-design/pro-descriptions';
// import { queryRule, updateRule, addRule, removeRule } from './service';
// import { DownOutlined, UpOutlined } from '@ant-design/icons';
import fieldName from '@/common/fieldName';
import UploaFiles from '@/components/UploaFiles';

const { RangePicker } = TimePicker;
const { TabPane } = Tabs;
const { Option } = Select;

const NewChargeSite = () => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const [form] = Form.useForm();
    const [openTimeValue, setOpenTimeValue] = useState('');

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const intl = useIntl();
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setOpenTimeValue(e.target.value)
    };

    // 选择周一至周日的某个时间段：日期，选择tab的方法，选择时间的方法
    const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const switchTabs = v => {
        console.log(v)
    }
    const selectWeekTime = (timeString, item) => {
        console.log(timeString, item)
    }
    const WeekTabs = (
        <Tabs defaultActiveKey="0" onChange={switchTabs}>
            {
                week.map((item, index) => {
                    return (
                        <TabPane tab={item} key={index}>
                            <RangePicker onChange={(time, timeString) => { selectWeekTime(timeString, item) }} />
                        </TabPane>
                    )
                })
            }
        </Tabs>
    )

    // 去选择站点属性
    const changeSiteAttr = v => {
        console.log(v)
    }

    // TODO 字段回传到外面父组件；
    return (
        <Layout>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.siteName} label={fieldName.siteName} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={16} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.openTime} label={fieldName.openTime} rules={[{ required: true, message: 'Input something!' }]}>
                            <Radio.Group onChange={onChange} value={openTimeValue}>
                                <Radio style={radioStyle} value={1}>
                                    全天全时间段
                                </Radio>
                                <Radio style={radioStyle} value={4}>
                                    全天某时间段
                                    {openTimeValue === 4 ? <RangePicker /> : null}
                                </Radio>
                                <Radio style={radioStyle} value={5}>
                                    某天某时段
                                    {openTimeValue === 5 ? WeekTabs : null}
                                </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.position} label={fieldName.position} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.longitude} label={fieldName.longitude} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.latitude} label={fieldName.latitude} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.isOpenOutside} label={fieldName.isOpenOutside} rules={[{ required: true, message: 'Input something!' }]}>
                            <Switch checkedChildren="是" unCheckedChildren="否" defaultChecked />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.isSupportedAppointment} label={fieldName.isSupportedAppointment} rules={[{ required: true, message: 'Input something!' }]}>
                            <Switch checkedChildren="是" unCheckedChildren="否" defaultChecked />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.siteAttr} label={fieldName.siteAttr} rules={[{ required: true, message: 'Input something!' }]}>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={changeSiteAttr}>
                                <Option value="jack">Jack</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.siteType} label={fieldName.siteType} rules={[{ required: true, message: 'Input something!' }]}>
                            <Radio.Group onChange={onChange} value={openTimeValue}>
                                <Radio value={1}>公共</Radio>
                                <Radio value={4}>专用</Radio>
                                <Radio value={5}>个人</Radio>
                                <Radio value={6}>其他</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.buildField} label={fieldName.buildField} rules={[{ required: true, message: 'Input something!' }]}>
                            <Radio.Group onChange={onChange} value={openTimeValue}>
                                <Radio value={1}>商业综合体</Radio>
                                <Radio value={2}>居民区</Radio>
                                <Radio value={3}>公共机构</Radio>
                                <Radio value={4}>企事业单位</Radio>
                                <Radio value={5}>写字楼工业园区</Radio>
                                <Radio value={6}>交通枢纽</Radio>
                                <Radio value={7}>大型文体设施</Radio>
                                <Radio value={8}>城市绿地</Radio>
                                <Radio value={9}>大型建筑配建停车场</Radio>
                                <Radio value={10}>路边停车位</Radio>
                                <Radio value={11}>城际高速服务器</Radio>
                                <Radio value={12}>其他</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.sitePhone} label={fieldName.sitePhone} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.parkingNumber} label={fieldName.parkingNumber} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.parkingDetail} label={fieldName.parkingDetail} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.parkingMoney} label={fieldName.parkingMoney} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.carType} label={fieldName.carType} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.remarks} label={fieldName.remarks} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.siteStatus} label={fieldName.siteStatus} rules={[{ required: true, message: 'Input something!' }]}>
                            <Radio.Group onChange={onChange} value={openTimeValue}>
                                <Radio value={1}>正常使用</Radio>
                                <Radio value={2}>关闭下线</Radio>
                                <Radio value={3}>维护中</Radio>
                                <Radio value={4}>建设中</Radio>
                                <Radio value={5}>未知</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.payType} label={fieldName.payType} rules={[{ required: true, message: 'Input something!' }]}>
                            <Select defaultValue="jack" style={{ width: 300 }} onChange={changeSiteAttr} mode="multiple">
                                <Option value="jack">充电卡</Option>
                                <Option value="jack1">支付宝</Option>
                                <Option value="jack2">微信</Option>
                                <Option value="jack3">钱包</Option>
                                <Option value="jack4">银联卡</Option>
                                <Option value="jack5">现金</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.siteGuide} label={fieldName.siteGuide} rules={[{ required: true, message: 'Input something!' }]}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={24} style={{ textAlign: 'left' }}>
                        <Form.Item label={fieldName.sitePhoto} rules={[{ required: true, message: 'Input something!' }]}>
                            <UploaFiles fileList={null} listType="picture-card" limitSize={3} limitType="img"/>
                        </Form.Item>
                    </Col>
                    <Col span={24} style={{ textAlign: 'left' }}>
                        <Form.Item name={fieldName.findStake} label={fieldName.findStake} rules={[{ required: true, message: 'Input something!' }]}>
                            <UploaFiles fileList={null} limitSize={3} limitType="file"/>
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

export default NewChargeSite;
