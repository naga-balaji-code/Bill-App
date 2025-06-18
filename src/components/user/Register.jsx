import React from 'react'

const Register = () => {
  return (
    <div className='bg-amber-500 flex justify-center flex-col items-baseline-last'>
      <div>
        <h1> Register  </h1>
         </div>


        <div>
          <input type="text" placeholder='Enter Name' />
        </div>

        <div>
          <input type="text" placeholder='Enter UserName' />
        </div>
     
        <div>
          <input type="email" placeholder='Enter Email'/>
        </div>

          <div>
            <input type="password" placeholder='Enter Password' />
          </div>

          <div>
            <input type="password" placeholder='Re-Enter Password'/>
          </div>

          <div>
            <input type="submit" placeholder='Click' />
          </div>

    </div>
  )
}

export default Register