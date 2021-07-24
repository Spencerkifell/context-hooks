import React, {useContext} from 'react'
// eslint-disable-next-line
import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from '../App'

//Context Hook Example.

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {/* <ComponentF/> */}
            <p>User: {user} - Channel: {channel}</p>
        </div>
    )
}

export default ComponentE
