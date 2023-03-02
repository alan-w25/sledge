import React  from "react";
import axios from 'axios';
import { TextField, Box } from "@mui/material";
 
export default function JudgeRateForm(){
    /*
    We need 3 input fields which will display the labels:
    1. Team Name
    2. Member Names
    3. Description 
    4. Devpost Link

    */

    /*
    Write function to fetch submission data from mongo
    */

    const getSubmissionData = () => {
        axios.get('/api/submissions');
    }
    return(
        <div>
                <Box
                        component="form"
                        sx={{
                            display: 'flex',
                        }}
                        noValidate
                        autoComplete="off"
                    />
                <div>
                    <TextField 
                    id="filled-basic" 
                    label="Team Name" 
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue="DeezNuts"
                    />
                    <TextField 
                        id="filled-basic" 
                        label="Member Names" 
                        variant="filled" 
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </div>
                <div>
                <TextField
                        id="outlined-multiline-flexible"
                        label="Submission Description"
                        multiline
                        maxRows={4}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                <TextField
                    id="filled-basic" 
                    label="DevPost Link" 
                    variant="filled" 
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </div>
        </div>
    );
}