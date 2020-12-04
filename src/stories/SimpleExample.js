import React, { Component } from "react";

import TabContent from '../../src/components';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                  groupName: "group1",
                  title1: "content1",
                  title2: "content2",
                },
                {
                  groupName: "group2",
                  title3: "content3",
                  title4: "content4",
                },
            ]
        }
    }

    render() {
        return (
            <div style={{height: 300}}>
                <TabContent
                    data={this.state.data}
                    onChange={data => this.setState(data)}
                    />
            </div>
        );
    }
}