import React from 'react';
import { Form, Input, Button, Upload, Message, Icon, Box } from '@alifd/next';
import { FormCard, FormSelect, FormDateSelect, FormTip } from '../../../components/formTool/index.js';
import './index.scss';
export default function FormUi(props) {
  return (
    <FormCard editFlag={props.isPreview} editAction={props.stateAction} className="formUi" title={props.title}>
      {/* 表单区域：可增型表单和固定项表单 */}
      <Form isPreview={props.isPreview} size="medium" className="eachForm" labelAlign="top" colon>
        {props.addStatus ? ( ///可增加表
          props.valueData.map((ele, index) => {
            return (
              <div className="templateItem" key={index}>
                {!!index && !props.isPreview && (
                  <Icon className="formDelete" size="small" type="ashbin" onClick={() => props.deleteAction(index)} />
                )}
                {props.configList.map(item => {
                  switch (item.type) {
                    case 'input':
                    case 'number':
                    case 'email':
                      return (
                        <Form.Item
                          asterisk={!props.isPreview}
                          className={item.fullFlag ? 'eachItemAll' : 'eachItem'}
                          name={item.key + index}
                          label={item.label}
                          required={item.required}
                          requiredMessage={`请输入你的${item.label}`}
                          format={item.reg}>
                          {/* 电话todo 区号选择框*/}
                          <Input
                            data-id={index}
                            placeholder="请输入"
                            value={props.valueData[index][item.key]}
                            onChange={val => item.handleChange(index, item.key, val)}
                          />
                        </Form.Item>
                      );
                    case 'select':
                    case 'inputSelect':
                    case 'searchSelect':
                      return (
                        <Form.Item
                          name={item.key + index}
                          asterisk={!props.isPreview}
                          label={item.label}
                          required={item.required}
                          requiredMessage={`请输入你的${item.label}`}
                          className={item.fullFlag ? 'eachItemAll' : 'eachItem'}>
                          <FormSelect
                            isPreview={props.isPreview}
                            type={item.type}
                            dataSource={item.dataSource}
                            handleChange={val => item.handleChange(index, item.key, val)}
                            value={props.valueData[index][item.key]}></FormSelect>
                        </Form.Item>
                      );

                    case 'datePicker':
                      return (
                        <Form.Item
                          asterisk={!props.isPreview}
                          name={item.key + index}
                          label={item.label}
                          required={item.required}
                          requiredMessage={`请输入你的${item.label}`}
                          className={item.fullFlag ? 'eachItemAll' : 'eachItem'}>
                          <FormDateSelect
                            isPreview={props.isPreview}
                            value={props.valueData[index][item.startTime] && props.valueData[index][item.endTime]}
                            startTime={props.valueData[index][item.startTime]}
                            setStartTime={val => item.setStartTime(index, item.startTime, val)}
                            setEndTime={val => item.setEndTime(index, item.endTime, val)}
                            endTime={props.valueData[index][item.endTime]}></FormDateSelect>
                        </Form.Item>
                      );
                    case 'textArea':
                      return (
                        <Form.Item
                          asterisk={!props.isPreview}
                          name={item.key + index}
                          label={item.label}
                          required={item.required}
                          requiredMessage={`请输入你的${item.label}`}
                          className={item.fullFlag ? 'eachItemAll' : 'eachItem'}>
                          <Input.TextArea
                            placeholder="请输入"
                            maxLength={3000}
                            rows={6}
                            showLimitHint
                            onChange={val => item.handleChange(index, item.key, val)}
                            value={props.valueData[index][item.key]}
                          />
                        </Form.Item>
                      );
                    case 'upload':
                      return (
                        <Form.Item
                          asterisk={!props.isPreview}
                          name={item.key + index}
                          label={item.label}
                          required={item.required}
                          className="eachItemAll">
                          <Upload limit={item.limit} multiple listType="text">
                            <Button type="normal">上传</Button>
                            <FormTip content={item.tip}></FormTip>
                          </Upload>
                        </Form.Item>
                      );
                    default:
                      break;
                  }
                })}
              </div>
            );
          })
        ) : (
          ///不可增加
          <div className="templateItem">
            {props.configList.map((item, index) => {
              switch (item.type) {
                case 'input':
                case 'number':
                case 'email':
                  return (
                    <Form.Item
                      key={index}
                      className={item.fullFlag ? 'eachItemAll' : 'eachItem'}
                      name={item.key}
                      asterisk={!props.isPreview}
                      label={item.label}
                      required={item.required}
                      requiredMessage={`请输入你的${item.label}`}
                      format={item.reg}>
                      {/* 电话todo 区号选择框*/}
                      <Input
                        placeholder="请输入"
                        value={props.addStatus ? props.valueData[item.key] : item.value}
                        onChange={val => item.handleChange(item.key, val)}
                      />
                    </Form.Item>
                  );
                case 'select':
                case 'inputSelect':
                case 'searchSelect':
                  return (
                    <Form.Item
                      key={index}
                      name={item.key}
                      label={item.label}
                      asterisk={!props.isPreview}
                      required={item.required}
                      requiredMessage={`请输入你的${item.label}`}
                      className={item.fullFlag ? 'eachItemAll' : 'eachItem'}>
                      <FormSelect
                        isPreview={props.isPreview}
                        type={item.type}
                        dataSource={item.dataSource}
                        handleChange={val => item.handleChange(item.key, val)}
                        value={item.value}></FormSelect>
                    </Form.Item>
                  );

                case 'datePicker':
                  return (
                    <Form.Item
                      key={index}
                      label={item.label}
                      asterisk={!props.isPreview}
                      required={item.required}
                      requiredMessage={`请输入你的${item.label}`}
                      className={item.fullFlag ? 'eachItemAll' : 'eachItem'}>
                      <FormDateSelect
                        isPreview={props.isPreview}
                        startTime={item.startTime}
                        setStartTime={val => item.setStartTime(item.key, val)}
                        setEndTime={val => item.setEndTime(item.key, val)}
                        endTime={item.endTime}></FormDateSelect>
                    </Form.Item>
                  );
                case 'textArea':
                  return (
                    <Form.Item
                      key={index}
                      name={item.key}
                      label={item.label}
                      asterisk={!props.isPreview}
                      required={item.required}
                      requiredMessage={`请输入你的${item.label}`}
                      className={item.fullFlag ? 'eachItemAll' : 'eachItem'}>
                      <Input.TextArea
                        placeholder="请输入"
                        maxLength={3000}
                        rows={6}
                        showLimitHint
                        onChange={val => item.handleChange(item.key, val)}
                        value={item.value}
                      />
                    </Form.Item>
                  );
                case 'upload':
                  return (
                    <Form.Item
                      key={index}
                      asterisk={!props.isPreview}
                      name={item.key}
                      label={item.label}
                      required={item.required}
                      className="eachItemAll">
                      <Upload limit={item.limit} multiple listType="text">
                        <Button type="normal">上传</Button>
                        <FormTip content={item.tip}></FormTip>
                      </Upload>
                    </Form.Item>
                  );
                default:
                  break;
              }
            })}
          </div>
        )}
        {/* 增加表单按钮 */}
        {props.addStatus && !props.isPreview && (
          <Box
            onClick={props.addAction}
            className="addItem"
            direction="row"
            align="center"
            style={{ display: `${props.addStatus ? '' : 'none'}` }}>
            <Icon size="xs" type="add" />
            <span>添加{props.title}</span>
          </Box>
        )}
        {/* 保存按钮 带校验 */}
        <Form.Submit
          validate={true}
          onClick={(val, err) => {
            if (!err) {
              props.stateAction();
              Message.show({
                type: 'success',
                size: 'large',
                duration: 1000,
                align: 'cc cc',
                content: '基本信息保存成功',
              });
            }
          }}
          type="primary"
          size="medium"
          style={{ display: `${props.isPreview ? 'none' : ''}` }}>
          保存
        </Form.Submit>
      </Form>
    </FormCard>
  );
}
