import React from 'react'
import { useForm } from 'react-hook-form'

const Test = () => {
    const { register, handleSubmit, setValue } = useForm({
      
    });
    
    const onSubmit = (data) => {
        console.log(data.firstName);
        console.log(data.gender);

    }
    return (
        <>
            <div>
                <h1 className='text-center mt-5'>Test Ground</h1>
            </div>

            <>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        defaultValue={"Carl"}
                        {...register("firstName", { required: true, maxLength: 20 })}
                    />
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <input type="submit" />
                </form>
            </>
        </>
    )
}

export default Test