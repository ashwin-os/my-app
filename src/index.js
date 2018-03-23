import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { getItems, getParsedData } from "./helper/apihelper";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: getParsedData()
        };
    }



      componentDidMount() {
        getItems().then((jobs) => {
            this.setState({ jobs });
          });
      }
      
    render() {
        const { data } = this.state;
        return (

            <div>
                        <h1 className="header">Asyc Job Manager</h1>
                <h2>Job Status</h2>
                <ReactTable
                    data={data}
                    columns={[ {
                        Header: 'Job Id',
                        id: 'JobId',
                        accessor: d => d.JobId
                    },
                    {
                        Header: 'Job Progress',
                        accessor: 'progress',
                        Cell: row => (
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#dadada',
                                    borderRadius: '2px'
                                }}
                            >
                                <div
                                    style={{
                                        width: `${row.value}%`,
                                        height: '100%',
                                        backgroundColor: row.value > 66 ? '#85cc00'
                                            : row.value > 33 ? '#ffbf00'
                                                : '#ff2e00',
                                        borderRadius: '2px',
                                        transition: 'all .2s ease-out'
                                    }}
                                />
                            </div>
                        )
                    }, {
                        Header: 'Status',
                        accessor: 'status',
                        Cell: row => (
                            <div className="center">
                            <span className="center">
                                <span style={{
                                    color: row.value === 'Done' ? '#57d500'
                                        : row.value === 'In Progress' ? '#ff2e00'
                                            :  '#ffbf00',
                                    transition: 'all .3s ease'
                                }}>
                                    &#x25cf;
            </span> {
                                    row.value
                                }
                            </span>
                            </div>
                        )

                    },
                    {
                        Header: 'Time Taken',
                        accessor: 'TotalTime',
                        id: 'tt',
                        Cell: row => (
                            <div className="center">
                            <span className="center">
                            {row.value}
                            </span>
</div>

                        )
                    }]}
                    defaultSorted={[
                        {
                          id: "tt",
                          desc: true
                        }
                      ]}
                    defaultPageSize={data.length}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
