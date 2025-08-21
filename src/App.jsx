import { useState } from 'react'
import './App.css'
import EditForm from './components/EditForm'
import Display from './components/Display'


function App() {
  const [cvData, setCvData] = useState({
        name: 'Name',
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
      });
    
  const [eduData, setEduData] = useState([{
    university: 'University',
    major: 'Major',
    degree: 'Degree, GPA is optional',
    year: 'Graduation Year/Duration',
    thesis: '',
    additionalDetail: '',
    visible: true
  }]);

  const [expData, setExpData] = useState([{
        organization: 'Organization',
        city: 'City, State',
        position: 'Position Title',
        year: 'Month Year - Month Year',
        description: ['Description'],
        visible: true
      }]);

    const [actData, setActData] = useState([{
        organization: 'Organization',
        city: 'City, State',
        role: 'Role',
        year: 'Month Year - Month Year',
        description: ['Description'],
        visible: true
      }]);

      const [skillData, setSkillData] = useState([
        {
          skill: "Skill",
          description: "Description",
          visible: true
        }
      ]);


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
        <Display 
          cvData={cvData}
          eduData={eduData}
          expData={expData}
          actData={actData}
          skillData={skillData}
        />
      </div>
    </>
  )
}

export default App
