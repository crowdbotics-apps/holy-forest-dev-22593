import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("10730_187"))
        }
      >
        <View style={styles.View_10730_204}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7313/acf3/30e234af5bdf1a36a8cc97968f6a8c30"
            }}
            style={styles.ImageBackground_10730_205}
          />
          <View style={styles.View_10730_206}>
            <Text style={styles.Text_10730_206}>Activity Name</Text>
          </View>
          <View style={styles.View_10730_207}>
            <View style={styles.View_10730_208}>
              <Text style={styles.Text_10730_208}>$</Text>
            </View>
            <View style={styles.View_10730_209}>
              <Text style={styles.Text_10730_209}>Price </Text>
            </View>
          </View>
          <View style={styles.View_10730_210} />
          <View style={styles.View_10730_211}>
            <Text style={styles.Text_10730_211}>2 hrs</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/522e/efa8/e3b5c35492ac72cdad2ca5ee404ca99b"
            }}
            style={styles.ImageBackground_10730_212}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_10730_213}>
        <View style={styles.View_10730_214}>
          <Text style={styles.Text_10730_214}>TOP ADVENTURES</Text>
        </View>
        <View style={styles.View_10730_215}>
          <Text style={styles.Text_10730_215}>
            The most popular excursions.
          </Text>
        </View>
        <View style={styles.View_10730_216}>
          <Text style={styles.Text_10730_216}>Pick your adventure.</Text>
        </View>
        <View style={styles.View_10730_217} />
        <View style={styles.View_10730_218}>
          <Text style={styles.Text_10730_218}>BALI</Text>
        </View>
        <View style={styles.View_10730_219}>
          <Text style={styles.Text_10730_219}>INDONESIA</Text>
        </View>
      </View>
      <View style={styles.View_10730_220}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10730_225"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b0/e24c/b1c1f526d7bf15054658ae9fde3c07fa"
            }}
            style={styles.ImageBackground_10730_221}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_10730_204: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.66120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10730_205: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("29.6448087431694%"),
    minHeight: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("-0.2732240437158495%")
  },
  View_10730_206: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("12.158469945355193%")
  },
  Text_10730_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_207: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("23.49726775956284%")
  },
  View_10730_208: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10730_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09,
    textTransform: "none"
  },
  View_10730_209: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999975%"),
    top: hp("0%")
  },
  Text_10730_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09,
    textTransform: "none"
  },
  View_10730_210: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("1.9125683060109324%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_10730_211: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("3.0054644808743234%")
  },
  Text_10730_211: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.08,
    textTransform: "none"
  },
  ImageBackground_10730_212: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("3.415300546448094%")
  },
  View_10730_213: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("38.3879781420765%"),
    minHeight: hp("38.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10730_214: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("25.546448087431695%")
  },
  Text_10730_214: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_215: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("33.60655737704918%")
  },
  Text_10730_215: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09,
    textTransform: "none"
  },
  View_10730_216: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("19.262295081967213%")
  },
  Text_10730_216: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09,
    textTransform: "none"
  },
  View_10730_217: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.30601092896175%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 235, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_10730_218: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("12.158469945355192%")
  },
  Text_10730_218: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_219: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("12.158469945355192%")
  },
  Text_10730_219: {
    color: "rgba(173, 160, 7, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_220: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10730_221: {
    width: wp("14.933333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
