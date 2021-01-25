// 工作状态
export const WorkStatus = {
    occupyUncharged: { text: '占用（未充电）' },
    occupyCharging: { text: '占用（充电中）'},
    occupyAppointment: { text: '占用（预约锁定）'},
    free: { text: '空闲'},
    outline: { text: '离网'},
    breakdown: { text: '故障'},
    upgrading: { text: '升级中暂不可用'},
    noPower: { text: '断电'},
    fullPower: { text: '已充满'},
    chargeStop: { text: '充电停止'},
    waitingCharge: { text: '等待充电'},
    offline: { text: '下线'},
}

// 故障原因
export const TroubleReasons = {
    outputCurrent: {text: '输出过流'},
    stopPress: {text: '急停按下'},
    chargerMachineFail: {text: '充电机通讯故障'},
    lackLand: {text: '缺地'},
    lightningArresterFail: {text: '防雷器故障'},
    screenFail: {text: '触摸屏故障'},
    cardReaderFail: {text: '读卡器故障'},
    printerConnectFail: {text: '打印机通讯故障'},
    energyMeterConnectFail: {text: '电能表通讯故障'},
    connectionDisconnected: {text: '连接确认断开'},
    inputOvervoltageA: {text: 'A相输入过压'},
    inputUndervoltageA: {text: 'A相输入欠压'},
    inputOvervoltageB: {text: 'B相输入过压'},
    inputUndervoltageB: {text: 'B相输入欠压'},
    inputOvervoltageC: {text: 'C相输入过压'},
    inputUndervoltageC: {text: 'C相输入欠压'},
    currentConnectionReverse: {text: '电流连接反接'},
    directInsulationDown: {text: '直流母线绝缘下降'},
    directOverFanFail: {text: '直流母线过压风扇故障'},
    temperatureSensorFail: {text: '温度传感器故障'},
}

// 下线原因
export const OfflineReasons = {
    upgrade: {text: '升级改造'},
    repaired: {text: '故障维修'},
    businessStop: {text: '运营停用'},
    cycleCheck: {text: '周期巡检'},
    yearCheck: {text: '年检'},
}