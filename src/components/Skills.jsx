
import React, { useEffect,useState } from "react";
import skills from "../assets/skills.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SkillCard from "./skillCard";
import $ from 'jquery';
export default function Skills(){
    const [showSkillCard,setShowSkillCard] = useState(false);
    const [skillCardProps,setSkillCardProps] = useState({});

    const showSkillCardPopUp = (skill) => {
        setSkillCardProps(skill);
        setShowSkillCard(true);
    }

    const hideSkillCardPopUp = () => {
        setShowSkillCard(false);
    }
    const checkClickEvent = (e) => {
        if(setShowSkillCard && !e.target.closest('.popup')){
            hideSkillCardPopUp();
        }
    }
    $(document).on("mousedown",(e) => {
        checkClickEvent(e)
    })

    

    const Skillshtml = skills.map((skill,index) => {
        return (
            <div onClick={() => showSkillCardPopUp(skill)} key={index} className="p-5 flex cursor-pointer w-full md:w-[45%] items-center justify-between bg-white min-w-[18.75rem] md:max-w-xl">
                <div className="flex items-center gap-5 md:h-16">
                    <img className="object-contain h-8 md:h-16" src={skill.Logo} alt={skill.Name}/>
                    <h3 className="text-2xl">{skill.Name}</h3>
                </div>
                <div className="h-full">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        )
    })
    return(
        <>
        <div id='skills' className="font-kalam justify-center min-h-screen max-w-5xl mx-auto flex flex-col gap-10 px-20">
            <p className="text-5xl font-bold">My skill Set</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
                {Skillshtml}
            </div>            
        </div>
        {showSkillCard && 
            <div className="skillCardPopUp" style={{
                position: 'fixed',
                top: '0%',
                left: '0%',
                width:'100%',
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <SkillCard {...skillCardProps} checkClickEvent={(e) => checkClickEvent(e)} closePopUp={hideSkillCardPopUp} />
            </div>       
        }
        </>
    )
}