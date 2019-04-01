"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function invariant(assertion, error = '🚫') {
    if (!assertion)
        throw new Error(error);
    return assertion;
}
exports.default = invariant;
//# sourceMappingURL=invariant.js.map