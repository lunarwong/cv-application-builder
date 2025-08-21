import { useState, useEffect, useRef } from 'react'

import generatePDF from 'react-to-pdf';
import usePDF from 'react-to-pdf'

import './App.css'
import EditForm from './components/EditForm'
import Display from './components/Display'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faDownload } from "@fortawesome/free-solid-svg-icons";



function App() {

  //Data & set data, show data in local storage
  const [cvData, setCvData] = useState(() => {
    const savedData = localStorage.getItem('cvData');
    return savedData ? JSON.parse(savedData) : {
      name: 'Name',
      address: 'Address',
      email: 'Email',
      phone: 'Phone'
    }}
  );
    
  const [eduData, setEduData] = useState(() => {
    const savedData = localStorage.getItem('eduData');
    return savedData ? JSON.parse(savedData) :
    [{
    university: 'University',
    major: 'Major',
    degree: 'Degree, GPA is optional',
    year: 'Graduation Year/Duration',
    thesis: '',
    additionalDetail: '',
    visible: true
    }]}
  );

  

  const [expData, setExpData] = useState(() =>{
    const savedData = localStorage.getItem('expData');
    return savedData ? JSON.parse(savedData) :
    [{
        organization: 'Organization',
        city: 'City, State',
        position: 'Position Title',
        year: 'Month Year - Month Year',
        description: ['Description'],
        visible: true
    }]}
  );

  const [actData, setActData] = useState(() => {
    const savedData = localStorage.getItem('actData');
    return savedData ? JSON.parse(savedData) :
    [{
      organization: 'Organization',
      city: 'City, State',
      role: 'Role',
      year: 'Month Year - Month Year',
      description: ['Description'],
      visible: true
    }]}
);

  const [skillData, setSkillData] = useState(() => {
    const savedData = localStorage.getItem('skillData');
    return savedData ? JSON.parse(savedData) :
    [{
      skill: "Skill",
      description: "Description",
      visible: true
    }]}
  );

  //store data in local storage
  useEffect(() => {
      localStorage.setItem("cvData", JSON.stringify(cvData))
    }, [cvData])

  useEffect(() => {
      localStorage.setItem("eduData", JSON.stringify(eduData))
    }, [eduData])

  useEffect(() => {
      localStorage.setItem("expData", JSON.stringify(expData))
    }, [expData])

  useEffect(() => {
      localStorage.setItem("actData", JSON.stringify(actData))
    }, [actData]) 

  useEffect(() => {
      localStorage.setItem("skillData", JSON.stringify(skillData))
    }, [skillData])


  //clear all data
  const clearAllData = () => {
    const confirmDel = window.confirm("Proceed delete all data?");
    if (!confirmDel) {
      console.log("Data not deleted");
      return;
    } else if (confirmDel) {
      console.log("Data deleted");
       localStorage.clear();
    setCvData({
      name: 'Name',name: 'Name',
      address: 'Address',
      email: 'Email',
      phone: 'Phone'});
    setEduData(
      [{
      university: 'University',
      major: 'Major',
      degree: 'Degree, GPA is optional',
      year: 'Graduation Year/Duration',
      thesis: '',
      additionalDetail: '',
      visible: true
      }]
    );
    setExpData(
      [{
        organization: 'Organization',
        city: 'City, State',
        position: 'Position Title',
        year: 'Month Year - Month Year',
        description: ['Description'],
        visible: true
    }]
    );
    setActData(
      [{
        organization: 'Organization',
        city: 'City, State',
        role: 'Role',
        year: 'Month Year - Month Year',
        description: ['Description'],
        visible: true
      }]
    );
    setSkillData(
      [{
        skill: "Skill",
        description: "Description",
        visible: true
      }]
    );
    }
   
  }

  // const { toPDF, targetRef } = usePDF({
  //   filename: `${cvData.name}-CV.pdf`,
  
  // });

  const targetRef = useRef();

  return (
    <>
      <h1>Hello world!</h1>
      <div className='content'>
        <EditForm 
          cvData={cvData}
          setCvData={setCvData}
          eduData={eduData}
          setEduData={setEduData}
          expData={expData} 
          setExpData={setExpData}
          actData={actData} 
          setActData={setActData}
          skillData={skillData} 
          setSkillData={setSkillData}
        />
        <div className='display-and-btn'>
          <div ref={targetRef} >
            <Display 
              cvData={cvData}
              eduData={eduData}
              expData={expData}
              actData={actData}
              skillData={skillData}
            />
          </div>
          
          <div className='btn-container'>
            <button 
              className='clear-data-btn' 
              onClick={clearAllData} >
              <FontAwesomeIcon icon={faBroom}/> 
                Clear all data
            </button>
            <button 
              className='export-data-btn' 
              onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>
              <FontAwesomeIcon icon={faDownload}/> 
              Dowload as PDF
            </button>
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default App
