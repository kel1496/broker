const DefaultState = {
    loading: false,
    data: [],
    errorMsg:"",
    count: 0,
    start:0,

    
};


const StockListReducer = (state=DefaultState, action) => {
    switch (action.type){
        case "NASDAQ_LIST_LOADING":
            return {
                ...state,
                loading:true,
                errorMsg:""
            };
        case "NASDAQ_FAIL":
            return {
                ...state,
                loading:false,
                errorMsg:"unable to get stock"
            };
        case "NASDAQ_LIST_SUCCESS":
            return {
                ...state,
                loading:false,
                data: action.payload,
                errorMsg:"",
                count: action.payload.length,
                start: 1,
            };

        default:
            return state
    }
} 

export default StockListReducer;