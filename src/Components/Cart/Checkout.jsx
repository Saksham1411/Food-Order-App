import React from 'react'

const Checkout = (props) => {
  const submitHandler = (e) =>{
    e.preventDefault();
  }
  return (
    <form onSubmit={submitHandler}>
        <div className=''>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id='name' />
       </div>
        <div className=''>
            <label htmlFor='street'>Street</label>
            <input type="text" id='street' />
       </div>
        <div className=''>
            <label htmlFor='city'>City</label>
            <input type="text" id='city' />
       </div>
       <button type='button' onClick={props.onCancel}>Cancel</button>
       <button>Confirm</button>
    </form>
  )
}

export default Checkout