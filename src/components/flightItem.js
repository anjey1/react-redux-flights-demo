import React from "react";
import {Row, Col, Well, Button} from "react-bootstrap";
import {connect} from "react-redux";

class flightItem extends React.Component {
    render() {
        return (<Well>
            <Row>
                <Col xs={12}>
                    <h6> {
                        this.props.from
                    }</h6>
                    <h6> {
                        this.props.to
                    }</h6>
                    <p> {
                        this.props.depTime
                    }</p>
                    <p> {
                        this.props.lanTime
                    }</p>
                    <h6> {
                        this.props.price
                    }</h6>
                </Col>
            </Row>
        </Well>);
    }
}

function mapStateToProps(state) {
    return {fligths: state.flights};
}

export default connect(mapStateToProps)(flightItem);
