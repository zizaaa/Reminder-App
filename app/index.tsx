
import Header from '@/components/Header';
import React, { useState } from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SearchModal from '@/components/SearchModal';

const index = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const sampleNotes = [
        {
            id:1,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:2,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:3,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:4,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:5,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:6,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:7,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:8,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:9,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
        {
            id:10,
            title: 'Hello world',
            description: 'Description',
            time: 'December 19, 2002'
        },
    ];
    return (
        <View style={styles.container}>
            <Header 
                setShowModal = {setShowModal}
            />

            <FlatList
                data={sampleNotes}
                renderItem={({item}) => (
                    <Pressable
                        onLongPress={()=>{console.log('heyy')}}
                    >
                        <View style={styles.notesContainer}>
                            <Text style={styles.notesTitle}>Hello world</Text>
                            <Text style={styles.notesDescription}>Description</Text>
                            <Text style={styles.noteTime}>December 19, 2002</Text>
                        </View>
                    </Pressable>
                )}
                keyExtractor={item => item.id.toLocaleString()}
            />

            <TouchableOpacity style={styles.addButton}>
                <View>
                    <FontAwesome5 name="pencil-alt" size={20} color="black" />
                </View>
            </TouchableOpacity>

            {/* modal */}
            {showModal &&  <SearchModal showModal={showModal} setShowModal={setShowModal}/>}

            <StatusBar backgroundColor="black" barStyle="light-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#181818',
        flex:1,
        position:'relative'
    },
    notesContainer:{
        // #323132
        backgroundColor: '#303030',
        padding: 10,
        marginHorizontal:14,
        borderRadius: 4,
        marginBottom:6,
    },
    notesTitle:{
        color:'#fff',
        fontSize: 20,
    },
    notesDescription:{
        color:'#a8a7a7',
        fontSize: 13,
    },
    noteTime:{
        color:'#a8a7a7',
        fontSize: 12,
        marginTop: 6
    },
    addButton:{
        backgroundColor:'#fff',
        position:'absolute',
        right: 14,
        bottom: 20,
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }
});
export default index;
