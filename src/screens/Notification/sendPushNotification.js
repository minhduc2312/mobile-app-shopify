

export async function sendPushNotification(expoPushToken, config = { title: "Title Notification", body: "Content Notification !!!!" }) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        ...config
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}