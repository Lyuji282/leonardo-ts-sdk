# Leonardo TS SDK

<div align="center">
   <p>The API for creating stunning game assets with AI.</p>
   <a href="https://github.com/Leonardo-Interactive/leonardo-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/Leonardo-Interactive/leonardo-ts-sdk/speakeasy_sdk_generate.yml?style=for-the-badge" /></a>
   <a href="https://docs.leonardo.ai/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://discord.gg/leonardo-ai"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @leonardo-ai/sdk
```

### Yarn

```bash
yarn add @leonardo-ai/sdk
```
<!-- End SDK Installation -->

## Authentication

To get access to the API and fetch an API key, please sign up for [access](https://leonardo.ai/). 

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Leonardo, withSecurity} from "@leonardo-ai/sdk";
import { DeleteDatasetsIdRequest, DeleteDatasetsIdResponse } from "@leonardo-ai/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: DeleteDatasetsIdRequest = {
  pathParams: {
    id: "unde",
  },
};

sdk.creatingDatasets.deleteDatasetsId(req).then((res: DeleteDatasetsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### creatingDatasets

* `deleteDatasetsId` - Delete a Single Dataset by ID
* `getDatasetsId` - Get a Single Dataset by ID
* `postDatasets` - Create a Dataset
* `postDatasetsDatasetIdUpload` - Upload dataset image
* `postDatasetsDatasetIdUploadGen` - Upload a Single Generated Image to a Dataset

### generatingImages

* `deleteGenerationsId` - Delete a Single Generation
* `getGenerationsUserUserId` - Get generations by user ID
* `getGenerationsId` - Get a Single Generation
* `postGenerations` - Create a Generation of Images

### imageVariations

* `getVariationsId` - Get variation by ID
* `postVariationsUpscale` - Create upscale

### initImages

* `deleteInitImageId` - Delete init image
* `getInitImageId` - Get single init image
* `postInitImage` - Upload init image

### trainingModels

* `deleteModelsId` - Delete a Single Custom Model by ID
* `getModelsId` - Get a Single Custom Model by ID
* `postModels` - Train a Custom Model

### userInformation

* `getMe` - Get user information
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
