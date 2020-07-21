import React from "react";
import {
    Well,
    Panel,
    FormControl,
    FormGroup,
    ControlLabel,
    Button
} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {postFlight} from "../actions/flightActions";
import {findDOMNode} from "react-dom";

class flightForm extends React.Component {
    handleSubmit() {
        debugger;
        if (this.refs.price) {
            const flight = [{
                    from: findDOMNode(this.refs.from).value,
                    to: findDOMNode(this.refs.to).value,
                    depTime: findDOMNode(this.refs.depTime).value,
                    lanTime: findDOMNode(this.refs.lanTime).value,
                    price: findDOMNode(this.refs.price).value
                },];
            this.props.postFlight(flight);
        }
    }
    render() {
        return (<Well>
            <Panel>
                <FormGroup controlId="from">
                    <ControlLabel>From</ControlLabel>
                    <FormControl type="text" placeholder="Enter From Destination" ref="from"/>
                </FormGroup>

                <FormGroup controlId="to">
                    <ControlLabel>To</ControlLabel>
                    <FormControl type="text" placeholder="Enter To Destination" ref="to"/>
                </FormGroup>

                <FormGroup controlId="depTime">
                    <ControlLabel>Departure Time</ControlLabel>
                    <FormControl type="text" placeholder="Enter Departure Time" ref="depTime"/>
                </FormGroup>

                <FormGroup controlId="lanTime">
                    <ControlLabel>Landing Time</ControlLabel>
                    <FormControl type="text" placeholder="Enter Landing Time" ref="lanTime"/>
                </FormGroup>

                <FormGroup controlId="price">
                    <ControlLabel>Price</ControlLabel>
                    <FormControl type="text" placeholder="Enter Price" ref="price"/>
                </FormGroup>

                <Button onClick={
                        () => this.handleSubmit(this)
                    }
                    bsStyle="primary">
                    Save Flight
                </Button>
            </Panel>
        </Well>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postFlight: postFlight
    }, dispatch);
}

// no state means no need for mapStateToProps - null
export default connect(null, mapDispatchToProps)(flightForm);
