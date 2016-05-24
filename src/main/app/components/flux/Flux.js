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
import Details from './details/Details';
import Slider from './../core/slider/Slider';

require('./Flux.scss');

class Flux extends React.Component {

  render() {
    return (
      <div>
        <div className="heading">
          <strong>Flux</strong>
        </div>
        <div className="filtering">
          <Slider items={['All', 'Host', 'Stream', 'Operator']}></Slider>
          <div className="search sep">
            <input placeholder="Find a host / stream / operator" className="input" type="text" />
            <button type="button" className="btn btn-primary">Search</button>
          </div>
          <div className="links">
            <a>More filters</a> | <a>Debug</a>
          </div>
        </div>
        <div className="flux">
          <div className="flux-map"></div>
          <div className="flux-details">
            <Details></Details>
          </div>
        </div>
      </div>
    );
  }
}

export default Flux;
