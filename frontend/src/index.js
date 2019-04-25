import React from 'react';
import ReactDOM from 'react-dom';
import { PcrAPI } from './utils/api';
import { Table, Form, FormGroup, 
         Label, Input, Container,
         Row, Col, FormText, Button } from 'reactstrap';

import cookie from 'react-cookies';
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import Header from './navs';
import ShowFile from './show_file';
import Operation from './operation';


let pcrAPI = new PcrAPI();
let xcsrfHeaders = cookie.load('sfcsrftoken');
pcrAPI.init({ xcsrfHeaders });


class PCRIndex extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <ShowFile />
            <ShowFile />
            <Operation />
          </Row>
        </Container>
      </div>
    );
  }
}


ReactDOM.render(
  <PCRIndex />,
  document.getElementById('root')
);
