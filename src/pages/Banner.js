import { useState } from 'react'
import Box from '../components/banner/Box'

const BannerPage = () => {
  //넓이
  const [width, setWidth] = useState(0)

  //높이
  const [height, setHeight] = useState(0)

  //색상
  const [color, setColor] = useState('#fff')

  //텍스트
  const [text, setText] = useState('Hello banner')
  return (
    <div>
      <div>
        <div>
          <label>넓이</label>
          <input
            placeholder="넓이"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label>높이</label>
          <input
            placeholder="높이"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label>컬러</label>
          <input
            placeholder="컬러"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label>텍스트</label>
          <input
            placeholder="텍스트"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
      </div>
      <Box width={width} height={height} color={color} text={text} />
    </div>
  )
}
export default BannerPage
