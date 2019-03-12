import React, { Component } from 'react';
import EditableCell from './EditableCell'; 
import antd from 'antd';
import { EditableContext } from './store/actionTypes';

const { Table, Input, Button, Popconfirm, Form } = antd;

const FormItem = Form.Item;


const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

class MyTable extends Component {
    constructor(props) {
        super(props);
        this.columns = [{
          title: '姓名',
          dataIndex: 'name',
          width: '30%',
          editable: true,
        }, {
          title: '年龄',
          dataIndex: 'age',
        }, {
          title: '地址',
          dataIndex: 'address',
        }, {
          title: '操作',
          dataIndex: 'operation',
          render: (text, record) => {
            return (
              this.state.dataSource.length >= 1
                ? (
                  <Popconfirm title="你确定要删除?" onConfirm={() => this.handleDelete(record.key)}>
                    <a href="javascript:;">删除</a>
                  </Popconfirm>
                ) : null
            );
          },
        }];
    
        this.state = {
          dataSource: [],
          count: 4,
        };
      }
    
      handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      }
    
      handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          name: '111',
          age: 32,
          address: `London, Park Lane no. ${count}`,
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
      }
    
      handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
      }
    
      render() {
        const { dataSource } = this.state;
        const components = {
          body: {
            row: EditableFormRow,
            cell: EditableCell,
          },
        };
        const columns = this.columns.map((col) => {
          if (!col.editable) {
            return col;
          }
          return {
            ...col,
            onCell: record => ({
              record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave: this.handleSave,
            }),
          };
        });
        return (
          <div>
            <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
              新建
            </Button>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
          </div>
        );
      }
}

export default MyTable;
