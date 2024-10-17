import { Image, StyleSheet, View } from "react-native";
import { arrowLeftGesture, scanGesture } from "../../../img/img";

export default function ScanGlide() {
    return (
        <View style={styles.glideContainer}>
            <View style={styles.placeholder} />
            <View style={styles.centerContent}>
                <Image source={scanGesture} style={styles.img1}/>
            </View>
            <Image source={arrowLeftGesture} style={styles.img2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    glideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    placeholder: {
        width: 100,
    },
    centerContent: {
        borderWidth: 10,
        borderColor: '#fff',
        borderRadius: 15
    },
    img1: {
        width: 100,
        height: 150
    },
    img2: {
        width: 70,
        height: 30,
        marginLeft: 30
    }
})