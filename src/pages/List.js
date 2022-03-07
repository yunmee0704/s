import Title from '../components/shared/title'
import { useState, useEffect, useMemo } from 'react'
import WriteButton from '../components/list/WriteButton'
import styled from 'styled-components'
import FilterTab from '../components/list/FilterTab'
import MemoList from '../components/list/MemoList'
import { useFilterContext } from '../contexts/filter'

const TitleContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: 28px;
    right: 24px;
  }
`

const ListPage = () => {
  const [diaries, setDiaries] = useState([])
  const { filter, setFilter } = useFilterContext()

  useEffect(() => {
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )
    setDiaries(diaries)
  }, [])
  const handleFilterClick = (filterType) => {
    setFilter(filterType)
  }

  const filteredDiaries = useMemo(() => {
    switch (filter) {
      case 'ALL': {
        return diaries
      }
      case 'SAD': {
        return diaries.filter((diary) => {
          return diary.emotion === 'SAD'
        })
      }
      case 'GOOD': {
        return diaries.filter((diary) => {
          return diary.emotion === 'GOOD'
        })
      }
      case 'AWESOME': {
        return diaries.filter((diary) => {
          return diary.emotion === 'AWESOME'
        })
      }
      default: {
        return diaries
      }
    }
  }, [filter, diaries])
  console.log(diaries)
  return (
    <div>
      <TitleContainer>
        <Title
          title="나의 기록들"
          subTitle={`지난 ${diaries.length}개의 기록이 있습니다.`}
        />
        <WriteButton />
      </TitleContainer>
      <FilterTab selectedFilter={filter} onClick={handleFilterClick} />
      <MemoList items={filteredDiaries} />
    </div>
  )
}

export default ListPage
