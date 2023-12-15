import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as userService from '../../service/userService'

import AuthContext from '../../contexts/authContext';
import Path from '../../path';

export default function Logout(){
    const navigate = useNavigate()
    const { logoutHandler } = useContext(AuthContext)

    useEffect(() => {
        userService.logout()
            .then(()=> {
                logoutHandler()
                navigate(Path.Home)})
            .catch(()=> navigate(Path.Home))
    },[])

    
}