import { Image, StyleSheet, View, Text } from "react-native"
import { CustomFonts } from "../../../shared/fonts"
import { done } from "../../../../img/img";

type CardProps= {
    fullname?: string,
    birthday?: string,
    gender?: string,
    department?: string
}

export default function CardInfo({fullname, birthday, gender, department}: CardProps){
    const loaded = CustomFonts();
    if (!loaded) return null;
    return (
        <View style={[styles.outerBorder, styles.shadowBox]}>
            <View style={styles.innerBorder}>
                <Image source={done} style={styles.img}/>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.title}>Full Name: </Text>
                    <Text style={styles.title}>Birthday: </Text>
                    <Text style={styles.title}>Gender: </Text>
                    <Text style={styles.title}>Department: </Text>
                </View>
                <View style={{alignItems: 'flex-start', left: 30}}>
                    <Text style={styles.text}>{fullname}</Text>
                    <Text style={styles.text}>{birthday}</Text>
                    <Text style={styles.text}>{gender}</Text>
                    <Text style={styles.text}>{department}</Text>
                </View>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    outerBorder: {
        backgroundColor: '#FFC900',
        width: '90%',   
        borderColor: 'white', 
        borderWidth: 5,
        borderRadius: 15,
        marginVertical: 40,
    },
    innerBorder: {
        alignContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#711F1F', 
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
    },
    shadowBox: {
        shadowColor: '#550A0A',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 6,
            width: -7
        },
        elevation: 5
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'NunitoBold',
        fontSize: 16,
        lineHeight: 24, 
        color: '#880B0B',
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 16,
        lineHeight: 24, 
        color: '#880B0B',
    }
})