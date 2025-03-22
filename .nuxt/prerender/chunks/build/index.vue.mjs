import { ssrRenderAttrs } from 'file://C:/Users/glori/my-nuxt-app/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/glori/my-nuxt-app/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/glori/my-nuxt-app/node_modules/ufo/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Welcome to My Nuxt App</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
