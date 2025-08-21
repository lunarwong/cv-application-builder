import '../css/display.css'

const Display = ({cvData, eduData, expData, actData, skillData}) => {

    return (
        <>
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

          {/* Skill section */}
          <h3 className="content-head left">Skills & Interests</h3>
          <hr />
          <div className="skill-display-content">
            {skillData.map(
              (item, index) =>
                item.visible && (
                  <div key={index} className="skill-display-item">
                    <p className="content-head">
                      {item.skill}
                      {item.skill && item.description ? " :" : ""}
                    </p>
                    <p className="content-desc">{item.description}</p>
                  </div>
                )
            )}
          </div>

          
          
        </div>
      </div>
        </>
    )

}

export default Display;