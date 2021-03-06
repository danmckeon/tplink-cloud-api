"use strict";
/**
 * @package     tplink-cloud-api
 * @author      Alexandre Dumont <adumont@gmail.com>
 * @copyright   (C) 2017 - Alexandre Dumont
 * @license     https://www.gnu.org/licenses/gpl-3.0.txt
 * @link        http://itnerd.space
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* This file is part of tplink-cloud-api.

tplink-cloud-api is free software: you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

tplink-cloud-api is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
tplink-cloud-api. If not, see http://www.gnu.org/licenses/. */
var device_1 = __importDefault(require("./device"));
var HS300child = /** @class */ (function (_super) {
    __extends(HS300child, _super);
    function HS300child(tpLink, deviceInfo, child) {
        var _this = _super.call(this, tpLink, deviceInfo) || this;
        _this.genericType = "plug";
        _this.child = child;
        return _this;
    }
    HS300child.prototype.powerOn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setRelayState(1)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.powerOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setRelayState(0)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.setRelayState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.passthroughRequest.call(this, {
                            context: { child_ids: [this.child.id] },
                            system: { set_relay_state: { state: state } }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.set_relay_state = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO remove
                return [2 /*return*/, this.setRelayState(state)];
            });
        });
    };
    HS300child.prototype.getScheduleRules = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.passthroughRequest.call(this, {
                            context: { child_ids: [this.child.id] },
                            schedule: { get_rules: {} }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.editScheduleRule = function (rule) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.passthroughRequest.call(this, {
                            context: { child_ids: [this.child.id] },
                            schedule: { edit_rule: rule }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.setLedState = function (on) {
        return __awaiter(this, void 0, void 0, function () {
            var offState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offState = on ? 0 : 1;
                        return [4 /*yield*/, _super.prototype.passthroughRequest.call(this, {
                                context: { child_ids: [this.child.id] },
                                "system": { "set_led_off": { "off": offState } }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.isOn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRelayState()];
                    case 1: return [2 /*return*/, (_a.sent()) === 1];
                }
            });
        });
    };
    HS300child.prototype.isOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isOn()];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    HS300child.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRelayState()];
                    case 1:
                        s = _a.sent();
                        return [4 /*yield*/, this.setRelayState(s === 0 ? 1 : 0)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HS300child.prototype.get_relay_state = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO remove
                return [2 /*return*/, this.getRelayState()];
            });
        });
    };
    HS300child.prototype.getRelayState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSysInfo()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.relay_state];
                }
            });
        });
    };
    HS300child.prototype.getSysInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.passthroughRequest.call(this, {
                            context: { child_ids: [this.child.id] },
                            system: { get_sysinfo: null },
                            emeter: { get_realtime: null }
                        })];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.system.get_sysinfo];
                }
            });
        });
    };
    return HS300child;
}(device_1.default));
exports.default = HS300child;
//# sourceMappingURL=hs300child.js.map