# study-alone

# 1. module-prac 
 - 여러 파일에 걸쳐 재사용 되는 함수나 변수를 모듈로 만들어서 편리하게 사용하기 위한 목적입니다.
  
# 2. implicit-object
  global-prac
 - 전역 객체라는 점을 활용하여 파일 간에 간단한 데이터를 공유 하는 법 공부했습니다.
 
 filename-dirname
 - 노드에서 파일 사이에 모듈 관계가 있는 경우 현재파일의 경로와 파일명을 알아 볼 수 있도록 console.log로 한번 찍어보았습니다.

 this
 - 최상위 스코프에 존재하는 this와 함수 내부의 this를 비교해보았습니다.
 - 최상위 스코프 this = module.exports // 함수 내부 this = global 객체

 require
 - require.cache : 다음 번에 사용을 위해 cache에 있는 것을 재사용
 - requre.main : 노드 실행 시 첫 모듈