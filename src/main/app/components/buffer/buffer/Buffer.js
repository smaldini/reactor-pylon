/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import Nvd3 from './../../core/chart/Nvd3';
import classNames from 'classnames'

require('./Buffer.scss');

class Buffer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var left, right;
        let dummy = this.getDummy2();
        let val = dummy[0].y;
        if (this.props.mode == 0) {
            left = <div className="left">
                <div className="donut-chart">
                    {
                        React.createElement(Nvd3, {
                            id: "toto2",
                            type:'pieChart',
                            datum: dummy,
                            showLegend: false,
                            showLabels: false,
                            margin: {top:0,left:10,right:0,bottom:0},
                            duration: 1,
                            x:"key",
                            y:"y",
                            donut: true,
                            donutRatio: 0.6,
                            height: 100
                        })
                    }
                </div>
            </div>
        }

        if (this.props.mode == 0 || this.props.mode == 1) {
            var height = this.props.mode == 1 ? 80 : 120;
            right = <div className="right">
                <div className="chart">
                    {
                        React.createElement(Nvd3, {
                            type:'lineChart',
                            id: "toto1",
                            datum: this.getDummy(),
                            margin: {left: 20, bottom: 10, right: 10, top:10},
                            useInteractiveGuideline: true,
                            showYAxis: false,
                            showXAxis: false,
                            showLegend: false,
                            forceY: [0,100],
                            duration: 1,
                            height: height
                        })
                    }
                </div>
                <ul className="metrics">
                    <li><strong>Host:</strong> <span>4,231.3/s</span></li>
                    <li><strong>Cluster:</strong> <span>3,234,231.3/s</span></li>
                    <li><strong>Stream:</strong> <span>OK</span></li>
                </ul>
            </div>
        }

        var style = {width: val + '%'};
        let classStatus = classNames({
            'error': val > 90,
            'warning': val > 60,
            'buffer': true
        });

        return (
            <div className={classStatus}>
                <div className="buffer-container">
                    <div className="buffer-head">
                        <span className="label">MessageMetadataDico</span>
                        <div className="progress" style={style}>
                            <span className="label">MessageMetadataDico</span>
                        </div>
                        <span className="percent">{val}%</span>
                    </div>
                    <div className="buffer-content">
                        {left}
                        {right}
                    </div>
                </div>
            </div>
        )
    }

    getDummy() {
        var c1 = [];
        for (var i = 0; i < 30; i++) {
            c1.push({x: i, y: Math.round(Math.random() * 0.9 * 100)});
        }
        return [
            { values: c1, key: 'CPU', color: '#CCC' },
        ];
    }

    getDummy2() {
        let a1 = Math.floor(Math.random() * 100) + 1;
        let color = "#60b124";
        if (a1 > 60) color = "#ffa42d";
        if (a1 > 90) color = "#ff5240";

        return [
            {key: "Using", y: a1, color: color},
            {key: "Free", y: (100-a1), color: "#e5e5e5"},
        ];
    }

}

export default Buffer;
