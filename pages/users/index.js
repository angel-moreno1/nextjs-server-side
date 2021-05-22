import Head from 'next/head'

export default function users({ users }) {
    return (
        <div>
            <Head>
                <title>All Users</title>
            </Head>
            {users.map(user => {
                return <h5 key={user.name}>{user.name} {user.lastName}</h5>
            })}
        </div>
    )
}


export async function getServerSideProps(ctx) {
    const response = await fetch('https://nextjs-server-side.vercel.app/api/users')
    const data = await response.json()
  
    return {
      props: {
        users: data
      }
    }
  }