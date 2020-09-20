import React from 'react';
import {Row, Col} from 'antd';
import {symbol} from "../Images";

export default function(){
    return (
        <div>
            <Row>
                <Col>Testing</Col>

            </Row>
            <Row>
                <Col>
                    <div style={{borderRadius: 75, borderWidth: .2, borderStyle: 'solid', borderColor: 'black',
                    paddingTop: 15, paddingBottom: 15, paddingRight: 25, paddingLeft: 25}}>
                        <img style={{width:75}}src={symbol}></img>
                    </div>
                </Col>
            </Row>
        </div>
    )
}