import { Image, StyleSheet, View } from "react-native";

export default function ScanGlide() {
    return (
        <View style={styles.GlideContainer}>
            <View style={styles.placeholder} />
            <View style={styles.centerContent}>
                <Image source={require('../../../assets/ScanGesture.png')} style={styles.img1}/>
            </View>
            <Image source={require('../../../assets/ArrowLeftGesture.png')} style={styles.img2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    GlideContainer: {
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