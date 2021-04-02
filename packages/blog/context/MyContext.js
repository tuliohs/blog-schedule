import React, { createContext } from 'react'

export var MyContext = createContext({
    siteInfo: {},
    profile: {}

})
export default MyContext

export const MyProvider = (children) => {
    return <MyContext.Provider value={children} />
}