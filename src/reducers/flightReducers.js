// FLIGHT REDUCERS
const fligthState = (state = {
    flights: [
        {
            id: 1,
            from: "Tel Aviv",
            to: "Rome",
            depTime: "23:20",
            lanTime: "02:50",
            price: 200
        }, {
            id: 2,
            from: "Rome",
            to: "Tel Aviv",
            depTime: "23:20",
            lanTime: "02:50",
            price: 400
        }, {
            id: 3,
            from: "Eilat",
            to: "Rome",
            depTime: "23:20",
            lanTime: "02:50",
            price: 300
        },
    ]
}, action) => {
    switch (action.type) {
        case "GET_FLIGHTS":
            debugger;
            return {
                ...state,
                flights: [...state.flights]
            };
        case "POST_FLIGHTS":
            debugger;
            return {
                flights: [
                    ...state.flights,
                    ...action.payload
                ]
            };
        default:
            return state;
            break;
    }
}


export default fligthState
