import {combineReducers} from 'redux';
import StockListReducer from './StockListReducer';
import StockReducer from './StockReducer';


const RootReducer = combineReducers({
    StockList: StockListReducer,
    Stock: StockReducer
})

export default RootReducer;