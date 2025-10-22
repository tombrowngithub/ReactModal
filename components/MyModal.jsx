import useModalAnimation from "../hooks/useModalAnimation";
import {Modal, TouchableOpacity, View, Image, Animated, Text} from "react-native"; // We forgot to import the Text
import {BlurView} from "expo-blur";
import {MaterialIcons} from "@expo/vector-icons";


const MyModal = ({isVisible, onClose, icon, title, body}) => {
    const {showModal, scaleAnim, opacityAnim} = useModalAnimation(isVisible)


    if (!showModal) return null;


    return (
        <Modal
            transparent={true}
            visible={showModal}
            animationType="none" //we have our own animation
            onRequestClose={onClose}
        >

            <BlurView
                intensity={50}
                tint="dark"
                className="flex-1 justify-center items-center"

            >

                <Animated.View
                    style={{
                        opacity: opacityAnim,
                        transform: [{scale: scaleAnim}],
                    }}
                    className="bg-white w-10/12 rounded-lg shadow-lg relative"
                >

                    {/*Close button*/}
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute -top-3 -right-3 z-50 w-9  h-9 bg-white items-center justify-center rounded-full"
                        style={{
                            elevation: 30
                        }}
                    >
                        <MaterialIcons name="close" size={22} color="#000"/>

                    </TouchableOpacity>


                    {/*Icon*/}
                    <View className="items-center justify-center w-full p-3">
                        <Image
                            resizeMode="contain"
                            className="w-14 h-14 rounded-full"
                            source={icon}/>

                    </View>


                    {/*Title*/}
                    <View className="w-full p-2">
                        <Text className="text-2xl text-center text-black font-semibold">{title}</Text>
                    </View>

                    {/*Body*/}
                    <View className="w-full p-2">
                        <Text className="text-base text-center p-2 text-gray-700">{body}</Text>

                    </View>

                </Animated.View>

            </BlurView>


        </Modal>
    )
}

export default MyModal
