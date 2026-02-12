(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/sanity/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function typeOf(object) {
        if ("object" === typeof object && null !== object) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    switch(object = object.type, object){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                        case REACT_VIEW_TRANSITION_TYPE:
                            return object;
                        default:
                            switch(object = object && object.$$typeof, object){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                    return object;
                                case REACT_CONSUMER_TYPE:
                                    return object;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    exports.ContextConsumer = REACT_CONSUMER_TYPE;
    exports.ContextProvider = REACT_CONTEXT_TYPE;
    exports.Element = REACT_ELEMENT_TYPE;
    exports.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Lazy = REACT_LAZY_TYPE;
    exports.Memo = REACT_MEMO_TYPE;
    exports.Portal = REACT_PORTAL_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
    };
    exports.typeOf = typeOf;
}();
}),
"[project]/node_modules/sanity/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/sanity/node_modules/@sanity/image-url/lib/_chunks-es/compat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageUrlBuilderImpl",
    ()=>ImageUrlBuilderImpl,
    "constructNewOptions",
    ()=>constructNewOptions,
    "createBuilder",
    ()=>createBuilder,
    "createImageUrlBuilder",
    ()=>createImageUrlBuilder,
    "defineDeprecated",
    ()=>defineDeprecated,
    "urlForImage",
    ()=>urlForImage
]);
const example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
function parseAssetId(ref) {
    const [, id, dimensionString, format] = ref.split("-");
    if (!id || !dimensionString || !format) throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
    const [imgWidthStr, imgHeightStr] = dimensionString.split("x"), width = +imgWidthStr, height = +imgHeightStr;
    if (!(isFinite(width) && isFinite(height))) throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
    return {
        id,
        width,
        height,
        format
    };
}
const isRef = (src)=>{
    const source = src;
    return source ? typeof source._ref == "string" : !1;
}, isAsset = (src)=>{
    const source = src;
    return source ? typeof source._id == "string" : !1;
}, isAssetStub = (src)=>{
    const source = src;
    return source && source.asset ? typeof source.asset.url == "string" : !1;
}, isInProgressUpload = (src)=>{
    if (typeof src == "object" && src !== null) {
        const obj = src;
        return obj._upload && (!obj.asset || !obj.asset._ref);
    }
    return !1;
};
function parseSource(source) {
    if (!source) return null;
    let image;
    if (typeof source == "string" && isUrl(source)) image = {
        asset: {
            _ref: urlToId(source)
        }
    };
    else if (typeof source == "string") image = {
        asset: {
            _ref: source
        }
    };
    else if (isRef(source)) image = {
        asset: source
    };
    else if (isAsset(source)) image = {
        asset: {
            _ref: source._id || ""
        }
    };
    else if (isAssetStub(source)) image = {
        asset: {
            _ref: urlToId(source.asset.url)
        }
    };
    else if (typeof source.asset == "object") image = {
        ...source
    };
    else return null;
    const img = source;
    return img.crop && (image.crop = img.crop), img.hotspot && (image.hotspot = img.hotspot), applyDefaults(image);
}
function isUrl(url) {
    return /^https?:\/\//.test(`${url}`);
}
function urlToId(url) {
    return `image-${url.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/, "-$1");
}
function applyDefaults(image) {
    if (image.crop && image.hotspot) return image;
    const result = {
        ...image
    };
    return result.crop || (result.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    }), result.hotspot || (result.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1,
        width: 1
    }), result;
}
const SPEC_NAME_TO_URL_NAME_MAPPINGS = [
    [
        "width",
        "w"
    ],
    [
        "height",
        "h"
    ],
    [
        "format",
        "fm"
    ],
    [
        "download",
        "dl"
    ],
    [
        "blur",
        "blur"
    ],
    [
        "sharpen",
        "sharp"
    ],
    [
        "invert",
        "invert"
    ],
    [
        "orientation",
        "or"
    ],
    [
        "minHeight",
        "min-h"
    ],
    [
        "maxHeight",
        "max-h"
    ],
    [
        "minWidth",
        "min-w"
    ],
    [
        "maxWidth",
        "max-w"
    ],
    [
        "quality",
        "q"
    ],
    [
        "fit",
        "fit"
    ],
    [
        "crop",
        "crop"
    ],
    [
        "saturation",
        "sat"
    ],
    [
        "auto",
        "auto"
    ],
    [
        "dpr",
        "dpr"
    ],
    [
        "pad",
        "pad"
    ],
    [
        "frame",
        "frame"
    ]
];
function urlForImage(options) {
    let spec = {
        ...options || {}
    };
    const source = spec.source;
    delete spec.source;
    const image = parseSource(source);
    if (!image) {
        if (source && isInProgressUpload(source)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
        throw new Error(`Unable to resolve image URL from source (${JSON.stringify(source)})`);
    }
    const id = image.asset._ref || image.asset._id || "", asset = parseAssetId(id), cropLeft = Math.round(image.crop.left * asset.width), cropTop = Math.round(image.crop.top * asset.height), crop = {
        left: cropLeft,
        top: cropTop,
        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
    }, hotSpotVerticalRadius = image.hotspot.height * asset.height / 2, hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2, hotSpotCenterX = image.hotspot.x * asset.width, hotSpotCenterY = image.hotspot.y * asset.height, hotspot = {
        left: hotSpotCenterX - hotSpotHorizontalRadius,
        top: hotSpotCenterY - hotSpotVerticalRadius,
        right: hotSpotCenterX + hotSpotHorizontalRadius,
        bottom: hotSpotCenterY + hotSpotVerticalRadius
    };
    return spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop || (spec = {
        ...spec,
        ...fit({
            crop,
            hotspot
        }, spec)
    }), specToImageUrl({
        ...spec,
        asset
    });
}
function specToImageUrl(spec) {
    const cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), vanityStub = spec.vanityName ? `/${spec.vanityName}` : "", filename = `${spec.asset.id}-${spec.asset.width}x${spec.asset.height}.${spec.asset.format}${vanityStub}`, baseUrl = spec.mediaLibraryId ? `${cdnUrl}/media-libraries/${spec.mediaLibraryId}/images/${filename}` : `${cdnUrl}/images/${spec.projectId}/${spec.dataset}/${filename}`, params = [];
    if (spec.rect) {
        const { left, top, width, height } = spec.rect;
        (left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width) && params.push(`rect=${left},${top},${width},${height}`);
    }
    spec.bg && params.push(`bg=${spec.bg}`), spec.focalPoint && (params.push(`fp-x=${spec.focalPoint.x}`), params.push(`fp-y=${spec.focalPoint.y}`));
    const flip = [
        spec.flipHorizontal && "h",
        spec.flipVertical && "v"
    ].filter(Boolean).join("");
    return flip && params.push(`flip=${flip}`), SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach((mapping)=>{
        const [specName, param] = mapping;
        typeof spec[specName] < "u" ? params.push(`${param}=${encodeURIComponent(spec[specName])}`) : typeof spec[param] < "u" && params.push(`${param}=${encodeURIComponent(spec[param])}`);
    }), params.length === 0 ? baseUrl : `${baseUrl}?${params.join("&")}`;
}
function fit(source, spec) {
    let cropRect;
    const imgWidth = spec.width, imgHeight = spec.height;
    if (!(imgWidth && imgHeight)) return {
        width: imgWidth,
        height: imgHeight,
        rect: source.crop
    };
    const crop = source.crop, hotspot = source.hotspot, desiredAspectRatio = imgWidth / imgHeight;
    if (crop.width / crop.height > desiredAspectRatio) {
        const height = Math.round(crop.height), width = Math.round(height * desiredAspectRatio), top = Math.max(0, Math.round(crop.top)), hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
        let left = Math.max(0, Math.round(hotspotXCenter - width / 2));
        left < crop.left ? left = crop.left : left + width > crop.left + crop.width && (left = crop.left + crop.width - width), cropRect = {
            left,
            top,
            width,
            height
        };
    } else {
        const width = crop.width, height = Math.round(width / desiredAspectRatio), left = Math.max(0, Math.round(crop.left)), hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
        let top = Math.max(0, Math.round(hotspotYCenter - height / 2));
        top < crop.top ? top = crop.top : top + height > crop.top + crop.height && (top = crop.top + crop.height - height), cropRect = {
            left,
            top,
            width,
            height
        };
    }
    return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect
    };
}
const validFits = [
    "clip",
    "crop",
    "fill",
    "fillmax",
    "max",
    "scale",
    "min"
], validCrops = [
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "focalpoint",
    "entropy"
], validAutoModes = [
    "format"
];
function isSanityModernClientLike(client) {
    return client && "config" in client ? typeof client.config == "function" : !1;
}
function isSanityClientLike(client) {
    return client && "clientConfig" in client ? typeof client.clientConfig == "object" : !1;
}
function clientConfigToOptions(config) {
    const { apiHost: apiUrl, projectId, dataset } = config, baseOptions = {
        baseUrl: (apiUrl || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn.")
    }, resource = config["~experimental_resource"];
    if (resource?.type === "media-library") {
        if (typeof resource.id != "string" || resource.id.length === 0) throw new Error('Media library clients must include an id in "~experimental_resource"');
        return {
            ...baseOptions,
            mediaLibraryId: resource.id
        };
    }
    return {
        ...baseOptions,
        projectId,
        dataset
    };
}
function rewriteSpecName(key) {
    const specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
    for (const entry of specs){
        const [specName, param] = entry;
        if (key === specName || key === param) return specName;
    }
    return key;
}
function getOptions(_options) {
    let options = {};
    return isSanityModernClientLike(_options) ? options = clientConfigToOptions(_options.config()) : isSanityClientLike(_options) ? options = clientConfigToOptions(_options.clientConfig) : options = _options || {}, options;
}
function createBuilder(Builder, _options) {
    const options = getOptions(_options);
    return new Builder(null, options);
}
function createImageUrlBuilder(options) {
    return createBuilder(ImageUrlBuilderImpl, options);
}
function constructNewOptions(currentOptions, options) {
    const baseUrl = options.baseUrl || currentOptions.baseUrl, newOptions = {
        baseUrl
    };
    for(const key in options)if (options.hasOwnProperty(key)) {
        const specKey = rewriteSpecName(key);
        newOptions[specKey] = options[key];
    }
    return {
        baseUrl,
        ...newOptions
    };
}
class ImageUrlBuilderImpl {
    options;
    constructor(parent, options){
        this.options = parent ? {
            ...parent.options || {},
            ...options || {}
        } : {
            ...options || {}
        };
    }
    withOptions(options) {
        const newOptions = constructNewOptions(this.options, options);
        return new ImageUrlBuilderImpl(this, newOptions);
    }
    // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
    // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
    // studio, the 'image'-document must be provided.
    image(source) {
        return this.withOptions({
            source
        });
    }
    // Specify the dataset
    dataset(dataset) {
        return this.withOptions({
            dataset
        });
    }
    // Specify the projectId
    projectId(projectId) {
        return this.withOptions({
            projectId
        });
    }
    withClient(client) {
        const newOptions = getOptions(client), preservedOptions = {
            ...this.options
        };
        return delete preservedOptions.baseUrl, delete preservedOptions.projectId, delete preservedOptions.dataset, delete preservedOptions.mediaLibraryId, new ImageUrlBuilderImpl(null, {
            ...newOptions,
            ...preservedOptions
        });
    }
    // Specify background color
    bg(bg) {
        return this.withOptions({
            bg
        });
    }
    // Set DPR scaling factor
    dpr(dpr) {
        return this.withOptions(dpr && dpr !== 1 ? {
            dpr
        } : {});
    }
    // Specify the width of the image in pixels
    width(width) {
        return this.withOptions({
            width
        });
    }
    // Specify the height of the image in pixels
    height(height) {
        return this.withOptions({
            height
        });
    }
    // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
    focalPoint(x, y) {
        return this.withOptions({
            focalPoint: {
                x,
                y
            }
        });
    }
    maxWidth(maxWidth) {
        return this.withOptions({
            maxWidth
        });
    }
    minWidth(minWidth) {
        return this.withOptions({
            minWidth
        });
    }
    maxHeight(maxHeight) {
        return this.withOptions({
            maxHeight
        });
    }
    minHeight(minHeight) {
        return this.withOptions({
            minHeight
        });
    }
    // Specify width and height in pixels
    size(width, height) {
        return this.withOptions({
            width,
            height
        });
    }
    // Specify blur between 0 and 100
    blur(blur) {
        return this.withOptions({
            blur
        });
    }
    sharpen(sharpen) {
        return this.withOptions({
            sharpen
        });
    }
    // Specify the desired rectangle of the image
    rect(left, top, width, height) {
        return this.withOptions({
            rect: {
                left,
                top,
                width,
                height
            }
        });
    }
    // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
    format(format) {
        return this.withOptions({
            format
        });
    }
    invert(invert) {
        return this.withOptions({
            invert
        });
    }
    // Rotation in degrees 0, 90, 180, 270
    orientation(orientation) {
        return this.withOptions({
            orientation
        });
    }
    // Compression quality 0-100
    quality(quality) {
        return this.withOptions({
            quality
        });
    }
    // Make it a download link. Parameter is default filename.
    forceDownload(download) {
        return this.withOptions({
            download
        });
    }
    // Flip image horizontally
    flipHorizontal() {
        return this.withOptions({
            flipHorizontal: !0
        });
    }
    // Flip image vertically
    flipVertical() {
        return this.withOptions({
            flipVertical: !0
        });
    }
    // Ignore crop/hotspot from image record, even when present
    ignoreImageParams() {
        return this.withOptions({
            ignoreImageParams: !0
        });
    }
    fit(value) {
        if (validFits.indexOf(value) === -1) throw new Error(`Invalid fit mode "${value}"`);
        return this.withOptions({
            fit: value
        });
    }
    crop(value) {
        if (validCrops.indexOf(value) === -1) throw new Error(`Invalid crop mode "${value}"`);
        return this.withOptions({
            crop: value
        });
    }
    // Saturation
    saturation(saturation) {
        return this.withOptions({
            saturation
        });
    }
    auto(value) {
        if (validAutoModes.indexOf(value) === -1) throw new Error(`Invalid auto mode "${value}"`);
        return this.withOptions({
            auto: value
        });
    }
    // Specify the number of pixels to pad the image
    pad(pad) {
        return this.withOptions({
            pad
        });
    }
    // Vanity URL for more SEO friendly URLs
    vanityName(value) {
        return this.withOptions({
            vanityName: value
        });
    }
    frame(frame) {
        if (frame !== 1) throw new Error(`Invalid frame value "${frame}"`);
        return this.withOptions({
            frame
        });
    }
    // Gets the url based on the submitted parameters
    url() {
        return urlForImage(this.options);
    }
    // Alias for url()
    toString() {
        return this.url();
    }
}
function once(fn) {
    let didCall = !1, returnValue;
    return (...args)=>(didCall || (returnValue = fn(...args), didCall = !0), returnValue);
}
const createWarningPrinter = (message)=>once((...args)=>{
        console.warn(message.join(" "), ...args);
    }), printNoDefaultExport = createWarningPrinter([
    "The default export of @sanity/image-url has been deprecated. Use the named export `createImageUrlBuilder` instead."
]);
function defineDeprecated(createImageUrlBuilder2) {
    return function(options) {
        return printNoDefaultExport(), createImageUrlBuilder2(options);
    };
}
;
 //# sourceMappingURL=compat.js.map
}),
"[project]/node_modules/sanity/node_modules/quick-lru/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickLRU
]);
class QuickLRU extends Map {
    #size = 0;
    #cache = new Map();
    #oldCache = new Map();
    #maxSize;
    #maxAge;
    #onEviction;
    constructor(options = {}){
        super();
        if (!(options.maxSize && options.maxSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        if (typeof options.maxAge === 'number' && options.maxAge === 0) {
            throw new TypeError('`maxAge` must be a number greater than 0');
        }
        this.#maxSize = options.maxSize;
        this.#maxAge = options.maxAge || Number.POSITIVE_INFINITY;
        this.#onEviction = options.onEviction;
    }
    // For tests.
    get __oldCache() {
        return this.#oldCache;
    }
    #emitEvictions(cache) {
        if (typeof this.#onEviction !== 'function') {
            return;
        }
        for (const [key, item] of cache){
            this.#onEviction(key, item.value);
        }
    }
    #deleteIfExpired(key, item) {
        if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
            if (typeof this.#onEviction === 'function') {
                this.#onEviction(key, item.value);
            }
            return this.delete(key);
        }
        return false;
    }
    #getOrDeleteIfExpired(key, item) {
        const deleted = this.#deleteIfExpired(key, item);
        if (deleted === false) {
            return item.value;
        }
    }
    #getItemValue(key, item) {
        return item.expiry ? this.#getOrDeleteIfExpired(key, item) : item.value;
    }
    #peek(key, cache) {
        const item = cache.get(key);
        return this.#getItemValue(key, item);
    }
    #set(key, value) {
        this.#cache.set(key, value);
        this.#size++;
        if (this.#size >= this.#maxSize) {
            this.#size = 0;
            this.#emitEvictions(this.#oldCache);
            this.#oldCache = this.#cache;
            this.#cache = new Map();
        }
    }
    #moveToRecent(key, item) {
        this.#oldCache.delete(key);
        this.#set(key, item);
    }
    *#entriesAscending() {
        for (const item of this.#oldCache){
            const [key, value] = item;
            if (!this.#cache.has(key)) {
                const deleted = this.#deleteIfExpired(key, value);
                if (deleted === false) {
                    yield item;
                }
            }
        }
        for (const item of this.#cache){
            const [key, value] = item;
            const deleted = this.#deleteIfExpired(key, value);
            if (deleted === false) {
                yield item;
            }
        }
    }
    get(key) {
        if (this.#cache.has(key)) {
            const item = this.#cache.get(key);
            return this.#getItemValue(key, item);
        }
        if (this.#oldCache.has(key)) {
            const item = this.#oldCache.get(key);
            if (this.#deleteIfExpired(key, item) === false) {
                this.#moveToRecent(key, item);
                return item.value;
            }
        }
    }
    set(key, value, { maxAge = this.#maxAge } = {}) {
        const expiry = typeof maxAge === 'number' && maxAge !== Number.POSITIVE_INFINITY ? Date.now() + maxAge : undefined;
        if (this.#cache.has(key)) {
            this.#cache.set(key, {
                value,
                expiry
            });
        } else {
            this.#set(key, {
                value,
                expiry
            });
        }
        return this;
    }
    has(key) {
        if (this.#cache.has(key)) {
            return !this.#deleteIfExpired(key, this.#cache.get(key));
        }
        if (this.#oldCache.has(key)) {
            return !this.#deleteIfExpired(key, this.#oldCache.get(key));
        }
        return false;
    }
    peek(key) {
        if (this.#cache.has(key)) {
            return this.#peek(key, this.#cache);
        }
        if (this.#oldCache.has(key)) {
            return this.#peek(key, this.#oldCache);
        }
    }
    expiresIn(key) {
        const item = this.#cache.get(key) ?? this.#oldCache.get(key);
        if (item) {
            return item.expiry ? item.expiry - Date.now() : Number.POSITIVE_INFINITY;
        }
    }
    delete(key) {
        const deleted = this.#cache.delete(key);
        if (deleted) {
            this.#size--;
        }
        return this.#oldCache.delete(key) || deleted;
    }
    clear() {
        this.#cache.clear();
        this.#oldCache.clear();
        this.#size = 0;
    }
    resize(newSize) {
        if (!(newSize && newSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        const items = [
            ...this.#entriesAscending()
        ];
        const removeCount = items.length - newSize;
        if (removeCount < 0) {
            this.#cache = new Map(items);
            this.#oldCache = new Map();
            this.#size = items.length;
        } else {
            if (removeCount > 0) {
                this.#emitEvictions(items.slice(0, removeCount));
            }
            this.#oldCache = new Map(items.slice(removeCount));
            this.#cache = new Map();
            this.#size = 0;
        }
        this.#maxSize = newSize;
    }
    evict(count = 1) {
        const requested = Number(count);
        if (!requested || requested <= 0) {
            return;
        }
        const items = [
            ...this.#entriesAscending()
        ];
        const evictCount = Math.trunc(Math.min(requested, Math.max(items.length - 1, 0)));
        if (evictCount <= 0) {
            return;
        }
        this.#emitEvictions(items.slice(0, evictCount));
        this.#oldCache = new Map(items.slice(evictCount));
        this.#cache = new Map();
        this.#size = 0;
    }
    *keys() {
        for (const [key] of this){
            yield key;
        }
    }
    *values() {
        for (const [, value] of this){
            yield value;
        }
    }
    *[Symbol.iterator]() {
        for (const item of this.#cache){
            const [key, value] = item;
            const deleted = this.#deleteIfExpired(key, value);
            if (deleted === false) {
                yield [
                    key,
                    value.value
                ];
            }
        }
        for (const item of this.#oldCache){
            const [key, value] = item;
            if (!this.#cache.has(key)) {
                const deleted = this.#deleteIfExpired(key, value);
                if (deleted === false) {
                    yield [
                        key,
                        value.value
                    ];
                }
            }
        }
    }
    *entriesDescending() {
        let items = [
            ...this.#cache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            const deleted = this.#deleteIfExpired(key, value);
            if (deleted === false) {
                yield [
                    key,
                    value.value
                ];
            }
        }
        items = [
            ...this.#oldCache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            if (!this.#cache.has(key)) {
                const deleted = this.#deleteIfExpired(key, value);
                if (deleted === false) {
                    yield [
                        key,
                        value.value
                    ];
                }
            }
        }
    }
    *entriesAscending() {
        for (const [key, value] of this.#entriesAscending()){
            yield [
                key,
                value.value
            ];
        }
    }
    get size() {
        if (!this.#size) {
            return this.#oldCache.size;
        }
        let oldCacheSize = 0;
        for (const key of this.#oldCache.keys()){
            if (!this.#cache.has(key)) {
                oldCacheSize++;
            }
        }
        return Math.min(this.#size + oldCacheSize, this.#maxSize);
    }
    get maxSize() {
        return this.#maxSize;
    }
    get maxAge() {
        return this.#maxAge;
    }
    entries() {
        return this.entriesAscending();
    }
    forEach(callbackFunction, thisArgument = this) {
        for (const [key, value] of this.entriesAscending()){
            callbackFunction.call(thisArgument, value, key, this);
        }
    }
    get [Symbol.toStringTag]() {
        return 'QuickLRU';
    }
    toString() {
        return `QuickLRU(${this.size}/${this.maxSize})`;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.toString();
    }
}
}),
"[project]/node_modules/sanity/node_modules/semver/internal/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}),
"[project]/node_modules/sanity/node_modules/semver/internal/debug.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const debug = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === 'object' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG && /\bsemver\b/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}),
"[project]/node_modules/sanity/node_modules/semver/internal/re.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/constants.js [app-client] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/debug.js [app-client] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numeric identifiers include numeric identifiers but can be longer.
// Therefore non-numeric identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}),
"[project]/node_modules/sanity/node_modules/semver/internal/parse-options.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}),
"[project]/node_modules/sanity/node_modules/semver/internal/identifiers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}),
"[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/debug.js [app-client] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/constants.js [app-client] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/re.js [app-client] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/parse-options.js [app-client] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/identifiers.js [app-client] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        if (this.major < other.major) {
            return -1;
        }
        if (this.major > other.major) {
            return 1;
        }
        if (this.minor < other.minor) {
            return -1;
        }
        if (this.minor > other.minor) {
            return 1;
        }
        if (this.patch < other.patch) {
            return -1;
        }
        if (this.patch > other.patch) {
            return 1;
        }
        return 0;
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/valid.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/clean.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/inc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/diff.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are prereleases
    return 'prerelease';
};
module.exports = diff;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/major.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/minor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/patch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/prerelease.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/rcompare.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/compare-loose.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/compare-build.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/sort.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare-build.js [app-client] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/rsort.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare-build.js [app-client] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/gt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/lt.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/eq.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/neq.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/gte.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/lte.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/cmp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const eq = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/eq.js [app-client] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/neq.js [app-client] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gt.js [app-client] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gte.js [app-client] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/lt.js [app-client] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/lte.js [app-client] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}),
"[project]/node_modules/sanity/node_modules/semver/functions/coerce.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/re.js [app-client] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}),
"[project]/node_modules/sanity/node_modules/semver/internal/lrucache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}),
"[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/lrucache.js [app-client] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/parse-options.js [app-client] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/comparator.js [app-client] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/debug.js [app-client] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/re.js [app-client] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/constants.js [app-client] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    comp = comp.replace(re[t.BUILD], '');
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}),
"[project]/node_modules/sanity/node_modules/semver/classes/comparator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/parse-options.js [app-client] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/re.js [app-client] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/cmp.js [app-client] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/debug.js [app-client] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
}),
"[project]/node_modules/sanity/node_modules/semver/functions/satisfies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/to-comparators.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/max-satisfying.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/min-satisfying.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/min-version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gt.js [app-client] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/valid.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/outside.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/comparator.js [app-client] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/satisfies.js [app-client] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gt.js [app-client] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/lt.js [app-client] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/lte.js [app-client] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gte.js [app-client] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/gtr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/outside.js [app-client] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/ltr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const outside = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/outside.js [app-client] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/intersects.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/simplify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/satisfies.js [app-client] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}),
"[project]/node_modules/sanity/node_modules/semver/ranges/subset.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/comparator.js [app-client] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/satisfies.js [app-client] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If LT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}),
"[project]/node_modules/sanity/node_modules/semver/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/re.js [app-client] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/constants.js [app-client] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/semver.js [app-client] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/internal/identifiers.js [app-client] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/parse.js [app-client] (ecmascript)");
const valid = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/valid.js [app-client] (ecmascript)");
const clean = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/clean.js [app-client] (ecmascript)");
const inc = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/inc.js [app-client] (ecmascript)");
const diff = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/diff.js [app-client] (ecmascript)");
const major = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/major.js [app-client] (ecmascript)");
const minor = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/minor.js [app-client] (ecmascript)");
const patch = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/patch.js [app-client] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/prerelease.js [app-client] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare.js [app-client] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/rcompare.js [app-client] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare-loose.js [app-client] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/compare-build.js [app-client] (ecmascript)");
const sort = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/sort.js [app-client] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/rsort.js [app-client] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gt.js [app-client] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/lt.js [app-client] (ecmascript)");
const eq = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/eq.js [app-client] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/neq.js [app-client] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/gte.js [app-client] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/lte.js [app-client] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/cmp.js [app-client] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/coerce.js [app-client] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/comparator.js [app-client] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/classes/range.js [app-client] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/functions/satisfies.js [app-client] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/to-comparators.js [app-client] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/max-satisfying.js [app-client] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/min-satisfying.js [app-client] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/min-version.js [app-client] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/valid.js [app-client] (ecmascript)");
const outside = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/outside.js [app-client] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/gtr.js [app-client] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/ltr.js [app-client] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/intersects.js [app-client] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/simplify.js [app-client] (ecmascript)");
const subset = __turbopack_context__.r("[project]/node_modules/sanity/node_modules/semver/ranges/subset.js [app-client] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}),
]);

//# sourceMappingURL=ce3c5_a6652740._.js.map