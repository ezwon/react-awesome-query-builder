import React, {Component} from 'react';
import _ from "lodash";
import {Query, Builder, Preview, Utils} from 'react-awesome-query-builder';

const {queryBuilderFormat, queryString} = Utils;

import config from './config';

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
        let i = 1;

        conditions.push(`<?php\n`);

        children.map((child) => {
            conditions.push(`${i == 1 ? `  if` : `  else if`}(${queryString(child, props.config)}){\n    return ${i + 1};\n  }\n`);
            i++;
        });

        conditions.push(`  else{\n    return 1;\n  }\n?>`);

        return (
            <div style={{padding: '10px', maxWidth: '1000px', margin: '0 auto'}}>
                <div className="query-builder" style={{position:"relative"}}>
                    <h2>FunnelFlux Route Builder</h2>
                    <p>Below is our route builder (beta). Use this to build rules and output the PHP code equivalent, which you can then paste into a PHP node in FunnelFlux.<p>
                    <p>Note that some attributes like carrier, ISP, city etc. require manual text entry due to the very large lists of available options -- if you need to add multiple cities for example, just create additional rules for city with the OR option selected.</p>
                    <div className="default-route-block">
                        <h2>Route 1 - Default Route</h2>
                    </div>
                    <Builder {...props} />
                </div>
                <br/>
                <div>

                    {conditions.length > 2 &&
                    (
                        <pre style={jsonStyle} key={i}>
                                {conditions.toString().replace(/,/g, "").replace("comma", ",")}
                            </pre>
                    )
                    }
                </div>

                {/*<hr/>*/}
                {/*<div>*/}
                {/*humanStringFormat:*/}
                {/*<pre style={jsonStyle}>*/}
                {/*{stringify(queryString(props.tree, props.config, true), undefined, 2)}*/}
                {/*</pre>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                {/*<div>*/}
                {/*queryBuilderFormat:*/}
                {/*<pre style={jsonStyle}>*/}
                {/*{stringify(queryBuilderFormat(props.tree, props.config), undefined, 2)}*/}
                {/*</pre>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                {/*<div>*/}
                {/*Tree:*/}
                {/*<pre style={jsonStyle}>*/}
                {/*{stringify(props.tree, undefined, 2)}*/}
                {/*</pre>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                {/*<div>*/}
                {/*Immutable Tree:*/}
                {/*<div style={jsonStyle}>*/}
                {/*{transit.toJSON(props.tree)}*/}
                {/*</div>*/}
                {/*</div>*/}

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
