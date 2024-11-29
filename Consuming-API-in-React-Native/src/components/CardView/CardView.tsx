import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { styles } from "./CardViewStyles";
import Logo from "../../../assets/logo.png";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { Divider } from "../Divider/Divider";
import { BuyButton } from "../BuyButton/BuyButton";
import { CarModel } from "./CardViewProps";
import { handleNextItem, handlePreviousItem, loadCarData } from "./CardViewActions";

export function CardView() {
    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);
        })();
    }, [loadCarData]);

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}

            <Divider />
            {renderCardDetails(carData)}
            {renderCarImage(carData)}
            <Divider />

            <BuyButton />
            {renderPriceControls(carData, setCarData)}
        </View>
    );
}

const renderLogoBox = () => (
    <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.imageLogo} />
    </View>
);

const renderCardDetails = (carData: CarModel | null) => (
    <View style={{ alignItems: "center" }}>
        <Text style={styles.carBrand}>Lamborghine</Text>
        <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
);

const renderCarImage = (carData: CarModel | null) => (
    <Image style={styles.image} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }} />
);

const renderPriceControls = (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>,
) => (
    <View style={styles.priceLabelContainer}>
        <Button title="<" color={"#01A6B3"} onPress={() => handlePreviousItem(carData, setCarData)} />
        <Text style={styles.priceLabel}> {carData?.price}</Text>
        <Button title=">" color={"#01A6B3"} onPress={() => handleNextItem(carData, setCarData)} />
    </View>
);
