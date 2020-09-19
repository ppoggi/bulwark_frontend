import React, {useEffect, useState} from 'react';
import {Row, Col} from "antd";
import {DAYS_OF_WEEK, HAVDAY, JARSDAY, ELDERDAY, FLUGADAY, GREERSDAY} from "../../Constants";


/**
 *216 days/year
 * 12 months/year*
 * 18 days/month
 * 5 days/week
 * 24 hours/day
 */

/**
 * 5 columns
 * 5 rows
 */

/**
 * 0 = Havday
 * 1 = Jarsday
 * 2 = Elderday
 * 3 = Flugaday
 * 4 = Greersday
 */


export default function(){
    return (

        <div>
            <Row>
                <Col span={4}>{DAYS_OF_WEEK[HAVDAY]}</Col>
                <Col span={4}>{DAYS_OF_WEEK[JARSDAY]}</Col>
                <Col span={4}>{DAYS_OF_WEEK[ELDERDAY]}</Col>
                <Col span={4}>{DAYS_OF_WEEK[FLUGADAY]}</Col>
                <Col span={4}>{DAYS_OF_WEEK[GREERSDAY]}</Col>
            </Row>

        </div>

    )
}