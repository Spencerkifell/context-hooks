import React from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF() {
    return (
        <div>
            {/* A little too verbose to our liking... using .Consumer... */}
            {/* Not very readable either... */}
            <UserContext.Consumer>
                {
                    user => {
                        return (
                        <ChannelContext.Consumer>
                        {
                            channel => {
                                return <div>User Context Value {user}, Channel Context Value {channel}</div>
                            }
                        }
                        </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
