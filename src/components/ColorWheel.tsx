import React, { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function ColorWheel() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <Wheel className='inline-block' height={300} width={300} color={hsva} angle={210} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
      <br></br>
      <div className='inline-block mt-4'>
        <div className='w-32 h-8 rounded-lg' style={{ background: hsvaToHex(hsva) }}></div>
        <p className='mt-1 uppercase'><b>HEX</b> | {hsvaToHex(hsva)}</p>
      </div>
    </Fragment>
  );
}

export default ColorWheel;