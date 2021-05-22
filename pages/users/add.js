import Head from 'next/head'
import { useState } from 'react'


export default function add() {

    const [ successfully, setSuccessfully ] = useState()

    const addUser = event => {
        event.preventDefault()
        fetch(
            'https://nextjs-server-side.vercel.app/api/users/add',
            { method: 'POST', body: JSON.stringify({ name: 'nombre', lastName: 'sd', email: 's@gmail.com' }) })
            .then(r => r.json())
            .then(r => setSuccessfully(r.status))
    }

    return (
        <div>
            <Head>
                <title>Add User</title>
            </Head>
            {
                successfully && <h3>User added successufully</h3>
            }
            
            <form onSubmit={addUser}>
                <div>
                    <label htmlFor='name'>
                        Name: 
                    </label>
                    <input id='name' placeholder='name' />
                </div>
                <div>
                    <label htmlFor='lastName'>
                     Last Name: 
                    </label>
                    <input id='lastName' placeholder='Last Name' />
                </div>
                <div>
                    <label htmlFor='email'>
                        Email: 
                    </label>
                    <input id='email' placeholder='Email' />
                </div>

                <input type='submit' />
            </form>
        </div>
    )
}
