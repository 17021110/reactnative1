import { StyleSheet } from "react-native";





const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        paddingTop: 4,
        marginLeft: 20,
        borderRadius: 5,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    imgCategory: {
        backgroundColor: 'blue',
        padding: 12, alignItems: 'center',
        borderRadius: 5
    },
    DivCategory: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        paddingLeft: 16,
        padding: 8
    },
    Headder: {
        backgroundColor: '#FFFFFF',
        paddingTop: 32,
        borderBottomWidth: 0.5,
        padding: 16,

    },
    Header: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    DivCard: {
        borderRadius: 5,
        width: 132,
        height: 132,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: 'white',
        marginLeft: 8
    },
    Imgcard: {
        height: '45%',
        width: '100%',
        resizeMode: 'stretch',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    DivFilter: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        paddingLeft: 16,


    },
    Filter: {
        flexDirection: 'row',
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#CDD7E7',
        marginHorizontal: 16,
        height: 50

    },
    Pflastlist: {
        paddingLeft: 8, padding: 8, lineHeight: 20
    },
    Pdetailsnoitification: {
        paddingLeft: 16, padding: 16, lineHeight: 22, color: '#081233'
    },
    DivOutstanding: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    Outstandding1: {
        borderBottomWidth: 0.5,
        borderColor: '#CDD7E7',
        marginHorizontal: 16,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    Outstanding11: {
        lineHeight: 24, fontWeight: '600', color: '#000C24', padding: 16, paddingLeft: 0,
    },
    Outstanding111: {
        lineHeight: 24, color: '#000C24', padding: 16, paddingLeft: 0, color: '#75818F'
    },
    Outstanding12: {
        height: 172,
        justifyContent: 'space-between',
        marginTop: 0,
        padding: 12,
        paddingLeft: 0
    },
    Poutstanding: {
        paddingLeft: 4, lineHeight: 22
    },
    Poutstanding1: {
        paddingLeft: 4, lineHeight: 22, padding: 8, paddingTop: 0
    },
    card: {
        width: 248,
        backgroundColor: 'white',
        margin: 8,
        padding: 4,
        borderRadius: 4,
    },
    card1: {
        width: 385,
        backgroundColor: 'white',
        margin: 8,
        padding: 4,
        borderRadius: 4,
    },
    cardHeader: {
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 4,
        borderColor: '#CDD7E7'
    },
    cardImage: {
        height: 110,
        width: 240,
        borderRadius: 4
    },
    cardImage11: {
        height: 150,
        width: '100%',
        borderRadius: 4
    },
    cardImage1: {
        height: 140,
        width: 375,
        borderRadius: 4
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,

    },
    cardTitle1: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        height: 50
    },
    cardProp: {
        margin: 4,
        height: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    K: {
        flexDirection: 'row', paddingTop: 12, paddingBottom: 16, borderBottomWidth: 0.5,
        borderColor: '#CDD7E7',
        marginHorizontal: 16,
    },
    box1: {
        position: 'absolute',
        top: 12,
        left: 284,
        width: 100,
        height: 32,
        backgroundColor: 'red',
        borderRadius: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 8

    },
    tittleWrap: {
        height: 48,
        width: '100%',
        backgroundColor: '#F3F6FF',
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tittleText: {


        fontWeight: '600', fontSize: 16,
        lineHeight: 24
    },
    historyItem: {
        height: 32,
        margin: 4,
        backgroundColor: '#F3F6FF',
        lineHeight: 32,
        borderRadius: 50,
        paddingLeft: 8,
        paddingRight: 8,
        alignSelf: 'flex-start'
    },
    historyItemsWrap: {
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 8,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12
    },

})
export default styles;