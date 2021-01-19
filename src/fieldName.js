// 前端  展示字段 汇总(非i18)
const fieldName = {
    hangID0: '行ID0',
    hangID1: '行ID1', // 每个表格都采用12345678的命名方式，方便替换
    pageIndex: '当前页',
    pageTotal: '数据总数据量',
    // pageIndex: '当前页',
    // pageIndex: '当前页',

    // 设备库
    hangID0: '行ID0',
    macAddress: 'mac',
    equipmentName: '设备名称',
    equipmentAndMachine: 'mac/设备名称',
    equipmentType: '设备类型',
    type: '型号',
    status: '状态',
    hardwareVersion: '控制板硬件版本',
    softwareVersion: '控制板软件版本',
    gunNumber: '枪数量',
    gunDetail: '枪详情',
    ratedPower: '额定功率',
    ratedVoltage: '设备协议',
    gunName: '枪名称', // 123456
    gunCode: '枪编号', // 123456
    equipmentModel: '设备型号',
    equipmentManufacturerCode: '设备生产商组织机构代码',
    equipmentManufacturerStartDate: '设备生产日期',
    equipmentManufacturerName: '设备生产商名称',
    chargingInterfaceType: '充电设备接口类型',
    ratedVoltageUpper: '额定电压上限',
    ratedVoltagelower: '额定电压下限',
    reatedCurrent: '额定电流',
    nationalStandard: '国家标准',

    // 设备状态监控
    hangID1: '行ID1',
    equipmentAndMachineAndSite: 'mac/设备名称/站点',
    site: '站点',
    province: '省',
    city: '市',
    area: '区',
    workStatus: '工作状态',
    troubleReason: '故障原因',
    chargingStation: '充电站点',
    communicationHardwareVersion: '通信板硬件版本',
    communicationSoftwareVersion: '通信板软件版本',
    insertionTime: '插枪时间',
    chargeStartTime: '开始充电时间',
    chargeEndTime: '结束充电时间',
    chargeTotalTime: '累计充电电量',
    chargeReadyTime: '已充电时间',
    initSOC: '初始SOC',
    endSOC: '结束SOC',
    intimeSOC: '实时SOC',
    aaa: '时间段  1 2 3 4 5 充电电量',
    expectLastTime: '预计剩余时间',
    electriccurrentA: 'A相电流',
    voltageA: 'A相电压',
    electriccurrentB: 'B相电流',
    voltageB: 'B相电压',
    electriccurrentC: 'C相电流',
    voltageC: 'C相电压',
    stakeTemperature: '桩体温度',
    batteryTemperature: '电池温度',
    chargeElectriccurrent: '充电电流',
    chargeVoltage: '充电电压',
    requiredVoltageB: '需求电压',
    requiredElectriccurrent: '需求电流',
    batteryUpVoltage: '电池最高单体电压',
    batteryLowVoltage: '电池最低单体电压',
    batteryUpTemperature: '电池最高单体温度',
    batteryLowTemperature: '电池最低单体温度',
    gunTemperature: '枪温度节点 1 2',
    // 设备日志 待定

    // 故障报修 - 待修清单 - 自动报修
    aaa: '开始日期',
    aaa: '结束日期',
    aaa: '故障等级',
    aaa: '处置方式',
    aaa: '派单状态',
    aaa: '维修状态',
    aaa: '维修人',
    aaa: '报修订单号',
    aaa: '报修日期',
    aaa: '报修途径',
    aaa: '连续警告',
    aaa: '是否消失',
    aaa: '自动派单功能（Y/N）',
    aaa: '自动派单规则',
    aaa: '派给指定人员姓名',
    aaa: '派给指定人员账号/手机号',
    aaa: '派给指定人员邮箱',
    aaa: '复制到紧急/重要/频发/其他',
    // 故障报修 - 待修清单 - 手工报修
    aaa: '报修途径',
    aaa: '报修人账号',
    aaa: '报修类型',
    // 故障报修 - 报修历史
    // 设备管理
    aaa: '版本名称',
    aaa: '适用硬件版本',
    aaa: '适用软件版本',
    aaa: '文件版本号',
    aaa: '发布日期',
    aaa: '升级包属性',
    aaa: '更新描述',
    aaa: '升级包上传',
    aaa: '升级包设备协议',
    aaa: '推送日期',
    aaa: '执行情况',
    aaa: '推送结果设备数',
    aaa: '推送结果成功X',
    aaa: '推送结果失败X',
    aaa: '推送结果成功率X%',
    aaa: '预设升级时间 即刻/2021年01月15日11:25:05',
    aaa: '可升级设备数',

    // 站点库
    aaa: '地图是否可见',
    aaa: '站点属性',
    aaa: '是否对外开放',
    aaa: '启用状态',
    aaa: '关联收费策略',
    aaa: '运维人员账号/姓名',
    aaa: '运维人员账号',
    aaa: '运维人员姓名',
    aaa: '营业时间 全时段/开始-结束时间段',
    aaa: '经度',
    aaa: '纬度',
    aaa: '站点类型',
    aaa: '是否支持预约',
    aaa: '建设场所',
    aaa: '站点电话',
    aaa: '车位数量',
    aaa: '车位楼层及数量描述',
    aaa: '停车费信息',
    aaa: '支付方式',
    aaa: '使用车型描述',
    aaa: '备注',
    aaa: '站点照片：Array',
    aaa: '站点引导',
    aaa: '找桩路书',
    aaa: '充电站ID',
    aaa: '国家代码',
    aaa: '服务电话',
    aaa: '备注',
    aaa: '产权归属',
    aaa: '运营归属',

    // 站点数据统计
    aaa: '充电桩数量',
    aaa: '周期充电量',
    aaa: '周期充电次数',
    aaa: '累计充电量',
    aaa: '周期充电费用',
    aaa: '累计充电次数',
    aaa: '累计充电次数',
    aaa: '累计充电费用',

    // 充电订单
    aaa: '充电状态',
    aaa: '订单账号',
    aaa: '订单编号',
    aaa: '车牌',
    aaa: 'VIN码',
    aaa: '启动方式',
    aaa: '结束原因',
    aaa: '分时计费',
    aaa: '是否结算',
    aaa: '支付方式',
    aaa: '充电时长',
    aaa: '总充电度数',
    aaa: '时段 1 2 3 4 5充电度数',
    aaa: '充电方式',
    aaa: '预约充电开始时间',
    aaa: '预约充电结束时间',
    aaa: '充电卡序列号',

    // 操作日志
    aaa: '日期',
    aaa: '账号',
    aaa: '操作',
    aaa: '标的',
}



export default fieldName;