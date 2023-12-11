import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';


const Update = () => {

    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const previous_user = users.filter(f => f.id == id);
    const {name, email} = previous_user[0];
    const [updated_name, setUpdatedName] = useState(name)
    const [updated_email, setUpdatedEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: updated_name,
            email: updated_email
        }) )

        navigate('/')
    } 


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input type="text" name='name' className='form-control' value={updated_name} onChange={e => setUpdatedName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type="email" name='email' className='form-control' value={updated_email} onChange= {e => setUpdatedEmail(e.target.value)}/>
            </div><br/>
            <button className='btn btn-info'>Submit</button>
        </form>

    </div>

</div>
  )
}

export default Update