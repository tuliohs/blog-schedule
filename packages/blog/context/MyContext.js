import React, { createContext } from 'react'

export var MyContext = createContext({
    siteInfo: {},
    profile: {
        isCreator: false,
        name: "",
        id: "",
        fetched: false,
        email: "",
    },
    authProp: {},
    navigation: {}

})
export default MyContext

export const MyProvider = (children) => {
    return <MyContext.Provider value={children} />
}