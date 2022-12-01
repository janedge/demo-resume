import React from 'react';
import { companyList } from '../../../utils/baseConfig';
import FormUi from './../Formui/index';
import { useSelector, useDispatch } from 'react-redux';
import { setAddAnyState, addDataItem, delDataItem } from '../../../reducers/resume.reducer';
//工作经历区域
const Index = props => {
  const dispatch = useDispatch();
  const experiences = useSelector(state => state.resumeReducer.resumeState.experiences);
  const handle = (index, key, val) => {
    dispatch(setAddAnyState({ id: 'experiences', index, key, value: val }));
  };
  const initialConfigList = [
    {
      type: 'inputSelect',
      label: '公司名称',
      key: 'name',
      required: true,
      handleChange: handle,
      dataSource: companyList,
    },
    {
      type: 'input',
      key: 'position',
      label: '职务',
      required: true,
      handleChange: handle,
    },
    {
      type: 'datePicker',
      label: '时间',
      key: 'time',
      startTime: 'startTime',
      setStartTime: handle,
      endTime: 'endTime',
      setEndTime: handle,
      required: true,
      fullFlag: true,
    },
    {
      type: 'textArea',
      label: '职务描述',
      key: 'description',
      required: true,
      fullFlag: true,
      handleChange: handle,
    },
  ];
  const addAction = () => {
    dispatch(addDataItem({ id: 'experiences' }));
  };
  const deleteAction = idx => {
    dispatch(delDataItem({ id: 'experiences', idx }));
  };
  return (
    <FormUi
      addAction={addAction}
      isPreview={props.isPreview}
      deleteAction={deleteAction}
      addStatus="true"
      title="工作经历"
      configList={initialConfigList}
      valueData={experiences}
      stateAction={props.stateAction}></FormUi>
  );
};

export default Index;
