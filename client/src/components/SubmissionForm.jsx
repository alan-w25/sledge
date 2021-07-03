import {Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
  }));
  

export default function SubmissionForm() {
    const classes = useStyles();

    const print = (message) => {
        console.log(message);
    }
    return (
        <div className={classes.root}>
            <TextField id="titleTxt" label="Title:" /><br/>
            <TextField id="techTxt" label="Technologies:"/><br/>
            <TextField id="descTxt" label="Description:" multiline="true" rows="5" /><br/>
            <TextField id="urlTxt" label="URLs:" multiline="true" rows="5"/><br/>
            <TextField id="imagesTxt" label="Image:"/> <br/>
            <TextField id="categoriesTxt" label="Categories:"/><br/> <br/>
            <Button id="submitBtn" type="submit" onClick={() => {
                print('You Submitted!! :D');
            }}>Submit</Button>
        </div>
    );
};
