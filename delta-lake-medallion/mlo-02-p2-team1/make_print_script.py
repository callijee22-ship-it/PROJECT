from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from pathlib import Path

root = Path(r'C:\workspace\mlo-02-p2-team1\github_main_latest_2')
out = root / 'docs' / 'F1_TeamBuilder_발표대본_인쇄용.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
font = r'C:\Windows\Fonts\malgun.ttf'
bold = r'C:\Windows\Fonts\malgunbd.ttf'
pdfmetrics.registerFont(TTFont('Malgun', font))
pdfmetrics.registerFont(TTFont('Malgun-Bold', bold))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleK', parent=styles['Title'], fontName='Malgun-Bold', fontSize=24, leading=32, alignment=TA_CENTER, textColor=HexColor('#102A43'), spaceAfter=10))
styles.add(ParagraphStyle(name='Sub', parent=styles['Normal'], fontName='Malgun', fontSize=11, leading=18, alignment=TA_CENTER, textColor=HexColor('#52606D'), spaceAfter=18))
styles.add(ParagraphStyle(name='H1K', parent=styles['Heading1'], fontName='Malgun-Bold', fontSize=17, leading=24, textColor=HexColor('#0B7285'), spaceBefore=8, spaceAfter=8))
styles.add(ParagraphStyle(name='H2K', parent=styles['Heading2'], fontName='Malgun-Bold', fontSize=12.5, leading=18, textColor=HexColor('#102A43'), spaceBefore=8, spaceAfter=5))
styles.add(ParagraphStyle(name='BodyK', parent=styles['BodyText'], fontName='Malgun', fontSize=10.5, leading=17, spaceAfter=7, textColor=HexColor('#243B53')))
styles.add(ParagraphStyle(name='SmallK', parent=styles['BodyText'], fontName='Malgun', fontSize=9, leading=14, textColor=HexColor('#52606D')))
styles.add(ParagraphStyle(name='Callout', parent=styles['BodyText'], fontName='Malgun-Bold', fontSize=12, leading=19, backColor=HexColor('#E6FFFA'), borderColor=HexColor('#0B7285'), borderWidth=0.7, borderPadding=8, spaceBefore=6, spaceAfter=10, textColor=HexColor('#102A43')))

def P(txt, style='BodyK'):
    return Paragraph(txt, styles[style])

def footer(c, doc):
    c.saveState(); c.setFont('Malgun', 8); c.setFillColor(HexColor('#829AB1'))
    c.drawString(18*mm, 12*mm, 'F1 Team Builder | 발표 인쇄용')
    c.drawRightString(192*mm, 12*mm, f'{doc.page}')
    c.restoreState()

