import styled from 'styled-components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BannerPage from './pages/Banner'
import DetailPage from './pages/Detail'
import ListPage from './pages/List'
import ModifyPage from './pages/Modify'
import WritePage from './pages/Write'

import ResetStyles from './components/shared/ResetStyles'
import { FilterContextProvider } from './contexts/filter'

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`
const App = () => {
  return (
    <FilterContextProvider>
      <Container>
        <ResetStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/modify" element={<ModifyPage />} />
            <Route path="/banner" element={<BannerPage />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>찾으시는 페이지가 없어요</h1>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </FilterContextProvider>
  )
}

export default App
