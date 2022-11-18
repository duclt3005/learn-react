import React from 'react'
import useHandleChange from '../hooks/useHandleChange'

const Form = () => {
    const { value, handleInputChange } = useHandleChange({
        name: '',
        email: '',
        hobby: false
    });

    return (
        <div className='p-5'>
            <div className='flex gap-x-3'>
                <input
                    type="text"
                    name='name'
                    className='w-full max-w-[300px] p-5 border border-gray-200 rounded-lg'
                    placeholder='Enter your name'
                    onChange={handleInputChange}
                />
                <p>{value.name}</p>
            </div>
            <div className='flex gap-x-3'>
                <input
                    type="text"
                    name='email'
                    className='w-full max-w-[300px] p-5 border border-gray-200 rounded-lg'
                    placeholder='Enter your mail'
                    onChange={handleInputChange}
                />
                <p>{value.email}</p>
            </div>
        </div>
    )
}

export default Form