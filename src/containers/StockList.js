import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import {GetStockList} from "../actions/stockActions";
import {Link} from 'react-router-dom';
import ReactPaginate from "react-paginate";



const StockList = (props) => {
    const [search, setSearch] = useState(""); 
    const dispatch = useDispatch();
    const stockList = useSelector(state => state.StockList);
    React.useEffect( () =>{
        FetchData(1);
    }, []);
    
    const FetchData = () => {
        dispatch(GetStockList());
    }
    

    const ShowData = () => {
        if(stockList.loading){
            return <p>Loading</p>
        }
        else if (!_.isEmpty(stockList.data)){
            return stockList.data.slice(stockList.start, stockList.start * 15).map(el => {
                return (
                    <div className={"list-wrapper"}>
                        <div className={"pokemon-item"}>
                            <p>{el.symbol}</p>
                            <Link className to={`/stock/${el.symbol}`}>View</Link>
                        </div>
                    </div>)
            })
        }
        
        
        else if (stockList.errorMsg !== ""){
            return <p>{stockList.errorMsg}</p>
        }

        return <p>Unable to get data</p>
    }

    return(
        <div>
            <div className={"search-wrapper"}>
                <p>Search</p>
                <input type="text" onChange={e => setSearch(e.target.value)}/>
                <button onClick={() => props.history.push(`/pokemon/${search}`)} >Search</button>
            </div>
            {ShowData()}
            {!_.isEmpty(stockList.data) && (
                <ReactPaginate
                pageCount={Math.ceil(stockList.count)}
                pageRangeDisplay={2}
                marginPagesDisplayed={1}
                onPageChange={(data) => FetchData()}
                containerClassName = {"pagination"}
                activeClassName={"active"}
                />
                
            )}
        </div>
    )
};

export default StockList;