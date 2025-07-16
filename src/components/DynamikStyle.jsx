import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function DynamikStyle() {
    const [color, setColor]=useState(false);
    const [name ,setName]=useState('')
    const [valitInput, setValitInput]=useState(false);


    const addColor={
        color:'red',
        background:'green'
    }

    const removeColor={
        color:'black',
        background:'tomato'
    }


    const handleChange=(e)=>{

        setName(e.target.value);

    }

    useEffect(()=>{


        if(name.length < 3){

            setValitInput(false)

        }else if(name.length > 5){
            setValitInput(false)

        }else{
            setValitInput(true)
        }
       
    },[name])


  return (
    <div>
        <h1>DynamikStyle</h1>
        <input style={{background: valitInput ? 'green': 'red',bordercolor: valitInput? 'black': 'red'}} value={name} type="text" name="" onChange={handleChange} id="" />
        <p style={color ? addColor : removeColor}>Lorem ipsum dolor sit amet.</p>
        <button onClick={()=>setColor(!color)}>{color ? 'Color Remove': 'Add color'}</button>
    </div>
  )
}

export default DynamikStyle