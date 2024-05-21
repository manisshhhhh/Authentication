// @desc auth user / set token
// POST '/api/users/auth'
// access public
const authUser = (req, res) => {
    res.status(200).json({ msg: 'auth user' });
}

export { authUser };