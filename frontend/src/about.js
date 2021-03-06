import React from 'react';
import ReactDOM from 'react-dom';
import { Container,  Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';


import Header from './navs';


class PCRHelp extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDemo = () => {
    const url = 'https://pan.baidu.com/s/1OaIrEtk1XGEFMEBHlGNcdg';
    window.open(url, '_blank');
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Card>
            <CardBody>
              <CardTitle>为什么做这个小网站</CardTitle>
              <CardText>2018年国庆假期去找一位朋友，见到她在用 Excel 做 PCR 数据分析，感到略微有点耗时，遂决定做一个 PCR 相关的网站.
              <br />希望可以节约更多人的时间。前后经历了多次的改版，算是可以使用了。
              </CardText>
              <CardTitle>网站的未来</CardTitle>
              <CardText>
                <ul>
                  <li>更多的文件类型支持</li>
                  <li>可以生成图像</li>
                  <li>可以输出为 Excel 文件</li>
                  <li>更友好的 UI 设计</li>
                  <li>数据文件可以线上保存</li>
                  <li>……</li>
                </ul>
              </CardText>
              <CardTitle>联系</CardTitle>
                <CardText>如有你有以下情况请与我联系：
                  <br />1. 此时挣扎在实验数据分析的泥潭中，想用一种更便捷的方式处理它的你。（数据规模仅限 10W 以下）
                  <br />2. 对于本网站有自己的看法，能够提高其他用户的体验的你。（强烈建议联系）
                  <br />3. 对于源代码有需求的你。（代码整理完后会进行开源。）
                  <br />4. 希望贡献代码的你。(本网站技术栈： python3 + Django + Django rest framework + react + webpack)
                  <br />
                  <CardImg style={{'width': '25%'}} src='/static/wechat.jpeg'/>
               </CardText>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}


ReactDOM.render(
  <PCRHelp />,
  document.getElementById('root')
);
