import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

interface SearchModalProps{
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchModal: React.FC<SearchModalProps> = ({ showModal, setShowModal }) => {
    const [search, setSearch] = useState<string>('');

    if(!showModal)  return null;
    
    return (
        <View style={styles.modalContainer}>
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    onPress={()=>setShowModal(false)}
                >
                    <Entypo name="chevron-left" size={24} color="#a8a7a7" />
                </TouchableOpacity>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Search reminder'
                    placeholderTextColor={'#a8a7a7'}
                    selectionColor={'#a8a7a7'}
                    value={search}
                    onChange={(e)=>{setSearch(e.nativeEvent.text)}}
                    autoFocus
                />
                {
                    search.length > 0 && (
                        <TouchableOpacity
                            onPress={()=> setSearch('')}
                        >
                            <Entypo name="cross" size={24} color="#a8a7a7" />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    inputContainer:{
        backgroundColor: '#303030',
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal:5,
        borderRadius: 50,
        paddingHorizontal:5,
        height:40
    },
    inputStyle:{
        color: '#fff',
        flex:1,
        height:40
    }
})

export default SearchModal;
