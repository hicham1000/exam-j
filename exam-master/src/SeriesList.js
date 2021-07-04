import React from 'react';
import Series from './Series';
export default function  SeriesList (props) {
  const elements = props.series.map(series=> <Series key={series.id} series={series} />)
  return (
          <div>
            {elements}
          </div>
         )
  }; 