import "./about.css"
import programmer from '../../images/programmer.jpg'
import certificate1 from '../../images/me1.jpg'
import certificate2 from '../../images/me4.jpg'
import certificate3 from '../../images/me5.jpg'
import award from '../../images/Css.png'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={programmer} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub-title">
                    The secret of man's being is not only to live but to have something to live for.<br/>
                    A courage man is not he who doesn't fear, but who he can conquer that fear.
                </p>
                <p className="a-description">
                    <br/>
                    My name is Demba Sow I am 22 years old I am from Mauritania, But I live actually in Turkey in which I study computer sciences department.
                    I've been coding for about 2 years. I am certified at web and mobile development.
                    I also like to do UI/UX designing and can't ignore that I am obsessed with photographing.
                </p>
                <div className="a-award">
                    <img src={award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">CSS Wild Learned Talented Level Award 2021</h4>
                        <p className="a-award-description">
                            This Award was offered to me by WildLearner company.
                            I was really happy about it because I was able to finish css course
                            for free at their application and was able to find the award with mention "Talented".
                            So very big thanks to the WildLearner Community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
