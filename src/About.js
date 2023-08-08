import './App.css';
import AmeliaHeadshot from './images/AmeliaHeadshot.JPG';

function About(){
    return(
        <div>
            <h2 className="subtitle">About</h2>
            <div className="about">
                <div className="abtImage"><img src={AmeliaHeadshot} alt="amelia headshot" /></div>
                <div className='imgText'>
        
                    <p>Amelia Lane is a rising Sophomore at Duke University. She was raised in Scarsdale, NY where she graduated from Scarsdale High School in 2022. </p> 

                    <p>Currently, Amelia is pursuing a B.S. Computer Science major, a minor in Psychology, and a certificate in Innovation and Entrepreneurship.</p>

                    <p>Aside from academics, Amelia loves to watch episodes of <i>New Girl</i> on repeat, cook with her dad, go on walks/exercise, hang out with her dog, and laugh at dad jokes.</p>
                </div>
            </div>
            <p className="aboutP">This page was created to allow for you to see what Amelia has been up to recently! Take a look at the projects she has been working on and her blog about her life and work combined :)</p>
        </div>
    )
}

export default About;