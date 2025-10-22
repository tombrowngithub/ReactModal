import "./global.css"
import {Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import MyModal from "../components/MyModal";
import icon from "../assets/images/icon.png"  //we are using the default expo Icon

export default function Index() {
    const [showModal, setShowModal] = useState(false)
    // Now let use the modal in our home
    // now lets test it out
    // save and restart your server if you may
    //I think we missed something in the Modal component

    //We can also tweak the animation timing and scale as we see fit

    //Now we can reuse this Modal in our entire app by just passing the approprate props to it on each call.

    //THanks for watching.

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <TouchableOpacity
                onPress={() => setShowModal(true)}
                className="p-3 bg-blue-600 rounded">
                <Text className="text-white">SHOW MODAL</Text>
            </TouchableOpacity>


            <MyModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                icon={icon}
                title="Thanks for visiting"
                body="Please don't forget to subscribe to my channel for more videos like this. Once again, thanks for visisting"

            />
        </View>
    );
}
