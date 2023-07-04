import person from './data'
import './App.css';
import Resume from './Resume';
import { useEffect, useState } from 'react';

function App() {
  const Data = person.Experience;
  const [data, setDate] = useState(Data);
  const [expedit, setExpedit] = useState(null);
  useEffect(() => {
    setExpedit(exp)
  }, [expedit])
  const intialstate =
  {
    company: '',
    post: '',
    Time: ''
  }
  const [exp, setExp] = useState(intialstate);
  function handlechange(e) {
    e.stopPropagation();
    setExp({
      ...exp,
      [e.target.name]: e.target.value
    })
    console.log(exp);
  }


  function Addexp(event) {
    event.preventDefault();
    setDate([...data, { ...exp, id: data.length + 1 }])
    console.log(data);
  }
  function editexp(id) {
    setExpedit((data.find(d => d.id === id)))
    console.log(expedit)
  }
  return (
    <div >

      <div className='editer'>
        <form>
          <input placeholder='company' name='company' value={exp.company} onChange={handlechange}></input>
          <input placeholder='post' name='post' value={exp.post} onChange={handlechange}></input>
          <input placeholder='Time' name='Time' value={exp.Time} onChange={handlechange}></input>
        </form>
        {(editexp) ? <button onClick={Addexp}>Add Exp</button> : <button onClick={editexp}>Edit Exp</button>}
      </div>

      <div className='ui'>
        <Resume name={person.Name} experience={person.Experience} education={person.Education} skills={person.Skills} id={person.id} editexp={editexp}></Resume>
      </div>

    </div>
  );
}

export default App;
