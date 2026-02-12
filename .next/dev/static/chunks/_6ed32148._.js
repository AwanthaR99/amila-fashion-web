(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/sanity/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-08';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "f9l34m8j"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/product.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "product",
    ()=>product
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Product Title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'price',
            title: 'Price (LKR)',
            type: 'number'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Main Category',
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'occasion',
            title: 'Occasion',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Casual Wear',
                        value: 'casual'
                    },
                    {
                        title: 'Office Wear',
                        value: 'office'
                    },
                    {
                        title: 'Inner Wear',
                        value: 'inner'
                    },
                    {
                        title: 'Party / Formal',
                        value: 'party'
                    }
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'subCategory',
            title: 'Sub Category',
            type: 'string',
            options: {
                list: [
                    // Men & Women Tops
                    {
                        title: 'T-Shirt',
                        value: 't-shirt'
                    },
                    {
                        title: 'Shirt',
                        value: 'shirt'
                    },
                    {
                        title: 'Top/Blouse',
                        value: 'top'
                    },
                    // Bottoms
                    {
                        title: 'Trouser',
                        value: 'trouser'
                    },
                    {
                        title: 'Denim/Jeans',
                        value: 'jeans'
                    },
                    {
                        title: 'Shorts',
                        value: 'shorts'
                    },
                    {
                        title: 'Leggings',
                        value: 'leggings'
                    },
                    {
                        title: 'Skirt',
                        value: 'skirt'
                    },
                    // Traditional & Dresses
                    {
                        title: 'Sarong',
                        value: 'sarong'
                    },
                    {
                        title: 'Saree',
                        value: 'saree'
                    },
                    {
                        title: 'Kurti',
                        value: 'kurti'
                    },
                    {
                        title: 'Frock/Dress',
                        value: 'frock'
                    },
                    // Kids
                    {
                        title: 'Kids Set',
                        value: 'kids-set'
                    },
                    // Innerwear
                    {
                        title: 'Innerwear',
                        value: 'innerwear'
                    },
                    // Accessories
                    {
                        title: 'Cap/Hat',
                        value: 'cap'
                    },
                    {
                        title: 'Belt',
                        value: 'belt'
                    },
                    {
                        title: 'Wallet',
                        value: 'wallet'
                    },
                    {
                        title: 'Handbag',
                        value: 'handbag'
                    },
                    {
                        title: 'Watch',
                        value: 'watch'
                    },
                    {
                        title: 'Sunglasses',
                        value: 'sunglasses'
                    },
                    {
                        title: 'Perfume',
                        value: 'perfume'
                    },
                    {
                        title: 'Cream/Lotion',
                        value: 'cream'
                    },
                    {
                        title: 'Hair Oil',
                        value: 'hair-oil'
                    }
                ]
            }
        }),
        // REAL STOCK MANAGEMENT (Color + Size + Qty) 
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'stock',
            title: 'Product Variants (Stock)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Variant',
                    fields: [
                        // 1. Color
                        {
                            name: 'color',
                            title: 'Color',
                            type: 'string',
                            options: {
                                list: [
                                    {
                                        title: 'Black',
                                        value: 'Black'
                                    },
                                    {
                                        title: 'White',
                                        value: 'White'
                                    },
                                    {
                                        title: 'Red',
                                        value: 'Red'
                                    },
                                    {
                                        title: 'Blue',
                                        value: 'Blue'
                                    },
                                    {
                                        title: 'Green',
                                        value: 'Green'
                                    },
                                    {
                                        title: 'Yellow',
                                        value: 'Yellow'
                                    },
                                    {
                                        title: 'Pink',
                                        value: 'Pink'
                                    },
                                    {
                                        title: 'Purple',
                                        value: 'Purple'
                                    },
                                    {
                                        title: 'Grey',
                                        value: 'Grey'
                                    },
                                    {
                                        title: 'Brown',
                                        value: 'Brown'
                                    },
                                    {
                                        title: 'Orange',
                                        value: 'Orange'
                                    },
                                    {
                                        title: 'Navy',
                                        value: 'Navy'
                                    },
                                    {
                                        title: 'Maroon',
                                        value: 'Maroon'
                                    },
                                    {
                                        title: 'Gold',
                                        value: 'Gold'
                                    },
                                    {
                                        title: 'Silver',
                                        value: 'Silver'
                                    },
                                    {
                                        title: 'Beige',
                                        value: 'Beige'
                                    },
                                    {
                                        title: 'Olive Green',
                                        value: 'Olive Green'
                                    }
                                ]
                            }
                        },
                        // Size
                        {
                            name: 'size',
                            title: 'Size',
                            type: 'string',
                            options: {
                                list: [
                                    {
                                        title: 'XS',
                                        value: 'XS'
                                    },
                                    {
                                        title: 'S',
                                        value: 'S'
                                    },
                                    {
                                        title: 'M',
                                        value: 'M'
                                    },
                                    {
                                        title: 'L',
                                        value: 'L'
                                    },
                                    {
                                        title: 'XL',
                                        value: 'XL'
                                    },
                                    {
                                        title: 'XXL',
                                        value: 'XXL'
                                    },
                                    {
                                        title: 'Free Size',
                                        value: 'Free Size'
                                    }
                                ]
                            }
                        },
                        //  Quantity
                        {
                            name: 'quantity',
                            title: 'Quantity Available',
                            type: 'number',
                            validation: (Rule)=>Rule.min(0)
                        }
                    ],
                    preview: {
                        select: {
                            color: 'color',
                            size: 'size',
                            qty: 'quantity'
                        },
                        prepare ({ color, size, qty }) {
                            return {
                                title: `${color} - ${size}`,
                                subtitle: `Stock: ${qty ?? 0}`
                            };
                        }
                    }
                }
            ]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/product.ts [app-client] (ecmascript)");
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["product"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/structure.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "structure",
    ()=>structure
]);
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.js [app-client] (ecmascript)");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/structure.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6ed32148._.js.map