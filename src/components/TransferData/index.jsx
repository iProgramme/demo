// 穿梭框：关联充电桩/关联运维人员
import { Modal, Transfer, Button } from 'antd';
import React, { useState, useEffect } from 'react';

const TransferDataModal = (props) => {

    const [visible, setVisible] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [rightData, setRightData] = useState([]);
    // const { visible } = props;
    useEffect(() => {
        console.log(props.visible)

        const arr = [{
            key: 1,
            title: `content1`,
            description: `description of content1`,
            chosen: false,
        },{
            key: 2,
            title: `content2`,
            description: `description of content2`,
            chosen: true,
        }]
        
        setDataSource(arr)
        setRightData([1, 2])
        // setVisible(props.visible);
    }, [props.visible])
    
    // change
    const handleChange = rightData => {
        setRightData(rightData)
    };

    // 重新加载数据
    const reloadData = () => {
        
    }

    const renderFooter = () => (
        <Button size="small" style={{ float: 'right', margin: 5 }} onClick={reloadData}>
            刷新
        </Button>
    );

    // 关闭弹窗
    const handleCancel = () => setVisible(false);

    return (

        <Modal
            width={800}
            visible={props.visible}
            title={props.title}
            footer={null}
            onCancel={props.onCancel}
        >
            <Transfer
                dataSource={dataSource}
                showSearch
                listStyle={{
                    width: 350,
                    height: 300,
                }}
                operations={['to right', 'to left']}
                targetKeys={rightData}
                onChange={handleChange}
                render={item => `${item.title}-${item.description}`}
                // footer={renderFooter}
            />
        </Modal>
    )
}

export default TransferDataModal