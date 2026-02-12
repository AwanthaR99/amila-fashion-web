module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/sanity/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-08';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "f9l34m8j"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
}),
"[project]/src/sanity/schemaTypes/product.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "product",
    ()=>product
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-ssr] (ecmascript)");
;
const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Product Title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'price',
            title: 'Price (LKR)',
            type: 'number'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Main Category',
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
}),
"[project]/src/sanity/schemaTypes/category.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "category",
    ()=>category
]);
// sanity/schemaTypes/category.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-ssr] (ecmascript)");
;
const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        })
    ]
});
}),
"[project]/src/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/product.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$category$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/category.ts [app-ssr] (ecmascript)");
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["product"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$category$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["category"]
    ]
};
}),
"[project]/src/sanity/structure.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "structure",
    ()=>structure
]);
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
}),
"[project]/sanity.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.js [app-ssr] (ecmascript)");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/structure.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ]
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1302c73c._.js.map