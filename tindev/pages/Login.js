import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

import logo from '../src/assets/logo.png';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={logo} />

            <TextInput
                placeholder="Digite seu usuario do GitHub"
                style={} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,

    }
})