story = []
story += [Spacer(1, 24*mm), P('F1 Team Builder', 'TitleK'), P('데이터 품질 진단부터 드라이버 후보 선정까지\n10~15분 발표용 대본 및 핵심 요약', 'Sub')]
story += [P('발표 핵심 한 문장', 'H1K'), P('오염된 레거시 F1 데이터를 그대로 비교하지 않고, 원본 보존과 복구 이력 관리, SQL·Pandas 교차검증을 거쳐 의사결정에 사용할 수 있는 데이터로 전환했습니다. 그 결과 Aston Martin의 약점을 확인하고 STROLL 자리의 우선 검토 후보로 LECLERC를 제시하며, RUSSELL은 보류합니다.', 'Callout')]
story += [P('발표 흐름', 'H1K')]
data = [['시간', '구간', '전달할 내용'], ['1분', '문제 정의', '레거시 데이터는 왜 바로 분석할 수 없는가'], ['3분', 'AS-IS 진단', '결측·중복·형식·코드 혼용을 수치로 진단'], ['3분', '복구와 검증', 'Bronze→Silver→Gold, 추적성과 대사'], ['4분', 'Gold 의사결정', '팀 약점과 후보 선정 근거'], ['1~2분', '한계와 결론', '무엇을 말할 수 있고 무엇은 보류하는가']]
t = Table(data, colWidths=[22*mm, 38*mm, 115*mm], repeatRows=1)
t.setStyle(TableStyle([('FONTNAME',(0,0),(-1,-1),'Malgun'),('FONTNAME',(0,0),(-1,0),'Malgun-Bold'),('FONTSIZE',(0,0),(-1,-1),9.5),('LEADING',(0,0),(-1,-1),14),('BACKGROUND',(0,0),(-1,0),HexColor('#0B7285')),('TEXTCOLOR',(0,0),(-1,0),colors.white),('BACKGROUND',(0,1),(-1,-1),HexColor('#F0F4F8')),('GRID',(0,0),(-1,-1),0.4,HexColor('#BCCCDC')),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
story += [t, Spacer(1, 6)]

sections = [
('1. 문제 정의와 프로젝트 목표', '저희 1팀은 단순히 결측값을 채우는 작업을 한 것이 아닙니다. 현업의 레거시 환경처럼 결측, 중복, 형식 불일치, 코드값 혼용, 명명 규칙 불일치가 섞인 F1 데이터를 받았고, 이 데이터를 분석 가능한 상태로 바꾸는 전체 흐름을 만들었습니다. 최종 목적은 깨끗한 데이터 자체가 아니라, 팀 운영과 드라이버 검토에 근거를 제공하는 Gold 데이터셋을 만드는 것입니다.'),
('2. AS-IS 품질 진단', '먼저 원본을 보존한 상태에서 Pandas로 컬럼, 자료형, 결측률, 중복, 범위, 키 관계를 프로파일링했습니다. 주요 이슈는 drivers의 country_code 결측, laps의 시간·속도·섹터 정보 결측, 비정상적으로 긴 랩과 피트 시간, stints의 compound 결측 또는 UNKNOWN, lap 구간 역전과 겹침 후보였습니다. 진단 결과는 감이 아니라 오류 건수와 비율로 관리했습니다.'),
('3. 복구 원칙', '복구는 근거가 있을 때만 수행했습니다. 세션·드라이버·랩·스틴트·피트의 관계와 시간 순서를 이용해 파생하거나 보정할 수 있는 값은 복구했고, 근거가 부족한 값은 억지로 채우지 않고 검토 또는 격리 대상으로 남겼습니다. 각 변경에는 원본값, repair_status, repair_method, repair_confidence, repair_reason을 남겼습니다.'),
('4. 세 가지 처리 상태', '이슈는 세 갈래로 나눴습니다. 근거가 있으면 REPAIRED, 원래 측정되지 않은 값이나 실제 사건이면 ACCEPTED, 근거가 부족하면 OPEN으로 남겼습니다. 분석을 왜곡할 수 있는 OPEN 행은 quarantine_flag=Y로 별도 저장하고, 분석 단계에서는 제외합니다. 따라서 결측을 모두 채우는 것이 아니라 값의 성격을 구분하는 것이 핵심입니다.'),
('5. 자료형과 분석 기준', '적재 단계에서는 모든 값을 문자열로 보존하고 검사 단계에서만 표준 도메인으로 해석합니다. 식별자는 문자열로 유지하며, 시간은 초 단위 실수, 날짜시간은 ISO 8601, 불리언은 True 또는 False만 허용합니다. 드라이버 비교에서는 비가 온 경기, 첫 랩, 피트 인·아웃 랩, SC·VSC·적기 구간, 지나치게 느린 랩과 건조 타이어가 아닌 랩을 제외합니다.'),
('6. 검증과 수치 해석', '정제 전후에 같은 검사를 수행하고 Pandas와 MySQL 결과를 대조했습니다. 복구 셀 1,357개와 복구 행 1,294건은 집계 단위가 다르므로 서로 모순되지 않습니다. 첨부 QA 문서의 FAIL 5→0과 발표자료의 FAIL 12→0은 실행 버전 또는 검사 범위 차이로 보이며, 발표에서는 “최종 실행 기준의 FAIL 0”을 중심으로 설명하고 세부 숫자는 사용한 리포트 버전을 함께 밝히겠습니다.'),
('4. 검증 결과', '154개 품질 검사를 수행했고, ERROR급 위반은 정제 후 0건으로 만들었습니다. Pandas와 MySQL 검사 결과가 일치했고, 행 수 대사도 원본 120,873건이 유지 119,575건, 복구 1,294건, 격리 4건으로 설명됩니다. 여기서 1,357은 복구된 셀 수이고 1,294는 복구가 발생한 행 수이므로 서로 다른 지표입니다.'),
('7. Medallion 구조의 의미', 'Bronze는 원본과 재현성을 보존하는 층입니다. Silver는 표준화·복구·검증을 거쳐 비교 가능한 분석 데이터를 만드는 층입니다. Gold는 분석 결과를 의사결정 단위로 집계한 층입니다. 따라서 레이어를 나눈 이유는 저장 방식이 멋있어서가 아니라, 원본 추적, 품질 통제, 분석 목적을 분리해 결론을 설명할 수 있게 하기 위해서입니다.'),
('8. Gold에서 보여주려는 것', 'Gold의 질문은 “어떤 드라이버가 가장 유명한가?”가 아닙니다. “Aston Martin의 약점은 무엇이고, 그 약점을 보완할 후보는 누구인가?”입니다. 팀 페이스, 피트 운영, 순위·포인트, 드라이버별 비교를 하나의 의사결정 화면으로 묶었습니다. 데이터 정리의 최종 목적이 팀 의사결정으로 연결되는 지점입니다.'),
('9. 팀 약점 진단', 'Aston Martin은 비교 가능한 21개 레이스에서 기준 대비 약 0.46% 느렸고, 피트 시간은 평균 약 0.282초 불리했으며 1초 초과 피트 비중은 24.4%였습니다. 순위는 7위, 포인트는 80점으로 6위와 8점 차이, 8위와 7점 차이였습니다. 즉 기본 페이스와 피트 운영이 함께 개선되어야 하는 후보 팀으로 해석했습니다.'),
('10. 후보 선정 로직', '후보는 두 단계로 비교했습니다. 먼저 같은 레이스 안에서 후보와 STROLL의 차이를 확인했고, 다음으로 같은 차를 경험한 팀 동료 기준을 사용해 드라이버 개인 효과를 조금 더 분리했습니다. 11개 기준에서 같은 방향을 보인 후보만 통과시켰고, LECLERC와 RUSSELL은 11/11 기준을 통과했습니다.'),
('11. 최종 후보 결과', 'LECLERC는 HAMILTON보다 랩당 0.217초 빠르고 9개 레이스 모두에서 앞섰습니다. STROLL 대비 팀 동료 비교에서도 -0.202초, 포인트 차이 -1.12%p로 나타났습니다. RUSSELL은 HAMILTON 대비 랩당 0.037초 느렸고, 2023년 HAMILTON과 2026년 ANTONELLI에게 시즌별로 뚜렷하게 졌습니다. 따라서 LECLERC는 우선 검토, RUSSELL은 보류로 정리합니다. 둘 다 영입 확정이 아니라 검토 결과입니다.'),
('12. 한계와 방어 답변', '차량 효과가 완전히 제거된 것은 아니며, HAMILTON의 2025년 페라리 첫 시즌이라는 비교 한계도 있습니다. 또한 Gold 후보 지표 일부는 v0.2.0 산출물이고 최신 정제 파이프라인은 v0.3.0이라는 버전 차이가 있습니다. 그러므로 “누가 반드시 성공한다”가 아니라 “현재 데이터와 기준에서 누구를 먼저 검토할 것인가”로 말하는 것이 정확합니다.'),
('13. 마무리', '저희가 만든 결과는 오염 데이터를 깨끗하게 보이는 표로 바꾼 것이 아닙니다. 원본을 보존하고, 복구 근거를 남기고, SQL과 Pandas로 검증하고, 그 결과를 팀 의사결정으로 연결했습니다. 최종적으로 Gold는 Aston Martin의 기본 페이스와 피트 운영 약점을 보여주며, STROLL 자리의 우선 검토 후보로 LECLERC를 제시합니다. RUSSELL은 추가 검증 전까지 보류합니다.')]
for i,(h,b) in enumerate(sections):
    story += [P(h, 'H1K'), P(b)]
    if i in [4]: story.append(Spacer(1, 5))

story += [Spacer(1, 8), P('질문 대응 메모', 'H1K')]
qa = [
('Delta Lake를 실제로 사용했나요?', '이번 구현에서 Delta Lake 엔진 자체를 운영한 것은 아닙니다. Bronze-Silver-Gold의 데이터 관리 원칙과 재현 가능한 레이어 구조를 적용했고, MySQL과 파일 산출물로 구현했습니다.'),
('FAIL 0이면 데이터가 완벽한가요?', '정의한 ERROR급 규칙 위반이 0건이라는 뜻입니다. WARN과 INFO는 남아 있으며, 분석 목적에 따라 추가 판단이 필요합니다.'),
('왜 모든 결측치를 채우지 않았나요?', '근거 없는 값은 AI 학습과 의사결정을 오염시킬 수 있기 때문입니다. 복구 가능한 값만 복구하고 나머지는 검토·격리했습니다.'),
('르클레르가 무조건 최종 영입 대상인가요?', '아닙니다. 현재 데이터와 비교 기준에서 우선 검토할 후보입니다. 2026년에는 HAMILTON과의 차이가 0에 가까워졌고, 차량 효과와 표본 한계도 있어 실제 영입 결정은 추가 검증이 필요합니다.'),
('복구 셀 1,357건과 복구 행 1,294건이 왜 다른가요?', '한 행에서 여러 컬럼이 동시에 복구될 수 있기 때문입니다. 셀 수와 행 수는 집계 단위가 다릅니다.'),
('왜 숫자 컬럼을 문자열로 읽었나요?', 'abc나 1.2.3 같은 오염값이 자동으로 NaN이 되어 사라지는 것을 막기 위해서입니다. 계산과 검사는 표준 도메인으로 해석할 때 수행합니다.'),
('왜 포인트를 재계산했나요?', '원천 points에는 최속 랩 보너스가 섞여 있어 경기별 비교 기준이 달라졌기 때문입니다. 분석에는 경기 규칙에 맞춘 race_base_points를 사용했습니다.'),
('정제 기준을 바꾸면 후보가 바뀌지 않나요?', '11개 기준을 바꿔 검증하고 같은 방향을 보인 후보만 통과시켰습니다. LECLERC와 RUSSELL은 11/11까지 통과했지만, 시즌별 동료 재확인에서 LECLERC만 남고 RUSSELL은 보류했습니다.'),
('FAIL 5건과 FAIL 12건 중 어느 수치가 맞나요?', '검사 실행 버전이나 검사 범위가 다른 수치입니다. 발표에서는 최종 실행 리포트의 기준을 명시하고, 공통 결론인 정제 후 FAIL 0건을 중심으로 설명합니다.'),
]
qt = Table([[P('예상 질문','H2K'),P('답변','H2K')]]+[[P(q),P(a)] for q,a in qa], colWidths=[55*mm,120*mm], repeatRows=1)
qt.setStyle(TableStyle([('FONTNAME',(0,0),(-1,-1),'Malgun'),('BACKGROUND',(0,0),(-1,0),HexColor('#D9EAF7')),('GRID',(0,0),(-1,-1),0.35,HexColor('#BCCCDC')),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),6),('RIGHTPADDING',(0,0),(-1,-1),6),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
story += [qt, Spacer(1,8), P('발표할 때 기억할 문장', 'H1K'), P('“저희는 데이터를 정리한 것이 아니라, 데이터가 의사결정에 사용될 수 있는 상태인지 증명했습니다.”', 'Callout')]

doc = SimpleDocTemplate(str(out), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=16*mm, bottomMargin=20*mm, title='F1 Team Builder 발표 대본 인쇄용')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(out)
