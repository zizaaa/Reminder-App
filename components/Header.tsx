import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface HeaderProps{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ setShowModal }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Reminder</Text>
            <View>
                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                >
                    <FontAwesome name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        height: 50,
        flexDirection: 'row'
    },
});


export default Header;