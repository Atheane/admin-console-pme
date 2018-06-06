import React, { Component } from 'react';
import { Card, Row, Col, Table, Icon } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const columns = [
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'KPI',
    dataIndex: 'kpi',
  }];

const dataFeedback = [
  {
    key: '1',
    value: 123,
    kpi: 'Users',
  }, {
    key: '2',
    value: 44,
    kpi: 'Votes / user',
  },
];

const dataSmart = [
  {
    key: '1',
    value: 255,
    kpi: 'Users',
  }, {
    key: '2',
    value: 444,
    kpi: 'Sessions',
  },
];

const dataAudit = [
  {
    key: '1',
    value: 123,
    kpi: 'Users',
  }
];

class Usage extends Component {
  render() {
    return (
      <div>
        <br/>
        <Row style={{textAlign: 'center'}}>
          <h3> Statistiques d'usage des solutions Mailoop</h3>
        </Row>
        <br/>
        <br/>
        <Row type="flex" justify="space-around">
-           <Card.Grid style={gridStyle} >
              <Row>
                <img src='mailoop_icon.png' height='40' width='40'/>
              </Row>
              <br />
              <Row>
                <h4> Feedback Email </h4>
              </Row>
              <br />
              <Row>
                <Table columns={columns} dataSource={dataFeedback} size="small" />
              </Row>
            </Card.Grid>
            <Card.Grid style={gridStyle} >
              <Row>
                <img src='icone_deconnexion_32.png' height='40' width='40'/>
              </Row>
              <br />
              <Row>
                <h4> Smart Deconnexion </h4>
              </Row>
              <br />
              <Row>
                <Table columns={columns} dataSource={dataSmart} size="small" />
              </Row>
            </Card.Grid>
            <Card.Grid style={gridStyle} >
              <Row>
                <Icon type="line-chart" style={{ fontSize: 36, color: '#DD8244' }} />
              </Row>
              <br />
              <Row>
                <h4> Audit </h4>
              </Row>
              <br />
              <Row>
                <Table columns={columns} dataSource={dataAudit} size="small" />
              </Row>
            </Card.Grid>
        </Row>
      </div>
    );
  }
}

export default Usage;
