import json
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("VisitorCounter")

def lambda_handler(event, context):

    response = table.get_item(
        Key={
            "id": "visitorCount"
        }
    )

    count = int(response["Item"]["count"])

    count += 1

    table.update_item(
        Key={
            "id": "visitorCount"
        },
        UpdateExpression="SET #c = :value",
        ExpressionAttributeNames={
            "#c": "count"
        },
        ExpressionAttributeValues={
            ":value": count
        }
    )

    return {
    "statusCode": 200,
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET"
    },
    "body": json.dumps({
        "visitorCount": count
    })
}