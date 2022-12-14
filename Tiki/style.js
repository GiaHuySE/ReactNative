import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'#bfbfbf',
        flex:1,
        width:'100%',
        height:'100%'
      },
      background_frag_above: {
        paddingTop:30,
        position:'absolute',
        width: 430,
        height: 283,
        left:1,
        top:0,
        backgroundColor:'#FFFFFF',
      },
      image:{
        position:'absolute',
        width: 104,
        height: 127,
        left:13,
        top:14,
      },
      txtBookName:{
        position:'absolute',
        width: 191,
        height: 14,
        left:142,
        top:14,
        fontWeight:'bold',
        fontSize:15,
        lineHeight: 15,
        textAlign:'center'
      },
      txtCungCap:{
        position:'absolute',
        width: 191,
        height: 14,
        left:142,
        top:42,
        fontWeight:'bold',
        fontSize:15,
        lineHeight: 15,
        textAlign:'center'
      },
      txtPrice:{
        position:'absolute',
        width: 84,
        height: 21,
        left:152,
        top:67,
        fontWeight:'bold',
        fontSize:18,
        lineHeight: 21,
        textAlign:'center',
        color:'#EE0D0D'
      },
      txtDiscount:{
        position:'absolute',
        width: 56,
        height: 14,
        left:152,
        top:99,
        fontWeight:'bold',
        fontSize:12,
        lineHeight: 14,
        textAlign:'center',
        color:'#808080',
        textDecorationLine:'line-through',
        textDecorationStyle:'solid',
      },
      inputDisountCode:{
        position:'absolute',
        width: 208,
        height: 45,
        left:13,
        top:200,
        borderColor:'#000000',
        borderWidth:1,
      },
      btnContain:{
        paddingLeft:10,
      },
      btnMinus:{
        position:'absolute',
        width: 14.22,
        height: 16,
        left:142,
        top:124,
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        justifyContent:'center'
      },
      textAmount:{
        position:'absolute',
        width: 9,
        height: 18,
        left:167,
        top:123,
        fontWeight:'bold',
        fontSize:15,
        lineHeight: 18,
        textAlign:'center',
      },
      btnPlus:{
        position:'absolute',
        width: 14.22,
        height: 16,
        left:187,
        top:124,
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        justifyContent:'center'
      },
      txtMuaSau:{
        position:'absolute',
        width: 50,
        height: 14,
        left:293,
        top:125,
        fontWeight:'bold',
        fontSize:12,
        lineHeight: 14,
        textAlign:'center',
        color:'#134FEC'
      },
      txtMaGiamGia:{
        position:'absolute',
        width: 107,
        height: 14,
        left:13,
        top:162,
        fontWeight:'bold',
        fontSize:12,
        lineHeight: 14,
        textAlign:'center',
      },
      txtXemTaiDay:{
        position:'absolute',
        width: 64,
        height: 14,
        left:137,
        top:162,
        fontWeight:'bold',
        fontSize:12,
        lineHeight: 14,
        textAlign:'center',
        color:'#134FEC'
      },
      btnApDung:{
        position:'absolute',
        width: 99,
        height: 45,
        left:245,
        top:200,
        backgroundColor:'#0A5EB7',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
      },
      background_NhapTaiDay:{
        position:'absolute',
        width: 420,
        height: 51,
        left:0,
        top:297,
        backgroundColor:'#FFFFFF'
      },
      txtPhieuQuaTang:{
        position:'absolute',
        width: 227,
        height: 14,
        left:13,
        top:20,
        fontWeight:'bold',
        fontSize:12,
        lineHeight: 14,
        textAlign:'center',
      },
      txtNhapTaiDay:{
        position:'absolute',
        width: 74,
        height: 14,
        left:245,
        top:20,
        fontWeight:'bold',
        fontSize:12,
        lineHeight: 14,
        textAlign:'center',
        color:'#134FEC'
      },
      background_TamTinh:{
        position:'absolute',
        width: 420,
        height: 51,
        left:1,
        top:360,
        backgroundColor:'#FFFFFF'
      },
      txtTamTinh:{
        position:'absolute',
        width: 73,
        height: 21,
        left:13,
        top:15,
        fontWeight:'bold',
        fontSize:18,
        lineHeight: 21,
        textAlign:'center',
      },
      txtGiaTamTinh:{
        position:'absolute',
        width: 84,
        height: 21,
        left:245,
        top:15,
        fontWeight:'bold',
        fontSize:18,
        lineHeight: 21,
        textAlign:'center',
        color:'#EE0D0D'
      },
      background_ThanhTien:{
        position:'absolute',
        width: 420,
        height: 180,
        left:1,
        top:570,
        backgroundColor:'#FFFFFF'
      },
      txtThanhTien:{
        position:'absolute',
        width: 89,
        height: 21,
        left:13,
        top:15,
        fontWeight:'bold',
        fontSize:18,
        lineHeight: 21,
        textAlign:'center',
        color:'#808080'
      },
      txtGiaTien:{
        position:'absolute',
        width: 93,
        height: 23,
        left:245,
        top:15,
        fontWeight:'bold',
        fontSize:20,
        lineHeight: 23,
        textAlign:'center',
        color:'#EE0D0D'
      },
      btnDatHang:{
        position:'absolute',
        width: 331,
        height: 60,
        left:13,
        top:70,
        backgroundColor:'#0A5EB7',
        alignItems:'center',
        justifyContent:'center',
      }
})