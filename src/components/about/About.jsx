import "./about.css"
import programmer from '../../images/programmer.jpg'
import certificate1 from '../../images/me1.jpg'
import certificate2 from '../../images/me4.jpg'
import certificate3 from '../../images/me5.jpg'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={programmer} alt="Programmer Picture" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub-title">
                    The secret of man's being is not only to live but to have something to live for.<br/>
                    A courage man is not he who doesn't fear, but who he can conquer that fear.
                </p>
                <p className="description">
                    <br/>
                    My name is Demba Sow I am 22 years old I am from Mauritania, But I live actually in Turkey in which I study computer sciences department.
                    I've been coding for about 2 years. I am certified at web and mobile development.
                    I also like to do UI/UX designing and can't ignore that I am obsessed with photographing.
                </p>
                <div className="a-certificates">
                    <div className="a-certificates-wrapper">
                       {/* <div className="a-radio-box">
                            <input type="radio" name="radiobox" id="radio1" checked />
                            <input type="radio" name="radiobox" id="radio2" />
                            <input type="radio" name="radiobox" id="radio3" />
                            <input type="radio" name="radiobox" id="radio4" />
                            <input type="radio" name="radiobox" id="radio5" />
                            <input type="radio" name="radiobox" id="radio6" />
                            <input type="radio" name="radiobox" id="radio7" />
                            <input type="radio" name="radiobox" id="radio8" />
                            <input type="radio" name="radiobox" id="radio9" />
                            <input type="radio" name="radiobox" id="radio10" />
                            <input type="radio" name="radiobox" id="radio11" />
                            <input type="radio" name="radiobox" id="radio12" />
                        </div>*/}

                        <div className="a-certificate">
                            <img src={certificate1} alt="" className="html-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate2} alt="" className="css-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate3} alt="" className="javascript-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate1} alt="" className="react-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate2} alt="" className="react-native-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate3} alt="" className="flutter-certificate" />   
                        </div>
                        <div className="a-certificate">
                            <img src={certificate2} alt="" className="django-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate1} alt="" className="python-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate3} alt="" className="java-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate1} alt="" className="c-certificate" /> 
                        </div>
                        <div className="a-certificate">
                            <img src={certificate2} alt="" className="cpp-certificate" />
                        </div>
                        <div className="a-certificate">
                            <img src={certificate3} alt="" className="c-sharp-certificate" />
                        </div>
                    </div>
                   {/* <div className="a-certificate-navigation">
                        <label htmlFor="radio1" className="bar"></label>
                        <label htmlFor="radio2" className="bar"></label>
                        <label htmlFor="radio3" className="bar"></label>
                        <label htmlFor="radio4" className="bar"></label>
                        <label htmlFor="radio5" className="bar"></label>
                        <label htmlFor="radio6" className="bar"></label>
                        <label htmlFor="radio7" className="bar"></label>
                        <label htmlFor="radio8" className="bar"></label>
                        <label htmlFor="radio9" className="bar"></label>
                        <label htmlFor="radio10" className="bar"></label>
                        <label htmlFor="radio11" className="bar"></label>
                        <label htmlFor="radio12" className="bar"></label>
                    </div>*/}

                 </div>
            </div>
        </div>
    )
}

export default About
