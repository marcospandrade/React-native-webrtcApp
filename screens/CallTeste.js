import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import socketIOClient from "socket.io-client";

export default function CallTeste() {
    const socket = socketIOClient("http://localhost", { path: '/' });
    socket.on('start', () => {
        console.log("INiICIO");
    });
    console.log(socket);
    console.log("this.socket");
    // const [socket, setSocket] = useState(null);
    // let newSocket = io("https://192.168.3.22:3000", { path: '/' });

    // useEffect(() => {


    //     // setSocket(newSocket);
    //     // console.log("setsocket")
    //     // console.log(socket)
    //     // return () => newSocket.close();
    // }, [setSocket]);

    // useEffect(() => {
    //     console.log("socket")
    //     console.log(socket)
    // }, [socket]);

    return (
        <View>
            {socket ? (
                <View className="chat-container">
                    <Text> Conectou </Text>

                </View>
            ) : (
                <View>
                    <Text>Not Connected</Text>
                </View>
            )}
        </View>
    );

}