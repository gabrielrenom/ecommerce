import GooglePayButton from "@google-pay/button-react";


function CreditCardWidget({ merchantId, merchantName, totalPrice, currencyCode = "GBP", countryCode = "UK" }) {
    console.log("merchantId", merchantId);
    return (

        <div >
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: ["MASTERCARD", "VISA"]
                            },
                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "example",
                                    gatewayMerchantId: "exampleGatewayMerchantId"
                                }
                            }
                        }
                    ],
                    merchantInfo: {
                        merchantId: "01234567890123456789",
                        merchantName: "Demo Merchant"
                    },
                    transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPriceLabel: "Total",
                        totalPrice: "1",
                        currencyCode: "USD",
                        countryCode: "US"
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"]
                }}
                onLoadPaymentData={(paymentRequest) => {
                    console.log("Success", paymentRequest);
                }}
                onPaymentAuthorized={(paymentData) => {
                    console.log("Payment Authorised Success", paymentData);
                    return { transactionState: "SUCCESS" };
                }}
                onPaymentDataChanged={(paymentData) => {
                    console.log("On Payment Data Changed", paymentData);
                    return {};
                }}
                existingPaymentMethodRequired="false"
                buttonColor="black"
                buttonType="Buy"
            />
        </div>);
}

export default CreditCardWidget;
