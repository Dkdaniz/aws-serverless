import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deploy from '@aws-cdk/aws-s3-deployment';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import { execSync } from 'child_process';
import * as path from 'path'

interface WebAppProps {
    hostingBucket: s3.IBucket
}

export class WebApp extends cdk.Construct {
    public readonly webDistribuition: cloudfront.CloudFrontWebDistribution;

    constructor(scope: cdk.Construct, id: string, props: WebAppProps) {
        super(scope, id)

        const oai = new cloudfront.OriginAccessIdentity(this, 'WebHostingOAI', {});

        this.webDistribuition = new cloudfront.CloudFrontWebDistribution(this, 'AppHostingDistribuition', cloudfrontProps);

        props.hostingBucket.grantRead(oai);
    }
}
