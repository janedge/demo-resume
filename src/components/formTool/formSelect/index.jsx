import React from 'react';
import { Select } from '@alifd/next';
export default function FormSelect(props) {
  if (props.type == 'searchSelect') {
    return (
      //todo：搜索辅助
      <Select
        isPreview={props.isPreview}
        showSearch
        placeholder="请输入"
        filterLocal={false}
        dataSource={props?.dataSource}
        onSearch={props?.handleSearch}
        style={{ width: '100%' }}
        fillProps="label"></Select>
    );
  } else if (props.type == 'inputSelect') {
    return (
      <Select.AutoComplete
        placeholder="请输入"
        isPreview={props.isPreview}
        defaultValue={props.defaultValue || ''}
        autoWidth
        style={{ width: '100%' }}
        dataSource={props.dataSource}
        onChange={val => props.handleChange(val)}
        value={props.value || ''}
        fillProps="label"></Select.AutoComplete>
    );
  } else {
    return (
      <Select
        placeholder={props.placeholder}
        defaultValue={props.defaultValue || ''}
        autoWidth
        isPreview={props.isPreview}
        style={{ width: '100%' }}
        dataSource={props.dataSource}
        onChange={val => props.handleChange(val)}
        value={props.value}
        fillProps="label"></Select>
    );
  }
}
