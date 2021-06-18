import React from 'react'
import { Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import Phone from "@material-ui/icons/Phone"

export default function ButtonContact() {
    const history = useHistory()

    const contact = () => {
        history.push("/contact")
    }
    return (
        <div>
            <Button variant="warning" onClick={() => contact()}><Phone /> Contact Us</Button>
        </div>
    )
}
