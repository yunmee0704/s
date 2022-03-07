import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import Navbar from '../components/shared/Navbar'
import Title from '../components/shared/title'
import { EMOJI_MAPPER } from '../constants'

const Contents = styled.div`
  padding: 0 24px;
  line-height: 1.4;
`

const FooterContainer = styled.div`
  text-align: right;
  padding: 0 24px;
  margin-top: 30px;
`

const Button = styled.button`
  background-color: rgba(69, 147, 252, 0.12);
  color: #1b64da;
  padding: 6px 12px;
  border-radius: 6px;
`

const DetailPage = () => {
  const { id } = useParams()
  const [diary, setDiary] = useState(null)
  useEffect(() => {
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )
    const diary = diaries.find((diary) => {
      return diary.id === Number(id)
    })
    setDiary(diary)
  }, [id])
  if (diary == null) {
    return null
  }
  const { createdAt, emotion, memo, id: currentDiaryId } = diary

  const handleDiaryRemove = () => {
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )
    const 삭제반영목록 = diaries.filter((diary) => {
      return diary.id !== currentDiaryId
    })
    window.localStorage.setItem('DIARIES_KEY', JSON.stringify(삭제반영목록))
    window.history.back()
  }

  return (
    <div>
      <Navbar />
      <Title title={`${createdAt} ${EMOJI_MAPPER[emotion]}`} />
      <Contents>{memo}</Contents>
      <FooterContainer>
        <Button onClick={handleDiaryRemove}>삭제</Button>
      </FooterContainer>
    </div>
  )
}

export default DetailPage
