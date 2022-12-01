import React, { useState } from 'react';
import { cityList } from '../../../utils/baseConfig';
import FormUi from '../Formui';
import { useSelector, useDispatch } from 'react-redux';
import { setAnyState, setBaseInfoState } from '../../../reducers/resume.reducer';
///基本信息区域
const Index = props => {
  const dispatch = useDispatch();
  const baseInfo = useSelector(state => state.resumeReducer.resumeState.baseInfo);
  const handle = (key, val) => {
    dispatch(setAnyState({ id: 'baseInfo', key, value: val }));
  };

  const configList = [
    {
      type: 'input',
      label: '姓名',
      key: 'name',
      required: true,
      value: baseInfo.name,
      handleChange: handle,
    },
    {
      type: 'number',
      label: '手机',
      key: 'mobile',
      required: true,
      reg: 'tel',
      value: baseInfo.mobile,
      handleChange: handle,
    },
    {
      type: 'email',
      label: '邮箱',
      key: 'email',
      required: true,
      reg: 'email',
      value: baseInfo.email,
      handleChange: handle,
    },
    {
      type: 'inputSelect',
      label: '目前所在城市',
      key: 'city',
      required: false,
      dataSource: cityList,
      value: baseInfo.city,
      handleChange: handle,
    },
    {
      type: 'inputSelect',
      label: '期望工作城市',
      dataSource: cityList,
      fullFlag: true,
      key: 'base',
      required: false,
      value: baseInfo.base,
      handleChange: handle,
    },
  ];

  return (
    <FormUi
      isPreview={props.isPreview}
      title="个人经历"
      configList={configList}
      stateAction={props.stateAction}></FormUi>
  );
};

export default Index;
