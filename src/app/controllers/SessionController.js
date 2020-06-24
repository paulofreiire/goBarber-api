import jwt from 'jsonwebtoken';
import User from "../models/User";

class SessionController {
    async store(req, res) {
        const {email, password} = req.body;

        const user = await User.findOne({where: {email}});

        if (!user) {
            return res.status(401).json({error: 'User not found'});
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({error: 'Password does not match'});
        }

        const {id, name} = user;

        return res.json({
            user: {
                id, name, email
            },
            token: jwt.sign({id}, 'b046ac25bc6cc27619d39c2b5c23b0a9', {
                expiresIn: '1d'
            }),
        });
    }
}

export default new SessionController();