import React from 'react';
import SvgRadarChart from 'react-svg-radar-chart';
import { colors } from '../../colors';

export const RadarChart = ({ data }) => (
  <>
    {' '}
    {console.log(data)}
    <SvgRadarChart
      style={{ flex: 1 }}
      captions={Object.entries(data).reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[0] === 'special-defense' ? 'S. Defense' : cur[0] }), {})}
      data={[
        {
          data,
          meta: { color: 'blue' },
        },
      ]}
      size={200}
      options={{
        captionProps: () => ({
          textAnchor: 'middle',
          fontSize: 22,
          fontFamily: 'arial',
          fontWeight: 'bold',
        }),
        captionMargin: 40,
      }}
    />
  </>
);
