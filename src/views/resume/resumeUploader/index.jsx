import React from 'react';
import { FormCard } from '../../../components/formTool/index';

import { Box, Upload } from '@alifd/next';
import './index.scss';
//简历上传区域
export default function ResumeUploader() {
  return (
    <FormCard className="resumeUploader" title="上传简历">
      <Box direction="column">
        <Box direction="row" className="uploadArea">
          <Upload multiple listType="text">
            <span className="sumitResume">手动上传简历</span>
          </Upload>
          <span>进行自动解析</span>
        </Box>
        <div className="tip">
          请将您的简历文件控制在10M以内，支持格式.pdf/.docx/.txt/.jpg/.png，上传成功后，系统将自动解析并填充。
        </div>
      </Box>
    </FormCard>
  );
}
