
import { useEffect, useState } from "react";
import madeLocallyImage from "../photos/madeLocally.png";

const MyWork = () => {

    //fetch projects from MongoDB and set them inside
    const [projects, setProjects] = useState("");
    //useEffect to fetch projects
    useEffect(()=>{
        fetch(`http://localhost:8000/projects`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                setProjects(data.data);
        }).catch((err)=>{
            console.log(err);
        })  
    },[])
    

return (
    // if so will need projects component and map over them ? 
    // may have pop up when clicked to be bigger details or go to another page?
    <div className="section-work">
        <h2 className="capital small-section">MY WORK</h2>
        <div className="big-section carousel" >
            {/* will map over projects to create cards */}
            <div className="inner-carousel">
                < div className="card start">
                    <div className="img-wrapper">
                        <img className="img-mywork" src={madeLocallyImage} alt="MadeLocally Homepage"/>
                    </div>
                    <div className="img-description">
                        <h2>MadeLocally</h2>
                        <p>A Local Artisan Directory. This is my final project as part of Concordia Univeristy's Full Stack Web Development Bootcamp.</p>
                    </div>
                </div>
                <div className="card">
                <div className="img-wrapper">
                        <img className="img-mywork" src="" alt="Ecommerce Store"/>
                    </div>
                    <div className="img-description">
                        <h2>Ecommerce store</h2>
                        <p>Group Project of an E-commerce store as part of the curriculum of Concordia Univeristy's Full Stack Web Development Bootcamp.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
);
}

export default MyWork;