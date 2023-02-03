import React, { useState } from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native';

const colors = [
'magenta','blue','teal','green','indigo','brown','olive','gray','red','orange','purple','black'
];

const App = () => {   // practice color recognition and memory skills.

    const [selectedColor, setSelectedColor] = useState('');
   
    const handlePress = color => {
        setSelectedColor(color)
    }

    const handleReset = () => {
        setSelectedColor('')
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Memory Color Game</Text>
            <View style = {styles.scoreContainer}>
                <Text style = {styles.score}>Selected Color: {selectedColor}</Text>
                <Button onPress = {handleReset} title = 'Reset'/>
            </View>
            <View style = {styles.buttonsContainer}>
                {colors.map(color =>(
                    <TouchableOpacity
                        key={color}
                        onPress = {() =>handlePress(color)}
                        style = {[styles.button, {backgroundColor: color}]}
                    >
                        <Text style = {styles.lettering}> Guess My Color</Text>
                     </TouchableOpacity>
                ))}
           </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        marginBottom: 20
    },
    scoreContainer: {
        marginBottom: 20
    }, 
    score:{
        fontSize: 20,
    }, 
    buttonsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 20
    },

    lettering:{
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginLeft: 10,
        marginTop: 40
    }
})

export default App;
