'use strict';

exports.handler = async (event) => {
    console.log('Event: ', JSON.stringify(event, null, 2));
    let request = event.Records[0].cf.request;

    // You can also use DynamoDB or S3 to store the redirect map
    // For demo purposes, we simply hardcode it here

    // Example rewrite from
    // https://us.123rf.com/450wm/lenanet/lenanet1708/lenanet170800008/83699536-beautiful-close-up-shot-of-lavender-flowers-at-the-field.jpg?ver=6
    // to /450wm/lenanet/lenanet1708/lenanet170800008.jpg

    const rewrite = request.uri.slice(0, request.uri.lastIndexOf('/')).concat(".png");
    console.log(rewrite)
    
    request.uri  = rewrite;
    return request;
};
