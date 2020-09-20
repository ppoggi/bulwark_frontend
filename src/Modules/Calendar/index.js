import React, {useEffect, useState} from 'react';
import {Row, Col, Radio} from "antd";
import {DAYS_OF_WEEK, DAY, WEEK, MONTH, YEAR, DAY_COLUMN_WIDTH,
  DEFAULT_COLUMN_WIDTH, MONTHS_IN_YEAR, DEFAULT_NUM_ROWS, MONTH_NUM_ROWS,
  YEAR_NUM_ROWS} from "../../Constants";
import Day from "./Day";

const currentDay = 0 //mock data
const dayOfWeek = currentDay%5

export default function(){

    const [period, setPeriod] = useState(WEEK);
    const [width, setWidth] = useState(DEFAULT_COLUMN_WIDTH);
    const [numRows, setNumRows] = useState(DEFAULT_NUM_ROWS);
    const [visibleDays, setVisibleDays] = useState(Object.keys(DAYS_OF_WEEK));

    const radioOnChange = (e)=>{
      const value = e.target.value
      setPeriod(value)
      switch (value){
        case DAY:
          setWidth(DAY_COLUMN_WIDTH)
          setNumRows(DEFAULT_NUM_ROWS)
          setVisibleDays([dayOfWeek])
          break
        case WEEK:
          setWidth(DEFAULT_COLUMN_WIDTH)
          setNumRows(DEFAULT_NUM_ROWS)
          setVisibleDays(Object.keys(DAYS_OF_WEEK))
          break
        case MONTH:
          setWidth(DEFAULT_COLUMN_WIDTH)
          setNumRows(MONTH_NUM_ROWS)
          setVisibleDays(Object.keys(DAYS_OF_WEEK))
          break
        case YEAR:
          setWidth(DEFAULT_COLUMN_WIDTH)
          setNumRows(YEAR_NUM_ROWS)
          setVisibleDays(Object.keys(DAYS_OF_WEEK))
          break
      }
    }

    return (

        <div>
            <Row>
                <Col>
                  <Radio.Group defaultValue={WEEK} buttonStyle="solid" onChange={radioOnChange}>
                  <Radio.Button value={DAY}>Day</Radio.Button>
                  <Radio.Button value={WEEK}>Week</Radio.Button>
                  <Radio.Button value={MONTH}>Month</Radio.Button>
                  <Radio.Button value={YEAR}>Year</Radio.Button>
                  </Radio.Group>
                </Col>
            </Row>
            <Row>
                {
                  visibleDays.map((key)=><Day width={width} day={key}/>)
                }
            </Row>
        </div>

    )
}
