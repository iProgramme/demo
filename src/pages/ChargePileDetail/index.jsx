// 查看充电桩详情
import { Badge, Card, Descriptions, Divider, Table, Layout, Row, Col, Button } from 'antd';
import React, { Component, useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './style.less';
import fieldName from '@/common/fieldName';
import ComponentLog from './components/ComponentLog';

const ChargePileDetail = () => {
    const [logVisible, setLogVisible] = useState(false)
    return (
        <GridContent>
            <Card bordered={false}>
                <Descriptions
                    title="充电桩详情"
                    style={{
                        marginBottom: 32,
                    }}
                >
                    <Descriptions.Item label={fieldName.chargingStation}>1000000000</Descriptions.Item>
                    <Descriptions.Item label={fieldName.equipmentName}>已取货</Descriptions.Item>
                    <Descriptions.Item label={fieldName.macAddress}>1234123421</Descriptions.Item>
                    <Descriptions.Item label={fieldName.gunCode}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.ratedVoltage}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.equipmentType}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.communicationHardwareVersion}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.communicationSoftwareVersion}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.hardwareVersion}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.softwareVersion}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.ratedPower}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.workStatus}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.troubleReason}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.insertionTime}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.chargeStartTime}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.chargeEndTime}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.chargeTotalTime}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.chargeReadyTime}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.timeSolt + '1' + fieldName.chargeCapacity}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.timeSolt + '2' + fieldName.chargeCapacity}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.timeSolt + '3' + fieldName.chargeCapacity}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.timeSolt + '4' + fieldName.chargeCapacity}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.timeSolt + '5' + fieldName.chargeCapacity}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.initSOC}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.intimeSOC}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.endSOC}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.expectLastTime}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.electriccurrentA}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.electriccurrentB}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.electriccurrentC}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.voltageA}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.voltageB}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.voltageC}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.stakeTemperature}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.batteryTemperature}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.chargeElectriccurrent}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.chargeVoltage}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.requiredElectriccurrent}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.requiredVoltage}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.batteryUpVoltage}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.batteryLowVoltage}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.batteryUpTemperature}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.batteryLowTemperature}>3214321432</Descriptions.Item>
                    <Descriptions.Item label={fieldName.gunTemperature}>3214321432</Descriptions.Item>
                </Descriptions>
                <Divider
                    style={{
                        marginBottom: 32,
                    }}
                />
                <Descriptions
                    title="用户信息"
                    style={{
                        marginBottom: 32,
                    }}
                >
                    <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
                    <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
                    <Descriptions.Item label="常用快递">菜鸟仓储</Descriptions.Item>
                    <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
                    <Descriptions.Item label="备注">无</Descriptions.Item>
                </Descriptions>
                <Divider
                    style={{
                        marginBottom: 32,
                    }}
                />
                <Descriptions>
                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Button type="primary">
                                关联的充电订单
                                </Button>
                            <Button
                                style={{ margin: '0 8px' }}
                                type="primary">
                                最后一次充电过程
                                </Button>
                            <Button
                                type="primary"
                                onClick={() => {
                                    setLogVisible(true)
                                }}
                            >
                                设备日志
                                </Button>
                        </Col>
                    </Row>
                </Descriptions>
                <ComponentLog visible={logVisible} onCancel={() => {setLogVisible(false)}}></ComponentLog>
                {/* <Table
                        style={{
                            marginBottom: 24,
                        }}
                        pagination={false}
                        loading={loading}
                        dataSource={goodsData}
                        columns={goodsColumns}
                        rowKey="id"
                    />
                    <div className={styles.title}>退货进度</div>
                    <Table
                        style={{
                            marginBottom: 16,
                        }}
                        pagination={false}
                        loading={loading}
                        dataSource={basicProgress}
                        columns={progressColumns}
                    /> */}

            </Card>
        </GridContent>
    );
}

export default connect(({ profileAndbasic, loading }) => ({
    profileAndbasic,
    loading: loading.effects['profileAndbasic/fetchBasic'],
}))(ChargePileDetail);
