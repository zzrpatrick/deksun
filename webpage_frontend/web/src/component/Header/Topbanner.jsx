import React from 'react';
import { Row, Col,Input,Button } from 'antd';



const TopbannerStyle = {
    marginTop: '30px'
};

export default class Topbanner extends React.Component {
    

    render() {
        return (

            <div style={TopbannerStyle}>
                <Row>
                    <Col offset={2} span={6}>
                        <img src={require('../../image/deksun_sifano_logo.png')} />
                    </Col>
                    <Col offset={11} span={4}>
                        <Input placeholder="Search"/>
                    </Col>
                    <Col span={1}>
                        <Button  type="primary" icon="search" > </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}   