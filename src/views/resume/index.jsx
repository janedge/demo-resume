import React, { useState, useEffect } from 'react';
import { Card, Upload, Checkbox, Avatar, Button, Box, Icon, Form, Input, Message } from '@alifd/next';
import './index.scss';
import ResumeUploader from './resumeUploader/index';
import ResumeBaseInfo from './resumeBaseInfo/index';
import ResumeExperiences from './resumeExperiences/index';
import ResumeProjects from './resumeProjects/index';
import ResumeEductions from './resumeEductions/index';
import ResumeOthers from './resumeOthers/index';
import FormCard from './../../components/formTool/formCard/index';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialState, setBaseInfo } from '../../reducers/resume.reducer';

const { Media } = Card;
const imgStr = 'https://voidtech.cn/i/2022/11/24/zlb0du.jpg';
const Resume = () => {
  const dispatch = useDispatch();
  const resumeState = useSelector(state => state.resumeReducer.resumeState);
  const [previewObj, setPreviewObj] = useState({
    BaseInfo: false,
    Experiences: false,
    Projects: false,
    Eductions: false,
    Others: false,
  });
  const [hov, setHov] = useState('none');
  useEffect(() => {
    ///todo：情求数据
    const initialState = JSON.parse(localStorage.getItem('resumeState'));
    if (initialState) {
      /// 通过必填项确认是否填写
      setPreviewObj({
        BaseInfo: initialState.baseInfo,
        Experiences: initialState.experiences[0].name,
        Projects: initialState.projects[0].name,
        Eductions: initialState.educations[0].school,
        Others: initialState.attachments[0].name,
      });
    }
    //初始化redux数据
    dispatch(setInitialState(initialState));
  }, []);
  const stateAction = nid => {
    //todp:上传数据
    //保存数据并修改预览状态
    localStorage.setItem('resumeState', JSON.stringify(resumeState));
    previewObj[nid] = !previewObj[nid];
    setPreviewObj({ ...previewObj });
  };

  return (
    <div className="resume">
      {/* 头部区域 ：todo头像上传 */}
      <div className="header">
        <Card free>
          <Media className="avatr">
            <Upload style={{ display: 'inline-block', marginRight: 10 }} autoUpload={false}>
              <div
                onMouseEnter={() => {
                  setHov('block');
                }}
                onMouseLeave={() => setHov('none')}>
                <img className="avatrImg" src={imgStr} alt=""></img>
                <span style={{ display: hov }}>上传图片</span>
              </div>
            </Upload>
          </Media>
          <div className="content">
            <Box direction="row" justify="space-between" className="contentTop">
              <span className="contentFont">你好，欢迎参与校园招聘</span>
              <Button type="secondary" style={{ borderRadius: 4 }}>
                切换至社招
              </Button>
            </Box>
            <div className="contentBot">
              <div className="contentImg">
                <img src="https://gw.alicdn.com/tfs/TB1aEbypsfpK1RjSZFOXXa6nFXa-72-72.svg" alt="" />
              </div>
              <span>加入阿里巴巴，一起打开有意思的未来！</span>
            </div>
          </div>
        </Card>
      </div>
      {/* 表单区域 */}
      <div className="resumeForm">
        {/* todo：简历上传 */}
        <ResumeUploader></ResumeUploader>
        <ResumeBaseInfo
          stateAction={() => {
            stateAction('BaseInfo');
          }}
          isPreview={previewObj['BaseInfo']}></ResumeBaseInfo>
        <ResumeExperiences
          stateAction={() => {
            stateAction('Experiences');
          }}
          isPreview={previewObj['Experiences']}></ResumeExperiences>
        <ResumeProjects
          stateAction={() => {
            stateAction('Projects');
          }}
          isPreview={previewObj['Projects']}></ResumeProjects>
        <ResumeEductions
          stateAction={() => {
            stateAction('Eductions');
          }}
          isPreview={previewObj['Eductions']}></ResumeEductions>
        <ResumeOthers
          stateAction={() => {
            stateAction('Others');
          }}
          isPreview={previewObj['Others']}></ResumeOthers>
        <FormCard title="声明条款">
          <Form inline>
            <Form.Item labelAlign="left" required requiredMessage="不能为空" label="  ">
              <Checkbox requi>本人已详细阅读阿里巴巴招聘资料通知书并理解其中内容</Checkbox>
            </Form.Item>
          </Form>
        </FormCard>
        <Box className="submitButton" align="center" justify="center" direction="row">
          <Button type="primary" onClick={() => {}}>
            去选职位
          </Button>
          <Button
            type="primary"
            onClick={() => {
              localStorage.removeItem('resumeState');
              window.location.reload();
            }}>
            清除表单
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Resume;
