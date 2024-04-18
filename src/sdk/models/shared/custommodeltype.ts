/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The category the most accurately reflects the model.
 */
export enum CustomModelType {
    General = "GENERAL",
    Buildings = "BUILDINGS",
    Characters = "CHARACTERS",
    Environments = "ENVIRONMENTS",
    Fashion = "FASHION",
    Illustrations = "ILLUSTRATIONS",
    GameItems = "GAME_ITEMS",
    GraphicalElements = "GRAPHICAL_ELEMENTS",
    Photography = "PHOTOGRAPHY",
    PixelArt = "PIXEL_ART",
    ProductDesign = "PRODUCT_DESIGN",
    Textures = "TEXTURES",
    UiElements = "UI_ELEMENTS",
    Vector = "VECTOR",
}

/** @internal */
export const CustomModelType$: z.ZodNativeEnum<typeof CustomModelType> =
    z.nativeEnum(CustomModelType);
