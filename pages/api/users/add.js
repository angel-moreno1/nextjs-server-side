import users from '../../../userData'

export default (req, res) => {
    if(req.method === 'POST') {
        const { name, lastName, email } = req.body
        console.log(name, lastName, email)
        users.push({ name: name || 'name', lastName: lastName || 'lastName', email: email || 'email' })
        res.status(202).json({ status: true })
    }else {
        res.status(404).json({error: 'Method Not Supported'})
    }
}