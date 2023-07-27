"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FirstMiddleware {
    use(req, res, next) {
        console.log(`${req.method} at ${req.url} received`);
        next();
    }
}
exports.default = FirstMiddleware;
//# sourceMappingURL=firstMiddleware.js.map