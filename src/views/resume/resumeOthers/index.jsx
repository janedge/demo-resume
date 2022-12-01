import React from 'react';
import FormUi from './../Formui/index';
import { useSelector, useDispatch } from 'react-redux';
import { setAddAnyState, addDataItem, delDataItem } from '../../../reducers/resume.reducer';
//其他上传区域
const Index = props => {
  const dispatch = useDispatch();
  const attachments = useSelector(state => state.resumeReducer.resumeState.attachments);
  const handle = (index, key, val) => {
    dispatch(setAddAnyState({ id: 'experiences', index, key, value: val }));
  };
  const initialConfigList = [
    {
      type: 'upload',
      label: '作品集等素材',
      key: 'Otheos',
      tip: '支持扩展名：.rar .zip .doc .docx .pdf .jpg ，单文件请小于100M，最多可上传3个文件',
    },
    {
      type: 'upload',
      label: '培训及获奖证书',
      key: 'Otheos',
      tip: '支持扩展名：.rar .zip .doc .docx .pdf .jpg ，单文件请小于100M，最多可上传3个文件',
    },
  ];

  return (
    <FormUi
      title="其他"
      isPreview={props.isPreview}
      stateAction={props.stateAction}
      configList={initialConfigList}></FormUi>
  );
};

export default Index;
