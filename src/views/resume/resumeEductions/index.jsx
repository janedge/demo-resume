import React from 'react';
import FormUi from './../Formui/index';
import { useSelector, useDispatch } from 'react-redux';
import { setAddAnyState, addDataItem, delDataItem } from '../../../reducers/resume.reducer';
import { degreeList } from '../../../utils/baseConfig';
//教育经历区域
const Index = props => {
  const dispatch = useDispatch();
  const educations = useSelector(state => state.resumeReducer.resumeState.educations);
  const handle = (index, key, val) => {
    dispatch(setAddAnyState({ id: 'educations', index, key, value: val }));
  };
  const initialConfigList = [
    { type: 'select', label: '学历', key: 'topDegree', required: true, handleChange: handle, dataSource: degreeList },
    {
      type: 'datePicker',
      label: '时间',
      key: 'time',
      required: true,
      startTime: 'startTime',
      setStartTime: handle,
      endTime: 'endTime',
      setEndTime: handle,
    },
    { type: 'input', label: '学校名称', key: 'school', required: true, handleChange: handle },
    { type: 'input', label: '专业', key: 'major', required: true, handleChange: handle },
    { type: 'textArea', label: '学校经历内容', key: 'industry', required: true, handleChange: handle, fullFlag: true },
  ];
  const addAction = () => {
    dispatch(addDataItem({ id: 'educations' }));
  };
  const deleteAction = idx => {
    dispatch(delDataItem({ id: 'educations', idx }));
  };
  return (
    <FormUi
      title="校园经历"
      configList={initialConfigList}
      addAction={addAction}
      isPreview={props.isPreview}
      deleteAction={deleteAction}
      addStatus="true"
      valueData={educations}
      stateAction={props.stateAction}></FormUi>
  );
};

export default Index;
