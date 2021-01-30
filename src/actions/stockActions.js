import axios from 'axios';
import moment from "moment";


export const GetStockList = () => async dispatch =>{

    
    try{
        dispatch({
            type: "NASDAQ_LIST_LOADING"
        });

        const key = 'c3efd0d0f8e240460081baeaded2df62';

        const res = await axios.get(`https://financialmodelingprep.com/api/v3/quotes/nyse?apikey=${key}`);

        dispatch({
            type:"NASDAQ_LIST_SUCCESS",
            payload: res.data
        })

    } catch(e) {
        dispatch({
            type:"NASDAQ_FAIL"
        })
    }
};

export const GetStock = ({stock,time}) => async dispatch => {
    try{
        dispatch({
            type: "STOCK_LOADING"
        });
        
        const key = 'c3efd0d0f8e240460081baeaded2df62';
        const res = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${key}`);
        const timeData = await axios.get(`https://financialmodelingprep.com/api/v3/quote/historical-chart/${time}/${stock}?apikey=${key}`)

        /*const labels = [];
        const data = [];
        for (let i = 0; i < res.data.length; i++){
            data.unshift(res.data[i].close)
            labels.unshift(moment(res.data[i].date).format('LT'))

            if (i == (number - 1)){
                break;
            }
        }*/
        dispatch({
            type:"STOCK_SUCCESS",
            payload: res.data[0],
            pokemonName: stock
        })

    } catch(e) {
        dispatch({
            type:"STOCK_FAIL"
        })
    }
}
