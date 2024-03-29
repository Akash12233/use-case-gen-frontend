import React from 'react'
import ConstantData from '../ConstantData'

export default function InfoBox(props) {

    const InfoList = () => {
        return ConstantData.info[props.keyName].list.map(item => {
            return <div className='list-item' key={item}>
                <div className='bullet'></div>
                <div className="list-text">{item}</div>
            </div>
        })
    }

    return (
        <div className='info-box text-color'>
            <h3 className='x-ccenter'>Notes to user</h3>
            {InfoList()}
        </div>
    )
}
