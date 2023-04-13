/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
      ? factory(exports)
      : typeof define === "function" && define.amd
      ? define(["exports"], factory)
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        factory((global.THREE = {})));
  })(this, function (exports) {
    "use strict";
  
    const REVISION = "141";
    const MOUSE = {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
    };
    const TOUCH = {
      ROTATE: 0,
      PAN: 1,
      DOLLY_PAN: 2,
      DOLLY_ROTATE: 3,
    };
    const CullFaceNone = 0;
    const CullFaceBack = 1;
    const CullFaceFront = 2;
    const CullFaceFrontBack = 3;
    const BasicShadowMap = 0;
    const PCFShadowMap = 1;
    const PCFSoftShadowMap = 2;
    const VSMShadowMap = 3;
    const FrontSide = 0;
    const BackSide = 1;
    const DoubleSide = 2;
    const FlatShading = 1;
    const SmoothShading = 2;
    const NoBlending = 0;
    const NormalBlending = 1;
    const AdditiveBlending = 2;
    const SubtractiveBlending = 3;
    const MultiplyBlending = 4;
    const CustomBlending = 5;
    const AddEquation = 100;
    const SubtractEquation = 101;
    const ReverseSubtractEquation = 102;
    const MinEquation = 103;
    const MaxEquation = 104;
    const ZeroFactor = 200;
    const OneFactor = 201;
    const SrcColorFactor = 202;
    const OneMinusSrcColorFactor = 203;
    const SrcAlphaFactor = 204;
    const OneMinusSrcAlphaFactor = 205;
    const DstAlphaFactor = 206;
    const OneMinusDstAlphaFactor = 207;
    const DstColorFactor = 208;
    const OneMinusDstColorFactor = 209;
    const SrcAlphaSaturateFactor = 210;
    const NeverDepth = 0;
    const AlwaysDepth = 1;
    const LessDepth = 2;
    const LessEqualDepth = 3;
    const EqualDepth = 4;
    const GreaterEqualDepth = 5;
    const GreaterDepth = 6;
    const NotEqualDepth = 7;
    const MultiplyOperation = 0;
    const MixOperation = 1;
    const AddOperation = 2;
    const NoToneMapping = 0;
    const LinearToneMapping = 1;
    const ReinhardToneMapping = 2;
    const CineonToneMapping = 3;
    const ACESFilmicToneMapping = 4;
    const CustomToneMapping = 5;
    const UVMapping = 300;
    const CubeReflectionMapping = 301;
    const CubeRefractionMapping = 302;
    const EquirectangularReflectionMapping = 303;
    const EquirectangularRefractionMapping = 304;
    const CubeUVReflectionMapping = 306;
    const RepeatWrapping = 1000;
    const ClampToEdgeWrapping = 1001;
    const MirroredRepeatWrapping = 1002;
    const NearestFilter = 1003;
    const NearestMipmapNearestFilter = 1004;
    const NearestMipMapNearestFilter = 1004;
    const NearestMipmapLinearFilter = 1005;
    const NearestMipMapLinearFilter = 1005;
    const LinearFilter = 1006;
    const LinearMipmapNearestFilter = 1007;
    const LinearMipMapNearestFilter = 1007;
    const LinearMipmapLinearFilter = 1008;
    const LinearMipMapLinearFilter = 1008;
    const UnsignedByteType = 1009;
    const ByteType = 1010;
    const ShortType = 1011;
    const UnsignedShortType = 1012;
    const IntType = 1013;
    const UnsignedIntType = 1014;
    const FloatType = 1015;
    const HalfFloatType = 1016;
    const UnsignedShort4444Type = 1017;
    const UnsignedShort5551Type = 1018;
    const UnsignedInt248Type = 1020;
    const AlphaFormat = 1021;
    const RGBFormat = 1022;
    const RGBAFormat = 1023;
    const LuminanceFormat = 1024;
    const LuminanceAlphaFormat = 1025;
    const DepthFormat = 1026;
    const DepthStencilFormat = 1027;
    const RedFormat = 1028;
    const RedIntegerFormat = 1029;
    const RGFormat = 1030;
    const RGIntegerFormat = 1031;
    const RGBAIntegerFormat = 1033;
    const RGB_S3TC_DXT1_Format = 33776;
    const RGBA_S3TC_DXT1_Format = 33777;
    const RGBA_S3TC_DXT3_Format = 33778;
    const RGBA_S3TC_DXT5_Format = 33779;
    const RGB_PVRTC_4BPPV1_Format = 35840;
    const RGB_PVRTC_2BPPV1_Format = 35841;
    const RGBA_PVRTC_4BPPV1_Format = 35842;
    const RGBA_PVRTC_2BPPV1_Format = 35843;
    const RGB_ETC1_Format = 36196;
    const RGB_ETC2_Format = 37492;
    const RGBA_ETC2_EAC_Format = 37496;
    const RGBA_ASTC_4x4_Format = 37808;
    const RGBA_ASTC_5x4_Format = 37809;
    const RGBA_ASTC_5x5_Format = 37810;
    const RGBA_ASTC_6x5_Format = 37811;
    const RGBA_ASTC_6x6_Format = 37812;
    const RGBA_ASTC_8x5_Format = 37813;
    const RGBA_ASTC_8x6_Format = 37814;
    const RGBA_ASTC_8x8_Format = 37815;
    const RGBA_ASTC_10x5_Format = 37816;
    const RGBA_ASTC_10x6_Format = 37817;
    const RGBA_ASTC_10x8_Format = 37818;
    const RGBA_ASTC_10x10_Format = 37819;
    const RGBA_ASTC_12x10_Format = 37820;
    const RGBA_ASTC_12x12_Format = 37821;
    const RGBA_BPTC_Format = 36492;
    const LoopOnce = 2200;
    const LoopRepeat = 2201;
    const LoopPingPong = 2202;
    const InterpolateDiscrete = 2300;
    const InterpolateLinear = 2301;
    const InterpolateSmooth = 2302;
    const ZeroCurvatureEnding = 2400;
    const ZeroSlopeEnding = 2401;
    const WrapAroundEnding = 2402;
    const NormalAnimationBlendMode = 2500;
    const AdditiveAnimationBlendMode = 2501;
    const TrianglesDrawMode = 0;
    const TriangleStripDrawMode = 1;
    const TriangleFanDrawMode = 2;
    const LinearEncoding = 3000;
    const sRGBEncoding = 3001;
    const BasicDepthPacking = 3200;
    const RGBADepthPacking = 3201;
    const TangentSpaceNormalMap = 0;
    const ObjectSpaceNormalMap = 1; // Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
  
    const NoColorSpace = "";
    const SRGBColorSpace = "srgb";
    const LinearSRGBColorSpace = "srgb-linear";
    const ZeroStencilOp = 0;
    const KeepStencilOp = 7680;
    const ReplaceStencilOp = 7681;
    const IncrementStencilOp = 7682;
    const DecrementStencilOp = 7683;
    const IncrementWrapStencilOp = 34055;
    const DecrementWrapStencilOp = 34056;
    const InvertStencilOp = 5386;
    const NeverStencilFunc = 512;
    const LessStencilFunc = 513;
    const EqualStencilFunc = 514;
    const LessEqualStencilFunc = 515;
    const GreaterStencilFunc = 516;
    const NotEqualStencilFunc = 517;
    const GreaterEqualStencilFunc = 518;
    const AlwaysStencilFunc = 519;
    const StaticDrawUsage = 35044;
    const DynamicDrawUsage = 35048;
    const StreamDrawUsage = 35040;
    const StaticReadUsage = 35045;
    const DynamicReadUsage = 35049;
    const StreamReadUsage = 35041;
    const StaticCopyUsage = 35046;
    const DynamicCopyUsage = 35050;
    const StreamCopyUsage = 35042;
    const GLSL1 = "100";
    const GLSL3 = "300 es";
    const _SRGBAFormat = 1035; // fallback for WebGL 1
  
    /**
     * https://github.com/mrdoob/eventdispatcher.js/
     */
    class EventDispatcher {
      addEventListener(type, listener) {
        if (this._listeners === undefined) this._listeners = {};
        const listeners = this._listeners;
  
        if (listeners[type] === undefined) {
          listeners[type] = [];
        }
  
        if (listeners[type].indexOf(listener) === -1) {
          listeners[type].push(listener);
        }
      }
  
      hasEventListener(type, listener) {
        if (this._listeners === undefined) return false;
        const listeners = this._listeners;
        return (
          listeners[type] !== undefined &&
          listeners[type].indexOf(listener) !== -1
        );
      }
  
      removeEventListener(type, listener) {
        if (this._listeners === undefined) return;
        const listeners = this._listeners;
        const listenerArray = listeners[type];
  
        if (listenerArray !== undefined) {
          const index = listenerArray.indexOf(listener);
  
          if (index !== -1) {
            listenerArray.splice(index, 1);
          }
        }
      }
  
      dispatchEvent(event) {
        if (this._listeners === undefined) return;
        const listeners = this._listeners;
        const listenerArray = listeners[event.type];
  
        if (listenerArray !== undefined) {
          event.target = this; // Make a copy, in case listeners are removed while iterating.
  
          const array = listenerArray.slice(0);
  
          for (let i = 0, l = array.length; i < l; i++) {
            array[i].call(this, event);
          }
  
          event.target = null;
        }
      }
    }
  
    const _lut = [];
  
    for (let i = 0; i < 256; i++) {
      _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
    }
  
    let _seed = 1234567;
    const DEG2RAD = Math.PI / 180;
    const RAD2DEG = 180 / Math.PI; // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
  
    function generateUUID() {
      const d0 = (Math.random() * 0xffffffff) | 0;
      const d1 = (Math.random() * 0xffffffff) | 0;
      const d2 = (Math.random() * 0xffffffff) | 0;
      const d3 = (Math.random() * 0xffffffff) | 0;
      const uuid =
        _lut[d0 & 0xff] +
        _lut[(d0 >> 8) & 0xff] +
        _lut[(d0 >> 16) & 0xff] +
        _lut[(d0 >> 24) & 0xff] +
        "-" +
        _lut[d1 & 0xff] +
        _lut[(d1 >> 8) & 0xff] +
        "-" +
        _lut[((d1 >> 16) & 0x0f) | 0x40] +
        _lut[(d1 >> 24) & 0xff] +
        "-" +
        _lut[(d2 & 0x3f) | 0x80] +
        _lut[(d2 >> 8) & 0xff] +
        "-" +
        _lut[(d2 >> 16) & 0xff] +
        _lut[(d2 >> 24) & 0xff] +
        _lut[d3 & 0xff] +
        _lut[(d3 >> 8) & 0xff] +
        _lut[(d3 >> 16) & 0xff] +
        _lut[(d3 >> 24) & 0xff]; // .toLowerCase() here flattens concatenated strings to save heap memory space.
  
      return uuid.toLowerCase();
    }
  
    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    } // compute euclidean modulo of m % n
    // https://en.wikipedia.org/wiki/Modulo_operation
  
    function euclideanModulo(n, m) {
      return ((n % m) + m) % m;
    } // Linear mapping from range <a1, a2> to range <b1, b2>
  
    function mapLinear(x, a1, a2, b1, b2) {
      return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
    } // https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
  
    function inverseLerp(x, y, value) {
      if (x !== y) {
        return (value - x) / (y - x);
      } else {
        return 0;
      }
    } // https://en.wikipedia.org/wiki/Linear_interpolation
  
    function lerp(x, y, t) {
      return (1 - t) * x + t * y;
    } // http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
  
    function damp(x, y, lambda, dt) {
      return lerp(x, y, 1 - Math.exp(-lambda * dt));
    } // https://www.desmos.com/calculator/vcsjnyz7x4
  
    function pingpong(x, length = 1) {
      return length - Math.abs(euclideanModulo(x, length * 2) - length);
    } // http://en.wikipedia.org/wiki/Smoothstep
  
    function smoothstep(x, min, max) {
      if (x <= min) return 0;
      if (x >= max) return 1;
      x = (x - min) / (max - min);
      return x * x * (3 - 2 * x);
    }
  
    function smootherstep(x, min, max) {
      if (x <= min) return 0;
      if (x >= max) return 1;
      x = (x - min) / (max - min);
      return x * x * x * (x * (x * 6 - 15) + 10);
    } // Random integer from <low, high> interval
  
    function randInt(low, high) {
      return low + Math.floor(Math.random() * (high - low + 1));
    } // Random float from <low, high> interval
  
    function randFloat(low, high) {
      return low + Math.random() * (high - low);
    } // Random float from <-range/2, range/2> interval
  
    function randFloatSpread(range) {
      return range * (0.5 - Math.random());
    } // Deterministic pseudo-random float in the interval [ 0, 1 ]
  
    function seededRandom(s) {
      if (s !== undefined) _seed = s; // Mulberry32 generator
  
      let t = (_seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
  
    function degToRad(degrees) {
      return degrees * DEG2RAD;
    }
  
    function radToDeg(radians) {
      return radians * RAD2DEG;
    }
  
    function isPowerOfTwo(value) {
      return (value & (value - 1)) === 0 && value !== 0;
    }
  
    function ceilPowerOfTwo(value) {
      return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
    }
  
    function floorPowerOfTwo(value) {
      return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
    }
  
    function setQuaternionFromProperEuler(q, a, b, c, order) {
      // Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles
      // rotations are applied to the axes in the order specified by 'order'
      // rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
      // angles are in radians
      const cos = Math.cos;
      const sin = Math.sin;
      const c2 = cos(b / 2);
      const s2 = sin(b / 2);
      const c13 = cos((a + c) / 2);
      const s13 = sin((a + c) / 2);
      const c1_3 = cos((a - c) / 2);
      const s1_3 = sin((a - c) / 2);
      const c3_1 = cos((c - a) / 2);
      const s3_1 = sin((c - a) / 2);
  
      switch (order) {
        case "XYX":
          q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
          break;
  
        case "YZY":
          q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
          break;
  
        case "ZXZ":
          q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
          break;
  
        case "XZX":
          q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
          break;
  
        case "YXY":
          q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
          break;
  
        case "ZYZ":
          q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
          break;
  
        default:
          console.warn(
            "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
              order
          );
      }
    }
  
    function denormalize$1(value, array) {
      switch (array.constructor) {
        case Float32Array:
          return value;
  
        case Uint16Array:
          return value / 65535.0;
  
        case Uint8Array:
          return value / 255.0;
  
        case Int16Array:
          return Math.max(value / 32767.0, -1.0);
  
        case Int8Array:
          return Math.max(value / 127.0, -1.0);
  
        default:
          throw new Error("Invalid component type.");
      }
    }
  
    function normalize(value, array) {
      switch (array.constructor) {
        case Float32Array:
          return value;
  
        case Uint16Array:
          return Math.round(value * 65535.0);
  
        case Uint8Array:
          return Math.round(value * 255.0);
  
        case Int16Array:
          return Math.round(value * 32767.0);
  
        case Int8Array:
          return Math.round(value * 127.0);
  
        default:
          throw new Error("Invalid component type.");
      }
    }