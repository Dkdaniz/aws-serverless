// declare imports
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class AssetStorage extends cdk.Construct {
    // Declare the Bucket Instance Publicly
    public readonly uploadBucket: s3.IBucket;

    public readonly hostingBucket: s3.IBucket;

    public readonly assetByucket: s3.IBucket;

    // Crate Contructor Scope and name of father Id
    constructor (scope: cdk.Construct, id: string) {
        super(scope, id);

        // Create a new Instance of S3 Bucket and define an name for it.
        this.uploadBucket = new s3.Bucket(this, 'UploadBucket', {
            encryption: s3.BucketEncryption.S3_MANAGED
        })

        this.assetByucket = new s3.Bucket(this, 'AssetBucket', {
            encryption: s3.BucketEncryption.S3_MANAGED
        })

        this.hostingBucket = new s3.Bucket(this, 'WebHostingBucket', {
            encryption: s3.BucketEncryption.S3_MANAGED
        })
    }
}
