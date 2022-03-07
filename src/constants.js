//프로젝트에서 사용되는 상수를 모아놓는 파일

export const MOCKS = [
  {
    id: 0,
    memo: '오늘은 너무 배고 고팠다',
    createAt: '2022.01.15',
    emotion: 'SAD',
  },
  {
    id: 1,
    memo: '오늘은 기분이 그냥 그랬다. 그래도 행복했다.',
    createAt: '2022.01.14',
    emotion: 'GOOD',
  },
  {
    id: 2,
    memo: '너무 행복한 하루였다.',
    createAt: '2022.01.13',
    emotion: 'AWSOME',
  },
]

export const FILTER_LABELS = {
  ALL: '전체',
  SAD: '슬픔',
  GOOD: '좋음',
  AWESOME: '매우 좋음',
}

export const EMOJI_MAPPER = {
  SAD: '😭',
  GOOD: '😊',
  AWESOME: '🤩',
}
