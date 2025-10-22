import {useEffect, useState, useRef} from 'react'
import {Animated, Easing} from "react-native";

export default function useModalAnimation(isVisible) {
    const [showModal, setShowModal]= useState(isVisible)

    const scaleAnim = useRef(new Animated.Value(0.6)).current
    const opacityAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (isVisible) {
            setShowModal(true);
            Animated.parallel([
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.out(Easing.ease)
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                    easing: Easing.out(Easing.ease),
                }),
            ]).start();
        }else{
            Animated.parallel([
                Animated.timing(scaleAnim, {
                    toValue: 0.8,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.in(Easing.ease),
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.in(Easing.ease),
                }),
            ]).start(()=>{
                setShowModal(false);
                scaleAnim.setValue(0.6);
                opacityAnim.setValue(0);
            })
        }



    },[isVisible]);

    return {showModal, scaleAnim, opacityAnim};

}
