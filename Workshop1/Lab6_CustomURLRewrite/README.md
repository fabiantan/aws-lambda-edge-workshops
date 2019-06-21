## Lab 6: Rewrite URLs

In this lab, we will use Lambda@Edge to introduce URL rewrites to our web application.


## Steps

[1. URI rewrite](#1-uri-rewrite)  
[1.1 Create/modify the Lambda function](#11-createmodify-the-lambda-function)  
[1.2 Validate the function works in Lambda Console](#12-validate-the-function-works-in-lambda-console)  
[1.3 Deploy to Lambda@Edge](#13-deploy-to-lambdaedge)  
[1.4 URI rewrite now works!](#14-uri-rewrite-now-works)  

### 1. URI rewrite

Let's rewrite the URLs
https://dxi69eqbxp2wf.cloudfront.net/img/pinkflower/83699536-beautiful-close-up-shot-of-lavender-flowers-at-the-field.jpg?ver=6
to the following URL  
https://dxi69eqbxp2wf.cloudfront.net/img/pinkflower.jpg
internally within Lambda@Edge so that it's not even visible in the viewer web browser.

#### 1.1 Create/modify the Lambda function

Use JavaScript code from [ws-lambda-at-edge-rewrite.js](./ws-lambda-at-edge-rewrite.js) as a blueprint. Take a moment to familiarize yourself with the function code and what it does.

<details><summary>Show/hide the screenshot</summary>
  
<kbd>![x](./img/1-01-rewrite-url.png)</kbd>
</details><br/>

Click `Save`.

#### 1.2 Validate the function works in Lambda Console

click `Configure test events` inside the dropdown list of test events next to the `Test` button.

Use JavaScript code from [ws-lambda-at-edge-rewrite-test-event.json](./ws-lambda-at-edge-rewrite-test-event.json) as the event.

<details><summary>Show/hide the screenshot</summary>
  
<kbd>![x](./img/1-02-test-event-1.png)</kbd>
</details><br/>


Click `Test` and validate the function has returned `200` response with a proper HTML for the tree card in the body field.

<details><summary>Show/hide the screenshot</summary>
  
<kbd>![x](./img/2-03-test-invoke-success.png)</kbd>
</details>

#### 1.3 Deploy to Lambda@Edge

Select `Deploy to Lambda@Edge` under `Actions`. Because we are updating a trigger already created in Lab 2, choose `Use existing CloudFront trigger on this function`. Click `Deploy`.

<details><summary>Show/hide the screenshot</summary>
  
<kbd>![x](./img/2-04-deploy-to-lambda-edge.png)</kbd>
</details><br/>

The trigger has been successfully updated.

<details><summary>Show/hide the screenshot</summary>
  
<kbd>![x](./img/2-05-deploy-to-lambda-edge-success.png)</kbd>
</details><br/>

Wait for ~30-60 seconds for the change to propagate and for the Lambda@Edge function to get globally replicated.

#### 1.4 URI rewrite now works!

Now both URLs show exactly the same content.

* https://d123.cloudfront.net/tree
* https://d123.cloudfront.net/card/da8398f4  

<kbd>![x](./img/2-06-pretty-uri.png)</kbd>
