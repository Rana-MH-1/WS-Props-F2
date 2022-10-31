import React from 'react'
import {Card, Button} from 'react-bootstrap'
import propTypes from 'prop-types'

const Cardd = ({title,imgUrl,Des,func,children}) => {
    //console.log(props)
    //Destructuring
   // const {title,imgUrl,Des,func} = props
  //2eme destructuration for the obj movieDetail
   //const {title,imgUrl,Des} = movieDetail
   
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {Des}
        </Card.Text>
        <Button onClick={func} variant="primary">Go somewhere</Button>
      </Card.Body>
      {children}
    </Card>
    </div>
  )
}


export default Cardd

Cardd.defaultProps={
    imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAwFBMVEX////mfiK9w8fTVACVpabVWAnQRAD99/F+i4zSUQC5wMTAxsrldQDVUADdaxbp6+zw8fLV2dvP09axubyOnZ6EkZLleRCRqazaZRLgchrRSQDIzdD3+Png4+Xidx2ps7Xvwa/UcUrYaz2+fWH65tjefk+lmZDwtY7RXijoiDrJaz7zxafspHDpkEu7gWfngyy2inXDeFSqkoadn5zGakjGckvwu5n32sf10rrrnGLppoXeh2zmpozhkHHqs57bfF19AKakAAAD3ElEQVRoge3YaXPaOhQGYGTJpsIGwmpjICwhBBIIScielPz/f1XJSwjGIAmOykzr98Odlmr83CPJto5zuSxZsmT5h9MpV9p2gcduV8qdv6SW20ahYMRhf2yX9aOdrr02v227q7nocooaylprrqargVzVpp7tKDYu+UwPW96nBrKWuRayemAJlsHgU92RUHmg76e2TLms4DYs25VjGdyFZGVnGXqmK7LlsoIrgK48y2A4Vnp1AxduhW0F1jBsKLajUi4rGGpnKU0z4ERXlVjDgHojqi0v3AKrTTPYnaS4rcA21pmyC/M2/N/cU63vqfZzTpE1DCC3rchCnXUU3vo8YG9+qSPsDxfsFK3oQrH72rEUFq5BU3pyQPYMKm9CsGNOTqlg2BZJeoWB22/5hgG4MZO8h+E7YKmHFmiTEkViifV8WxHCuj7pCKZaxySH2ds4wHbciVR3PblsfZ/N2F1c6ZFCmmwXSK+i6xNlt/eLh9SMTdq2ayT4l56Gmc73B0tSbwTXb5BawY5TqJHo1zqpD/p5WLY/tPwLl8QyQ+qEp77+gRD3wveHfUB1dGlRjPHYJWt5I1wl7piNodblCIq9clqcpRMSJkE36tHvk2BUy7kCUUdTByGPX7J47ZI4dZYG/8/3L+51kbMeQs4UoOQbprJgnICTCVmMg9HOzbHsLGRRMNMM3umGLG2Fw53ZUWp+HrEIlUJ4Mk4r2R1PQrYUD3fmR9xR+WkToU2Y0luSlF1yS+kmi1BzejCcX/xgY5iVfEfcNe26y7uw2A2WwYsD4QTLYIwj+f5hyUAWsny4j1SMS5vDD4XnCRahc5NGctEcPj7dPz0OzWKkUvM8Obw5P4SdOcnrsHg4DqXFYpHS7797KaMP2dXPaSwr2fthrf8ftosN4WdV9iWdTZMp9dJVDr+osfldFwrS8kwax/Rae8eq7a3Z1p7axnmEo5pKS/y6c5aV47wquFMwFqGpPLtjLx8W+T29f1OpR3ZrXYk3lUqasucPyFnmceTYG3BX7vSxAGYRWsiwI+hyWcEy5zzgXcUjtbPAVZ6TTLPURD/DTzObaPEz602L+yZioZ+RcUTPSi3LK7HAgG/eDVf0FtZw9/II72CJA85Brui4o2U7S2zoU9V7qvV91+S+C9wPTe6HwP1K66+Oj/clqtcX9wDqafmiej99Cg+3qP8pcEdW4nMBQEoUW8IX8ICy1r20s7FUznnJZFcciNjci8VbWmxCBfNm2ZJogz+trX7+2FiiuzfIb2v7S8Jx7G8ZNpdbUR9OZtdaybHssLMa+hZM/OFK7UtDHiZKZpYsWbLsyR/HXl5nBC0YKwAAAABJRU5ErkJggg=='
}

Cardd.propTypes={
    title : propTypes.string.isRequired,
    Des:propTypes.string,
    imgUrl:propTypes.string,
    func: propTypes.func
}

//warning if we change the type of value props
// ==> Failed prop type: Invalid prop `title` of type `number` supplied to `Cardd`, expected `string`.