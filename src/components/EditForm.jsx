
const EditForm = () => {
    const [cvData, setCvData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [],
    experience: [],
    skills: [],
    });

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
        <div className='modify-container'>
        <h2>Modify your CV</h2>
        <input
          type='text'
          placeholder='Name'
          value = {cvData.name}
          onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
        />
        <input
          type='email'
          placeholder='Email'
          value={cvData.email}
          // onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
        />
        <input
          type='tel'
          placeholder='Phone'
          // value={cvData.phone}
          // onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
        />

        {/* Add buttons for modifying the CV */}
        {/* <p>Click on the buttons below to modify your CV.</p>
        <button className='modify-button'>Add Section</button>
        <button className='modify-button'>Remove Section</button>
        <button className='modify-button'>Edit Section</button>
        <button className='modify-button'>Save CV</button>
        <button className='modify-button'>Download CV</button> */}

      </div>
    </>
    )
}

export default EditForm;