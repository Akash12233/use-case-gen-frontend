import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CircularProgress, IconButton, ListItem, Typography } from '@material-ui/core';
var find = require("lodash").find
var filter = require("lodash").filter

const order_by = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", "status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel", "rating", "on_rating", "support", "on_support"]
const createRowText = (row) => {
    const use_cases = []
    for (const item in row) {
        const action = row[item].split(' ')[0]
        use_cases[action] = row[item].split(' ').slice(1).join(' ')
    }
    var row_text = ''
    for (const item of order_by) {
        if (use_cases[item] !== undefined) {
            row_text = row_text + use_cases[item]
        }
        row_text = row_text + '\t'
    }
    return row_text;
}

function traverse(node, response, path = [], result = []) {
    if (!node.children.length)
        result.push(path.concat(`${node.call} ${node.label}`))
    for (const child of node.children) {
        var child_obj = find(response.use_cases, { id: child })
        traverse(child_obj, response, path.concat(`${node.call} ${node.label}`), result)
    }
    return result;
}

const construct_tree = (response) => {
    var use_cases = response.use_cases
    var roots = filter(response.use_cases, function (o) {
        return !o.parents.length
    })
    var tree = []
    for (var root of roots) {
        tree = tree.concat(traverse(root, response))
    }
    console.log(`${response.participant_name} ${response.organisation_name} ${response.role_in_network}`)
    console.log(`${tree.length} paths found. Creating csv...`)
    var csv_text = ''; //'participant_details \t' + order_by.join('\t')
    for (var row of tree) {
        csv_text = csv_text + `\n${response.participant_name}_${response.organisation_name}_${response.role_in_network}\t` + createRowText(row)
    }
    console.log(`Processed`)
    return csv_text;
}


export default function Combine() {

    const [selectedFiles, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const uploadFile = (e) => {
        let files = e.target.files;
        if (files.length>0) {
            setFiles([...selectedFiles, ...files])
        }
    }

    const removeFile = (index) => {
        selectedFiles.splice(index, 1)
        setFiles([...selectedFiles])
    }


    const downloadJson = async () => {
        if (selectedFiles.length > 0) {
            setLoading(true)
            var data = 'participant_details \t' + order_by.join('\t')
            for (var file of selectedFiles) {
                let t = await file.text()
                data = data + construct_tree(JSON.parse(t)) + '\n'
            }
            console.log(`Exporting`)
            data = "data:text/csv;charset=utf-8," + data;
            var link = document.createElement('a');
            link.download = 'combined.csv';
            link.href = data;
            console.log(`Exported`)
            link.click();
            setFiles([])
            setLoading(false)
        }
    }
    return (
        <div>
            <label htmlFor="btn-upload">
                <input
                    id="btn-upload"
                    name="btn-upload"
                    accept=".json"
                    style={{ display: 'none' }}
                    type="file"
                    multiple
                    onChange={uploadFile} />
                <Button
                    className="btn-choose"
                    variant="outlined"
                    component="span" >
                    Choose Files
                </Button>
            </label>
            <Typography style={{ marginTop: '10px' }} variant="h6" className="list-header">
                List of Files
            </Typography>
            <ul className="list-group">
                {selectedFiles.length > 0 &&
                    selectedFiles.map((file, index) => (
                        <ListItem
                            divider
                            key={index}>
                            <span>{file.name}
                            </span>
                            <IconButton style={{ padding: 2 }} onClick={() => removeFile(index)} edge="end" aria-label="delete">
                                {/* <svg color="black" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CloseIcon"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg> */}
                                <svg color="black" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                            </IconButton>
                        </ListItem>
                    ))}
            </ul>

            {loading ? <CircularProgress /> :
                <Button variant="outlined" disabled={selectedFiles.length === 0} onClick={downloadJson}>Convert to Csv
                </Button>}
        </div>
    )
}
