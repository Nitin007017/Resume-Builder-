import { useState } from "react"
import Resume from "./Resume";

function Addexp({addExperience})
{
    const intaialstate = 
{
    company: '',
    post: '',
    Time: ''
}
const [exp,setExp] = useState(intaialstate);
function handlechange()
{
    addExperience(exp);
}
function handleclick(e)
{
setExp({...exp, 
[e.target.name]:e.target.value
})
console.log(exp);
}


    return(
        <>
        <form>
  <input placeholder='company' name='company' value={exp.company} onChange={handlechange}></input>
  <input placeholder='post' name='post' value={exp.post}  onChange={handlechange}></input>
  <input placeholder='Time' name='Time' value={exp.Time} onChange={handlechange}></input>
        </form>
        <button onClick={handleclick} >Add Experience</button>
      
    </>
    )
}
export default Addexp