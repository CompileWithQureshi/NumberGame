import { useState } from 'react'

import './App.css'

function App() {
  const [values,setValues]=useState('')

  const [result,setRsult]=useState([])
  const [error,setError]=useState("")

  function handleChange(e) {
    const {value}=e.target
    setValues(value)
    setError("");
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    let num=Number(values)
    
    if (num < 0) {
      setError("Please enter a positive number"); 
      return;
    }

    if (num%2===0){
    const Even=[]      
      for(let i=1;i<=3;i++){
      num+=2

        Even.push(num)
      }
      // console.log(Even);
      setRsult(Even)
    

      
    }else{
      const Odd=[]      
      for(let i=1;i<=3;i++){
      num+=2

        Odd.push(num)
      }
      // console.log(Even);
      setRsult(Odd)
    }
  }
  
console.log(result);

  return (
    <main className='w-full h-[100vh] border flex justify-center items-center'>
      <div className=" card bg-base-100 w-96 shadow-2xl ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <form onSubmit={handleSubmit} >
      {error && <p className="text-red-500 mt-2">{error}</p>}
    <input type="number" value={values} className=' border p-2 w-full my-2 rounded-md bg-gray-50 border-primary ' onChange={handleChange}/>
    <div className="card-actions justify-end items-center">
      {error?'':<p className='text-lg font-semibold'>result: {result.join(',')}</p>}
      <button type='submit' className="btn btn-primary">Find</button>
    </div>
    </form>
  </div>
</div>
    </main>
  )
}

export default App
