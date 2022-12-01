import { DatePicker2, Form } from '@alifd/next';
import { useState } from 'react';
const { MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker2;

const onChange = (date, dateStr) => console.log(date, dateStr);

export default function App() {
  const [test, setTest] = useState('');
  return (
    <Form className="app" style={{ height: '100vh' }}>
      <Form.Item name="test" label="ww" required requiredMessage="iii">
        <DatePicker2
          value={test}
          onChange={val => {
            setTest(val);
          }}
        />
      </Form.Item>
      <Form.Item>
        <MonthPicker onChange={onChange} />
      </Form.Item>
      <Form.Item>
        <YearPicker onChange={onChange} />
      </Form.Item>
      <Form.Item>
        <WeekPicker onChange={onChange} />
      </Form.Item>
      <Form.Item>
        <QuarterPicker onChange={onChange} />
      </Form.Item>
      <Form.Submit
        validate={true}
        onClick={(val, err) => {
          if (!err) {
          }
        }}
        type="primary"
        size="medium">
        保存
      </Form.Submit>
    </Form>
  );
}
