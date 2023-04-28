import React, {useState} from "react"
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton"
import {restoreState} from "../hw06/localStorage/localStorage"
import s from "./Clock.module.css"


function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        let idTimer: number = window.setInterval(() => {
            setDate(new Date(Date.now()))
        }, 1000)
        setTimerId(idTimer)
    }
    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }

    const zero = (num: number) => num < 10 ? "0" + num : num

    const stringTime = `${zero(date.getHours())}:${zero(date.getMinutes())}:${zero(date.getSeconds())}` ||
        <br/>
    const stringDate = `${zero(date.getDate())}.${zero(date.getMonth() + 1)}.${date.getFullYear()}` || <br/> ||
        <br/>


    const stringDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] || <br/>
    const stringMonth =
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ||
        <br/>

    return (
        <div className={s.clock}>
            <div
                id={"hw9-watch"}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={"hw9-day"}>{stringDay[date.getDay()]}</span>,
                {" "}
                <span id={"hw9-time"}><strong>{stringTime}</strong></span>
            </div>
            <div id={"hw9-more"}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={"hw9-month"}>{stringMonth[date.getMonth()]}</span>,{" "}
                            <span id={"hw9-date"}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={"hw9-button-start"}
                    disabled={!!timerId}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={"hw9-button-stop"}
                    disabled={!timerId}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock