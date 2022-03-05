import{n as a}from"./index.e0168b23.js";import"./vendor.10bd23ac.js";var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[e._v("\u56FE\u7247\u9884\u89C8")]),e._m(0),t("div",{staticClass:"card"},[t("h3",[e._v("\u5F15\u5165")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { ImagePreview } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

Vue.use(ImagePreview)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("\u5C40\u90E8\u5F15\u5165")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// \u5C40\u90E8\u6CE8\u518C")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("components")]),e._v(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])])])],1),t("h2",[e._v("\u51FD\u6570\u8C03\u7528")]),t("div",{staticClass:"card"},[t("h3",[e._v("\u57FA\u672C\u4F7F\u7528")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[e._v("ImagePreview("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),e._v(`)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("\u5904\u7406\u56DE\u8C03\u51FD\u6570")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(` images = [
  `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),e._v(`,
  `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat2.jpg'")]),e._v(`
]

ImagePreview({
  images,
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("onChange")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("index")]),e._v(")")]),e._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(`.log(index)
  }
})
`)])])])],1),t("h2",[e._v("\u7EC4\u4EF6\u4F7F\u7528")]),t("div",{staticClass:"card"},[t("h3",[e._v("\u57FA\u672C\u4F7F\u7528")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"show = true"')]),e._v(`
>`)]),e._v(`
  \u57FA\u672C\u4F7F\u7528
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model:show")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"show"')]),e._v(" />")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"currentShow = true"')]),e._v(`
>`)]),e._v(`
  \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("current")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"https://varlet.gitee.io/varlet-ui/cat2.jpg"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model:show")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"currentShow"')]),e._v(`
/>`)]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeShow = true"')]),e._v(`
>`)]),e._v(`
  \u5C55\u793A\u5173\u95ED\u6309\u94AE
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("closeable")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model:show")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeShow"')]),e._v(`
/>`)]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeEventShow = true"')]),e._v(`
>`)]),e._v(`
  \u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model:show")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeEventShow"')]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("close")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"handleCloseEvent"')]),e._v(`
/>`)]),e._v(`
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Snackbar } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("show")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("currentShow")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("closeShow")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("closeEventShow")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("images")]),e._v(`: [
      `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),e._v(`,
      `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat2.jpg'")]),e._v(`,
    ],
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(`: {
    `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("handleCloseEvent")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),e._v(")")]),e._v(` {
      Snackbar(`),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002'")]),e._v(`)
    }
  }
}
`)])])])],1),t("h2",[e._v("API")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)])},_=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u4ECB\u7ECD")]),t("p",[e._v("\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u5C5E\u6027")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("show")])]),t("td",[e._v("\u662F\u5426\u663E\u793A")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("images")])]),t("td",[e._v("\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4")]),t("td",[t("em",[e._v("string[]")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("current")])]),t("td",[e._v("\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("zoom")])]),t("td",[e._v("\u53CC\u51FB\u653E\u5927\u500D\u6570")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("2")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("closeable")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("loop")])]),t("td",[e._v("\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("indicator")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5206\u9875")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("lock-scroll")])]),t("td",[e._v("\u9501\u5B9A\u6EDA\u52A8")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("teleport")])]),t("td",[e._v("\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E")]),t("td",[t("em",[e._v("TeleportProps[\u2018to\u2019]")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u4E8B\u4EF6")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u4E8B\u4EF6\u540D")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u56DE\u8C03\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("change")])]),t("td",[e._v("\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15")]),t("td",[t("code",{pre:!0},[e._v("index: number")]),e._v(" \u56FE\u7247\u7D22\u5F15")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("open")])]),t("td",[e._v("\u6253\u5F00 image-preview \u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("opened")])]),t("td",[e._v("\u6253\u5F00 image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("close")])]),t("td",[e._v("\u5173\u95ED image-preview \u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("closed")])]),t("td",[e._v("\u5173\u95ED image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u63D2\u69FD")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u63D2\u69FD\u540D")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("indicator")])]),t("td",[e._v("\u5206\u9875\u6307\u793A\u5668")]),t("td",[t("code",{pre:!0},[e._v("index: number")]),e._v(" \u56FE\u7247\u7D22\u5F15 "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("length: number")]),e._v(" \u56FE\u7247\u603B\u6570")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("close-icon")])]),t("td",[e._v("\u5173\u95ED\u6309\u94AE")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("ImagePreview Options")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("images")])]),t("td",[e._v("\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684 URL")]),t("td",[t("em",[e._v("string[] | string")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("current")])]),t("td",[e._v("\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("zoom")])]),t("td",[e._v("\u53CC\u51FB\u653E\u5927\u500D\u6570")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("2")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("closeable")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("loop")])]),t("td",[e._v("\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("indicator")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5206\u9875")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("lockScroll")])]),t("td",[e._v("\u9501\u5B9A\u6EDA\u52A8")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onChange")])]),t("td",[e._v("\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15")]),t("td",[t("em",[e._v("(index: number) => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpen")])]),t("td",[e._v("image-preview \u5F00\u542F\u65F6\u5019\u7684\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpened")])]),t("td",[e._v("image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClose")])]),t("td",[e._v("image-preview \u65F6\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClosed")])]),t("td",[e._v("image-preview \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u6837\u5F0F\u53D8\u91CF")]),t("p",[e._v("\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("a",{attrs:{href:"#/zh-CN/style-provider"}},[e._v("StyleProvider \u7EC4\u4EF6")]),e._v("\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53D8\u91CF\u540D")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-swipe-indicators-text-color")])]),t("td",[t("code",{pre:!0},[e._v(" #ddd")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-swipe-indicators-padding")])]),t("td",[t("code",{pre:!0},[e._v("16px 0")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-zoom-container-background")])]),t("td",[t("code",{pre:!0},[e._v(" #000")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-top")])]),t("td",[t("code",{pre:!0},[e._v("13px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-right")])]),t("td",[t("code",{pre:!0},[e._v(" 14px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-size")])]),t("td",[t("code",{pre:!0},[e._v("22px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-color")])]),t("td",[t("code",{pre:!0},[e._v("#fff")])])])])])])}];const n={components:{}},s={};var p=a(n,v,_,!1,l,null,null,null);function l(e){for(let r in s)this[r]=s[r]}var o=function(){return p.exports}();export{o as default};
