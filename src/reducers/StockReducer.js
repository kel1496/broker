
const DefaultState = {
    loading:false,
    data: {
 /*       labels: [],
        datasets: [{
          label: "BTC",
          data: [],
          backgroundColor: 'rgba(238,175,0, 0.4)',
          borderColor: 'rgba(238,175,0, 0.4)',
          pointBorderColor: 'rgba(238,175,0, 0.4)'
        }]*/
    },
    errorMsg:""
};

const StockReducer = (state = DefaultState, action) => {
    switch(action.type){
        case "STOCK_LOADING":
            return{
                ...state,
                loading:true,
                errorMsg: ""
            };
        case "STOCK_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                loading:false,
                errorMsg: "",
                data: action.payload
            };
        case "STOCK_FAIL":
            return {
                ...state,
                loading:false,
                errorMsg:"unable to find stock"
            }
        default:
            return state;
    }
}

export default StockReducer;