import 'dotenv/config';

export default {
    expo: {
        name: "tech-wizard-front",
        slug: "tech-wizard-front",
        version: "1.0.0",
        plugins: [
            [
                "expo-location",
                {
                    locationAlwaysAndWhenInUsePermission: "Allow $(PRODUCT_NAME) to use your location."
                }
            ]
        ],
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        assetBundlePatterns: [
            "**/*"
        ],
        ios: {
            supportsTablet: true,
            config: {
                googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
            },
            bundleIdentifier: "com.anonymous.tech-wizard-front",
            infoPlist: {
                UIBackgroundModes: [
                    "location",
                    "fetch"
                ],
                NSLocationWhenInUseUsageDescription: "text",
                NSLocationAlwaysAndWhenInUseUsageDescription: "text",
                NSLocationAlwaysUsageDescription: "text",
                NSAppTransportSecurity: {
                    NSAllowsArbitraryLoads: true,
                },
            }
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            config: {
                googleMaps: {
                    apiKey: process.env.GOOGLE_MAPS_API_KEY
                }
            },
            permissions: [
                "ACCESS_BACKGROUND_LOCATION",
                "android.permission.ACCESS_COARSE_LOCATION",
                "android.permission.ACCESS_FINE_LOCATION",
                "android.permission.FOREGROUND_SERVICE",
                "android.permission.INTERNET"
            ],
            package: "com.anonymous.techwizardfront"
        },
        web: {
            favicon: "./assets/favicon.png"
        }
    }
};
