import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [cvData, setCvData] = useState({
    name: 'Name',
    address: 'Address',
    email: 'Email',
    phone: 'Phone',
    // education: ['Education 1', 'Education 2'],
    // experience: [],
    // skills: [],
  });

  const [eduData, setEduData] = useState([{
    university: 'University',
    major: 'Major',
    degree: 'Degree',
    year: 'Graduation Year/Duration',
    thesis: '',
    additionalDetail: '',
    visible: true
  }]);
  

  //add education
  const addEdu = () => {
    setEduData(prev => [...prev, { university: "", major: "", degree: "", year: "",  thesis: '', additionalDetail: '',visible: true }]);
  };

  //toggle button
  const toggleBtn = (index) => {
    setEduData(eduData.map((item, i) => 
    i === index ? { ...item, visible: !item.visible } : item
    ));
  }
  //delete education
  const deleteEdu = (index) => {
    setEduData(eduData.filter((_, i) => i !== index));
  };

  // Experience data
  const [expData, setExpData] = useState([{
    organization: 'Organization',
    city: 'City, State',
    position: 'Position Title',
    year: 'Month Year - Month Year',
    description: ['Description'],
    visible: true
  }]);

  //add Experience
  const addExp = () => {
    setExpData(prev => [...prev, { organization: "", city: "", position: "", year: "", description: [], visible: true }]);
  };

  //toggle button
  const toggleExp = (index) => {
    setExpData(expData.map((item, i) => 
    i === index ? { ...item, visible: !item.visible } : item
    ));
  }
  //update Experience description
  const updateExpDesc = (expIndex, descIndex, value) => {
    const updated = [...expData];
    updated[expIndex].description[descIndex] = value;
    setExpData(updated);
  };

  //delete Experience
  const deleteExp = (index) => {
    setExpData(expData.filter((_, i) => i !== index));
  };

  // delete Experience description
    const deleteExpDesc = (expIndex, descIndex) => {
      const updated = [...expData];
      updated[expIndex].description.splice(descIndex, 1);
      setExpData(updated);
    };

  //add Experience decription
  const addExpDesc = (index) => {
    setExpData(prev =>
      prev.map((item, i) =>
        i === index
          ? { ...item, description: [...item.description, ""] } 
          : item
      )
    );
  };
  

  // Function to save the CV
  const saveCv = () => {
    // Logic to save the CV data
  };

  // Function to download the CV
  const downloadCv = () => {
    // Logic to download the CV as a file
  };


  return (
    <>
      <h1>Hello world!</h1>
    <div className='content'>

      {/* edit form */}

      <div className='modify-container'>
        <h2>Modify your CV</h2>
        {/* <h3>Personal Detail</h3> */}
        <label  className="input">
          <input
          type='text'
          id="input"
          placeholder='&nbsp;Full Name'
          value = {cvData.name == 'Name' ? '' : cvData.name}
          onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
          />
          
        </label>

        <label  className="input">
          <input
          type='text'
          id="input"
          placeholder='&nbsp;Address'
          value = {cvData.address == 'Address' ? '' : cvData.address}
          onChange={(e) => setCvData({ ...cvData, address: e.target.value })}
          />
        </label>

        <label  className="input">
          <input
          type='email'
          id="input"
          placeholder='&nbsp;Email'
          value = {cvData.email == 'Email' ? '' : cvData.email}
          onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
          />
        </label>

        <label  className="input">
          <input
          type='tel'
          id="input"
          placeholder='&nbsp;Phone'
          value = {cvData.phone == 'Phone' ? '' : cvData.phone}
          onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
          />
        </label>
        
        {/* Education edit form */}
        <h3>Education</h3>
        {eduData.map((edu, index) => (
          <div key={index} className='education-container'>
            <div className={edu.visible ? "edu-inputs toggle-on" : "edu-inputs toggle-off"}>
              {/* university */}
              <label  className="input">
              <input
                type='text'
                id="input"
                placeholder='&nbsp;University'
                value={eduData.university == 'University' ? '' : eduData.university}
                onChange={(e) => {
                  const updated = [...eduData];
                  updated[index].university = e.target.value;
                  setEduData(updated);
                }}
              />
              </label>

              {/* Major */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Major'
                  value={eduData.major == 'Major' ? '' : eduData.major}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].major = e.target.value;
                    setEduData(updated);
                  }}
                />
              </label>

              {/* Degree */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Degree, GPA is optional'
                  value={eduData.degree == 'Degree, GPA is optional' ? '' : eduData.degree}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].degree = e.target.value;
                    setEduData(updated);
                  }}
                />
              </label>

              {/* Year */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Graduation Year/Duration'
                  value={eduData.year == 'Graduation Year/Duration' ? '' : eduData.year}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].year = e.target.value;
                    setEduData(updated);
                  }}
                />
              </label>

              {/* Thesis */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Thesis Title (Optional)'
                  value={eduData.thesis}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].thesis = e.target.value;
                    setEduData(updated);
                  }}
                />
              </label>

              {/* Additional Detail */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Additional Detail (Optional)'
                  value={eduData.additionalDetail}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].additionalDetail = e.target.value;
                    setEduData(updated);
                  }}
                />
              </label>
            </div>
            
            {/* toggle and delete buttons */}
            <button className='toggle-btn' onClick={() => toggleBtn(index)}><FontAwesomeIcon icon={edu.visible ? faEye:faEyeSlash} /></button>
            <button className='delete-btn' onClick={() => deleteEdu(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
            
          </div>
        ))}
        
        <button type="button" className="add-btn" onClick={addEdu}>Add Education</button>
        
        {/* Experience edit form */}
        <h3>Experience</h3>
        {expData.map((exp, index) => (
          <div key={index} className='experience-container'>
            <div className={exp.visible ? "exp-inputs toggle-on" : "exp-inputs toggle-off"}>
              {/* organization */}
              <label  className="input">
              <input
                type='text'
                id="input"
                placeholder='&nbsp;Organization'
                value={expData.organization == 'Organization' ? '' : expData.organization}
                onChange={(e) => {
                  const updated = [...expData];
                  updated[index].organization = e.target.value;
                  setExpData(updated);
                }}
              />
              </label>

              {/* city */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;City, State'
                  value={expData.city == 'City, State' ? '' : expData.city}
                  onChange={(e) => {
                    const updated = [...expData];
                    updated[index].city = e.target.value;
                    setExpData(updated);
                  }}
                />
              </label>

              {/* position */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Position Title'
                  value={expData.position == 'Position Title' ? '' : expData.position}
                  onChange={(e) => {
                    const updated = [...expData];
                    updated[index].position = e.target.value;
                    setExpData(updated);
                  }}
                />
              </label>

              {/* Year */}
              <label  className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Month Year - Month Year'
                  value={expData.year == 'Month Year - Month Year' ? '' : expData.year}
                  onChange={(e) => {
                    const updated = [...expData];
                    updated[index].year = e.target.value;
                    setExpData(updated);
                  }}
                />
              </label>

              {/* description */}
              <div className="description-section">
                {exp.description.map((desc, descIndex) => (
                  <div key={descIndex} className="description-item">
                    <label className="input">
                      <input
                        type="text"
                        id="input"
                        placeholder="Description"
                        value={desc === "Description" ? "" : desc}
                        onChange={(e) => updateExpDesc(index, descIndex, e.target.value)}
                      />
                    </label>
                    <button className="delete-desc-btn" onClick={() => deleteExpDesc(index, descIndex)}>
                      Delete
                    </button>
                  </div>
                ))}
                <button className="add-exp-desc-btn" onClick={() => addExpDesc(index)}>
                  Add description
                </button>
              </div>
              
            </div>
            
            {/* toggle and delete buttons */}
            <button className='toggle-btn' onClick={() => toggleExp(index)}><FontAwesomeIcon icon={exp.visible ? faEye:faEyeSlash} /></button>
            <button className='delete-btn' onClick={() => deleteExp(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
        ))}
        <button type="button" className="add-btn" onClick={addExp}>Add Experience</button>
        


        {/* buttons */}
        {/* <button className='modify-button'>Save CV</button>
        <button className='modify-button'>Download CV</button> */}

      </div>

      {/* display form */}

      <div className='display-container'>
        <h2>Display</h2>

        <div className='export-content'>
          <h3 className="content-head center">{cvData.name}</h3>
          <div className='inline-content'>
            <p className="content-desc">{cvData.address}</p>
            <p>|</p>
            <p className="content-desc"> {cvData.email}</p>
            <p>|</p>
            <p className="content-desc">{cvData.phone}</p>
          </div>

          {/* Education section */}
          <h3 className="content-head left">Education</h3>
          <hr />
          <div className='edu-display-content'>
            {eduData.map((edu, index) => (
              edu.visible && (
                <div key={index} className='edu-display-item'>
                  <div className='edu-display-info'>
                    <p className="content-head ">{edu.university}</p>
                    <p className="content-desc">{edu.major}</p>
                  </div>
                  <div className='edu-display-info'>
                    <p className="content-desc">{edu.degree}</p>
                    <p className="content-desc">{edu.year}</p>
                  </div>
                  <div className='edu-display-additional'>
                    <p className="content-desc">{edu.thesis}</p>
                  <p className="content-desc">{edu.additionalDetail}</p>
                  </div>
                  
                </div>
              )
            ))}
          </div>

          {/* Experience section */}
          <h3 className="content-head left">Experience</h3>
          <hr />
          <div className='exp-display-content'>
            {expData.map((exp, index) => (
              exp.visible && (
                <div key={index} className='exp-display-item'>
                  <div className='exp-display-info'>
                    <p className="content-head ">{exp.organization}</p>
                    <p className="content-desc">{exp.city}</p>
                  </div>
                  <div className='exp-display-info'>
                    <p className="content-desc">{exp.position}</p>
                    <p className="content-desc">{exp.year}</p>
                  </div>
                  <div className='exp-display-additional'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className="content-desc">{desc}</li>
                    ))}
                    
                  </div>
                  
                </div>
              )))}
          </div>

          {/* Experience section */}
          <h3 className="content-head left">Leadership & Activities</h3>
          <hr />

          {/* Experience section */}
          <h3 className="content-head left">Skills & Interests</h3>
          <hr />

          
          
        </div>

      </div>
    </div>
    </>
  )
}

export default App
