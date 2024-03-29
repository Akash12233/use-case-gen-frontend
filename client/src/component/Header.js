import React, { useContext } from 'react';
import logo from '../icons/beckn-logo.svg';
import { Context } from '../Store'

export default function Header() {
    const [state, setstate] = useContext(Context);
    return (
        <div className="header">
             <img className="b-logo" src={logo} alt="React Logo" />
             <div className='user-details'>
                 {state.userInfo.user?<div className="b-padding">Name: <b>{state.userInfo.user}</b></div>:''}
                 {state.userInfo.name_org?<div className="b-padding">Organisation Name: <b>{state.userInfo.name_org}</b></div>:''}
                 {state.userInfo.name_role_timestamp?<div>Role in the network: <b>{state.userInfo.name_role_timestamp}</b></div>:''}
             </div>
        </div>
    )
}
