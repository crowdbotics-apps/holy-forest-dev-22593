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
      <View style={styles.View_10730_226}>
        <View style={styles.View_10730_227} />
        <View style={styles.View_10730_228}>
          <Text style={styles.Text_10730_228}>
            AFRICA S. &amp; C. AMERICA N. AMERICA ITINERARY PACKING LIST
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10730_203"))
          }
        >
          <View style={styles.View_10730_229}>
            <Text style={styles.Text_10730_229}>ASIA &amp; PACIFIC</Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9448/8d75/6d1b35c0ce9b979af1f125c5c5628847"
          }}
          style={styles.ImageBackground_10730_230}
        />
        <View style={styles.View_10730_231}>
          <Text style={styles.Text_10730_231}>FEATURED TRIP</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_10730_226: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10730_227: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 235, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_10730_228: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    minHeight: hp("71.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("39.89071038251366%")
  },
  Text_10730_228: {
    color: "rgba(138, 128, 10, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_229: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20.76502732240437%")
  },
  Text_10730_229: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10730_230: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5.327868852459016%")
  },
  View_10730_231: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30.327868852459016%")
  },
  Text_10730_231: {
    color: "rgba(138, 128, 10, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
