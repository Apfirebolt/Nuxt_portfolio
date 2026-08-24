import { d as defineEventHandler, $ as $fetch } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const index = defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const response = await $fetch("https://softgenie.org/api/projects");
    return response;
  }
});

export { index as default };
//# sourceMappingURL=index3.mjs.map
