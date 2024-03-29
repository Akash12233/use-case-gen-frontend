import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
// import Chip from '@material-ui/core/Chip';
import ReactFlow from 'react-flow-renderer';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));


const buttonStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const orderby = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", "status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel", "rating", "on_rating", "support", "on_support"]

const newOrder = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", [["status", "on_status"], ["track", "on_track"], ["update", "on_update"], ["cancel", "on_cancel"], ["rating", "on_rating"], ["support", "on_support"]]]

const greenClr = ["on_search", "search"];
const blueClr = ["select", "on_select", "init", "on_init", "confirm", "on_confirm"];
const redClr = ["status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel"];
const grayClr = ["rating", "on_rating", "support", "on_support"];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const flowStyles = { height: 200 };

export default function HomePage() {

    const [apiFilterData, setapiFilterData] = useState({});
    const [checkedData, setcheckedData] = useState({});
    const [generate, setgenerate] = useState(false);
    const [graphData, setgraphData] = useState([]);

    useEffect(() => {
        getApiData()


    }, []);
    const elements = [
        { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 5 } },
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: '2', data: { label: 'Node 2 dasdas dasdasd dsaadasd dsadasd dasdas' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Node 3' }, position: { x: 350, y: 100 } },
        { id: 'e1-3', source: '2', target: '4', animated: true },
        { id: '4', data: { label: 'Node 4' }, position: { x: 100, y: 200 } },
        { id: '5', data: { label: 'Node 5' }, position: { x: 450, y: 200 } },
        { id: 'e1-7', source: '1', target: '4', animated: true },
        { id: 'e1-4', source: '2', target: '5', animated: true },
        { id: 'e1-5', source: '1', target: '3', animated: true },
        { id: 'e1-6', source: '3', target: '5', animated: true },
    ];

    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setcheckedData({ ...checkedData, [event.target.name]: event.target.value });
    };

    const getApiData = () => {
        fetch('http://13.235.139.60:3000/action/')
            .then(response => response.json())
            .then(data => groupBy(data));
    }

    const groupBy = (list) => {
        const newData = {};
        list.forEach((item) => {
            if (newData[item.api]) {
                newData[item.api].push(item.label);
            } else {
                newData[item.api] = [item.label];
                checkedData[item.api] = [];
                setcheckedData(checkedData);
            }
        });
        setapiFilterData(newData);
        console.log(1, apiFilterData);
        return newData;
    }

    const buttonAction = () => {
        if (!generate) {
            // generateGraphData();
            xgenerateGraphData();
        } else {
            setgraphData([]);
        }
        setgenerate(!generate);
    }


    const validate = () => {
        if (checkedData['confirm'].length > 0) {

        }
        return true
    }

    const generateGraphData = () => {
        var gDataArr = [];
        var i = 0;
        var j = 0;
        var x = 100;
        var y = 5
        var prIdArr = [];
        var newIdArr = [];
        for (const item of orderby) {
            if (checkedData[item].length > 0) {
                // create nodes 
                newIdArr = [];
                checkedData[item].forEach((label) => {
                    i++;
                    gDataArr.push({ id: i, data: { label: <div><div className="label-head"><b>{item}</b></div><div>{label}</div></div> }, position: { x: x, y: y } });
                    newIdArr.push(i);
                    x += 300;
                })
                console.log(prIdArr, newIdArr);
                // match nodes 
                if (prIdArr.length === 0) {
                    prIdArr = newIdArr;
                } else {
                    console.log(prIdArr, newIdArr);
                    prIdArr.forEach(pId => {
                        newIdArr.forEach(nId => {
                            j++;
                            gDataArr.push({ id: 'e1-' + j, source: pId, target: nId, animated: true })
                        })
                    })
                    prIdArr = newIdArr;
                }
                x = 100;
                y += 150;
            }
        }

        console.log(gDataArr);
        setgraphData(gDataArr);

    }

    const xgenerateGraphData = () => {
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
                var y1 = y + 200;
                var cpId = [];
                item.forEach(aItem => {
                    if (checkedData[aItem[0]].length > 0) {
                        checkedData[aItem[0]].forEach((label) => {
                            i++;
                            gDataArr.push({
                                id: i, className: colorClass(aItem[0]), data: {
                                    label: <div><div className="label-head"><b>{aItem[0]
                                    }</b></div><div>{label}</div></div>
                                }, position: { x: x, y: y }
                            });
                            cpId.push(i);
                            x += 300;
                            if (prIdArr.length > 0) {
                                prIdArr.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                                })
                            }
                        })
                    }
                    if (checkedData[aItem[1]].length > 0) {
                        checkedData[aItem[1]].forEach((label) => {
                            i++;
                            gDataArr.push({
                                id: i, className: colorClass(aItem[1]), data: {
                                    label: <div><div className="label-head"><b>{aItem[1]
                                    }</b></div><div>{label}</div></div>
                                }, position: { x: x1, y: y1 }
                            });
                            x1 += 300;
                            if (cpId.length > 0) {
                                cpId.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                                })
                            } else {
                                prIdArr.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                                })
                            }

                        })
                    }
                    cpId = [];
                })

            }
            else if (checkedData[item].length > 0) {
                // create nodes 
                newIdArr = [];
                checkedData[item].forEach((label) => {
                    i++;
                    gDataArr.push({ id: i, className: colorClass(item), data: { label: <div><div className="label-head"><b>{item}</b></div><div>{label}</div></div> }, position: { x: x, y: y } });
                    newIdArr.push(i);
                    x += 300;
                    if (prIdArr.length > 0) {
                        prIdArr.forEach(pId => {
                            j++;
                            gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                        })
                    }
                })
                // match nodes 
                prIdArr = newIdArr;

                x = 100;
                y += 150;
            }
        }

        console.log(gDataArr);
        setgraphData(gDataArr);

    }

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


    const dropdowns = () => {
        var allDrop = [];
        for (const key of orderby) {
            if (apiFilterData[key]) {
                allDrop.push(
                    <div className="dropdown" key={key}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-checkbox-label">{key}</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                name={key}
                                multiple
                                value={checkedData[key]}
                                onChange={handleChange}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {apiFilterData[key].map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={checkedData[key].indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                )
            }
        }
        return allDrop;
    }

    const onSelectAll = () => {
        setcheckedData({ ...apiFilterData });
    }

    const onClearAll = () => {
        orderby.forEach(item => {
            checkedData[item] = [];
        })
        setcheckedData({ ...checkedData });
    }


    return (
        <div>

            {generate ? "" :
                <div>
                    <div className='select-btns'>
                        <Button variant="outlined" onClick={onSelectAll}>Select All</Button>
                        <Button variant="outlined" onClick={onClearAll}>clear all</Button>
                    </div>
                    <div className="all-dropdown">
                        {dropdowns()}
                    </div>
                </div>
            }
            <div className="button-container">
                <Button variant="outlined" onClick={buttonAction}>{generate ? 'back' : 'Generate'}</Button>
            </div>

            <div className="graph" style={{ display: generate ? 'block' : 'none' }}>
                <ReactFlow elements={graphData} />
            </div>
        </div>
    )
}
