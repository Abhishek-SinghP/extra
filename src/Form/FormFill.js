import React, { useState } from 'react'

function FormFill() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");
    const[data ,setData] = useState([]);
    const [content, setContent] = useState(true);


    const handleSubmit = (details) => {
        details.preventDefault();

        const info = { name, age, salary }

        if (name && age && salary) {
            setData((total) => [...total, info])
            setName("")
            setAge("")
            setSalary("")
            setContent(false)
        }
    }


    return (
        <div>
            {content ?
                <>
                    <h1>FORM</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Name : </label>
                        <input type="text" name='name' id="name" value={name} onChange={(details) => setName(details.target.value)} /><br /><br/>

                        <label>Age :</label>
                        <input type="number" name='Age' id="Age" value={age} onChange={(details) => setAge(details.target.value)} /><br /><br/>

                        <label>Salary : </label>
                        <input type="number" name='salary' id="salary" value={salary} onChange={(details) => setSalary(details.target.value)} /><br /><br></br>

                        <button onClick={() => setContent(true)}>Submit</button>
                    </form>
                </> :
                <>
                    <h1>DATA</h1>
                    <div>
                        {
                            data.map((val) =>
                                <div>
                                    Name : {val.name} | Age : {val.age} | Salary : {val.salary}
                                </div>
                            )
                        }
                    </div>
                    <button onClick={() => setContent(true)}>GO BACK</button>
                </>
            }
        </div>
    )
}

export default FormFill;
























    //     const tempArr = data ;
    //     tempArr.push(tempObj);
    //     setData(tempArr);
    //     console.log(data);
    // }

//     return(
//         <>
//         <form action="">
//             <label For="">Name</label>
//             <input type="text" id="name" name="name" required value={name} onChanege={(event)=>setName(event.target.value)} />
//             <label For="">Age</label>
//             <input type="text" id="age" name="age" required value= {age} onChange={(event)=>setAge(event.target.value)} />
//             <label For="">Salary</label>
//             <input type="text" id="Salary" name="Salary" required value = {salary} onChange={(event)=>setSalary(event.target.value)} />
//             <button type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//         </>

// )
// }
