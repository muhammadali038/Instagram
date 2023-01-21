//import react here 
import React from 'react'
//react redux is imopted here
import { useSelector, useDispatch } from 'react-redux'
//module for global types of the redux is using here 
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

import Loading from './Loading'
//Toast module is used here
import Toast from './Toast'
//notify function 
const Notify = () => {
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            {alert.loading && <Loading />}

            {
                alert.error && 
                <Toast msg={{title: 'Error', body: alert.error}}
                handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})} 
                bgColor="bg-danger" />
            }

            {
                alert.success && 
                <Toast msg={{title: 'Success', body: alert.success}} 
                handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
                bgColor="bg-success" />
            }
        </div>
    )
}

export default Notify
