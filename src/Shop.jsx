import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch  = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)
    return (
        <>
            <h2>Deposite/Widthdraw Money</h2>
            
            {/* <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

            <button className="btn btn-primary" onClick={()=>{(withdrawMoney(100))}}>-</button>
            Update Balance
            <button className='btn btn-primary' onClick={()=>{(depositMoney(100))}}>+</button>
        </>
    )
}

export default Shop