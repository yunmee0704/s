import Navbar from '../components/shared/Navbar'
import Title from '../components/shared/title'
import EmotionCheckbox from '../components/write/EmotionCheckBox'
import TextArea from '../components/write/TextArea'
import SubmitButton from '../components/write/SubmitButton'
import styled from 'styled-components'
import { useState } from 'react'
import getDateNow from '../utils/getDateNow'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WritePage = () => {
  const { nowDate } = getDateNow()
  const [diary, setdiary] = useState({
    id: Date.now(),
    memo: '',
    emotion: '',
    createdAt: nowDate,
  })

  const handleDiaryMemo = (event) => {
    setdiary({
      ...diary,
      memo: event.target.value,
    })
  }

  const handlerEmotionClick = (emotion) => {
    setdiary({
      ...diary,
      emotion,
    })
  }
  const handleSubmit = () => {
    console.log('clicked')
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )
    // window.localStorage.setItem('DIARIES_KEY', JSON.stringify([]))
    console.log('diaries', diaries)

    const newDiaries = [...diaries, diary]
    window.localStorage.setItem('DIARIES_KEY', JSON.stringify(newDiaries))
    console.log('newDiaries', newDiaries)
    window.history.back()
  }
  console.log(diary)
  return (
    <div>
      <Container>
        <Navbar />
        <Title
          title={`오늘은 \n 어떤 하루를 보내셨나요?`}
          subtitle="TODO 오늘 날짜 해주기"
        />
        <EmotionCheckbox onClick={handlerEmotionClick} />
        <TextArea label="기록" onChange={handleDiaryMemo} value={diary.memo} />
        <SubmitButton label="작성하기" onClick={handleSubmit} />
      </Container>
    </div>
  )
}

export default WritePage
