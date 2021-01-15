import React from 'react';
import { useForm } from 'react-hook-form';

const FormUsers = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        props.addUser(data)
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <label>Name</label>
            <input type="text" name='name'
                ref={register({ required: { value: true, message: 'Valor requerido' } })}
            />
            <div>
                {errors?.name?.message}
            </div>
            <label>Last Name</label>
            <input type="text" name='lastName'
                ref={register({ required: { value: true, message: 'Valor requerido' } })}
            />
            <div>
                {errors?.lastName?.message}
            </div>
            <label>UserName</label>
            <input type="text" name='userName'
                ref={register({ required: { value: true, message: 'Valor requerido' } })}
            />
            <div>
                {errors?.userName?.message}
            </div>
            <label>E-Mail</label>
            <input type="email" name='email'
                ref={register({ required: { value: true, message: 'Valor requerido' } })}
            />
            <div>
                {errors?.email?.message}
            </div>
            <label>Phone</label>
            <input type="number" name='phone'
                ref={register({ required: { value: true, message: 'Valor requerido' } })}
            />
            <div>
                {errors?.phone?.message}
            </div>
            <label>Age</label>
            <input type="number" name='age'
                ref={register({ required: { value: true, message: 'Valor requerido' } })}
            />
            <div>
                {errors?.age?.message}
            </div>
            <button>Add User</button>
        </form>
    )
}
export default FormUsers