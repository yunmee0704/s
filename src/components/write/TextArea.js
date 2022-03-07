import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
`

const BaseTextArea = styled.textarea`
  resize: none;
  height: 100%;
  flex: 1;
  padding: 15px;
  font-size: 15px;
  background-color: rgba(0, 12, 30, 0.03);
  border: none;
  border-radius: 15px;
`

const Label = styled.div`
  color: rgba(0, 12, 30, 0.8);
  font-size: 13px;
  margin-bottom: 10px;
`

const TextArea = ({ label, value, onChange }) => {
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <BaseTextArea
        placeholder="오늘의 기록을 적어주세요"
        onChange={onChange}
        value={value}
      />
    </Container>
  )
}

export default TextArea
