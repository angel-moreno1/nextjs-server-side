import users from '../../../userData'

export default (_req, res) => {
    res.status(200).json(users)
}   