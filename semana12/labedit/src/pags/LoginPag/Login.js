import React from "react"
import {Button, TextField} from "@material-ui/core"
import useForm from "../../hooks/useForm"

export const Login = () => {
    const [form, onChange, clear] = useForm({email:"", password:""})

    const onSubmitForm = () => {

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                />
                <TextField
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Password"}
                />
                <Button>Fazer Login!</Button>
            </form>
        </div>
    )
}


