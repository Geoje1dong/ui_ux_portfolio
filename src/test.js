import React from 'react'
import styled,{createGlobalStyle} from 'styled-components'
import ResumeData from './resumeData'
export default class Test extends React.Component{
  state={
    aboutFadeIn: null
  }

  componentDidMount() {
    setTimeout(() => this.setState({ aboutFadeIn: "aboutFadeIn" }), 0);
  }

  render(){
    return(
      <div className='about'>
        <GlobalStyle />
        <AboutBox className={this.state.aboutFadeIn}>
          <Intro>
            {/* <IntroText delay="0">안녕하세요, 저는 김재현 입니다.</IntroText>
            <IntroText delay="0.3">UI/UX 디자이너로 Web 및 App 개발에 참여하며 다양한 경험을 쌓고 있습니다.</IntroText>
            <IntroText delay="0.6">좋은 커뮤니케이션을 위해 개발자 및 기획자의 업무를 이해하기 위해 노력하고 있습니다.</IntroText>
            <IntroText delay="0.9">또한, 실용적이고 유용하며 아름다운 제품을 만들기 위해 많은 작업물을 보며 공부하고 있습니다.</IntroText>
            <IntroText delay="1.2">다양한 기술을 학습하고, 다양한 경험을 통해 좀 더 나은 디자이너로 발전하기 위해 노력하고 있습니다.</IntroText> */}
            {/* <IntroText delay="0">안녕하세요, 저는 김재현 입니다.</IntroText> */}
            {ResumeData.contents.map((content, index) => (
              <IntroText key={index} delay={0.3 * index}>{content}</IntroText>
            ))}
          </Intro>
          <Company delay="1.5">
            <h2>Work</h2>
            {ResumeData.companysData.map((company)=> (
              <li key={company.id}>
                <div>
                  <h3>{company.title}</h3>
                  <p>{company.period}</p>
                </div>
                <div>
                  {company.description.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
              </li>
            ))}
            {/* <li>
              <p>한국산업정보사</p>
              <div>
                <p>웹에이전시 WEB Publisher</p>
                <p>2015.10 ~ 2016.05</p>
              </div>
            </li>
            <li>
              <p>USSOFT</p>
              <div>
                <p>웹에이전시 GUI Designer</p>
                <p>2014.07 ~ 2015.07</p>
              </div>
            </li> */}
          </Company>
          <Company>
            <h2>Project</h2>
            {ResumeData.projectsData.map((project) => (
              <li key={project.id}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.period}</p>
                </div>
                <div>
                  <h5>주요내용</h5>
                  <p>
                    {project.description.split('\n').map((description, index) => (
                      <span key={index}>{description}<br /></span>
                    ))}
                  </p>
                  <h5>기여한 점</h5>
                  <ol>
                    {project.contribution.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ol>
                  <h5>사용한 Skill 또는 지식</h5>
                  <p>{project.techstack}</p>
                  <h5>결과/성과</h5>
                  <p>
                    {project.result.split('\n').map((result, index) => (
                      <span key={index}>{result}<br /></span>
                    ))}
                    <a target="_blank" href={project.link} rel="noopener noreferrer">{project.link}</a>
                  </p>
                </div>
              </li>
            ))}            
          </Company>
          <Company>
            <h2>SKILL</h2>
            {ResumeData.skillsData.map((skill) => (
              <li key={skill.id}>
                <div>
                  <h3>{skill.title}</h3>
                </div>
                <div>
                  <ol className='skill'>
                  {skill.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                  </ol>
                </div>
              </li>
            ))}
          </Company>
          {/* <Skill delay="1.8">
            <h2>Skill</h2>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Illustration</li>
            <li>Visual Design</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </Skill> */}
          <Company>
            <h2>Contact</h2>
            <p><a href="mailto:wogus4041@naver.com" rel="noopener noreferrer">wogus4041@naver.com</a></p>
            <p>010-6663-0222</p>
          </Company>
        </AboutBox>
      </div>
    )
  }
}


const GlobalStyle = createGlobalStyle`
header{
  display:none;
}
body{
  overflow:scroll !important;
  background:#fff !important;
}
#root{
  background:#fff !important;
  color:#333;
}
`


const AboutBox = styled.div`
  background:#fff;
  width:1024px;
  margin:0 auto;
  a {
    color:#a590ff !important;
    text-decoration:underline !important;
  }
  padding: 8.898895vw 5.26593vw 8.898895vw;
  @media screen and (max-width : 1024px) {
    padding: 15.79779vw 5.26593vw 15.79779vw;
  }
  @media screen and (max-width : 425px) {
    padding: 30.79779vw 5.26593vw 30.79779vw;
  }
  > h2{
    font-size:1.5rem;
    margin-bottom:60px;
  }
  >ul, >div >p{
    opacity:0;
    transform:translateY(80px);
  }
  &.aboutFadeIn{
    >ul, >div >p{
      opacity:1;
      transform:translateY(0px);
    }
  }
`

const Intro = styled.div`
  padding-top:5.26593vw;
  margin-bottom:140px;
`
const IntroText = styled.p`
  line-height:1.8em;
  font-weight:200;
  margin:0 0 10px 0;
  transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);
  transition-delay: ${props => props.delay}s;
`

const Company = styled.ul`
  >h2{
    font-size:2.4em;
    margin-bottom:1.5em;
  }
  transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);
  transition-delay: ${props => props.delay}s;
  margin-bottom:140px;
  max-width:1000px;
  > li{
    padding-bottom:3.75rem;
    margin-bottom: 3.75rem;
    border-bottom:1px solid rgba(0, 0, 0, 0.1);
    &:last-child{
      border-bottom:0;
    }
    >div{
      &:first-child{
        float:left;
        width:36%;
        >h3{
          font-size:1.25rem;
          font-weight:700;
          margin-bottom:0;
        }
        > p {
          font-weight:100;
          margin-bottom:0;
          font-size:12px;
          color:rgba(0,0,0,0.6)
        }
        @media screen and (max-width : 768px) {
          width:100%;
          float:none;
          margin-bottom:40px;
        }
      }
      &:last-child{
        float:left;
        width:64%;
        font-weight:200;
        >h5{
          margin-bottom:0;
          color:rgba(0,0,0,0.5);
          padding-top:12px;
          &:first-child{
            padding-top:0;
          }
        }
        p{
          font-weight:100;
          margin-bottom:0;
          line-height:1.7em;
        }
        > ol{
          &.skill{
            margin-top:20px;  
          }
          margin-top:16px;
          list-style-type:disc;
          // font-size:14px;
          padding:0;
          padding-left:17px;
          display:block;
          >li{
            margin-top:10px;
          }
        }
        @media screen and (max-width : 768px) {
          width:100%;
          float:none;
        }
      }
    }
  }
  li:after{
    content:'';
    display:block;
    clear: both
  }
`

// const Skill = styled.ul`
//   transition:all 0.8s cubic-bezier(0.455,0.03,0.515,0.955);
//   transition-delay: ${props => props.delay}s;
//   >li{
//     padding:6px 14px 4px;;
//     border-radius: 100px;
//     border:solid 1px rgba(255,255,255,0.1 );
//     margin:0 8px 14px 0;
//     display: inline-block;
//     line-height:1.5em;
//     font-weight:200;
//   }
// `