import React, {Component} from 'react';
import _ from "lodash";
import {Query, Builder, Preview, Utils} from 'react-awesome-query-builder';
import {message} from "antd";
const {queryBuilderFormat, queryString} = Utils;

import config from './config';
import Highlight from 'react-highlight';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const stringify = require('json-stringify-safe');

import '../../css/reset.scss';
import '../../css/styles.scss';
import '../../css/denormalize.scss';

const transit = require('transit-immutable-js');

export default class DemoQueryBuilder extends Component {
    getChildren(props) {
        const jsonStyle = {backgroundColor: 'darkgrey', margin: '10px', padding: '10px'};
        const children = props.tree.get('children1');
        const conditions = [];
        let textToDisplay = "";
        let i = 1;

        conditions.push(`<?php\n`);

        children.map((child) => {
            conditions.push(`${i == 1 ? `  if` : `  else if`}(${queryString(child, props.config)}){\n    return ${i + 1};\n  }\n`);
            i++;
        });

        conditions.push(`  else{\n    return 1;\n  }\n?>`);

        textToDisplay = conditions.toString()
            .replace(/,/g, "")
            .replace(/comma/g, ",")
            .replace(/undefined/g, "false")
            .replace(/connection-referrer/g, "referrer");

        return (
            <div style={{padding: '10px', maxWidth: '1000px', margin: '0 auto'}}>
                <div className="query-builder" style={{position: "relative"}}>
                    <h2 class="title">FunnelFlux Route Builder</h2>
                    <p>Below is our route builder. Use this to build rules that output code that you can then paste into a PHP node in FunnelFlux.</p>

                    <p><strong>Note 1:</strong> A default route 1 is always included and the PHP node will return 1 if no rules match the user. Your "on done 1" connection in your funnel should <strong>always</strong> exist and go to a default location. Other rules will go down the "on done X" connections of the same number as your routes built here.</p>

                    <p><strong>Note 2:</strong> Some attributes like carrier, ISP, city etc. require manual text entry due to the very large lists of available options. If you need to add multiple items, just create additional rules within the route block (or group) with the OR option selected.</p>

                    <p><strong>Note 3:</strong> These rules process sequentially, so a user will go to the lowest numbered route that they match.</p>

                    <p></p>

                    <div className="default-route-block">
                        <h2>Route 1 - Default Route</h2>
                    </div>
                    <Builder {...props} />
                </div>
                <br/>
                <div>

                    {conditions.length > 2 &&
                    (
                        <div className="display-box">
                            <div className="copy-box">
                                <CopyToClipboard
                                    onCopy={() => message.success("Code snippet copied!")}
                                    text={textToDisplay}>
                                    <button className="ant-btn">COPY CODE</button>
                                </CopyToClipboard>
                            </div>
                            <Highlight language="php">
                                {textToDisplay}
                            </Highlight>

                        </div>
                    )
                    }


                </div>

            </div>
        )
    }

    render() {
        let initValueJSON = '["~#iM",["type","group","id","9a99988a-0123-4456-b89a-b1607f326fd8","children1",["~#iOM",["a98ab9b9-cdef-4012-b456-71607f326fd9",["^0",["type","rule","id","a98ab9b9-cdef-4012-b456-71607f326fd9","properties",["^0",["field","num","operator","less","value",["~#iL",[2]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["number"]]]]]]]],"properties",["^0",["conjunction","OR","not",false]]]]';

        const {tree, ...config_props} = config;

        return (
            <div>
                <Query
                    value={transit.fromJSON(initValueJSON)}
                    {...config_props}
                    get_children={this.getChildren}
                > </Query>

            </div>
        );
    }
}
