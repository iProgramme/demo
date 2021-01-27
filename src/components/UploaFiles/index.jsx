// 上传图片 or 文件
import { Upload, Modal, message } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
function beforeUpload(file, limitType, limitSize) {
    const type = {
        img: ['image/jpeg', 'image/png'],
        file: []
    }
    // 判断类型
    let fileType = type[limitType] && type[limitType].includes(file.type);
    if (limitType == 'file') {
        fileType = true;
    }
    if (!fileType) {
        message.error(`You can only upload ${type[limitType].join(",")} file!`);
    }
    // 判断大小
    const isLtSize = file.size / 1024 / 1024 < parseFloat(limitSize);
    if (!isLtSize) {
        message.error(`Image must smaller than ${limitSize}MB!`);
    }
    return fileType && isLtSize;
}

const UploaFiles = (props) => {

    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const { listType, limitLength, limitType, limitSize, } = props;
    useEffect(() => {
        setFileList(props.fileList || [])
        console.log(fileList)
    }, [])

    // 关闭弹窗
    const handleCancel = () => setPreviewVisible(false);

    // 预览图片
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    }
    const handleChange = ({ fileList }) => setFileList(fileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上传</div>
        </div>
    );

    return (
        <>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType={listType}
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={file => { beforeUpload(file, limitType, limitSize) }}
            >
                {fileList.length >= parseInt(limitLength) ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
}

export default UploaFiles