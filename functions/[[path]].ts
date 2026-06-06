import { startInstance } from "../src/start";

export async function onRequest(context: any) {
  const { request, env, ctx } = context;

  const response = await startInstance.fetch(request, env, ctx);
  return response;
}
