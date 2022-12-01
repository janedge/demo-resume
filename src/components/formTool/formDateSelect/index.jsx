import React, { useState, useEffect } from 'react';
import { DatePicker2 } from '@alifd/next';
import useCallbackState from '../../../hooks/useCallBackState';
import './index.scss';
import dayjs from 'dayjs';
export default function FormDateSelect(props) {
  const { startTime, setStartTime, endTime, setEndTime } = props;

  useEffect(() => {
    try {
      if (startTime - endTime > 0 && endTime) {
        setEndTime(startTime);
      }
    } catch (error) {}
  }, [startTime]);
  const disabledDate = function (date, view) {
    try {
      return date.year() * 100 + date.month() < dayjs(startTime).year() * 100 + dayjs(startTime).month();
    } catch (error) {
      return true;
    }
  };
  return (
    <div className="datePickers">
      <DatePicker2.MonthPicker
        isPreview={props.isPreview}
        popupStyle={{ width: '300px' }}
        value={startTime}
        onChange={val => {
          setStartTime(val.valueOf());
        }}
        placeholder="开始时间"
      />
      <span className="next-split" style={{ width: '5px', borderBottom: ' 1px solid rgba(31, 56, 88, 0.2)' }}></span>
      <DatePicker2.MonthPicker
        isPreview={props.isPreview}
        disabledDate={disabledDate}
        value={endTime}
        onChange={val => {
          setEndTime(val.valueOf());
        }}
        placeholder="结束时间"
      />
    </div>
  );
}
