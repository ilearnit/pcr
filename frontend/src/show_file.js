import React from 'react';
import { Table, Label, Col, Button } from 'reactstrap';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';


class ShowFile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      files: [],
      page: 0,
      key: ''
    };
  }

  onChangePageNum = (e, num) => {
    e.preventDefault();
    let page = this.state.page;

    if (num == 1) {
      page = page + 12;
    } else {
      page = page - 12;
    }
    this.setState({
      page: page
    });
  }

  render() {
    let onUploadFile = {
      process: {
        url: '/api/read/',
        method: 'POST',
        onload:(res) => {
          let data = JSON.parse(res);
          this.setState({
            value: data.data,
            key: data.key
          });
          this.props.setSourceKey(data.key);
        },
      },
      revert: {
        url: '/api/read/',
        onload: (res => {
          this.setState({
            value: [],
            position: []
          });
          this.props.setSourceKey('');
        })
      }
    };

    let page = this.state.page;

    return (
      <Col sm={3}>
        <Label className='d-flex justify-content-center'>{this.props.label}</Label>
        <Table className="mb-0">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Cp</th>
            </tr>
          </thead>
        </Table>
        <Table bordered striped hover responsive>
          <tbody>
            {this.state.value.slice(page, page+12).map((item) => {
              return (
                <tr key={item.pos}>
                  <th scope="row">{item.pos}</th>
                  <th>{item.cp}</th>
                </tr>
              );})
            }
          </tbody>
        </Table>
        {this.state.value.length >0 &&
          <div className="d-flex justify-content-between">
            {page > 0 &&
              <Button outline color="warning" onClick={e => this.onChangePageNum(e, -1)}>Previous</Button>
            }
            {page < 372 &&
              <Button outline color="success" onClick={e => this.onChangePageNum(e, 1)}>Next</Button>
            }
          </div>
        }
        <FilePond
          server={onUploadFile}
          labelIdle={'拖放文件 或 <span class="filepond--label-action">点击此处上传文件</span>'}
        />
      </Col>
    );
  }
}

export default ShowFile;
