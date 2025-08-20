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

  // Acitivity data
  const [actData, setActData] = useState([{
    organization: 'Organization',
    city: 'City, State',
    role: 'Role',
    year: 'Month Year - Month Year',
    description: ['Description'],
    visible: true
  }]);

  // Add Activity
  const addAct = () => {
    setActData(prev => [
      ...prev,
      { organization: "", city: "", role: "", year: "", description: [], visible: true }
    ]);
  };

  // Toggle Activity
  const toggleAct = (index) => {
    setActData(actData.map((item, i) =>
      i === index ? { ...item, visible: !item.visible } : item
    ));
  };

  // Update Activity Description
  const updateActDesc = (actIndex, descIndex, value) => {
    const updated = [...actData];
    updated[actIndex].description[descIndex] = value;
    setActData(updated);
  };

  // Delete Activity
  const deleteAct = (index) => {
    setActData(actData.filter((_, i) => i !== index));
  };

  // Delete Activity Description
  const deleteActDesc = (actIndex, descIndex) => {
    const updated = [...actData];
    updated[actIndex].description.splice(descIndex, 1);
    setActData(updated);
  };

  // Add Activity Description
  const addActDesc = (index) => {
    setActData(prev =>
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
        
        {/* Activity edit form */}
        <h3>Leadership & Activities</h3>
        {actData.map((act, index) => (
          <div key={index} className='activity-container'>
            <div className={act.visible ? "act-inputs toggle-on" : "act-inputs toggle-off"}>

              {/* organization */}
              <label className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Organization'
                  value={act.organization === 'Organization' ? '' : act.organization}
                  onChange={(e) => {
                    const updated = [...actData];
                    updated[index].organization = e.target.value;
                    setActData(updated);
                  }}
                />
              </label>

              {/* city */}
              <label className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;City, State'
                  value={act.city === 'City, State' ? '' : act.city}
                  onChange={(e) => {
                    const updated = [...actData];
                    updated[index].city = e.target.value;
                    setActData(updated);
                  }}
                />
              </label>

              {/* role */}
              <label className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Role'
                  value={act.role === 'Role' ? '' : act.role}
                  onChange={(e) => {
                    const updated = [...actData];
                    updated[index].role = e.target.value;
                    setActData(updated);
                  }}
                />
              </label>

              {/* Year */}
              <label className="input">
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Month Year - Month Year'
                  value={act.year === 'Month Year - Month Year' ? '' : act.year}
                  onChange={(e) => {
                    const updated = [...actData];
                    updated[index].year = e.target.value;
                    setActData(updated);
                  }}
                />
              </label>

              {/* description */}
              <div className="description-section">
                {act.description.map((desc, descIndex) => (
                  <div key={descIndex} className="description-item">
                    <label className="input">
                      <input
                        type="text"
                        id="input"
                        placeholder="Description"
                        value={desc === "Description" ? "" : desc}
                        onChange={(e) => updateActDesc(index, descIndex, e.target.value)}
                      />
                    </label>
                    <button
                      className="delete-desc-btn"
                      onClick={() => deleteActDesc(index, descIndex)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button className="add-act-desc-btn" onClick={() => addActDesc(index)}>
                  Add description
                </button>
              </div>
            </div>

            {/* toggle and delete buttons */}
            <button className='toggle-btn' onClick={() => toggleAct(index)}>
              <FontAwesomeIcon icon={act.visible ? faEye : faEyeSlash} />
            </button>
            <button className='delete-btn' onClick={() => deleteAct(index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        ))}
        <button type="button" className="add-btn" onClick={addAct}>
          Add Activity
        </button>


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

          {/* Activities section */}
          <h3 className="content-head left">Leadership & Activities</h3>
          <hr />
          <div className='activity-display-content'>
            {actData.map((activity, index) => (
              activity.visible && (
                <div key={index} className='activity-display-item'>
                  <div className='activity-display-info'>
                    <p className="content-head ">{activity.organization}</p>
                    <p className="content-desc">{activity.city}</p>
                  </div>
                  <div className='activity-display-info'>
                    <p className="content-desc">{activity.role}</p>
                    <p className="content-desc">{activity.year}</p>
                  </div>
                  <div className='activity-display-additional'>
                    {activity.description.map((desc, descIndex) => (
                      <li key={descIndex} className="content-desc">{desc}</li>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

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
