/*
ENTM,0
ENTA,1
ENFM,2
ENFA,3
ESTM,4
ESTA,5
ESFM,6
ESFA,7
INTM,8
INTA,9
INFM,10
INFA,11
ISTM,12
ISTA,13
ISFM,14
ISFA,15
*/

const qnaList = [
  {
    q: '1. 대학교 새내기가 된 당신! 처음 보는 동기들과 약속이 생겼을 때 당신의 반응은?',
    a: [
      { answer: '사람들과 만나기는 너무 힘들어! 일주일간 약속 더 이상 잡지 말아야겠다...', type: ['8', '9', '10', '11', '12', '13', '14', '15'] },
      { answer: '새로운 사람들 너무 좋아! 많이 친해지고 싶다!!', type: ['0', '1', '2', '3', '4', '5', '6', '7'] },
    ]
  },
  {
    q: '2. 공연을 볼 때 나는? ',
    a: [
      { answer: '조용히 앉아서 감상하는 공연이 좋다.', type: ['8', '9', '10', '11', '12', '13', '14', '15'] },
      { answer: '공연과 하나가 되어 같이 환호하며 즐기는 스타일의 공연이 좋다.', type: ['0', '1', '2', '3', '4', '5', '6', '7'] },
    ]
  },
  {
    q: '3. 오랜만에 여유로운 주말. 영화를 보려는 당신의 행동은?',
    a: [
      { answer: '영화 스트리밍 앱에 접속한다.', type: ['8', '9', '10', '11', '12', '13', '14', '15'] },
      { answer: '영화관에 간다.', type: ['0', '1', '2', '3', '4', '5', '6', '7'] },
    ]
  },
  {
    q: '4. 열린 결말로 끝나버린 영화! 당신의 반응은?',
    a: [
      { answer: '결말 이후 주인공에게 일어날 일들에 대해 마음껏 상상의 나래를 펼친다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: '답답해하며 어떻게 전개될 것이라고 내 경험에 빗대어 생각해본다. ', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '5. 노래를 들을 때 당신이 더 중요하게 생각하는 것은?',
    a: [
      { answer: '가사에 더 집중해서 어떤 감정이 담긴 노래인지 꼭 살펴본다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: '가사는 딱히 중요하지 않고, 멜로디 중심으로 감상한다.', type: ['4', '5', '6', '7', '12', '13', '14', '15']},
    ]
  },
  {
    q: '6. 볼 영화를 고르고 있는 당신. 당신이 영화를 고르는 기준은?',
    a: [
      { answer: '줄거리나 내용에 관련된 후기', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: '흥행하는 예매율 1위 영화', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '7. 학창시절, 반별로 현장 체험학습을 가게 된 당신! 당신이 투표할 현장 체험학습 장소는?',
    a: [
      { answer: '나는 천천히 과거 역사를 돌아볼 수 있는 박물관에 가고 싶어!', type: ['0', '1', '4', '5', '8', '9', '12', '13'] },
      { answer: '나는 지금의 과학기술에 대해 더 배울 수 있는 과학관에 가고 싶어!', type: ['2', '3', '6', '7', '10', '11', '14', '15'] },
    ]
  },
  {
    q: '8. 간만에 보내게 된 휴가! 내가 좋아하는 휴가는?',
    a: [
      { answer: '사람들이 별로 없는 한적한 시골에서 별을 보며 보내는 휴가', type: ['0', '1', '4', '5', '8', '9', '12', '13'] },
      { answer: '쉴 때는 역시 호캉스가 최고지! 각종 서비스를 받으며 고급 요리를 즐기는 도심형 휴가', type: ['2', '3', '6', '7', '10', '11', '14', '15'] },
    ]
  },
  {
    q: '9. 평소 듣는 노래 유형은?',
    a: [
      { answer: '잔잔하게 마음을 안정시켜주는 노래', type: ['0', '1', '4', '5', '8', '9', '12', '13'] },
      { answer: '내적댄스를 부르는 신나는 노래', type: ['2', '3', '6', '7', '10', '11', '14', '15'] },
    ]
  },
  {
    q: '10. 원데이 클래스를 수강할 기회가 생긴 당신이 선택할 원데이 클래스는?',
    a: [
      { answer: '나는 그림을 그려보고 싶어! 유화 그리기 원데이 클래스', type: ['1', '3', '5', '7', '9', '11', '13', '15'] },
      { answer: '나는 새로운 악기를 배워보고 싶어! 우쿨렐레 원데이 클래스', type: ['0', '2', '4', '6', '8', '10', '12', '14'] },
    ]
  },
  {
    q: '11. 나는 영화나 드라마를 볼 때... ',
    a: [
      { answer: 'ost는 별로 상관없다.', type: ['1', '3', '5', '7', '9', '11', '13', '15'] },
      { answer: 'ost를 중요하게 생각한다.', type: ['0', '2', '4', '6', '8', '10', '12', '14'] },
    ]
  },
  {
    q: '12. 정말 의미 있는 여행을 다녀온 뒤 일기로 그 여행의 기분을 기억해두고자 한다. 이럴 때 나는?',
    a: [
      { answer: '글과 함께 가장 마음에 들었던 사진을 붙여놓고 나의 기분을 쓴다.', type: ['1', '3', '5', '7', '9', '11', '13', '15'] },
      { answer: '글과 함께 내 기분을 나타낼 수 있는 그 상황과 가장 잘 어울리는 노래를 정한 뒤 그 노래를 들을 때 마다 그 여행을 떠올린다.', type: ['0', '2', '4', '6', '8', '10', '12', '14'] },
    ]
  }
]

const infoList = [
  {
    name: '(ENTM) 💛불뿜는 용💛',
    desc: print("👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며, 많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺으면서 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. /n 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요 /n 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. /n 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!")
  },
  {
    name: '(ENTA)💛춤추는 고양이💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며, 많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ENFM)💛스포트라이트 아래의 유니콘💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며,  많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ENFA)💛연극이 끝난 후에 눈물이 맺힌 양💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며,  많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ESTM)💛희귀 앨범을 찾아다니는 사슴💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며,  많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ESTA)💛여기저기 뚜벅이는 펭귄💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며,  많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ESFM)💛응원봉 들고있는 원숭이💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며, 많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ESFA)💛떡만드는 토끼💛',
    desc: '👉분위기 메이커 그 자체인 당신! 사람들과 어울리는 것을 즐기고, 또 그것에 적극적으로 참여해요. 일정이 없는 날에도 산책이라도 하러 나갈 만큼 외부 활동을 즐기며, 많은 사람들과 함께하며 사회적, 정서적 유대관계를 맺음으로써 즐거움과 에너지를 얻어요. 모두가 함께 즐길 수 있는 오프라인 문화예술 활동을 잘 즐길 수 있을 것 같아요. 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(INTM)💛여의주 갖고 노는 용💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요. 집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(INTA)💛꾹꾹이하는 고양이💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요. 집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(INFM)💛티비보면서 아이스크림 먹는 유니콘💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요.  집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(INFA)💛포근한 이불 덮고 소설읽는 양💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요.  집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉나무보다는 숲을 보는 당신은 상상력이 풍부해서 누가 말을 걸어도 듣지 못할 만큼 혼자 상상의 나래를 자주 펼치곤 해요. 영화를 볼 때에는 영화 속 인물 한 명 한 명에 집중하기보다는 전체적인 흐름을 파악하면서 진행되는 스토리에 관심을 가지며, 공연을 볼 때에도 흘러가는 상황을 바라보며 공연을 편히 감상하기보다는 감정이입을 즐기거나 다음 상황을 상상하기도 해요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요! 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ISTM)💛LP판으로 음악 듣고 있는 사슴💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요.  집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ISTA)💛컴퓨터하는 펭귄💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요.  집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉고전적이고 전통적인 멋을 아는 당신! 당신은 과거를 통해 배울 줄 아는 생각이 깊은 사람이에요. 때때론 어지러운 사회 속에서 혼자만의 사색에 잠기는 것을 좋아합니다. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ISFM)💛음악방송 안방 1열 원숭이💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요.  집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉뮤직 이즈 마이 라이프! 음악을 들을 때면 다양한 추억이 떠오르는 당신은 오늘도 유튜브에 ~할 때 듣는 노래를 검색해서 들으며 음악으로 힐링하고 있지는 않나요? 음악을 즐길 줄 아는 진정한 뮤지션인 당신에게 음악 관련 행사 참여를 추천할게요!'
  },
  {
    name: '(ISFA)💛보름달 바라보는 토끼💛',
    desc: '👉조용하고 안정적인 삶을 추구하는 당신! 사람들과 어울리는 것도 좋지만 때론 온전히 자기만의 공간에서 보내는 시간이 필요해요.  집에서도 즐길 수 있도록  온라인 세상의 다양한 문화예술을 추천할게요! 👉지금의 가치를 중요하게 생각하는 당신! 막연한 상상보다는 현재 경험에 의존하는 편이에요. 숲보다 나무를 보는 당신은 타고난 섬세함과 꼼꼼함을 가지고 있어, 전체적인 스토리 라인보다 인물 한 명, 한 명의 감정선이나 행동들에 관심을 가져요. 👉트렌드는 내가 만들어 가는 것! 당신은 호기심이 많아 도전하는 것을 좋아합니다. 또, 미래를 향한 희망이 있어, 전통적이고 고전적인 관습이나 과거 유행에 머무르기 보다는 새롭고 현대적인 것을 탐색하기를 즐기며 참신한 아이디어를 떠올려요. 👉시각적인 즐거움을 아는 당신은 예술가시군요! 과거 사진을 보며 추억여행에 자주 빠지시진 않으신가요? 그림을 통해 세상과 소통할 줄 알고 글보다 그림을 통해 더 많은 것을 느끼고 배우는 당신에게 전시 관련 행사 참여를 추천할게요!'
  },
]
