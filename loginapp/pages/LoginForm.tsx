import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import Button from './Button'
import {
    Container,
    Form,
    FormTitle,
    InfoText,
    InfoTextContainer,
    Link
} from './FormElements'
import InputFeild from './InputFeild'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <FormTitle> Login </FormTitle>

                <InputFeild
                    placeholder='Email'
                    type='email'
                    icon={<AiOutlineMail />}
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <InputFeild
                    placeholder='Password'
                    type='password'
                    icon={<AiOutlineUnlock />}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <Button
                    type='submit'
                    title='Login'
                />

                <InfoTextContainer>
                    <InfoText>
                        New User?
                    </InfoText>

                    <Link href='/signup'>
                        Register Now
                    </Link>
                </InfoTextContainer>
            </Form>
        </Container>
    )
}

export default LoginForm