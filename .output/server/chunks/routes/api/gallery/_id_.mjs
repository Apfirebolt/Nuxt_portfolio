import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _id_ = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!id) {
    return {
      statusCode: 400,
      body: { error: "Gallery ID is required" }
    };
  }
  const response = await $fetch(`https://softgenie.org/api/gallery/${id}`);
  return response;
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
