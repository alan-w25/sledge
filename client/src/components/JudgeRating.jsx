import * as React from 'react';

import Rating from "@mui/material/Rating"

import Layout from './Layout';
import JudgeTextInfoDisplay from './JudgeRateForm';

export default function JudgeRating() {
    return (
        
        <Layout version="judge">
          <h1>Judge Rating Page</h1>
          <form>
            <JudgeTextInfoDisplay/>
            <Rating 
                size="large"
                max={10}
                precision={0.5}
            />
          </form>
          

        </Layout>
    )
}