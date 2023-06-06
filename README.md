# Subak defi

## Feature details

### Common

- styled-components 와 emotion을 사용하여 스타일링
  - 두 라이브러리 모두 SSR이 적용되도록 세팅, 이모션의 경우 Next.js 공식 레포지토리의 example 참고하였음

### Swap (Exchange token) page

- 지갑 연동

  - wagmi의 useAccount 등 유틸리티 훅을 이용하여 메타마스크와 연결

- ipfs에 등록된 토큰 리스트를 가져온 후 원하는 토큰만을 필터링하여 사용

  - https://blog.uniswap.org/token-lists
  - https://tokenlists.org/token-list?url=https://gateway.ipfs.io/ipns/tokens.uniswap.org

- 토큰을 선택

  - 이미 선택된 토큰을 확인하여 반대편에서는 선택할 수 없음

- 교환할 토큰 양을 입력
  - validator 내부에서 정규식을 통해 숫자 또는 유틸리티 키가 아닌 것은 keyDown 시 이벤트 종료

### Pools (Add liquidity) page

- P5.js 연동
  - react-p5-wrapper를 사용했으나 [모듈관련 에러 발생](https://github.com/P5-wrapper/react/issues/230)으로 해당 패키지 작성자가 새롭게 만든(..) [Next.js 를 위한 wrapper 패키지](https://github.com/P5-wrapper/next)를 사용
