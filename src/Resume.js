function Resume({name,experience,education,skills,id,editexp})
{
return(
<>
<div>Name : {name}</div>
{
experience.map((e)=><div
key={e.id}
company={e.company}
time={e.Time}
post={e.post}
id = {e.id}
>
<div><span >CompanyName = </span><span>{e.company}</span></div>
<button onClick={()=>editexp(id)}> Edit </button>
<div><h3>Position</h3>{e.post}</div>
<div><h3>Time</h3>{e.Time}</div>

</div>)    
}

{
education.map((e)=><div
key={e.id}
institute={e.institute}
degree={e.degree}
>
<div><span>Institute Name = </span><span>{e.institute}</span></div>
<div><h3>Degree = </h3>{e.degree}</div>


</div>)    
}
</>
)
}
export default  Resume