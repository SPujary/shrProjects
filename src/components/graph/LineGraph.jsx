import React from 'react';
import Layout from '../Layout';
import { Paper, Grid, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";


const useStyles = makeStyles({
    root: {
        marginLeft: '195px',
        marginTop: '60px',
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 30,
        fontWeight: 500,
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
    },
    paperList: {
        margin: '0px 20px',
    }
});

const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540]
];

const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" }
};


function LineGraph(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Layout />
            <div className={classes.root} >
                <Grid container direction="row" justify="space-between" alignItems="flex-end">
                    <Grid item className={classes.header}>Graph</Grid>
                </Grid>
                <Paper elevation={2} className={classes.paperList} style={{ padding: '20px' }} >
                    <Grid container direction="row" justify="space-around" alignItems="flex-start">
                        <Grid items xs>
                            <h3>Line Graph</h3>
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                                legendToggle="false"
                            />
                        </Grid>
                        <Grid items xs>
                            <h3>Bar Graph</h3>
                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default LineGraph;