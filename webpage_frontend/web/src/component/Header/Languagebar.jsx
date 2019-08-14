import React from 'react';
import { Row, Col } from 'antd';



export default class Languagebar extends React.Component {

 
render() {
    const toplangbarStyle = {
        borderBottomStyle : "solid",
        borderBottomColor: "#dedcdc"
    };

    return (
        <div >
            <div style = {toplangbarStyle}>
                <Row type="flex" justify="end">
                    <Col span={2}>
                        <p>English</p>
                    </Col>
                    <Col span={2}>
                        <p>中文</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
}   