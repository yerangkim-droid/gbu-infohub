/* ============================================================================
 * GC 글로벌사업본부 인포허브 — 공유 이벤트 데이터 (단일 출처)
 * 학회일정 대시보드와 홈 화면 미니 달력이 이 파일을 함께 사용합니다.
 * 데이터 갱신은 아래 DATA_START ~ DATA_END 주석 구간만 교체하세요.
 *
 * [수집 규칙] GC 글로벌사업본부 주목 영역(혈액제제·혈액질환/혈우병·백신(독감/수두)·
 *  희귀질환(헌터/MPS)·호중구감소증·CMO/CDMO·Plant·Tech transfer·규제실무·파트너링) 중심.
 *  올해~올해+3년, **공식 사이트에 확정 공개된 일정만** 수록(잠정·미발표는 제외).
 *
 * 갱신은 작업 스케줄러 `GC학회일정_월간갱신`(매월 1일 00:00)이 _auto/update_events.ps1 로
 * 자동 수행합니다. 감시 대상 목록과 신규 발굴 기준은 _auto/events_prompt.txt 참조.
 * ==========================================================================*/
window.GBU_EVENTS = [
/*__DATA_START__*/
  // ══════════════════════ 2026 ══════════════════════
  {name:"Biotech Showcase", abbr:"Biotech Showcase", start:"2026-01-12", end:"2026-01-14", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://informaconnect.com/biotech-showcase/", venue:"Hilton Union Square", note:"제18회 · JPM 주간 병행"},
  {name:"J.P. Morgan Healthcare Conference", abbr:"JPM", start:"2026-01-12", end:"2026-01-15", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://www.jpmorgan.com/about-us/events-conferences/health-care-conference", venue:"Westin St. Francis", note:"제44회 · 업계 최대 투자·파트너링"},
  {name:"EAHAD Annual Congress (유럽혈우병학회)", abbr:"EAHAD", start:"2026-02-03", end:"2026-02-06", city:"더블린", country:"아일랜드", type:"학회", category:"혈우병", url:"https://www.eahad.org/", venue:"Convention Centre Dublin", note:"제19회 · 혈우병·응고장애"},
  {name:"Arab Health / WHX Dubai", abbr:"Arab Health", start:"2026-02-09", end:"2026-02-12", city:"두바이", country:"아랍에미리트 연합", type:"규제전시", category:"규제", url:"https://www.worldhealthexpo.com/", venue:"Dubai World Trade Centre", note:"중동 최대 헬스케어 · MENA 진출"},
  {name:"IPFA/EBA Symposium (혈장 수집·공급)", abbr:"IPFA/EBA", start:"2026-02-11", end:"2026-02-12", city:"뢰번", country:"벨기에", type:"학회", category:"혈액", url:"https://ipfa.nl/", venue:"University Hall of Leuven", note:"제4회 · 격년 혈장 수집·공급 심포지엄"},
  {name:"BioAsia — Global Bio-Business Forum", abbr:"BioAsia", start:"2026-02-16", end:"2026-02-18", city:"하이데라바드", country:"인도", type:"파트너링", category:"종합", url:"https://bioasia.in/2026/", venue:"HICC", note:"인도 최대 생명과학 비즈니스 포럼"},
  {name:"CROI (레트로바이러스·기회감염 학회)", abbr:"CROI", start:"2026-02-22", end:"2026-02-25", city:"덴버", country:"미국", type:"학회", category:"감염", url:"https://www.croiconference.org/", venue:"Colorado Convention Center", note:"제33회"},
  {name:"BIO-Europe Spring", abbr:"BES", start:"2026-03-23", end:"2026-03-25", city:"리스본", country:"포르투갈", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope-spring/", venue:"Feira Internacional de Lisboa", note:"제20회"},
  {name:"DCAT Week", abbr:"DCAT", start:"2026-03-23", end:"2026-03-26", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://dcatweek.org/", venue:"InterContinental New York Barclay", note:"의약 원료·계약제조 비즈니스"},
  {name:"World Vaccine Congress Washington", abbr:"WVC Washington", start:"2026-03-30", end:"2026-04-02", city:"워싱턴 D.C.", country:"미국", type:"학회", category:"백신", url:"https://www.terrapinn.com/conference/world-vaccine-congress-washington/", venue:"Walter E. Washington Convention Center", note:"세계 최대 백신 학회 · 워크숍 3/30"},
  {name:"AACR Annual Meeting (미국암연구학회)", abbr:"AACR", start:"2026-04-17", end:"2026-04-22", city:"샌디에이고", country:"미국", type:"학회", category:"항암", url:"https://www.aacr.org/meeting/aacr-annual-meeting-2026/", venue:"San Diego Convention Center", note:""},
  {name:"ESCMID Global (구 ECCMID)", abbr:"ESCMID", start:"2026-04-17", end:"2026-04-21", city:"뮌헨", country:"독일", type:"학회", category:"감염", url:"https://www.escmid.org/congress-events/escmid-global/munich-2026/", venue:"Messe München", note:"유럽 임상미생물·감염질환"},
  {name:"WFH World Congress (세계혈우연맹)", abbr:"WFH", start:"2026-04-19", end:"2026-04-22", city:"쿠알라룸푸르", country:"말레이시아", type:"학회", category:"혈우병", url:"https://wfh.org/congress/", venue:"Kuala Lumpur Convention Centre", note:"격년(짝수년) 세계대회"},
  {name:"INTERPHEX (국제 제약 엑스포)", abbr:"Interphex", start:"2026-04-21", end:"2026-04-23", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://www.interphex.com/", venue:"Javits Center", note:""},
  {name:"BIO KOREA International Convention", abbr:"Bio Korea", start:"2026-04-28", end:"2026-04-30", city:"서울", country:"한국", type:"파트너링", category:"종합", url:"https://www.biokorea.org/", venue:"COEX", note:""},
  {name:"ASCO Annual Meeting (미국임상종양학회)", abbr:"ASCO", start:"2026-05-29", end:"2026-06-02", city:"시카고", country:"미국", type:"학회", category:"항암", url:"https://www.asco.org/annual-meeting", venue:"McCormick Place", note:"세계 최대 임상종양 학회"},
  {name:"International MPS Symposium (MPS·리소좀질환)", abbr:"MPS Symposium", start:"2026-06-04", end:"2026-06-07", city:"피렌체", country:"이탈리아", type:"학회", category:"희귀질환", url:"https://mps2026.com/", venue:"Palazzo dei Congressi · Palazzo Affari", note:"제18회 · 격년 · MPS 전 아형(헌터증후군 MPS II 포함)·리소좀축적질환 · IMPSN 주최"},
  {name:"EHA Congress (유럽혈액학회)", abbr:"EHA", start:"2026-06-11", end:"2026-06-14", city:"스톡홀름", country:"스웨덴", type:"학회", category:"혈액", url:"https://ehaweb.org/connect-network/eha2026-congress", venue:"Stockholmsmässan", note:"제31회"},
  {name:"DIA Global Annual Meeting", abbr:"DIA", start:"2026-06-14", end:"2026-06-18", city:"필라델피아", country:"미국", type:"규제전시", category:"규제", url:"https://www.diaglobal.org/Flagship/DIA-2026", venue:"Pennsylvania Convention Center", note:"의약품 규제·개발 종합"},
  {name:"CPHI & PMEC China", abbr:"CPHI China", start:"2026-06-16", end:"2026-06-18", city:"상하이", country:"중국", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/china/", venue:"SNIEC", note:""},
  {name:"ISBT International Congress (국제수혈학회)", abbr:"ISBT", start:"2026-06-20", end:"2026-06-24", city:"쿠알라룸푸르", country:"말레이시아", type:"학회", category:"혈액", url:"https://www.isbtweb.org/", venue:"Kuala Lumpur Convention Centre", note:"제39차 · 격년 개최"},
  {name:"BIO International Convention", abbr:"BIO", start:"2026-06-22", end:"2026-06-25", city:"샌디에이고", country:"미국", type:"파트너링", category:"종합", url:"https://convention.bio.org/", venue:"San Diego Convention Center", note:"세계 최대 바이오 파트너링"},
  {name:"ISTH Congress (국제혈전지혈학회)", abbr:"ISTH", start:"2026-07-11", end:"2026-07-15", city:"파리", country:"프랑스", type:"학회", category:"혈우병", url:"https://www.isthcongress.org/", venue:"Paris Expo Porte de Versailles", note:"제34회 · 혈전·지혈"},
  {name:"BIO Asia–Taiwan", abbr:"BIO Asia", start:"2026-07-15", end:"2026-07-19", city:"타이베이", country:"대만", type:"파트너링", category:"종합", url:"https://bioasiataiwan.com/en/", venue:"Nangang Exhibition Center", note:""},
  {name:"CPHI Korea (원료·CDMO 전시)", abbr:"CPHI Korea", start:"2026-08-25", end:"2026-08-27", city:"서울", country:"대한민국", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/korea/", venue:"COEX", note:"국내 최대 제약 원료·CDMO 전시"},
  {name:"SSIEM Annual Symposium (선천성 대사질환)", abbr:"SSIEM", start:"2026-08-25", end:"2026-08-28", city:"헬싱키", country:"핀란드", type:"학회", category:"희귀질환", url:"https://www.ssiem.org/", venue:"Messukeskus Helsinki", note:"선천성 대사이상질환(헌터증후군 등)"},
  {name:"Options for the Control of Influenza XIII", abbr:"Options XIII", start:"2026-08-30", end:"2026-09-02", city:"워싱턴 D.C.", country:"미국", type:"학회", category:"백신", url:"https://eswi.org/agenda/options-xiii-conference-control-influenza", venue:"", note:"ISIRV 주최 국제 인플루엔자 학회"},
  {name:"BioProcess International (BPI)", abbr:"BPI", start:"2026-09-22", end:"2026-09-25", city:"보스턴", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://informaconnect.com/bioprocessinternational/", venue:"Hynes Convention Center", note:"바이오 공정 제조"},
  {name:"DCVMN Annual General Meeting (개도국 백신제조사 네트워크)", abbr:"DCVMN", start:"2026-09-22", end:"2026-09-24", city:"베이징", country:"중국", type:"학회", category:"백신", url:"https://www.dcvmn.org/", venue:"", note:"제27회 AGM · UNICEF·PAHO 조달과 개도국 백신 공급 논의"},
  {name:"CPHI Worldwide (CPHI Milan 2026)", abbr:"CPHI", start:"2026-10-06", end:"2026-10-08", city:"밀라노", country:"이탈리아", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/europe/", venue:"Fiera Milano", note:"세계 최대 제약 원료·CDMO 전시"},
  {name:"BioJapan (아시아 파트너링)", abbr:"BioJapan", start:"2026-10-07", end:"2026-10-09", city:"요코하마", country:"일본", type:"파트너링", category:"종합", url:"https://jcd-expo.jp/en/", venue:"Pacifico Yokohama", note:"일본·아시아 최대 BD"},
  {name:"AABB Annual Meeting (미국혈액은행협회)", abbr:"AABB", start:"2026-10-17", end:"2026-10-19", city:"애틀랜타", country:"미국", type:"학회", category:"혈액", url:"https://www.aabb.org/annual-meeting", venue:"Georgia World Congress Center", note:"수혈·혈액제제"},
  {name:"ISPE Annual Meeting & Expo", abbr:"ISPE", start:"2026-10-18", end:"2026-10-21", city:"워싱턴 D.C.", country:"미국", type:"규제전시", category:"규제", url:"https://ispe.org/conferences/2026-annual-meeting-expo", venue:"Gaylord National Resort", note:"제약 엔지니어링·생산(Plant)"},
  {name:"World Vaccine Congress Europe", abbr:"WVC Europe", start:"2026-10-19", end:"2026-10-21", city:"암스테르담", country:"네덜란드", type:"학회", category:"백신", url:"https://www.terrapinn.com/conference/world-vaccine-congress-europe/", venue:"RAI Amsterdam", note:"2026년 암스테르담 개최"},
  {name:"IDWeek (미국 감염질환학회 연합)", abbr:"IDWeek", start:"2026-10-21", end:"2026-10-24", city:"워싱턴 D.C.", country:"미국", type:"학회", category:"감염", url:"https://www.idweek.org/", venue:"Walter E. Washington Convention Center", note:"IDSA·SHEA·HIVMA·PIDS 공동"},
  {name:"ESMO Congress (유럽종양학회)", abbr:"ESMO", start:"2026-10-23", end:"2026-10-27", city:"마드리드", country:"스페인", type:"학회", category:"항암", url:"https://www.esmo.org/meeting-calendar/esmo-congress-2026", venue:"IFEMA Madrid", note:""},
  {name:"Global Health Exhibition (Global Health Saudi)", abbr:"GHE", start:"2026-10-26", end:"2026-10-29", city:"리야드", country:"사우디아라비아", type:"규제전시", category:"규제", url:"https://www.globalhealthsaudi.com/", venue:"Riyadh Front Exhibition Center", note:"사우디 Vision 2030 대표 행사"},
  {name:"PPTA Plasma Protein Forum (혈장단백치료 포럼)", abbr:"PPF", start:"2026-11-03", end:"2026-11-04", city:"알렉산드리아", country:"미국", type:"학회", category:"혈액", url:"https://www.pptaglobal.org/events/plasma-protein-forum", venue:"The Westin Alexandria Old Town", note:"북미 혈장단백치료 산업 포럼"},
  {name:"BIO-Europe", abbr:"BIO-Europe", start:"2026-11-09", end:"2026-11-11", city:"쾰른", country:"독일", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope/", venue:"Koelnmesse", note:"제32회 · 유럽 최대 BD 파트너링"},
  {name:"CPHI & PMEC India", abbr:"CPHI India", start:"2026-11-23", end:"2026-11-25", city:"뉴델리", country:"인도", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/india/en/home.html", venue:"IICC Yashobhoomi", note:"PMEC India 11/24–26 병행"},
  {name:"ASH Annual Meeting (미국혈액학회)", abbr:"ASH", start:"2026-12-12", end:"2026-12-15", city:"뉴올리언스", country:"미국", type:"학회", category:"혈액", url:"https://www.hematology.org/meetings/annual-meeting", venue:"Ernest N. Morial Convention Center", note:"제68회"},

  // ══════════════════════ 2027 ══════════════════════
  {name:"Biotech Showcase", abbr:"Biotech Showcase", start:"2027-01-11", end:"2027-01-13", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://informaconnect.com/biotech-showcase/", venue:"", note:"JPM 주간 병행"},
  {name:"J.P. Morgan Healthcare Conference", abbr:"JPM", start:"2027-01-11", end:"2027-01-14", city:"샌프란시스코", country:"미국", type:"파트너링", category:"종합", url:"https://www.jpmorgan.com/about-us/events-conferences/health-care-conference", venue:"", note:"제45회 · 업계 최대 투자·파트너링"},
  {name:"Arab Health / WHX Dubai", abbr:"Arab Health", start:"2027-01-25", end:"2027-01-28", city:"두바이", country:"아랍에미리트 연합", type:"규제전시", category:"규제", url:"https://www.worldhealthexpo.com/events/healthcare/dubai/", venue:"Dubai World Trade Centre", note:"중동 최대 헬스케어(WHX로 리브랜딩)"},
  {name:"WORLDSymposium (리소좀축적질환)", abbr:"WORLDSymposium", start:"2027-01-31", end:"2027-02-04", city:"샌디에이고", country:"미국", type:"학회", category:"희귀질환", url:"https://worldsymposia.org/", venue:"Manchester Grand Hyatt", note:"헌터증후군·MPS 등 LSD 연구"},
  {name:"SIMD Annual Meeting (미국 선천성대사질환학회)", abbr:"SIMD", start:"2027-03-07", end:"2027-03-10", city:"투손", country:"미국", type:"학회", category:"희귀질환", url:"https://simd.org/index.php/meetings/", venue:"Westin La Paloma Resort & Spa", note:"매년 개최 · ICIEM 비개최 연도의 대체 감시처"},
  {name:"World Vaccine Congress Washington", abbr:"WVC Washington", start:"2027-03-08", end:"2027-03-11", city:"워싱턴 D.C.", country:"미국", type:"학회", category:"백신", url:"https://www.terrapinn.com/conference/world-vaccine-congress-washington/", venue:"Walter E. Washington Convention Center", note:"세계 최대 백신 학회"},
  {name:"PDA Annual Meeting (PDA Week)", abbr:"PDA", start:"2027-03-14", end:"2027-03-18", city:"롤리", country:"미국", type:"규제전시", category:"규제", url:"https://www.pda.org/global-event-calendar/event-detail/pda-week-2027", venue:"Raleigh Convention Center", note:"무균·주사제 제조 규제(PDA Week)"},
  {name:"DCAT Week", abbr:"DCAT", start:"2027-03-15", end:"2027-03-18", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://dcatweek.org/", venue:"New York Hilton Midtown", note:"의약 원료·계약제조 비즈니스"},
  {name:"DIA Europe (유럽 규제·개발 연차총회)", abbr:"DIA Europe", start:"2027-03-16", end:"2027-03-18", city:"바젤", country:"스위스", type:"규제전시", category:"규제", url:"https://www.diaglobal.org/Flagship/DIA-Europe-2027", venue:"Messe Basel", note:"EMA·HTA·환자단체 참여 유럽 규제 총회"},
  {name:"CROI (레트로바이러스·기회감염 학회)", abbr:"CROI", start:"2027-03-21", end:"2027-03-24", city:"샌디에이고", country:"미국", type:"학회", category:"감염", url:"https://www.croiconference.org/", venue:"", note:""},
  {name:"AACR Annual Meeting (미국암연구학회)", abbr:"AACR", start:"2027-04-02", end:"2027-04-07", city:"올랜도", country:"미국", type:"학회", category:"항암", url:"https://www.aacr.org/meeting/aacr-annual-meeting-2027/", venue:"Orange County Convention Center", note:""},
  {name:"BIO-Europe Spring", abbr:"BES", start:"2027-04-05", end:"2027-04-07", city:"리옹", country:"프랑스", type:"파트너링", category:"종합", url:"https://informaconnect.com/bioeurope-spring/", venue:"Eurexpo Lyon", note:""},
  {name:"ESCMID Global (구 ECCMID)", abbr:"ESCMID", start:"2027-04-09", end:"2027-04-13", city:"스톡홀름", country:"스웨덴", type:"학회", category:"감염", url:"https://www.escmid.org/congress-events/escmid-global/", venue:"Stockholmsmässan", note:"유럽 임상미생물·감염질환"},
  {name:"INTERPHEX (국제 제약 엑스포)", abbr:"Interphex", start:"2027-04-13", end:"2027-04-15", city:"뉴욕", country:"미국", type:"규제전시", category:"CDMO·원료", url:"https://www.interphex.com/", venue:"Javits Center", note:""},
  {name:"ASGCT Annual Meeting (미국유전자세포치료학회)", abbr:"ASGCT", start:"2027-05-03", end:"2027-05-07", city:"필라델피아", country:"미국", type:"학회", category:"혈우병", url:"https://annualmeeting.asgct.org/about/future-annual-meetings", venue:"Pennsylvania Convention Center", note:"혈우병 A 유전자치료 등 유전자·세포치료"},
  {name:"RAPS Euro Convergence (유럽 규제실무 총회)", abbr:"RAPS Euro", start:"2027-05-25", end:"2027-05-28", city:"더블린", country:"아일랜드", type:"규제전시", category:"규제", url:"https://inform.raps.org/euro-convergence", venue:"The Convention Centre Dublin", note:"5/25 프리컨퍼런스 워크숍"},
  {name:"ESPID Annual Meeting (유럽 소아감염학회)", abbr:"ESPID", start:"2027-05-31", end:"2027-06-04", city:"베를린", country:"독일", type:"학회", category:"백신", url:"https://espidmeeting.org/", venue:"", note:"제45회 · 소아 백신(수두·독감 등) 임상·접종정책"},
  {name:"ASCO Annual Meeting (미국임상종양학회)", abbr:"ASCO", start:"2027-06-04", end:"2027-06-08", city:"시카고", country:"미국", type:"학회", category:"항암", url:"https://www.asco.org/annual-meeting", venue:"McCormick Place", note:""},
  {name:"BIO International Convention", abbr:"BIO", start:"2027-06-07", end:"2027-06-10", city:"필라델피아", country:"미국", type:"파트너링", category:"종합", url:"https://convention.bio.org/", venue:"", note:"세계 최대 바이오 파트너링"},
  {name:"EHA Congress (유럽혈액학회)", abbr:"EHA", start:"2027-06-10", end:"2027-06-13", city:"바르셀로나", country:"스페인", type:"학회", category:"혈액", url:"https://ehaweb.org/connect-network/future-congresses", venue:"", note:""},
  {name:"CPHI & PMEC China", abbr:"CPHI China", start:"2027-06-16", end:"2027-06-18", city:"상하이", country:"중국", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/china/", venue:"", note:""},
  {name:"ISBT Regional Congress (국제수혈학회 지역총회)", abbr:"ISBT", start:"2027-06-19", end:"2027-06-23", city:"로테르담", country:"네덜란드", type:"학회", category:"혈액", url:"https://www.isbtweb.org/events/future.html", venue:"Rotterdam Ahoy", note:"제37차 지역총회 · 홀수년 개최"},
  {name:"MASCC/ISOO Annual Meeting (다국적 암 지지요법학회)", abbr:"MASCC", start:"2027-06-24", end:"2027-06-26", city:"로테르담", country:"네덜란드", type:"학회", category:"항암", url:"https://mascc.org/meetings/2027-annual-meeting/", venue:"", note:"호중구감소증 등 항암 지지요법"},
  {name:"ISTH Congress (국제혈전지혈학회)", abbr:"ISTH", start:"2027-06-26", end:"2027-06-30", city:"밴쿠버", country:"캐나다", type:"학회", category:"혈우병", url:"https://www.isthcongress.org/", venue:"", note:"혈전·지혈"},
  {name:"DIA Global Annual Meeting", abbr:"DIA", start:"2027-06-28", end:"2027-07-01", city:"샌디에이고", country:"미국", type:"규제전시", category:"규제", url:"https://www.diaglobal.org/Flagship/DIA-2027", venue:"San Diego Convention Center", note:"의약품 규제·개발 종합"},
  {name:"BIO Asia–Taiwan", abbr:"BIO Asia", start:"2027-07-27", end:"2027-07-31", city:"타이베이", country:"대만", type:"파트너링", category:"종합", url:"https://bioasiataiwan.com/en/", venue:"TaiNEX", note:""},
  {name:"SSIEM Annual Symposium (선천성 대사질환)", abbr:"SSIEM", start:"2027-08-31", end:"2027-09-03", city:"더블린", country:"아일랜드", type:"학회", category:"희귀질환", url:"https://www.ssiem.org/", venue:"Dublin Convention Centre", note:"선천성 대사이상질환"},
  {name:"ESMO Congress (유럽종양학회)", abbr:"ESMO", start:"2027-09-17", end:"2027-09-21", city:"바르셀로나", country:"스페인", type:"학회", category:"항암", url:"https://www.esmo.org/meeting-calendar/esmo-congress-2027", venue:"", note:""},
  {name:"AABB Annual Meeting (미국혈액은행협회)", abbr:"AABB", start:"2027-10-16", end:"2027-10-18", city:"애너하임", country:"미국", type:"학회", category:"혈액", url:"https://www.aabb.org/annual-meeting", venue:"", note:"수혈·혈액제제"},
  {name:"CPHI Worldwide (CPHI Frankfurt 2027)", abbr:"CPHI", start:"2027-11-09", end:"2027-11-11", city:"프랑크푸르트", country:"독일", type:"규제전시", category:"CDMO·원료", url:"https://www.cphi.com/europe/", venue:"Messe Frankfurt", note:"세계 최대 제약 원료·CDMO 전시"},

  // ══════════════════════ 2028 ══════════════════════
  {name:"WORLDSymposium (리소좀축적질환)", abbr:"WORLDSymposium", start:"2028-01-30", end:"2028-02-03", city:"올랜도", country:"미국", type:"학회", category:"희귀질환", url:"https://worldsymposia.org/", venue:"Hyatt Regency Orlando", note:"헌터증후군·MPS 등 LSD 연구"},
  {name:"AACR Annual Meeting (미국암연구학회)", abbr:"AACR", start:"2028-04-21", end:"2028-04-26", city:"뉴올리언스", country:"미국", type:"학회", category:"항암", url:"https://www.aacr.org/professionals/meetings/future-annual-meetings/", venue:"Ernest N. Morial Convention Center", note:""},
  {name:"ASGCT Annual Meeting (미국유전자세포치료학회)", abbr:"ASGCT", start:"2028-05-01", end:"2028-05-05", city:"뉴올리언스", country:"미국", type:"학회", category:"혈우병", url:"https://annualmeeting.asgct.org/about/future-annual-meetings", venue:"", note:"혈우병 A 유전자치료 등 유전자·세포치료"},
  {name:"ASCO Annual Meeting (미국임상종양학회)", abbr:"ASCO", start:"2028-06-02", end:"2028-06-06", city:"시카고", country:"미국", type:"학회", category:"항암", url:"https://www.asco.org/annual-meeting", venue:"McCormick Place", note:""},
  {name:"ISBT International Congress (국제수혈학회)", abbr:"ISBT", start:"2028-06-04", end:"2028-06-08", city:"요코하마", country:"일본", type:"학회", category:"혈액", url:"https://www.isbtweb.org/", venue:"PACIFICO Yokohama", note:"제40차 · 격년 개최"},
  {name:"EHA Congress (유럽혈액학회)", abbr:"EHA", start:"2028-06-08", end:"2028-06-11", city:"", country:"", region:"유럽", type:"학회", category:"혈액", url:"https://ehaweb.org/connect-network/future-congresses", venue:"", note:"일자만 확정 · 개최도시 미정(TBA)"},
  {name:"BIO International Convention", abbr:"BIO", start:"2028-06-12", end:"2028-06-15", city:"샌디에이고", country:"미국", type:"파트너링", category:"종합", url:"https://convention.bio.org/future-dates", venue:"", note:"세계 최대 바이오 파트너링"},
  {name:"AABB Annual Meeting (미국혈액은행협회)", abbr:"AABB", start:"2028-10-14", end:"2028-10-16", city:"토론토", country:"캐나다", type:"학회", category:"혈액", url:"https://www.aabb.org/annual-meeting", venue:"", note:"수혈·혈액제제"},

  // ══════════════════════ 2029 ══════════════════════
  {name:"ASGCT Annual Meeting (미국유전자세포치료학회)", abbr:"ASGCT", start:"2029-05-07", end:"2029-05-11", city:"애틀랜타", country:"미국", type:"학회", category:"혈우병", url:"https://annualmeeting.asgct.org/about/future-annual-meetings", venue:"", note:"혈우병 A 유전자치료 등 유전자·세포치료"},
/*__DATA_END__*/
];
