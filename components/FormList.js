import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons'; 


const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #ed6068;
    align-items: center;
`
const Form = styled.View`
    width: 350px;
    align-items: center;
    top: 40px;
`
const Box = styled.View`
    width: 100%;
    height: 100px;
    top: 60px;
`
const Email = styled.Text`
    font-size: 18px;
    color: #fff;
    padding-left: 3px;
    padding-top: 10px;
`
const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-bottom-width: 2px;
    border-bottom-color: #fff;
    color: #fff;
`
const Button = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 50px;
`
const Btntext = styled.Text`
    font-size: 19px;
    color: #ed6068;
`
const FooterText = styled.Text`
    font-size: 15px;
    color: #fff;
    text-align: center;
    top: 20px;
`
const FormList = () => {
    return (
        <Container>
            <StatusBar />
            <Form>
                <Entypo style={styles.icon} name="home" size={66} color="white" />
                <Box>
                    <Email>
                        Email
                    </Email>
                    <Input />
                </Box>
                <Box>
                    <Email>
                        Password
                    </Email>
                    <Input secureTextEntry={true} />
                </Box>
                <Box>
                    <Button>
                        <Btntext>
                            Connexion
                        </Btntext>
                    </Button>
                    <FooterText>
                        Vous n'avez pas de compte ? inscrivez-vous
                    </FooterText>
                </Box>
            </Form>
        </Container>
    )
}

export default FormList

const styles = StyleSheet.create({
    icon: {
        top: 20
    }
});
