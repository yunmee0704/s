import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
  padding: 9px;
  border-radius: 5px;
  font-weight: 500;
`

const WriteButton = () => {
  const navigate = useNavigate()
  const moveToWritePage = () => {
    navigate('/write')
  }
  return <Button onClick={moveToWritePage}>오늘을 기록하기</Button>
}

export default WriteButton
