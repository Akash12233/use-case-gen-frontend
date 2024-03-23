import React, { useContext, useState } from 'react';
import { Context } from '../Store'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ConstantData from '../ConstantData';
import Card from '@material-ui/core/Card';
import InfoBox from './InfoBox';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function CheckBoxSelector(props) {
    let history = useHistory();
    const [state, setstate] = useContext(Context);
    console.log(props);
    const handleChange = (event, index, index2) => {
        console.log(event.target.name, index, index2);
        state.apiFilterData[props.keyName][index][index2].checked = event.target.checked;
        setstate({ ...state, apiFilterData: { ...state.apiFilterData, [props.keyName]: state.apiFilterData[props.keyName] } })
    }


    const CheckBoxs = () => {
        return state.apiFilterData[props.keyName].map((item, index) => {
            return <Card className="check-box-card " key={index + 'c1'}>
                <div><b>{props.keyName}&nbsp;Use Cases {index + 1}</b></div>
                {
                    item.map((item2, index2) => {
                        return <FormControlLabel
                            key={item2.name + ' ' + index}
                            control={
                                <Checkbox
                                    checked={item2.checked}
                                    onChange={(e) => handleChange(e, index, index2)}
                                    name={item2.name}
                                    color="primary"
                                />
                            }
                            label={item2.name}
                        />
                    })
                }
            </Card>
        })
    }


    const nextClick = () => {
        history.push(`/${ConstantData.urlPath[props.keyName].next}`);
    }

    const backClick = () => {
        history.goBack();

    }

    const addMore = () => {
        console.log(state.apiFilterData[props.keyName].length);
        if (state.apiFilterData[props.keyName].length < 3) {
            var copyData = JSON.parse(JSON.stringify([...state.apiFilterData[props.keyName][0]]));
            var newCpData = copyData.map(item => {
                item.checked = false;
                return item
            })
            state.apiFilterData[props.keyName].push([...newCpData]);
            setstate({ ...state, apiFilterData: { ...state.apiFilterData, [props.keyName]: state.apiFilterData[props.keyName] } })
        }
    }


    return (
        <div className="check-box-compo">
            <div className="check-box-card-x">
                <div className="text-color x-ccenter box-head"><b>{props.keyName}</b>&nbsp;Use Cases</div>
                <div className="step">Step {props.num} of 22</div>
                <InfoBox keyName={props.keyName} />
                {CheckBoxs()}
                <div className='add-btn-container' onClick={addMore}>
                    <div className="add-cir-btn">+</div>
                    <div>Add another <b>{props.keyName}</b> use case</div>
                </div>
                <div className='button-container-check'>
                    <Button className="home-btn" variant="outlined" onClick={backClick} >
                        back
                    </Button>
                    <Button className="home-btn" style={{ marginLeft: '10px' }} variant="outlined" onClick={nextClick} >
                        {props.num === '21' ? 'Generate Transaction flows' : `Save and Proceed to ${ConstantData.urlPath[props.keyName].nextName}`}
                    </Button>
                </div>
            </div>

        </div>
    )
}
