import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image, TextInput, Touchable, TouchableOpacity,Button } from 'react-native';
import styles from './style';
export default function App() {
  const [count,setCount]=useState(0);

  const onMinus = () => setCount(prevCount => prevCount - 1);
  const onPus = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.background_frag_above}>
        <View>
          <Image source={require('./book.png')} style={styles.image} />
        </View>
        <View>
          <Text style={styles.txtBookName}>Nguyên hàm và tích phân</Text>
        </View>
        <View>
          <Text style={styles.txtCungCap}>Cung cấp bởi Tiki Trading</Text>
        </View>
        <View>
          <Text style={styles.txtPrice}>141.800 đ</Text>
        </View>
        <View>
          <Text style={styles.txtDiscount}>141.000đ</Text>
        </View>
        <View style={styles.inputContain}>
          <TextInput placeholder='Mã giảm giá' style={styles.inputDisountCode}/>
        </View>
        <View style={styles.btnContain}>
          <View>
            <TouchableOpacity style={styles.btnMinus} onPress={onMinus}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.textAmount}>{count}</Text>
            <TouchableOpacity style={styles.btnPlus} onPress={onPus}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.txtMuaSau}>Mua Sau</Text>
          </View>
        </View>
        <View>
          <Text style={styles.txtMaGiamGia}>Mã giảm giá đã lưu</Text>
          <Text style={styles.txtXemTaiDay}>Xem tại đây</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.btnApDung}>
            <Text>Áp Dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.background_NhapTaiDay}>
        <View>
          <Text style={styles.txtPhieuQuaTang}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        </View>
        <View>
          <Text style={styles.txtNhapTaiDay}>Nhập tại đây</Text>
        </View>
      </View>
      <View style={styles.background_TamTinh}>
        <Text style={styles.txtTamTinh}>Tạm tính</Text>
        <Text style={styles.txtGiaTamTinh}>141.800 đ</Text>
      </View>
      <View style={styles.background_ThanhTien}>
        <View>
          <Text style={styles.txtThanhTien}>Thành tiền</Text>
        </View>
        <View>
          <Text style={styles.txtGiaTien}>141.800 đ</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btnDatHang}>
            <Text>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
