import React from 'react';
import FormUi from './../Formui/index';
import { useSelector, useDispatch } from 'react-redux';
import { setAddAnyState, addDataItem, delDataItem } from '../../../reducers/resume.reducer';
//项目经历区域
const Index = props => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.resumeReducer.resumeState.projects);
  const handle = (index, key, val) => {
    dispatch(setAddAnyState({ id: 'projects', index, key, value: val }));
  };
  const initialConfigList = [
    {
      type: 'input',
      label: '项目名称',
      key: 'name',
      required: true,
      handleChange: handle,
    },

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
    { type: 'textArea', label: '职责描述', key: 'description', required: true, fullFlag: true, handleChange: handle },
  ];
  const addAction = () => {
    dispatch(addDataItem({ id: 'projects' }));
  };
  const deleteAction = idx => {
    dispatch(delDataItem({ id: 'projects', idx }));
  };
  return (
    <FormUi
      title="项目经历"
      configList={initialConfigList}
      addAction={addAction}
      isPreview={props.isPreview}
      deleteAction={deleteAction}
      addStatus="true"
      valueData={projects}
      stateAction={props.stateAction}></FormUi>
  );
};

export default Index;
