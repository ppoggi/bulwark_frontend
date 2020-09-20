import React from 'react';
import {Col} from "antd";
import {DAYS_OF_WEEK} from "../../Constants";

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


export default function(props){
  const {width, day} = props;
    return (

        <Col span={width}>{DAYS_OF_WEEK[day]}</Col>

    )
}
