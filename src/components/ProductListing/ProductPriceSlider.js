import { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const ProductPriceSlider  = () =>{
    const [ value, setValue ] = useState(0); 

    return(
        <RangeSlider
        value={value}
        min={0}
        max={1000}
        step={500}
        tooltip="on"
        onChange={changeEvent => setValue(changeEvent.target.value)}
      />
    )
}
export default ProductPriceSlider;