// GET FLIGHTS
export function getFlights() {
    return {type: "GET_FLIGHTS"};
}

// POST A FLIGHT
export function postFlight(flight) {
    return {type: "POST_FLIGHTS", payload: flight};
}
