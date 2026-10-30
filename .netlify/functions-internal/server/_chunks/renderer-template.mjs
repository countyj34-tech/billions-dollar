import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta http-equiv=\"refresh\" content=\"0; url=./forms.html\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <title>Redirecting…</title>\r\n    <script>\r\n      window.location.replace(\"./forms.html\");\r\n    <\/script>\r\n  </head>\r\n  <body>\r\n    <p>Redirecting to the main page...</p>\r\n    <p><a href=\"./forms.html\">Click here if you are not redirected automatically.</a></p>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
