/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetVariationByIdRequest extends SpeakeasyBase {
    /**
     * "id" is required
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export class GetVariationById200ApplicationJSONGeneratedImageVariationGeneric extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The status of the current task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: shared.JobStatus;

    /**
     * The type of variation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transformType" })
    transformType?: shared.VariationType;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * Responses for GET /variations/{id}
 */
export class GetVariationById200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: GetVariationById200ApplicationJSONGeneratedImageVariationGeneric,
    })
    @Expose({ name: "generated_image_variation_generic" })
    @Type(() => GetVariationById200ApplicationJSONGeneratedImageVariationGeneric)
    generatedImageVariationGeneric?: GetVariationById200ApplicationJSONGeneratedImageVariationGeneric[];
}

export class GetVariationByIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Responses for GET /variations/{id}
     */
    @SpeakeasyMetadata()
    getVariationById200ApplicationJSONObject?: GetVariationById200ApplicationJSON;
}
