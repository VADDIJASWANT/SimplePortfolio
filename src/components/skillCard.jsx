import React from'react';
import $ from 'jquery';
export default function skillCard(props){
    $(document).on("mousedown",(e) => {
        props.checkClickEvent(e)
    })
    let certificates = props.additionalContents.certificates
    console.log(certificates)
    const certificatesHTML = certificates.map((certificate,index) => {
        return(<p className='bg-lightWhite hover:text-white hover:bg-blue-400 p-2 rounded-lg' key={index}>
            <a href={certificate.Url} target='_blank' rel="noreferrer">{certificate.Name}</a>
        </p>)
    })
    console.log(certificatesHTML)
    return(
        <>
            <div className="popup p-5 font-kalam rounded-lg flex flex-col w-full gap-5 bg-white min-w-[18.75rem] max-w-[80%] md:max-w-xl">
                <div className='flex gap-5 w-full items-center'>
                    <img className="object-contain w-1/4 h-8 md:h-16" src={props.Logo} alt={props.Name}/>
                    <h3 className="text-2xl">{props.Name}</h3>
                </div>
                <p>{props.additionalContents.Description}</p>
                {certificates.length > 0? <div className="flex flex-col gap-5">
                    <p className='font-bold'>Certificates:</p>
                    {certificatesHTML}
                    </div> : null}
            </div>
        </>
    )
}