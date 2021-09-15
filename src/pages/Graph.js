import React, { useState, useContext, useEffect, useMemo } from 'react';
import { Context } from '../Store';
import ReactFlow from 'react-flow-renderer';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InfoBox from '../component/InfoBox';

const orderby = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", "status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel", "rating", "on_rating", "support", "on_support"]

const newOrder = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", [["status", "on_status"], ["track", "on_track"], ["update", "on_update"], ["cancel", "on_cancel"], ["rating", "on_rating"], ["support", "on_support"]]]

const greenClr = ["on_search", "search"];
const blueClr = ["select", "on_select", "init", "on_init", "confirm", "on_confirm"];
const redClr = ["status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel"];
const grayClr = ["rating", "on_rating", "support", "on_support"];

export default function Graph() {
    let history = useHistory();
    const [state, setState] = useContext(Context);
    const [graphData, setgraphData] = useState([]);
    const [iKey, setiKey] = useState(0);

    useEffect(
        () => {
            setiKey(iKey + 1);
        }, [graphData]
    );

    const makeDataForAlgo = (x1data = { ...state.apiFilterData }) => {
        console.log(1, x1data);
        var crrData = x1data
        var newData = {};
        orderby.forEach(item => {
            newData[item] = [];
            crrData[item].forEach(item2 => {
                var strCr = ''
                item2.forEach(item3 => {
                    if (item3.checked) {
                        strCr = strCr + item3.name + ','
                    }
                })
                if (strCr !== '') {
                    strCr = strCr.slice(0, -1);
                    newData[item].push(strCr)
                };
            })
        })
        console.log(newData);
        xgenerateGraphData(newData);
        // setalgoData(newData);
    }

    useEffect(() => {
        makeDataForAlgo();
    }, []);


    const colorClass = (item) => {
        if (greenClr.indexOf(item) >= 0) {
            return 'green-clr';
        } else if (blueClr.indexOf(item) >= 0) {
            return 'blue-clr';
        } else if (redClr.indexOf(item) >= 0) {
            return 'red-clr';
        } else if (grayClr.indexOf(item) >= 0) {
            return 'gray-clr';
        }
        return '';
    }

    const xgenerateGraphData = (data) => {
        var gDataArr = [];
        var i = 0;
        var j = 0;
        var x = 100;
        var y = 5
        var prIdArr = [];
        var newIdArr = [];
        for (const item of newOrder) {
            if (Array.isArray(item)) {
                var x1 = x;
                var y1 = y + 250;
                var cpId = [];
                item.forEach(aItem => {
                    if (data[aItem[0]].length > 0) {
                        data[aItem[0]].forEach((label) => {
                            i++;
                            gDataArr.push({
                                id: `${i}`, className: colorClass(aItem[0]), data: {
                                    label: <div><div className="label-head"><b className='box-id-text'>{i}</b><b className='node-item'>{aItem[0]}</b><b className="close-end" onClick={() => closeAction(aItem[0], label)}>X</b></div><div className="node-label">{label}</div><div className="node-tag"><div className="tag-box">{item.includes('_')?'BBP':'BAP'}</div></div></div>
                                }, position: { x: x, y: y }
                            });
                            cpId.push(i);
                            x += 300;
                            if (prIdArr.length > 0) {
                                prIdArr.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: `${pId}`, target: `${i}`, arrowHeadType: 'arrow' })
                                })
                            }
                        })
                    }
                    if (data[aItem[1]].length > 0) {
                        data[aItem[1]].forEach((label) => {
                            i++;
                            gDataArr.push({
                                id: `${i}`, className: colorClass(aItem[1]), data: {
                                    label: <div><div className="label-head"><b className='box-id-text'>{i}</b><b className='node-item'>{aItem[1]}</b> <b className="close-end" onClick={() => closeAction(aItem[1], label)}>X</b></div><div className="node-label">{label}</div><div className="node-tag"><div className="tag-box">{item.includes('_')?'BBP':'BAP'}</div></div></div>
                                }, position: { x: x1, y: y1 }
                            });
                            x1 += 300;
                            if (cpId.length > 0) {
                                cpId.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: `${pId}`, target: `${i}`, arrowHeadType: 'arrow' })
                                })
                            } else {
                                prIdArr.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: `${pId}`, target: `${i}`, arrowHeadType: 'arrow' })
                                })
                            }

                        })
                    }
                    cpId = [];
                })

            }
            else if (data[item].length > 0) {
                // create nodes 
                // <b className="close-end" onClick={() => closeAction(i)}>X</b>
                newIdArr = [];
                data[item].forEach((label) => {
                    i++;
                    gDataArr.push({ id: `${i}`, className: colorClass(item), data: { label: <div><div className="label-head"><b className='box-id-text'>{i}</b><b className='node-item'>{item}</b><b className="close-end" onClick={() => closeAction(item, label)}>X</b></div><div className="node-label">{label}</div><div className="node-tag"><div className="tag-box">{item.includes('_')?'BBP':'BAP'}</div></div></div> }, position: { x: x, y: y } });
                    newIdArr.push(i);
                    x += 300;
                    if (prIdArr.length > 0) {
                        prIdArr.forEach(pId => {
                            j++;
                            gDataArr.push({ id: 'e1-' + j, source: `${pId}`, target: `${i}`, arrowHeadType: 'arrow' })
                        })
                    }
                })
                // match nodes 
                prIdArr = newIdArr;

                x = 100;
                y += 250;
            }
        }
        setgraphData(gDataArr);
    }

    const closeAction = (key, label) => {
        var splitStr = label.split(",");

        for (let mainI = 0; mainI < state.apiFilterData[key].length; mainI++) {
            var temArr = [];
            splitStr.forEach(item2 => {
                console.log(state.apiFilterData[key][mainI]);
                for (let ci = 0; ci < state.apiFilterData[key][mainI].length; ci++) {
                    if (item2 == state.apiFilterData[key][mainI][ci].name && state.apiFilterData[key][mainI][ci].checked) {
                        temArr.push(ci);
                        break;
                    }
                }
            })
            if (splitStr.length === temArr.length) {
                temArr.forEach(i => {
                    state.apiFilterData[key][mainI][i].checked = false;
                })
                break;
            }
        }


        setState({ ...state, apiFilterData: { ...state.apiFilterData, [key]: state.apiFilterData[key] } });
        makeDataForAlgo({ ...state.apiFilterData });

    }

    const downloadPdf = () => {
        const input = document.getElementById('graph');
        html2canvas(input, {
            scale: 2
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = imgData
            link.click();
        })
            ;
    }

    return (
        <div>
            <div className="button-container">
                <div className='color-codes'>
                    <div className='c-padding'>
                        <div className="color-bricks green-clr"></div><div className="color-text">Discovery APIs (search, on_search)</div>
                    </div>
                    <div className='c-padding '>
                        <div className="color-bricks blue-clr"></div><div className="color-text">Order APIs (select, on_select, init, on_init, confirm, on_confirm)</div>
                    </div>
                    <div className='c-padding '>
                        <div className="color-bricks red-clr"></div><div className="color-text">Fulfilment APIs (status, on_status, track, on_track, update, on_update, cancel, on_cancel)</div>
                    </div>
                    <div className='c-padding '>
                        <div className="color-bricks gray-clr"></div><div className="color-text">Post-Fulfilment APIs (rating, on_rating, support, on_support)</div>
                    </div>
                </div>
                <Button variant="outlined" onClick={() => history.goBack()}>back</Button>
                <Button variant="outlined" style={{ marginLeft: '10px' }} onClick={() => history.push('/')}>home</Button>
                <Button variant="outlined" style={{ marginLeft: '10px' }} onClick={downloadPdf}>export</Button>
                <div className="step-graph">Step 22 of 22</div>
            </div>

            <div className="g-main">
                <div className='graph-info'>
                    <InfoBox keyName='graph' />
                </div>
            </div>

            <div id='graph' className="graph">
                <ReactFlow elements={graphData} />
            </div>
        </div>
    )
}
