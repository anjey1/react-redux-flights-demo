import React from "react";
import { Row, Col, Well, Button } from "react-bootstrap";
import { connect } from "react-redux";

class flightItem extends React.Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>Flight Details</h6>
            <h3> {"From: " + this.props.from}</h3>
            <h3> {"To: " + this.props.to}</h3>
            <p> {"Departure: " + this.props.depTime}</p>
            <p> {"Landing: " + this.props.lanTime}</p>
            <h3> {"Price: " + this.props.price}</h3>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return { fligths: state.flights };
}

export default connect(mapStateToProps)(flightItem);
