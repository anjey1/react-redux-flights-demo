import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Col, Row, Button } from "react-bootstrap";
import FlightItem from "./flightItem";
import { getFlights } from "../actions/flightActions";

class flightList extends React.Component {
  componentDidMount() {
    // Dispatch Action
    this.props.getFlights();
  }
  render() {
    const flightsList = this.props.flights.map(function (fligthsArr) {
      return (
        <Col xs={12} sm={6} md={4} key={fligthsArr.id}>
          <FlightItem
            from={fligthsArr.from}
            to={fligthsArr.to}
            depTime={fligthsArr.depTime}
            lanTime={fligthsArr.lanTime}
            price={fligthsArr.price}
          ></FlightItem>
        </Col>
      );
    });

    return (
      <Grid>
        <h2>Current Flights</h2>
        <Row>{flightsList} </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { flights: state.flights };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getFlights: getFlights,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(flightList);
