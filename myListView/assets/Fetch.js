import { View, Text, Flatlist, StyleSheet, Pressable} from 'react-native';
import React,{useState, useEffect} from 'react';
import { firebase } from '../config';

const Fetch = () => {
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('miniStore');

                useEffect(async ()=>{
                    todoRef
                    .onSnapshot(
                        querySnapshot =>{
                            const users = []
                            querySnapshot.forEach((doc)=>{
                                const{ prodName,productDesc}=doc.data()
                                users.push({
                                    id: doc.id,
                                    productName,
                                    productDesc,
                                })
                            
                            })  
                            setUsers(users)
                        }
                    )
                }, [])

                return(
                    <View style={{ flex:1, marginTop:100}}>
                        <Flatlist
                            style={{height: '100%'}}
                            data= {users}
                            numColumns = {1}
                            renderItem = {({item}) => (
                                <Pressable style={style.container}>
                                    <View style={style.innerContainer}>
                                        <Text style={style.prodName}>{item.productName}</Text>
                                        <Text style={style.prodDesc}>{item.productDesc}</Text>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>
                )
}


export default Fetch

const style = StyleSheet.create({
    container:{
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,

    },
    innerContainer : { 
        alignItems: 'center',
        flexDirection: 'column',

    },
    prodName : {
        fontWeight: 'bold',
    },
    prodDesc : { 
        fontWeight: '300',
    }
           
})