"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function iterate(iterator, protocol) {
    function next(prevValue) {
        const { done, value } = iterator.next(prevValue);
        return !done
            ? protocol
                ? protocol(next, value)
                : next(value)
            : value;
    }
    return next();
}
exports.default = iterate;
;
//# sourceMappingURL=iterate.js.map