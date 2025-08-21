import '../css/editForm.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const EditForm = (
  { cvData, setCvData, eduData, setEduData, expData, setExpData
    , actData, setActData, skillData, setSkillData}
  ) => {

      //EDUCATION SECTION//

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
    
      //EXPERIENCE SECTION//
    
      //add Experience
      const addExp = (e) => {
        setExpData(prev => [...prev, 
          { organization: "", city: "", position: "", 
            year: "", description: [], visible: true }]);
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
    
      //ACTIVITY SECTION//
      
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
    
      //SKILL SECTION//
    
       // Add new topic + description
      const addSkill = (e) => {
        e.preventDefault();
        setSkillData([
          ...skillData,
          { skill: "", description: "", visible: true }
        ]);
      };
    
      // Delete skill + description
      const deleteSkill = (index) => {
        setSkillData(skillData.filter((_, i) => i !== index));
      };
    
      // Toggle visibility
      const toggleSkill = (index) => {
        setSkillData(
          skillData.map((item, i) =>
            i === index ? { ...item, visible: !item.visible } : item
          )
        );
      };
    

    return (
    <>
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
            {/* toggle and delete buttons */}
            <button className='delete-btn' onClick={() => deleteEdu(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
            <button className='toggle-btn' onClick={() => toggleBtn(index)}><FontAwesomeIcon icon={edu.visible ? faEye:faEyeSlash} /></button>
            
            <div className={edu.visible ? "edu-inputs toggle-on" : "edu-inputs toggle-off"}>
              {/* university */}
              
              <input
                type='text'
                id="input"
                placeholder='&nbsp;University'
                value={edu.university == 'University' ? '' : edu.university}
                onChange={(e) => {
                  const updated = [...eduData];
                  updated[index].university = e.target.value;
                  setEduData(updated);
                }}
              />

              {/* Major */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Major'
                  value={edu.major == 'Major' ? '' : edu.major}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].major = e.target.value;
                    setEduData(updated);
                  }}
                />
              

              {/* Degree */}
              
                <input
                  type='text'
                  id="input"
                  placeholder="&nbsp;Degree, GPA is optional"
                  value={edu.degree == "Degree, GPA is optional" ? '' : edu.degree}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].degree = e.target.value;
                    setEduData(updated);
                  }}
                />
              

              {/* Year */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Graduation Year/Duration'
                  value={edu.year == 'Graduation Year/Duration' ? '' : edu.year}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].year = e.target.value;
                    setEduData(updated);
                  }}
                />
              

              {/* Thesis */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Thesis Title (Optional)'
                  value={edu.thesis}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].thesis = e.target.value;
                    setEduData(updated);
                  }}
                />
              

              {/* Additional Detail */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Additional Detail (Optional)'
                  value={edu.additionalDetail}
                  onChange={(e) => {
                    const updated = [...eduData];
                    updated[index].additionalDetail = e.target.value;
                    setEduData(updated);
                  }}
                />
              
            </div>
          </div>
        ))}
        
        <button type="button" className="add-btn" onClick={addEdu}>Add Education</button>
        
        {/* Experience edit form */}
        <h3>Experience</h3>
        {expData.map((exp, index) => (
          <div key={index} className='experience-container'>
            {/* toggle and delete buttons */}
            <button className='delete-btn' onClick={() => deleteExp(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
            <button className='toggle-btn' onClick={() => toggleExp(index)}><FontAwesomeIcon icon={exp.visible ? faEye:faEyeSlash} /></button>
            
            <div className={exp.visible ? "exp-inputs toggle-on" : "exp-inputs toggle-off"}>
              {/* organization */}
              
              <input
                type='text'
                id="input"
                placeholder='&nbsp;Organization'
                value={exp.organization == 'Organization' ? '' : exp.organization}
                onChange={(e) => {
                  const updated = [...expData];
                  updated[index].organization = e.target.value;
                  setExpData(updated);
                }}
              />

              {/* city */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;City, State'
                  value={exp.city == 'City, State' ? '' : exp.city}
                  onChange={(e) => {
                    const updated = [...expData];
                    updated[index].city = e.target.value;
                    setExpData(updated);
                  }}
                />

              {/* position */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Position Title'
                  value={exp.position == 'Position Title' ? '' : exp.position}
                  onChange={(e) => {
                    const updated = [...expData];
                    updated[index].position = e.target.value;
                    setExpData(updated);
                  }}
                />

              {/* Year */}
              
                <input
                  type='text'
                  id="input"
                  placeholder='&nbsp;Month Year - Month Year'
                  value={exp.year == 'Month Year - Month Year' ? '' : exp.year}
                  onChange={(e) => {
                    const updated = [...expData];
                    updated[index].year = e.target.value;
                    setExpData(updated);
                  }}
                />

              {/* description */}
              <div className="description-section">
                {exp.description.map((desc, descIndex) => (
                  <div key={descIndex} className="description-item">
                      <input
                        type="text"
                        id="input"
                        placeholder="Description"
                        value={desc === "Description" ? "" : desc}
                        onChange={(e) => updateExpDesc(index, descIndex, e.target.value)}
                      />
                    <button className="delete-desc-btn" onClick={() => deleteExpDesc(index, descIndex)}>
                      Delete description
                    </button>
                  </div>
                ))}
                <button className="add-desc-btn" onClick={() => addExpDesc(index)}>
                  Add description
                </button>
              </div>
              
            </div>
            
            </div>
        ))}
        <button type="button" className="add-btn" onClick={addExp}>Add Experience</button>
        
        {/* Activity edit form */}
        <h3>Leadership & Activities</h3>
        {actData.map((act, index) => (
          <div key={index} className='activity-container'>
            {/* toggle and delete buttons */}
            <button className='delete-btn' onClick={() => deleteAct(index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button className='toggle-btn' onClick={() => toggleAct(index)}>
              <FontAwesomeIcon icon={act.visible ? faEye : faEyeSlash} />
            </button>

            <div className={act.visible ? "act-inputs toggle-on" : "act-inputs toggle-off"}>

              {/* organization */}
              
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

              {/* city */}
              
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

              {/* role */}
              
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

              {/* Year */}
              
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

              {/* description */}
              <div className="description-section">
                {act.description.map((desc, descIndex) => (
                  <div key={descIndex} className="description-item">
                      <input
                        type="text"
                        id="input"
                        placeholder="Description"
                        value={desc === "Description" ? "" : desc}
                        onChange={(e) => updateActDesc(index, descIndex, e.target.value)}
                      />
                    <button
                      className="delete-desc-btn"
                      onClick={() => deleteActDesc(index, descIndex)}
                    >
                      Delete description
                    </button>
                  </div>
                ))}
                <button className="add-desc-btn" onClick={() => addActDesc(index)}>
                  Add description
                </button>
              </div>
            </div>

            
          </div>
        ))}
        <button type="button" className="add-btn" onClick={addAct}>
          Add Activity
        </button>

        {/* Skills and Interests edit form */}
        <h3 >Skills & Interests</h3>

          {/* Edit form */}
          <div className="skill-edit-form">
            {skillData.map((skill, index) => (
              <div key={index} className="skill-container">
                {/* toggle and delete buttons */}
                  <button className='delete-btn' onClick={() => deleteSkill(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
                  <button className='toggle-btn' onClick={() => toggleSkill(index)}><FontAwesomeIcon icon={skill.visible ? faEye:faEyeSlash} /></button>
                  
                <div className={skill.visible ? "skill-inputs toggle-on" : "skill-inputs toggle-off"}>
                  
                  <input
                    type="text"
                    id="input"
                    placeholder="&nbsp;Skill"
                    value={skill.skill === 'Skill' ? '' : skill.skill}
                    onChange={(e) => {
                      const updated = [...skillData];
                      updated[index].skill = e.target.value;
                      setSkillData(updated);
                    }}
                  />
                  <input
                    type="text"
                    id="input"
                    placeholder="Description"
                    value={skill.description === 'Description' ? '' : skill.description}
                    onChange={(e) => {
                      const updated = [...skillData];
                      updated[index].description = e.target.value;
                      setSkillData(updated);
                    }}
                  />
                  
                  
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="add-btn" onClick={addSkill}>Add Skill</button>

        {/* buttons */}
        {/* <button className='modify-button'>Save CV</button>
        <button className='modify-button'>Download CV</button> */}

      </div>
    </>
    )
}

export default EditForm;