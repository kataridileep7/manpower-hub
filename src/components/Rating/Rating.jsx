import React, { useMemo } from 'react'
import { PropTypes } from "prop-types";
import { propTypes } from 'react-bootstrap/esm/Image';
import { string } from 'yup/lib/locale';
import { counter } from '@fortawesome/fontawesome-svg-core';
const Rating = ({ count , Rating , color ,onRating }) => {

count string = useMemo(() =>{
 return Array(counter)
           .fill(0)
           .map( 1) => i + 1)

}, [ count, rating])     

  return (
    <div> 


    </div>
  )
}
Rating.prototype = {
    count: propTypes.number,
    Rating:proptypes.number,
    onchange:proptypes.func,
    color:{
        filled:proptype.string,
        unfilled:proptype.string,

    }
}
Rating.defaultprops = {
    
    count: 5,
    rating: 0,
    color: {
        filled: "#fseb3b"
        unfilled: "#DCDCDC"
    }

}

export default Rating
