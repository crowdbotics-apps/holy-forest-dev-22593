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
      <View style={styles.View_10730_188}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6de/0cbe/1e52ee2f25a41567daff6559409dce16"
          }}
          style={styles.ImageBackground_10730_189}
        />
        <View style={styles.View_10730_190} />
        <View style={styles.View_10730_191}>
          <Text style={styles.Text_10730_191}>Activity Name</Text>
        </View>
        <View style={styles.View_10730_192}>
          <View style={styles.View_10730_193} />
          <View style={styles.View_10730_194}>
            <Text style={styles.Text_10730_194}>Category</Text>
          </View>
        </View>
        <View style={styles.View_10730_195}>
          <Text style={styles.Text_10730_195}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            turpis est sit vitae, nec pellentesque nibh. Sit ultrices pretium
            amet pellentesque. Erat euismod tellus tincidunt ultricies viverra.
            Est euismod mi ut eros in id neque. Lectus integer pellentesque
            auctor facilisi pulvinar.{" "}
          </Text>
        </View>
        <View style={styles.View_10730_196} />
        <View style={styles.View_10730_197}>
          <Text style={styles.Text_10730_197}>$</Text>
        </View>
        <View style={styles.View_10730_198}>
          <Text style={styles.Text_10730_198}>Price</Text>
        </View>
        <View style={styles.View_10730_199}>
          <Text style={styles.Text_10730_199}>2 hrs</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/906b/73b7/3cea8d8053a9ed76860107f9523df1ad"
          }}
          style={styles.ImageBackground_10730_200}
        />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10730_203"))
          }
        >
          <View style={styles.View_10730_201}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce2/6dbb/65d77554dd625c355ba6750dcaa39a4f"
              }}
              style={styles.ImageBackground_10730_202}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_10730_188: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10730_189: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.595628415300546%"),
    minHeight: hp("52.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10730_190: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("164.89071038251367%"),
    minHeight: hp("164.89071038251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.49180327868852%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_10730_191: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("58.606557377049185%")
  },
  Text_10730_191: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_192: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("50.13661202185792%")
  },
  View_10730_193: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(121, 181, 204, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10730_194: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10730_194: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_195: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("72.81420765027322%")
  },
  Text_10730_195: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_196: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(255, 235, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_10730_197: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("66.39344262295081%")
  },
  Text_10730_197: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_198: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("66.39344262295081%")
  },
  Text_10730_198: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10730_199: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("51.229508196721305%")
  },
  Text_10730_199: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10730_200: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("51.502732240437155%")
  },
  View_10730_201: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("3.1420765027322406%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10730_202: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("2.322404371584699%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
