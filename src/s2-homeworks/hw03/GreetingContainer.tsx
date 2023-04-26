import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (value: string) => void, addUserCallback: (name: string) => void) => {
    if (!name.trim()) {
        setError("Ошибка! Введите имя!")
    } else {
        addUserCallback(name)
        setName("")
    }

}

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
    if (!name.trim()) {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
    if (e.key === "Enter") {
        addUser()
    }
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {

    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError("")
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    let lastUserName = users.length ? users[users.length - 1].name : ""

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
