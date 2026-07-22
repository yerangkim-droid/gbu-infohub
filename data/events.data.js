/* ============================================================================
 * GC 글로벌사업본부 인포허브 — 공유 이벤트 데이터 (단일 출처)
 * 학회일정 대시보드와 홈 화면 미니 달력이 이 파일을 함께 사용합니다.
 * 데이터 갱신은 아래 DATA_START ~ DATA_END 주석 구간만 교체하세요.
 * ==========================================================================*/
window.GBU_EVENTS = [
/*__DATA_START__*/
  // ── 산업·학술 학회 ──
  {name:"ASCO Annual Meeting (미국임상종양학회)", abbr:"ASCO", start:"2026-05-29", end:"2026-06-02", city:"시카고", country:"미국", type:"학회", category:"항암", url:"https://www.asco.org/annual-meeting", venue:"McCormick Place", note:"세계 최대 임상종양 학회"},
  {name:"AACR Annual Meeting (미국암연구학회)", abbr:"AACR", start:"2026-04-17", end:"2026-04-22", city:"샌디에이고", country:"미국", type:"학회", category:"항암", url:"https://www.aacr.org/meeting/aacr-annual-meeting-2026/", venue:"San Diego Convention Center", note:""},
  {name:"ASH Annual Meeting (미국혈액학회)", abbr:"ASH", start:"2026-12-12", end:"2026-12-15", city:"뉴올리언스", country:"미국", type:"학회", category:"혈액", url:"https://www.hematology.org/meetings/annual-meeting", venue:"Ernest N. Morial Convention Center", note:"제68회"},
  {name:"ESMO Congress (유럽종양학회)", abbr:"ESMO", start:"2026-10-23", end:"2026-10-27", city:"마드리드", country:"스페인", type:"학회", category:"항암", url:"https://www.esmo.org/meeting-calendar/esmo-congress-2026", venue:"IFEMA Madrid", note:""},
  {name:"EHA Congress (유럽혈액학회)", abbr:"EHA", start:"2026-06-11", end:"2026-06-14", city:"스톡홀름", country:"스웨덴", type:"학회", category:"혈액", url:"https://ehaweb.org/connect-network/eha2026-congress", venue:"Stockholmsmässan", note:""},
  {name:"ISTH Congress (국제혈전지혈학회)", abbr:"ISTH", start:"2026-07-11", end:"2026-07-15", city:"파리", country:"프랑스", type:"학회", category:"혈액", url:"https://www.isthcongress.org/", venue:"Paris Expo Porte de Versailles", note:"제34회 · 혈전·지혈"},
  {name:"WFH World Congress (세계혈우연맹)", abbr:"WFH", start:"2026-04-19", end:"2026-04-22", city:"쿠알라룸푸르", country:"말레이시아", type:"학회", category:"혈우병", url:"https://wfh.org/congress/", venue:"Kuala Lumpur Convention Centre", note:""},
  {name:"ESCMID Global (구 ECCMID)", abbr:"ESCMID", start:"2026-04-17", end:"2026-04-21", city:"뮌헨", country:"독일", type:"학회", category:"감염", url:"https://www.escmid.org/congress-events/escmid-global/munich-2026/", venue:"Messe München", note:"유럽 임상미생물·감염질환"},
  {name:"CROI (레트로바이러스·기회감염 학회)", abbr:"CROI", start:"2026-02-22", end:"2026-02-25", city:"덴버", country:"미국", type:"학회", category:"감염", url:"https://www.croiconference.org/", venue:"Colorado Convention Center", note:"제33회"},

  // ── 파트너링·투자 ──
  {name:"J.P. Morgan Healthcare Conference", abbr:"JPM", start:"2026-01-12", end:"2026-01-15", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://www.jpmorgan.com/about-us/events-conferences/health-care-conference", venue:"Westin St. Francis", note:"제44회 · 업계 최대 투자·파트너링"},
  {name:"BIO International Convention", abbr:"BIO", start:"2026-06-22", end:"2026-06-25", city:"샌디에이고", country:"미국", type:"파트너링", category:"종합", url:"https://convention.bio.org/", venue:"San Diego Convention Center", note:"세계 최대 바이오 파트너링"},
  {name:"BIO-Europe", abbr:"BIO-Europe", start:"2026-11-09", end:"2026-11-11", city:"쾰른", country:"독일", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope/", venue:"Koelnmesse", note:"제32회 · 유럽 최대 BD 파트너링"},
  {name:"BIO-Europe Spring", abbr:"BES", start:"2026-03-23", end:"2026-03-25", city:"리스본", country:"포르투갈", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope-spring/", venue:"Feira Internacional de Lisboa", note:"제20회"},
  {name:"BIO Asia–Taiwan", abbr:"BIO Asia", start:"2026-07-15", end:"2026-07-19", city:"타이베이", country:"대만", type:"파트너링", category:"종합", url:"https://bioasiataiwan.com/en/", venue:"Nangang Exhibition Center", note:"7월 중순 · 정확한 일자 재확인 권장"},
  {name:"BIO KOREA International Convention", abbr:"Bio Korea", start:"2026-04-28", end:"2026-04-30", city:"서울", country:"한국", type:"파트너링", category:"종합", url:"https://www.biokorea.org/", venue:"COEX", note:""},
  {name:"Biotech Showcase", abbr:"Biotech Showcase", start:"2026-01-12", end:"2026-01-14", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://informaconnect.com/biotech-showcase/", venue:"Hilton Union Square", note:"제18회 · JPM 주간 병행"},
  {name:"BioJapan (아시아 파트너링)", abbr:"BioJapan", start:"2026-10-07", end:"2026-10-09", city:"요코하마", country:"일본", type:"파트너링", category:"종합", url:"https://jcd-expo.jp/en/", venue:"Pacifico Yokohama", note:"일본·아시아 최대 BD"},
  {name:"BioAsia — Global Bio-Business Forum", abbr:"BioAsia", start:"2026-02-16", end:"2026-02-18", city:"하이데라바드", country:"인도", type:"파트너링", category:"종합", url:"https://bioasia.in/2026/", venue:"HICC", note:"인도 최대 생명과학 비즈니스 포럼"},

  // ── 규제·전시 (CDMO·원료 포함) ──
  {name:"CPHI Worldwide (CPHI Milan 2026)", abbr:"CPHI", start:"2026-10-06", end:"2026-10-08", city:"밀라노", country:"이탈리아", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/europe/", venue:"Fiera Milano", note:"세계 최대 제약 원료·CDMO 전시"},
  {name:"CPHI & PMEC China", abbr:"CPHI China", start:"2026-06-16", end:"2026-06-18", city:"상하이", country:"중국", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/china/", venue:"SNIEC", note:""},
  {name:"CPHI & PMEC India", abbr:"CPHI India", start:"2026-11-23", end:"2026-11-25", city:"뉴델리", country:"인도", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/india/en/home.html", venue:"IICC Yashobhoomi", note:"PMEC India 11/24–26 병행"},
  {name:"DCAT Week", abbr:"DCAT", start:"2026-03-23", end:"2026-03-26", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://dcatweek.org/", venue:"InterContinental New York Barclay", note:"의약 원료·계약제조 비즈니스"},
  {name:"DIA Global Annual Meeting", abbr:"DIA", start:"2026-06-14", end:"2026-06-18", city:"필라델피아", country:"미국", type:"규제전시", category:"규제", url:"https://www.diaglobal.org/Flagship/DIA-2026", venue:"Pennsylvania Convention Center", note:"의약품 규제·개발 종합"},
  {name:"INTERPHEX (국제 제약 엑스포)", abbr:"Interphex", start:"2026-04-21", end:"2026-04-23", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://www.interphex.com/", venue:"Javits Center", note:""},
  {name:"BioProcess International (BPI)", abbr:"BPI", start:"2026-09-22", end:"2026-09-25", city:"보스턴", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://informaconnect.com/bioprocessinternational/", venue:"Hynes Convention Center", note:"바이오 공정 · 일정 잠정(재확인 권장)"},
  {name:"Arab Health / WHX Dubai", abbr:"Arab Health", start:"2026-02-09", end:"2026-02-12", city:"두바이", country:"아랍에미리트 연합", type:"규제전시", category:"규제", url:"https://www.worldhealthexpo.com/", venue:"Dubai World Trade Centre", note:"중동 최대 헬스케어 · MENA 진출"},
  {name:"Global Health Exhibition (Global Health Saudi)", abbr:"GHE", start:"2026-10-26", end:"2026-10-29", city:"리야드", country:"사우디아라비아", type:"규제전시", category:"규제", url:"https://www.globalhealthsaudi.com/", venue:"Riyadh Front Exhibition Center", note:"사우디 Vision 2030 대표 행사"},

  // ══════════════════════ 2027 ══════════════════════
  // ── 산업·학술 학회 ──
  {name:"ASCO Annual Meeting (미국임상종양학회)", abbr:"ASCO", start:"2027-06-04", end:"2027-06-08", city:"시카고", country:"미국", type:"학회", category:"항암", url:"https://www.asco.org/annual-meeting", venue:"McCormick Place", note:""},
  {name:"AACR Annual Meeting (미국암연구학회)", abbr:"AACR", start:"2027-04-02", end:"2027-04-07", city:"올랜도", country:"미국", type:"학회", category:"항암", url:"https://www.aacr.org/meeting/aacr-annual-meeting-2027/", venue:"", note:""},
  {name:"ASH Annual Meeting (미국혈액학회)", abbr:"ASH", start:"2027-12-04", end:"2027-12-07", city:"", country:"미국", type:"학회", category:"혈액", url:"https://www.hematology.org/meetings/annual-meeting", venue:"", note:"2027 일정·개최도시 잠정(미발표)"},
  {name:"ESMO Congress (유럽종양학회)", abbr:"ESMO", start:"2027-09-17", end:"2027-09-21", city:"바르셀로나", country:"스페인", type:"학회", category:"항암", url:"https://www.esmo.org/meeting-calendar/esmo-congress-2027", venue:"", note:""},
  {name:"EHA Congress (유럽혈액학회)", abbr:"EHA", start:"2027-06-10", end:"2027-06-13", city:"바르셀로나", country:"스페인", type:"학회", category:"혈액", url:"https://ehaweb.org/connect-network/eha2027-congress", venue:"", note:""},
  {name:"ISTH Congress (국제혈전지혈학회)", abbr:"ISTH", start:"2027-06-26", end:"2027-06-30", city:"밴쿠버", country:"캐나다", type:"학회", category:"혈액", url:"https://www.isthcongress.org/", venue:"", note:"혈전·지혈"},
  {name:"ESCMID Global (구 ECCMID)", abbr:"ESCMID", start:"2027-04-09", end:"2027-04-13", city:"스톡홀름", country:"스웨덴", type:"학회", category:"감염", url:"https://www.escmid.org/congress-events/escmid-global/", venue:"", note:"유럽 임상미생물·감염질환"},
  {name:"CROI (레트로바이러스·기회감염 학회)", abbr:"CROI", start:"2027-03-21", end:"2027-03-24", city:"샌디에이고", country:"미국", type:"학회", category:"감염", url:"https://www.croiconference.org/", venue:"", note:""},

  // ── 파트너링·투자 ──
  {name:"J.P. Morgan Healthcare Conference", abbr:"JPM", start:"2027-01-11", end:"2027-01-14", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://www.jpmorgan.com/about-us/events-conferences/health-care-conference", venue:"Westin St. Francis", note:"업계 최대 투자·파트너링(초청제, 일정 잠정)"},
  {name:"BIO International Convention", abbr:"BIO", start:"2027-06-07", end:"2027-06-10", city:"필라델피아", country:"미국", type:"파트너링", category:"종합", url:"https://convention.bio.org/", venue:"", note:"세계 최대 바이오 파트너링"},
  {name:"BIO-Europe", abbr:"BIO-Europe", start:"2027-10-25", end:"2027-10-27", city:"스톡홀름", country:"스웨덴", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope/", venue:"", note:"도시 확정(스톡홀름) · 정확한 일자 미발표"},
  {name:"BIO-Europe Spring", abbr:"BES", start:"2027-04-05", end:"2027-04-07", city:"리옹", country:"프랑스", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope-spring/", venue:"", note:""},
  {name:"BIO Asia–Taiwan", abbr:"BIO Asia", start:"2027-07-21", end:"2027-07-25", city:"타이베이", country:"대만", type:"파트너링", category:"종합", url:"https://bioasiataiwan.com/", venue:"", note:"2027 일정 잠정(미발표, 7월 하순 패턴)"},
  {name:"BIO KOREA International Convention", abbr:"Bio Korea", start:"2027-04-28", end:"2027-04-30", city:"서울", country:"한국", type:"파트너링", category:"종합", url:"https://www.biokorea.org/", venue:"COEX", note:""},
  {name:"Biotech Showcase", abbr:"Biotech Showcase", start:"2027-01-11", end:"2027-01-13", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://informaconnect.com/biotech-showcase/", venue:"", note:"JPM 주간 병행"},
  {name:"BioJapan (아시아 파트너링)", abbr:"BioJapan", start:"2027-10-13", end:"2027-10-15", city:"요코하마", country:"일본", type:"파트너링", category:"종합", url:"https://jcd-expo.jp/en/", venue:"Pacifico Yokohama", note:"2027 일정 잠정(미발표)"},
  {name:"BioAsia — Global Bio-Business Forum", abbr:"BioAsia", start:"2027-02-17", end:"2027-02-18", city:"하이데라바드", country:"인도", type:"파트너링", category:"종합", url:"https://bioasia.in/", venue:"HICC", note:"2027 일정 잠정(미발표)"},

  // ── 규제·전시 (CDMO·원료 포함) ──
  {name:"CPHI Worldwide (CPHI Frankfurt 2027)", abbr:"CPHI", start:"2027-11-09", end:"2027-11-11", city:"프랑크푸르트", country:"독일", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/", venue:"", note:"세계 최대 제약 원료·CDMO 전시"},
  {name:"CPHI & PMEC China", abbr:"CPHI China", start:"2027-06-16", end:"2027-06-18", city:"상하이", country:"중국", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/china/", venue:"NECC", note:"2027부터 NECC 상하이"},
  {name:"CPHI & PMEC India", abbr:"CPHI India", start:"2027-11-22", end:"2027-11-24", city:"뉴델리", country:"인도", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/india/", venue:"", note:"2027 일정 잠정(미발표)"},
  {name:"DCAT Week", abbr:"DCAT", start:"2027-03-15", end:"2027-03-18", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://dcatweek.org/", venue:"", note:"의약 원료·계약제조 비즈니스"},
  {name:"DIA Global Annual Meeting", abbr:"DIA", start:"2027-06-28", end:"2027-07-01", city:"샌디에이고", country:"미국", type:"규제전시", category:"규제", url:"https://www.diaglobal.org/Flagship/DIA-2027", venue:"", note:"DIA Europe는 별도(3월 바젤)"},
  {name:"INTERPHEX (국제 제약 엑스포)", abbr:"Interphex", start:"2027-04-13", end:"2027-04-15", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://www.interphex.com/", venue:"Javits Center", note:""},
  {name:"BioProcess International (BPI)", abbr:"BPI", start:"2027-09-21", end:"2027-09-24", city:"보스턴", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://informaconnect.com/bioprocessinternational/", venue:"", note:"2027 보스턴 일정 잠정(미발표)"},
  {name:"Arab Health / WHX Dubai", abbr:"Arab Health", start:"2027-01-25", end:"2027-01-28", city:"두바이", country:"아랍에미리트 연합", type:"규제전시", category:"규제", url:"https://www.worldhealthexpo.com/events/healthcare/dubai/", venue:"Dubai World Trade Centre", note:"중동 최대 헬스케어 · MENA 진출"},
  {name:"Global Health Exhibition (Global Health Saudi)", abbr:"GHE", start:"2027-10-25", end:"2027-10-28", city:"리야드", country:"사우디아라비아", type:"규제전시", category:"규제", url:"https://www.globalhealthsaudi.com/en/home.html", venue:"", note:"2027 일정 잠정(미발표)"},
/*__DATA_END__*/
];
