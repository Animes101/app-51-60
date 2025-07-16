import React, {useRef}  from 'react'

const UseFef = () => {

    const nameRef=useRef();
    const passwordRef=useRef();


    const handleSubmit=(e)=>{
        e.preventDefault()

        const userNam=nameRef.current.value;
        const password=passwordRef.current.value;

        nameRef.current.style.color='green'

        console.log(userNam,password)

    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input ref={nameRef} type="text" name="" id="" />
            <input ref={passwordRef} type="password" name="" id="" />
            <input  type="submit" value="Login" />
        </form>
    </div>
  )
}

export default UseFef