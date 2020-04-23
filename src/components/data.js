export default  `
diff --git a/package-lock.json b/package-lock.json
index 3d6813e..07a1824 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -1055,6 +1055,11 @@
       "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",
       "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw=="
     },
+    "@sindresorhus/is": {
+      "version": "0.14.0",
+      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
+      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ=="
+    },
     "@svgr/core": {
       "version": "2.4.1",
       "resolved": "https://registry.npmjs.org/@svgr/core/-/core-2.4.1.tgz",
@@ -1082,6 +1087,19 @@
         "loader-utils": "^1.1.0"
       }
     },
+    "@szmarczak/http-timer": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
+      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
+      "requires": {
+        "defer-to-connect": "^1.0.1"
+      }
+    },
+    "@types/color-name": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/@types/color-name/-/color-name-1.1.1.tgz",
+      "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ=="
+    },
     "@types/q": {
       "version": "1.5.2",
       "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.2.tgz",
@@ -1345,6 +1363,44 @@
       "resolved": "https://registry.npmjs.org/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
       "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM="
     },
+    "ansi-align": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
+      "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
+      "requires": {
+        "string-width": "^3.0.0"
+      },
+      "dependencies": {
+        "ansi-regex": {
+          "version": "4.1.0",
+          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
+          "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
+        },
+        "emoji-regex": {
+          "version": "7.0.3",
+          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
+          "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
+        },
+        "string-width": {
+          "version": "3.1.0",
+          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
+          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
+          "requires": {
+            "emoji-regex": "^7.0.1",
+            "is-fullwidth-code-point": "^2.0.0",
+            "strip-ansi": "^5.1.0"
+          }
+        },
+        "strip-ansi": {
+          "version": "5.2.0",
+          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
+          "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
+          "requires": {
+            "ansi-regex": "^4.1.0"
+          }
+        }
+      }
+    },
     "ansi-colors": {
       "version": "3.2.4",
       "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-3.2.4.tgz",
@@ -2475,6 +2531,14 @@
       "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
       "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g=="
     },
+    "basic-auth": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.1.tgz",
+      "integrity": "sha512-NF+epuEdnUYVlGuhaxbbq+dvJttwLnGY+YixlXlME5KpQ5W3CnXA5cVTneY3SPbPDRkcjMbifrwmFYcClgOZeg==",
+      "requires": {
+        "safe-buffer": "5.1.2"
+      }
+    },
     "batch": {
       "version": "0.6.1",
       "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
@@ -2579,6 +2643,100 @@
       "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
       "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
     },
+    "boxen": {
+      "version": "4.2.0",
+      "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
+      "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
+      "requires": {
+        "ansi-align": "^3.0.0",
+        "camelcase": "^5.3.1",
+        "chalk": "^3.0.0",
+        "cli-boxes": "^2.2.0",
+        "string-width": "^4.1.0",
+        "term-size": "^2.1.0",
+        "type-fest": "^0.8.1",
+        "widest-line": "^3.1.0"
+      },
+      "dependencies": {
+        "ansi-regex": {
+          "version": "5.0.0",
+          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
+          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
+        },
+        "ansi-styles": {
+          "version": "4.2.1",
+          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
+          "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
+          "requires": {
+            "@types/color-name": "^1.1.1",
+            "color-convert": "^2.0.1"
+          }
+        },
+        "chalk": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
+          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
+          "requires": {
+            "ansi-styles": "^4.1.0",
+            "supports-color": "^7.1.0"
+          }
+        },
+        "color-convert": {
+          "version": "2.0.1",
+          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
+          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
+          "requires": {
+            "color-name": "~1.1.4"
+          }
+        },
+        "color-name": {
+          "version": "1.1.4",
+          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
+          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
+        },
+        "emoji-regex": {
+          "version": "8.0.0",
+          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
+        },
+        "has-flag": {
+          "version": "4.0.0",
+          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
+          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
+        },
+        "is-fullwidth-code-point": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
+          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
+        },
+        "string-width": {
+          "version": "4.2.0",
+          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
+          "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
+          "requires": {
+            "emoji-regex": "^8.0.0",
+            "is-fullwidth-code-point": "^3.0.0",
+            "strip-ansi": "^6.0.0"
+          }
+        },
+        "strip-ansi": {
+          "version": "6.0.0",
+          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
+          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
+          "requires": {
+            "ansi-regex": "^5.0.0"
+          }
+        },
+        "supports-color": {
+          "version": "7.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
+          "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
+          "requires": {
+            "has-flag": "^4.0.0"
+          }
+        }
+      }
+    },
     "brace-expansion": {
       "version": "1.1.11",
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
@@ -2786,6 +2944,40 @@
         "unset-value": "^1.0.0"
       }
     },
+    "cacheable-request": {
+      "version": "6.1.0",
+      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
+      "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
+      "requires": {
+        "clone-response": "^1.0.2",
+        "get-stream": "^5.1.0",
+        "http-cache-semantics": "^4.0.0",
+        "keyv": "^3.0.0",
+        "lowercase-keys": "^2.0.0",
+        "normalize-url": "^4.1.0",
+        "responselike": "^1.0.2"
+      },
+      "dependencies": {
+        "get-stream": {
+          "version": "5.1.0",
+          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.1.0.tgz",
+          "integrity": "sha512-EXr1FOzrzTfGeL0gQdeFEvOMm2mzMOglyiOXSTpPC+iAjAKftbr3jpCMWynogwYnM+eSj9sHGc6wjIcDvYiygw==",
+          "requires": {
+            "pump": "^3.0.0"
+          }
+        },
+        "lowercase-keys": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
+          "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA=="
+        },
+        "normalize-url": {
+          "version": "4.5.0",
+          "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
+          "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ=="
+        }
+      }
+    },
     "call-me-maybe": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
@@ -2870,6 +3062,11 @@
         "supports-color": "^5.3.0"
       }
     },
+    "change-emitter": {
+      "version": "0.1.6",
+      "resolved": "https://registry.npmjs.org/change-emitter/-/change-emitter-0.1.6.tgz",
+      "integrity": "sha1-6LL+PX8at9aaMhma/5HqaTFAlRU="
+    },
     "chardet": {
       "version": "0.7.0",
       "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
@@ -3523,6 +3720,11 @@
         }
       }
     },
+    "classnames": {
+      "version": "2.2.6",
+      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.2.6.tgz",
+      "integrity": "sha512-JR/iSQOSt+LQIWwrwEzJ9uk0xfN3mTVYMwt1Ir5mUcSN6pU+V4zQFFaJsclJbPuAUQH+yfWef6tm7l1quW3C8Q=="
+    },
     "clean-css": {
       "version": "4.2.3",
       "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",
@@ -3538,6 +3740,11 @@
         }
       }
     },
+    "cli-boxes": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.0.tgz",
+      "integrity": "sha512-gpaBrMAizVEANOpfZp/EEUixTXDyGt7DFzdK5hU+UbWt/J0lB0w20ncZj59Z9a93xHb9u12zF5BS6i9RKbtg4w=="
+    },
     "cli-cursor": {
       "version": "2.1.0",
       "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
@@ -3588,6 +3795,14 @@
         "shallow-clone": "^0.1.2"
       }
     },
+    "clone-response": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
+      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
+      "requires": {
+        "mimic-response": "^1.0.0"
+      }
+    },
     "co": {
       "version": "4.6.0",
       "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
@@ -3729,6 +3944,45 @@
         "typedarray": "^0.0.6"
       }
     },
+    "configstore": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
+      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
+      "requires": {
+        "dot-prop": "^5.2.0",
+        "graceful-fs": "^4.1.2",
+        "make-dir": "^3.0.0",
+        "unique-string": "^2.0.0",
+        "write-file-atomic": "^3.0.0",
+        "xdg-basedir": "^4.0.0"
+      },
+      "dependencies": {
+        "make-dir": {
+          "version": "3.0.2",
+          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.0.2.tgz",
+          "integrity": "sha512-rYKABKutXa6vXTXhoV18cBE7PaewPXHe/Bdq4v+ZLMhxbWApkFFplT0LcbMW+6BbjnQXzZ/sAvSE/JdguApG5w==",
+          "requires": {
+            "semver": "^6.0.0"
+          }
+        },
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
+        },
+        "write-file-atomic": {
+          "version": "3.0.3",
+          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
+          "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
+          "requires": {
+            "imurmurhash": "^0.1.4",
+            "is-typedarray": "^1.0.0",
+            "signal-exit": "^3.0.2",
+            "typedarray-to-buffer": "^3.1.5"
+          }
+        }
+      }
+    },
     "confusing-browser-globals": {
       "version": "1.0.9",
       "resolved": "https://registry.npmjs.org/confusing-browser-globals/-/confusing-browser-globals-1.0.9.tgz",
@@ -3739,6 +3993,11 @@
       "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
       "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg=="
     },
+    "connect-pause": {
+      "version": "0.1.1",
+      "resolved": "https://registry.npmjs.org/connect-pause/-/connect-pause-0.1.1.tgz",
+      "integrity": "sha1-smmyu4Ldsaw9tQmcD7WCq6mfs3o="
+    },
     "console-browserify": {
       "version": "1.2.0",
       "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
@@ -3829,6 +4088,15 @@
       "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
       "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
     },
+    "cors": {
+      "version": "2.8.5",
+      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
+      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
+      "requires": {
+        "object-assign": "^4",
+        "vary": "^1"
+      }
+    },
     "cosmiconfig": {
       "version": "5.2.1",
       "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
@@ -3904,6 +4172,11 @@
         "randomfill": "^1.0.3"
       }
     },
+    "crypto-random-string": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
+      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA=="
+    },
     "css-color-names": {
       "version": "0.0.4",
       "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
@@ -4345,6 +4618,14 @@
       "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
       "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
     },
+    "decompress-response": {
+      "version": "3.3.0",
+      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
+      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
+      "requires": {
+        "mimic-response": "^1.0.0"
+      }
+    },
     "deep-equal": {
       "version": "1.1.1",
       "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
@@ -4358,6 +4639,11 @@
         "regexp.prototype.flags": "^1.2.0"
       }
     },
+    "deep-extend": {
+      "version": "0.6.0",
+      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
+      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
+    },
     "deep-is": {
       "version": "0.1.3",
       "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
@@ -4401,6 +4687,11 @@
         "strip-bom": "^2.0.0"
       }
     },
+    "defer-to-connect": {
+      "version": "1.1.3",
+      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
+      "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ=="
+    },
     "define-properties": {
       "version": "1.1.3",
       "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
@@ -4561,6 +4852,11 @@
       "resolved": "https://registry.npmjs.org/diff/-/diff-3.5.0.tgz",
       "integrity": "sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA=="
     },
+    "diff-match-patch": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/diff-match-patch/-/diff-match-patch-1.0.4.tgz",
+      "integrity": "sha512-Uv3SW8bmH9nAtHKaKSanOQmj2DnlH65fUpcrMdfdaOxUG02QQ4YGZ8AE7kKOMisF7UqvOlGKVYWRvezdncW9lg=="
+    },
     "diffie-hellman": {
       "version": "5.0.3",
       "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
@@ -4713,6 +5009,11 @@
       "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.1.tgz",
       "integrity": "sha1-rOb/gIwc5mtX0ev5eXessCM0z8E="
     },
+    "duplexer3": {
+      "version": "0.1.4",
+      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
+      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
+    },
     "duplexify": {
       "version": "3.7.1",
       "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
@@ -4772,6 +5073,14 @@
       "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
       "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
     },
+    "encoding": {
+      "version": "0.1.12",
+      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.12.tgz",
+      "integrity": "sha1-U4tm8+5izRq1HsMjgp0flIDHS+s=",
+      "requires": {
+        "iconv-lite": "~0.4.13"
+      }
+    },
     "end-of-stream": {
       "version": "1.4.4",
       "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
@@ -4822,6 +5131,15 @@
         "is-arrayish": "^0.2.1"
       }
     },
+    "errorhandler": {
+      "version": "1.5.1",
+      "resolved": "https://registry.npmjs.org/errorhandler/-/errorhandler-1.5.1.tgz",
+      "integrity": "sha512-rcOwbfvP1WTViVoUjcfZicVzjhjTuhSMntHh6mW3IrEiyE6mJyXvsToJUJGlGlw/2xU9P5whlWNGlIDVeCiT4A==",
+      "requires": {
+        "accepts": "~1.3.7",
+        "escape-html": "~1.0.3"
+      }
+    },
     "es-abstract": {
       "version": "1.17.5",
       "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.5.tgz",
@@ -4850,6 +5168,11 @@
         "is-symbol": "^1.0.2"
       }
     },
+    "escape-goat": {
+      "version": "2.1.1",
+      "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
+      "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q=="
+    },
     "escape-html": {
       "version": "1.0.3",
       "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
@@ -5387,6 +5710,30 @@
         }
       }
     },
+    "express-urlrewrite": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/express-urlrewrite/-/express-urlrewrite-1.2.0.tgz",
+      "integrity": "sha1-jmZ7d2H/HH/9sO+gXWQDU4fII+s=",
+      "requires": {
+        "debug": "*",
+        "path-to-regexp": "^1.0.3"
+      },
+      "dependencies": {
+        "isarray": {
+          "version": "0.0.1",
+          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
+          "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
+        },
+        "path-to-regexp": {
+          "version": "1.8.0",
+          "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-1.8.0.tgz",
+          "integrity": "sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==",
+          "requires": {
+            "isarray": "0.0.1"
+          }
+        }
+      }
+    },
     "extend": {
       "version": "3.0.2",
       "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
@@ -5773,6 +6120,35 @@
         "bser": "2.1.1"
       }
     },
+    "fbjs": {
+      "version": "0.8.17",
+      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-0.8.17.tgz",
+      "integrity": "sha1-xNWY6taUkRJlPWWIsBpc3Nn5D90=",
+      "requires": {
+        "core-js": "^1.0.0",
+        "isomorphic-fetch": "^2.1.1",
+        "loose-envify": "^1.0.0",
+        "object-assign": "^4.1.0",
+        "promise": "^7.1.1",
+        "setimmediate": "^1.0.5",
+        "ua-parser-js": "^0.7.18"
+      },
+      "dependencies": {
+        "core-js": {
+          "version": "1.2.7",
+          "resolved": "https://registry.npmjs.org/core-js/-/core-js-1.2.7.tgz",
+          "integrity": "sha1-ZSKUwUZR2yj6k70tX/KYOk8IxjY="
+        },
+        "promise": {
+          "version": "7.3.1",
+          "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
+          "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
+          "requires": {
+            "asap": "~2.0.3"
+          }
+        }
+      }
+    },
     "figgy-pudding": {
       "version": "3.5.2",
       "resolved": "https://registry.npmjs.org/figgy-pudding/-/figgy-pudding-3.5.2.tgz",
@@ -6836,6 +7212,14 @@
       "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
       "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs="
     },
+    "global-dirs": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.0.1.tgz",
+      "integrity": "sha512-5HqUqdhkEovj2Of/ms3IeS/EekcO54ytHRLV4PEY2rhRwrHXLQjeVEES0Lhka0xwNDtGYn58wyC4s5+MHsOO6A==",
+      "requires": {
+        "ini": "^1.3.5"
+      }
+    },
     "global-modules": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",
@@ -6889,6 +7273,24 @@
         }
       }
     },
+    "got": {
+      "version": "9.6.0",
+      "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
+      "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
+      "requires": {
+        "@sindresorhus/is": "^0.14.0",
+        "@szmarczak/http-timer": "^1.1.2",
+        "cacheable-request": "^6.0.0",
+        "decompress-response": "^3.3.0",
+        "duplexer3": "^0.1.4",
+        "get-stream": "^4.1.0",
+        "lowercase-keys": "^1.0.1",
+        "mimic-response": "^1.0.1",
+        "p-cancelable": "^1.0.0",
+        "to-readable-stream": "^1.0.0",
+        "url-parse-lax": "^3.0.0"
+      }
+    },
     "graceful-fs": {
       "version": "4.2.3",
       "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
@@ -7079,6 +7481,11 @@
         }
       }
     },
+    "has-yarn": {
+      "version": "2.1.0",
+      "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
+      "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw=="
+    },
     "hash-base": {
       "version": "3.0.4",
       "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.0.4.tgz",
@@ -7122,6 +7529,11 @@
       "resolved": "https://registry.npmjs.org/hoek/-/hoek-4.2.1.tgz",
       "integrity": "sha512-QLg82fGkfnJ/4iy1xZ81/9SIJiq1NGFUMGs6ParyjBZr6jW2Ufj/snDqTHixNlHdPNwN2RLVD0Pi3igeK9+JfA=="
     },
+    "hoist-non-react-statics": {
+      "version": "2.5.5",
+      "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-2.5.5.tgz",
+      "integrity": "sha512-rqcy4pJo55FTTLWt+bU8ukscqHeE/e9KWvsOW2b/a3afxQZhwkQdT1rPPCJ0rYXdj4vNcasY8zHTH+jF/qStxw=="
+    },
     "home-or-tmp": {
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/home-or-tmp/-/home-or-tmp-2.0.0.tgz",
@@ -7264,6 +7676,11 @@
         }
       }
     },
+    "http-cache-semantics": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
+      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ=="
+    },
     "http-deceiver": {
       "version": "1.2.7",
       "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
@@ -7674,6 +8091,11 @@
         "resolve-from": "^3.0.0"
       }
     },
+    "import-lazy": {
+      "version": "2.1.0",
+      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
+      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM="
+    },
     "import-local": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/import-local/-/import-local-1.0.0.tgz",
@@ -7937,6 +8359,27 @@
         "is-extglob": "^1.0.0"
       }
     },
+    "is-installed-globally": {
+      "version": "0.3.2",
+      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
+      "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
+      "requires": {
+        "global-dirs": "^2.0.1",
+        "is-path-inside": "^3.0.1"
+      },
+      "dependencies": {
+        "is-path-inside": {
+          "version": "3.0.2",
+          "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.2.tgz",
+          "integrity": "sha512-/2UGPSgmtqwo1ktx8NDHjuPwZWmHhO+gj0f93EkhLB5RgW9RZevWYYlIkS6zePc6U2WpOdQYIwHe9YC4DWEBVg=="
+        }
+      }
+    },
+    "is-npm": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
+      "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig=="
+    },
     "is-number": {
       "version": "2.1.0",
       "resolved": "https://registry.npmjs.org/is-number/-/is-number-2.1.0.tgz",
@@ -8068,6 +8511,11 @@
       "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
       "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0="
     },
+    "is-yarn-global": {
+      "version": "0.3.0",
+      "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
+      "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw=="
+    },
     "isarray": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
@@ -8091,6 +8539,26 @@
       "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
       "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
     },
+    "isomorphic-fetch": {
+      "version": "2.2.1",
+      "resolved": "https://registry.npmjs.org/isomorphic-fetch/-/isomorphic-fetch-2.2.1.tgz",
+      "integrity": "sha1-YRrhrPFPXoH3KVB0coGf6XM1WKk=",
+      "requires": {
+        "node-fetch": "^1.0.1",
+        "whatwg-fetch": ">=0.10.0"
+      },
+      "dependencies": {
+        "node-fetch": {
+          "version": "1.7.3",
+          "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-1.7.3.tgz",
+          "integrity": "sha512-NhZ4CsKx7cYm2vSrBAr2PvFOe6sWDf0UYLRqA6svUYg7+/TSfVAu49jYC4BvQ4Sms9SZgdqGBgroqfDhJdTyKQ==",
+          "requires": {
+            "encoding": "^0.1.11",
+            "is-stream": "^1.0.1"
+          }
+        }
+      }
+    },
     "isomorphic-unfetch": {
       "version": "3.0.0",
       "resolved": "https://registry.npmjs.org/isomorphic-unfetch/-/isomorphic-unfetch-3.0.0.tgz",
@@ -8830,6 +9298,11 @@
         "merge-stream": "^1.0.1"
       }
     },
+    "jju": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/jju/-/jju-1.4.0.tgz",
+      "integrity": "sha1-o6vicYryQaKykE+EpiWXDzia4yo="
+    },
     "joi": {
       "version": "11.4.0",
       "resolved": "https://registry.npmjs.org/joi/-/joi-11.4.0.tgz",
@@ -8897,26 +9370,256 @@
         "xml-name-validator": "^3.0.0"
       }
     },
-    "jsesc": {
-      "version": "2.5.2",
-      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
-      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
-    },
-    "json-parse-better-errors": {
-      "version": "1.0.2",
-      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
-      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
-    },
-    "json-schema": {
-      "version": "0.2.3",
-      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
-      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
-    },
-    "json-schema-traverse": {
-      "version": "0.4.1",
-      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
-      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
-    },
+    "jsesc": {
+      "version": "2.5.2",
+      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
+      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
+    },
+    "json-buffer": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
+      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg="
+    },
+    "json-parse-better-errors": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
+      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
+    },
+    "json-parse-helpfulerror": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/json-parse-helpfulerror/-/json-parse-helpfulerror-1.0.3.tgz",
+      "integrity": "sha1-E/FM4C7tTpgSl7ZOueO5MuLdE9w=",
+      "requires": {
+        "jju": "^1.1.0"
+      }
+    },
+    "json-schema": {
+      "version": "0.2.3",
+      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
+      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
+    },
+    "json-schema-traverse": {
+      "version": "0.4.1",
+      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
+      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
+    },
+    "json-server": {
+      "version": "0.16.1",
+      "resolved": "https://registry.npmjs.org/json-server/-/json-server-0.16.1.tgz",
+      "integrity": "sha512-aVUTdpt+X27iIuWuxBChJywykPSP4opEiFrH044pG+34Gde3eHZRTzeMyx8ts5/kY2gK1Ru2YBmF2k/vI0lQug==",
+      "requires": {
+        "body-parser": "^1.19.0",
+        "chalk": "^3.0.0",
+        "compression": "^1.7.4",
+        "connect-pause": "^0.1.1",
+        "cors": "^2.8.5",
+        "errorhandler": "^1.5.1",
+        "express": "^4.17.1",
+        "express-urlrewrite": "^1.2.0",
+        "json-parse-helpfulerror": "^1.0.3",
+        "lodash": "^4.17.15",
+        "lodash-id": "^0.14.0",
+        "lowdb": "^1.0.0",
+        "method-override": "^3.0.0",
+        "morgan": "^1.9.1",
+        "nanoid": "^2.1.11",
+        "please-upgrade-node": "^3.2.0",
+        "pluralize": "^8.0.0",
+        "request": "^2.88.2",
+        "server-destroy": "^1.0.1",
+        "update-notifier": "^4.0.0",
+        "yargs": "^15.1.0"
+      },
+      "dependencies": {
+        "ansi-regex": {
+          "version": "5.0.0",
+          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
+          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
+        },
+        "ansi-styles": {
+          "version": "4.2.1",
+          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
+          "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
+          "requires": {
+            "@types/color-name": "^1.1.1",
+            "color-convert": "^2.0.1"
+          }
+        },
+        "chalk": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
+          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
+          "requires": {
+            "ansi-styles": "^4.1.0",
+            "supports-color": "^7.1.0"
+          }
+        },
+        "cliui": {
+          "version": "6.0.0",
+          "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
+          "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
+          "requires": {
+            "string-width": "^4.2.0",
+            "strip-ansi": "^6.0.0",
+            "wrap-ansi": "^6.2.0"
+          }
+        },
+        "color-convert": {
+          "version": "2.0.1",
+          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
+          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
+          "requires": {
+            "color-name": "~1.1.4"
+          }
+        },
+        "color-name": {
+          "version": "1.1.4",
+          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
+          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
+        },
+        "emoji-regex": {
+          "version": "8.0.0",
+          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
+        },
+        "find-up": {
+          "version": "4.1.0",
+          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
+          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
+          "requires": {
+            "locate-path": "^5.0.0",
+            "path-exists": "^4.0.0"
+          }
+        },
+        "get-caller-file": {
+          "version": "2.0.5",
+          "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
+          "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
+        },
+        "has-flag": {
+          "version": "4.0.0",
+          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
+          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
+        },
+        "is-fullwidth-code-point": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
+          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
+        },
+        "locate-path": {
+          "version": "5.0.0",
+          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
+          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
+          "requires": {
+            "p-locate": "^4.1.0"
+          }
+        },
+        "p-limit": {
+          "version": "2.3.0",
+          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
+          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
+          "requires": {
+            "p-try": "^2.0.0"
+          }
+        },
+        "p-locate": {
+          "version": "4.1.0",
+          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
+          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
+          "requires": {
+            "p-limit": "^2.2.0"
+          }
+        },
+        "p-try": {
+          "version": "2.2.0",
+          "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
+          "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
+        },
+        "path-exists": {
+          "version": "4.0.0",
+          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
+          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
+        },
+        "pluralize": {
+          "version": "8.0.0",
+          "resolved": "https://registry.npmjs.org/pluralize/-/pluralize-8.0.0.tgz",
+          "integrity": "sha512-Nc3IT5yHzflTfbjgqWcCPpo7DaKy4FnpB0l/zCAW0Tc7jxAiuqSxHasntB3D7887LSrA93kDJ9IXovxJYxyLCA=="
+        },
+        "require-main-filename": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
+          "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="
+        },
+        "string-width": {
+          "version": "4.2.0",
+          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
+          "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
+          "requires": {
+            "emoji-regex": "^8.0.0",
+            "is-fullwidth-code-point": "^3.0.0",
+            "strip-ansi": "^6.0.0"
+          }
+        },
+        "strip-ansi": {
+          "version": "6.0.0",
+          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
+          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
+          "requires": {
+            "ansi-regex": "^5.0.0"
+          }
+        },
+        "supports-color": {
+          "version": "7.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
+          "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
+          "requires": {
+            "has-flag": "^4.0.0"
+          }
+        },
+        "wrap-ansi": {
+          "version": "6.2.0",
+          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
+          "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
+          "requires": {
+            "ansi-styles": "^4.0.0",
+            "string-width": "^4.1.0",
+            "strip-ansi": "^6.0.0"
+          }
+        },
+        "y18n": {
+          "version": "4.0.0",
+          "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
+          "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w=="
+        },
+        "yargs": {
+          "version": "15.3.1",
+          "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.3.1.tgz",
+          "integrity": "sha512-92O1HWEjw27sBfgmXiixJWT5hRBp2eobqXicLtPBIDBhYB+1HpwZlXmbW2luivBJHBzki+7VyCLRtAkScbTBQA==",
+          "requires": {
+            "cliui": "^6.0.0",
+            "decamelize": "^1.2.0",
+            "find-up": "^4.1.0",
+            "get-caller-file": "^2.0.1",
+            "require-directory": "^2.1.1",
+            "require-main-filename": "^2.0.0",
+            "set-blocking": "^2.0.0",
+            "string-width": "^4.2.0",
+            "which-module": "^2.0.0",
+            "y18n": "^4.0.0",
+            "yargs-parser": "^18.1.1"
+          }
+        },
+        "yargs-parser": {
+          "version": "18.1.3",
+          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
+          "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
+          "requires": {
+            "camelcase": "^5.0.0",
+            "decamelize": "^1.2.0"
+          }
+        }
+      }
+    },
     "json-stable-stringify": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
@@ -8978,6 +9681,14 @@
         "object.assign": "^4.1.0"
       }
     },
+    "keyv": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
+      "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
+      "requires": {
+        "json-buffer": "3.0.0"
+      }
+    },
     "killable": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/killable/-/killable-1.0.1.tgz",
@@ -9005,6 +9716,14 @@
         "webpack-sources": "^1.1.0"
       }
     },
+    "latest-version": {
+      "version": "5.1.0",
+      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
+      "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
+      "requires": {
+        "package-json": "^6.3.0"
+      }
+    },
     "lazy-cache": {
       "version": "1.0.4",
       "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-1.0.4.tgz",
@@ -9152,6 +9871,11 @@
       "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
       "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="
     },
+    "lodash-id": {
+      "version": "0.14.0",
+      "resolved": "https://registry.npmjs.org/lodash-id/-/lodash-id-0.14.0.tgz",
+      "integrity": "sha1-uvSJNOVDobXWNG+MhGmLGoyAOJY="
+    },
     "lodash._reinterpolate": {
       "version": "3.0.0",
       "resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
@@ -9212,11 +9936,35 @@
         "js-tokens": "^3.0.0 || ^4.0.0"
       }
     },
+    "lowdb": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/lowdb/-/lowdb-1.0.0.tgz",
+      "integrity": "sha512-2+x8esE/Wb9SQ1F9IHaYWfsC9FIecLOPrK4g17FGEayjUWH172H6nwicRovGvSE2CPZouc2MCIqCI7h9d+GftQ==",
+      "requires": {
+        "graceful-fs": "^4.1.3",
+        "is-promise": "^2.1.0",
+        "lodash": "4",
+        "pify": "^3.0.0",
+        "steno": "^0.4.1"
+      },
+      "dependencies": {
+        "pify": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
+          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY="
+        }
+      }
+    },
     "lower-case": {
       "version": "1.1.4",
       "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-1.1.4.tgz",
       "integrity": "sha1-miyr0bno4K6ZOkv31YdcOcQujqw="
     },
+    "lowercase-keys": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
+      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
+    },
     "lru-cache": {
       "version": "5.1.1",
       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
@@ -9358,6 +10106,32 @@
       "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.3.0.tgz",
       "integrity": "sha512-2j4DAdlBOkiSZIsaXk4mTE3sRS02yBHAtfy127xRV3bQUFqXkjHCHLW6Scv7DwNRbIWNHH8zpnz9zMaKXIdvYw=="
     },
+    "method-override": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/method-override/-/method-override-3.0.0.tgz",
+      "integrity": "sha512-IJ2NNN/mSl9w3kzWB92rcdHpz+HjkxhDJWNDBqSlas+zQdP8wBiJzITPg08M/k2uVvMow7Sk41atndNtt/PHSA==",
+      "requires": {
+        "debug": "3.1.0",
+        "methods": "~1.1.2",
+        "parseurl": "~1.3.2",
+        "vary": "~1.1.2"
+      },
+      "dependencies": {
+        "debug": {
+          "version": "3.1.0",
+          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
+          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
+          "requires": {
+            "ms": "2.0.0"
+          }
+        },
+        "ms": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
+          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
+        }
+      }
+    },
     "methods": {
       "version": "1.1.2",
       "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
@@ -9415,6 +10189,11 @@
       "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
       "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
     },
+    "mimic-response": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
+      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ=="
+    },
     "mini-css-extract-plugin": {
       "version": "0.4.3",
       "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-0.4.3.tgz",
@@ -9508,6 +10287,38 @@
         "minimist": "^1.2.5"
       }
     },
+    "morgan": {
+      "version": "1.10.0",
+      "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.10.0.tgz",
+      "integrity": "sha512-AbegBVI4sh6El+1gNwvD5YIck7nSA36weD7xvIxG4in80j/UoK8AEGaWnnz8v1GxonMCltmlNs5ZKbGvl9b1XQ==",
+      "requires": {
+        "basic-auth": "~2.0.1",
+        "debug": "2.6.9",
+        "depd": "~2.0.0",
+        "on-finished": "~2.3.0",
+        "on-headers": "~1.0.2"
+      },
+      "dependencies": {
+        "debug": {
+          "version": "2.6.9",
+          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
+          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
+          "requires": {
+            "ms": "2.0.0"
+          }
+        },
+        "depd": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
+          "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="
+        },
+        "ms": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
+          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
+        }
+      }
+    },
     "move-concurrently": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
@@ -9551,6 +10362,11 @@
       "integrity": "sha512-isWHgVjnFjh2x2yuJ/tj3JbwoHu3UC2dX5G/88Cm24yB6YopVgxvBObDY7n5xW6ExmFhJpSEQqFPvq9zaXc8Jw==",
       "optional": true
     },
+    "nanoid": {
+      "version": "2.1.11",
+      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-2.1.11.tgz",
+      "integrity": "sha512-s/snB+WGm6uwi0WjsZdaVcuf3KJXlfGl2LcxgwkEwJF0D/BWzVWAZW/XY4bFaiR7s0Jk3FPvlnepg1H1b1UwlA=="
+    },
     "nanomatch": {
       "version": "1.2.13",
       "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
@@ -9960,6 +10776,11 @@
       "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
       "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
     },
+    "p-cancelable": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
+      "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw=="
+    },
     "p-defer": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
@@ -10001,6 +10822,24 @@
       "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
       "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
     },
+    "package-json": {
+      "version": "6.5.0",
+      "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
+      "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
+      "requires": {
+        "got": "^9.6.0",
+        "registry-auth-token": "^4.0.0",
+        "registry-url": "^5.0.0",
+        "semver": "^6.2.0"
+      },
+      "dependencies": {
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
+        }
+      }
+    },
     "pako": {
       "version": "1.0.11",
       "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
@@ -10178,6 +11017,14 @@
         "find-up": "^2.1.0"
       }
     },
+    "please-upgrade-node": {
+      "version": "3.2.0",
+      "resolved": "https://registry.npmjs.org/please-upgrade-node/-/please-upgrade-node-3.2.0.tgz",
+      "integrity": "sha512-gQR3WpIgNIKwBMVLkpMUeR3e1/E1y42bqDQZfql+kDeXd8COYfM8PQA4X6y7a8u9Ua9FHmsrrmirW2vHs45hWg==",
+      "requires": {
+        "semver-compare": "^1.0.0"
+      }
+    },
     "pluralize": {
       "version": "7.0.0",
       "resolved": "https://registry.npmjs.org/pluralize/-/pluralize-7.0.0.tgz",
@@ -13553,6 +14400,11 @@
       "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
       "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="
     },
+    "prepend-http": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
+      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc="
+    },
     "preserve": {
       "version": "0.2.0",
       "resolved": "https://registry.npmjs.org/preserve/-/preserve-0.2.0.tgz",
@@ -13717,6 +14569,14 @@
       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
       "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
     },
+    "pupa": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.0.1.tgz",
+      "integrity": "sha512-hEJH0s8PXLY/cdXh66tNEQGndDrIKNqNC5xmrysZy3i5C3oEoLna7YAOad+7u125+zH1HNXUmGEkrhb3c2VriA==",
+      "requires": {
+        "escape-goat": "^2.0.0"
+      }
+    },
     "q": {
       "version": "1.5.1",
       "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
@@ -13812,6 +14672,17 @@
         }
       }
     },
+    "rc": {
+      "version": "1.2.8",
+      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
+      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
+      "requires": {
+        "deep-extend": "^0.6.0",
+        "ini": "~1.3.0",
+        "minimist": "^1.2.0",
+        "strip-json-comments": "~2.0.1"
+      }
+    },
     "react": {
       "version": "16.7.0-alpha.2",
       "resolved": "https://registry.npmjs.org/react/-/react-16.7.0-alpha.2.tgz",
@@ -13984,6 +14855,18 @@
         }
       }
     },
+    "react-diff-view": {
+      "version": "2.4.3",
+      "resolved": "https://registry.npmjs.org/react-diff-view/-/react-diff-view-2.4.3.tgz",
+      "integrity": "sha512-7pCMzojlN2ql0ppg4Ppcg3STpJw3l98AA4fZqmUuSYNtX2D9jVLNHT60c+UGKQwfWRFKQPrswq0o4BOy4SpRzw==",
+      "requires": {
+        "classnames": "^2.2.6",
+        "diff-match-patch": "^1.0.4",
+        "recompose": "^0.30.0",
+        "shallow-equal": "^1.2.0",
+        "warning": "^4.0.2"
+      }
+    },
     "react-dom": {
       "version": "16.7.0-alpha.2",
       "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-16.7.0-alpha.2.tgz",
@@ -14005,6 +14888,11 @@
       "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
       "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
     },
+    "react-lifecycles-compat": {
+      "version": "3.0.4",
+      "resolved": "https://registry.npmjs.org/react-lifecycles-compat/-/react-lifecycles-compat-3.0.4.tgz",
+      "integrity": "sha512-fBASbA6LnOU9dOU2eW7aQ8xmYBSXUIWr+UmF9b1efZBazGNO+rcXT/icdKnYm2pTwcRylVUYwW7H1PHfLekVzA=="
+    },
     "react-scripts": {
       "version": "2.1.1",
       "resolved": "https://registry.npmjs.org/react-scripts/-/react-scripts-2.1.1.tgz",
@@ -14388,6 +15276,19 @@
         "util.promisify": "^1.0.0"
       }
     },
+    "recompose": {
+      "version": "0.30.0",
+      "resolved": "https://registry.npmjs.org/recompose/-/recompose-0.30.0.tgz",
+      "integrity": "sha512-ZTrzzUDa9AqUIhRk4KmVFihH0rapdCSMFXjhHbNrjAWxBuUD/guYlyysMnuHjlZC/KRiOKRtB4jf96yYSkKE8w==",
+      "requires": {
+        "@babel/runtime": "^7.0.0",
+        "change-emitter": "^0.1.2",
+        "fbjs": "^0.8.1",
+        "hoist-non-react-statics": "^2.3.1",
+        "react-lifecycles-compat": "^3.0.2",
+        "symbol-observable": "^1.0.4"
+      }
+    },
     "recursive-readdir": {
       "version": "2.2.2",
       "resolved": "https://registry.npmjs.org/recursive-readdir/-/recursive-readdir-2.2.2.tgz",
@@ -14467,6 +15368,22 @@
         "unicode-match-property-value-ecmascript": "^1.2.0"
       }
     },
+    "registry-auth-token": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.1.1.tgz",
+      "integrity": "sha512-9bKS7nTl9+/A1s7tnPeGrUpRcVY+LUh7bfFgzpndALdPfXQBfQV77rQVtqgUV3ti4vc/Ik81Ex8UJDWDQ12zQA==",
+      "requires": {
+        "rc": "^1.2.8"
+      }
+    },
+    "registry-url": {
+      "version": "5.1.0",
+      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
+      "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
+      "requires": {
+        "rc": "^1.2.8"
+      }
+    },
     "regjsgen": {
       "version": "0.5.1",
       "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.1.tgz",
@@ -14700,6 +15617,14 @@
       "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
       "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
     },
+    "responselike": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
+      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
+      "requires": {
+        "lowercase-keys": "^1.0.0"
+      }
+    },
     "restore-cursor": {
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
@@ -15173,6 +16098,26 @@
       "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
       "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
     },
+    "semver-compare": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/semver-compare/-/semver-compare-1.0.0.tgz",
+      "integrity": "sha1-De4hahyUGrN+nvsXiPavxf9VN/w="
+    },
+    "semver-diff": {
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
+      "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
+      "requires": {
+        "semver": "^6.3.0"
+      },
+      "dependencies": {
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
+        }
+      }
+    },
     "send": {
       "version": "0.17.1",
       "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
@@ -15286,6 +16231,11 @@
         "send": "0.17.1"
       }
     },
+    "server-destroy": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/server-destroy/-/server-destroy-1.0.1.tgz",
+      "integrity": "sha1-8Tv5KOQrnD55OD5hzDmYtdFObN0="
+    },
     "set-blocking": {
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
@@ -15357,6 +16307,11 @@
         }
       }
     },
+    "shallow-equal": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/shallow-equal/-/shallow-equal-1.2.1.tgz",
+      "integrity": "sha512-S4vJDjHHMBaiZuT9NPb616CSmLf618jawtv3sufLl6ivK8WocjAo58cXwbRV1cgqxH0Qbv+iUt6m05eqEa2IRA=="
+    },
     "shebang-command": {
       "version": "1.2.0",
       "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
@@ -15772,6 +16727,14 @@
       "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
       "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks="
     },
+    "steno": {
+      "version": "0.4.4",
+      "resolved": "https://registry.npmjs.org/steno/-/steno-0.4.4.tgz",
+      "integrity": "sha1-BxEFvfwobmYVwEA8J+nXtdy4Vcs=",
+      "requires": {
+        "graceful-fs": "^4.1.3"
+      }
+    },
     "stream-browserify": {
       "version": "2.0.2",
       "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
@@ -16081,6 +17044,11 @@
         }
       }
     },
+    "symbol-observable": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.2.0.tgz",
+      "integrity": "sha512-e900nM8RRtGhlV36KGEU9k65K3mPb1WV70OdjfxlG2EAuM1noi/E/BaW/uMhL7bPEssK8QV57vN3esixjUvcXQ=="
+    },
     "symbol-tree": {
       "version": "3.2.4",
       "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
@@ -16104,6 +17072,11 @@
       "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.3.tgz",
       "integrity": "sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA=="
     },
+    "term-size": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.0.tgz",
+      "integrity": "sha512-a6sumDlzyHVJWb8+YofY4TW112G6p2FCPEAFk+59gIYHv3XHRhm9ltVQ9kli4hNWeQBwSpe8cRN25x0ROunMOw=="
+    },
     "terser": {
       "version": "3.17.0",
       "resolved": "https://registry.npmjs.org/terser/-/terser-3.17.0.tgz",
@@ -16307,6 +17280,11 @@
         "kind-of": "^3.0.2"
       }
     },
+    "to-readable-stream": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
+      "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q=="
+    },
     "to-regex": {
       "version": "3.0.2",
       "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
@@ -16409,6 +17387,11 @@
         "prelude-ls": "~1.1.2"
       }
     },
+    "type-fest": {
+      "version": "0.8.1",
+      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
+      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA=="
+    },
     "type-is": {
       "version": "1.6.18",
       "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
@@ -16423,6 +17406,19 @@
       "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
       "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
     },
+    "typedarray-to-buffer": {
+      "version": "3.1.5",
+      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
+      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
+      "requires": {
+        "is-typedarray": "^1.0.0"
+      }
+    },
+    "ua-parser-js": {
+      "version": "0.7.21",
+      "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.21.tgz",
+      "integrity": "sha512-+O8/qh/Qj8CgC6eYBVBykMrNtp5Gebn4dlGD/kKXVkJNDwyrAwSIqwz8CDf+tsAIWVycKcku6gIXJ0qwx/ZXaQ=="
+    },
     "uglify-js": {
       "version": "3.4.10",
       "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.4.10.tgz",
@@ -16628,6 +17624,14 @@
         "imurmurhash": "^0.1.4"
       }
     },
+    "unique-string": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
+      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
+      "requires": {
+        "crypto-random-string": "^2.0.0"
+      }
+    },
     "universalify": {
       "version": "0.1.2",
       "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
@@ -16684,6 +17688,85 @@
       "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
       "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg=="
     },
+    "update-notifier": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-4.1.0.tgz",
+      "integrity": "sha512-w3doE1qtI0/ZmgeoDoARmI5fjDoT93IfKgEGqm26dGUOh8oNpaSTsGNdYRN/SjOuo10jcJGwkEL3mroKzktkew==",
+      "requires": {
+        "boxen": "^4.2.0",
+        "chalk": "^3.0.0",
+        "configstore": "^5.0.1",
+        "has-yarn": "^2.1.0",
+        "import-lazy": "^2.1.0",
+        "is-ci": "^2.0.0",
+        "is-installed-globally": "^0.3.1",
+        "is-npm": "^4.0.0",
+        "is-yarn-global": "^0.3.0",
+        "latest-version": "^5.0.0",
+        "pupa": "^2.0.1",
+        "semver-diff": "^3.1.1",
+        "xdg-basedir": "^4.0.0"
+      },
+      "dependencies": {
+        "ansi-styles": {
+          "version": "4.2.1",
+          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
+          "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
+          "requires": {
+            "@types/color-name": "^1.1.1",
+            "color-convert": "^2.0.1"
+          }
+        },
+        "chalk": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
+          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
+          "requires": {
+            "ansi-styles": "^4.1.0",
+            "supports-color": "^7.1.0"
+          }
+        },
+        "ci-info": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
+          "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
+        },
+        "color-convert": {
+          "version": "2.0.1",
+          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
+          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
+          "requires": {
+            "color-name": "~1.1.4"
+          }
+        },
+        "color-name": {
+          "version": "1.1.4",
+          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
+          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
+        },
+        "has-flag": {
+          "version": "4.0.0",
+          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
+          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
+        },
+        "is-ci": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
+          "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
+          "requires": {
+            "ci-info": "^2.0.0"
+          }
+        },
+        "supports-color": {
+          "version": "7.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
+          "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
+          "requires": {
+            "has-flag": "^4.0.0"
+          }
+        }
+      }
+    },
     "upper-case": {
       "version": "1.1.3",
       "resolved": "https://registry.npmjs.org/upper-case/-/upper-case-1.1.3.tgz",
@@ -16737,6 +17820,14 @@
         "requires-port": "^1.0.0"
       }
     },
+    "url-parse-lax": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
+      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
+      "requires": {
+        "prepend-http": "^2.0.0"
+      }
+    },
     "use": {
       "version": "3.1.1",
       "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
@@ -16846,6 +17937,14 @@
         "makeerror": "1.0.x"
       }
     },
+    "warning": {
+      "version": "4.0.3",
+      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",
+      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",
+      "requires": {
+        "loose-envify": "^1.0.0"
+      }
+    },
     "watch": {
       "version": "0.18.0",
       "resolved": "https://registry.npmjs.org/watch/-/watch-0.18.0.tgz",
@@ -17431,6 +18530,49 @@
       "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
       "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
     },
+    "widest-line": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
+      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
+      "requires": {
+        "string-width": "^4.0.0"
+      },
+      "dependencies": {
+        "ansi-regex": {
+          "version": "5.0.0",
+          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
+          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
+        },
+        "emoji-regex": {
+          "version": "8.0.0",
+          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
+        },
+        "is-fullwidth-code-point": {
+          "version": "3.0.0",
+          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
+          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
+        },
+        "string-width": {
+          "version": "4.2.0",
+          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
+          "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
+          "requires": {
+            "emoji-regex": "^8.0.0",
+            "is-fullwidth-code-point": "^3.0.0",
+            "strip-ansi": "^6.0.0"
+          }
+        },
+        "strip-ansi": {
+          "version": "6.0.0",
+          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
+          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
+          "requires": {
+            "ansi-regex": "^5.0.0"
+          }
+        }
+      }
+    },
     "word-wrap": {
       "version": "1.2.3",
       "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
@@ -17658,6 +18800,11 @@
       "resolved": "https://registry.npmjs.org/ws/-/ws-7.2.3.tgz",
       "integrity": "sha512-HTDl9G9hbkNDk98naoR/cHDws7+EyYMOdL1BmjsZXRUjf7d+MficC4B7HLUPlSiho0vg+CWKrGIt/VJBd1xunQ=="
     },
+    "xdg-basedir": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
+      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q=="
+    },
     "xml-name-validator": {
       "version": "3.0.0",
       "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
diff --git a/package.json b/package.json
index 0989921..4f09176 100644
--- a/package.json
+++ b/package.json
@@ -5,7 +5,9 @@
   "private": true,
   "dependencies": {
     "isomorphic-unfetch": "^3.0.0",
+    "json-server": "^0.16.1",
     "react": "16.7.0-alpha.2",
+    "react-diff-view": "^2.4.3",
     "react-dom": "16.7.0-alpha.2",
     "react-scripts": "2.1.1",
     "swr": "^0.2.0"
diff --git a/src/actions/index.js b/src/actions/index.js
index 8982892..579b9eb 100644
--- a/src/actions/index.js
+++ b/src/actions/index.js
@@ -1,12 +1,15 @@
-let nextTodoId = 0;
-export const resetTodos = data => ({
-  type: "RESET_TODOS",
-  data,
-});
+let nextTodoId = 1;
+export const resetTodos = data => {
+  nextTodoId = data.length;
+  return {
+    type: "RESET_TODOS",
+    data,
+  };
+};
 
 export const addTodo = text => ({
   type: "ADD_TODO",
-  id: nextTodoId++,
+  id: ++nextTodoId,
   text
 });
  
diff --git a/src/components/react-diff-view.css b/src/components/react-diff-view.css
new file mode 100644
index 0000000..06b7d1c
--- /dev/null
+++ b/src/components/react-diff-view.css
@@ -0,0 +1,132 @@
+:root {
+    --diff-background-color: initial;
+    --diff-text-color: initial;
+    --diff-font-family: Consolas, Courier, monospace;
+    --diff-selection-background-color: #b3d7ff;
+    --diff-gutter-insert-background-color: #d6fedb;
+    --diff-gutter-delete-background-color: #fadde0;
+    --diff-gutter-selected-background-color: #fffce0;
+    --diff-code-insert-background-color: #eaffee;
+    --diff-code-delete-background-color: #fdeff0;
+    --diff-code-insert-edit-background-color: #c0dc91;
+    --diff-code-delete-edit-background-color: #f39ea2;
+    --diff-code-selected-background-color: #fffce0;
+    --diff-omit-gutter-line-color: #cb2a1d;
+}
+
+.diff {
+    background-color: var(--diff-background-color);
+    color: var(--diff-text-color);
+    table-layout: fixed;
+    border-collapse: collapse;
+    width: 100%;
+}
+
+.diff::selection {
+    background-color: var(--diff-selection-background-color);
+}
+
+.diff td {
+    vertical-align: top;
+    padding-top: 0;
+    padding-bottom: 0;
+}
+
+.diff-line {
+    line-height: 1.5;
+    font-family: var(--diff-font-family);
+}
+
+.diff-gutter > a {
+    color: inherit;
+    display: block;
+}
+
+.diff-gutter,
+.diff-gutter > a {
+    padding: 0 1ch;
+    text-align: right;
+    cursor: pointer;
+    user-select: none;
+}
+
+.diff-gutter-insert {
+    background-color: var(--diff-gutter-insert-background-color);
+}
+
+.diff-gutter-delete {
+    background-color: var(--diff-gutter-delete-background-color);
+}
+
+.diff-gutter-omit {
+    cursor: default;
+}
+
+.diff-gutter-selected {
+    background-color: var(--diff-gutter-selected-background-color);
+}
+
+.diff-code {
+    white-space: pre-wrap;
+    word-wrap: break-word;
+    word-break: break-all;
+    padding: 0 0 0 0.5em;
+}
+
+.diff-code-edit {
+    display: inline-block;
+    color: inherit;
+}
+
+.diff-code-insert {
+    background-color: var(--diff-code-insert-background-color);
+}
+
+.diff-code-insert .diff-code-edit {
+    background-color: var(--diff-code-insert-edit-background-color);
+}
+
+.diff-code-delete {
+    background-color: var(--diff-code-delete-background-color);
+}
+
+.diff-code-delete .diff-code-edit {
+    background-color: var(--diff-code-delete-edit-background-color);
+}
+
+.diff-code-selected {
+    background-color: var(--diff-code-selected-background-color);
+}
+
+.diff-widget-content {
+    vertical-align: top;
+}
+
+.diff-gutter-col {
+    width: 7ch;
+}
+
+.diff-gutter-omit {
+    height: 0;
+}
+
+.diff-gutter-omit:before {
+    content: ' ';
+    display: block;
+    white-space: pre;
+    width: 2px;
+    height: 100%;
+    margin-left: 4.6ch;
+    overflow: hidden;
+    background-color: var(--diff-omit-gutter-line-color);
+}
+
+.diff-decoration {
+    line-height: 1.5;
+    user-select: none;
+}
+
+.diff-decoration-content {
+    font-family: var(--diff-font-family);
+    padding: 0;
+}
diff --git a/src/containers/AddTodo.js b/src/containers/AddTodo.js
index 2ef762c..b314d1b 100644
--- a/src/containers/AddTodo.js
+++ b/src/containers/AddTodo.js
@@ -1,6 +1,24 @@
 import React, { useContext } from "react";
+
 import { addTodo } from "../actions";
 import StoreContext from "../store/StoreContext";
+import fetcher from '../libs/fetch';
+
+const asyncAddTodo = async (text, dispatch) => {
+  const json = await fetcher('http://localhost:3001/todo', {
+    method: 'POST',
+    headers: {
+      'Content-Type': 'application/json'
+    },
+    body: JSON.stringify({ 
+      id: 11,
+      text,
+      completed: false,
+     })
+  });
+
+  dispatch(addTodo(json));
+};
 
 const AddTodo = () => {
   let input;
@@ -14,7 +32,7 @@ const AddTodo = () => {
           if (!input.value.trim()) {
             return;
           }
-          dispatch(addTodo(input.value));
+          asyncAddTodo(input.value.trim(), dispatch);
           input.value = "";
         }}
       >
diff --git a/src/containers/VisibleTodoList.js b/src/containers/VisibleTodoList.js
index 5db4ef2..a7b341c 100644
--- a/src/containers/VisibleTodoList.js
+++ b/src/containers/VisibleTodoList.js
@@ -5,6 +5,7 @@ import { changeTodo, resetTodos } from "../actions";
 import TodoList from "../components/TodoList";
 import { VisibilityFilters } from "../actions";
 import StoreContext from "../store/StoreContext";
+import fetcher from '../libs/fetch';
 
 const getVisibleTodos = (todos, filter) => {
   switch (filter) {
@@ -19,20 +20,28 @@ const getVisibleTodos = (todos, filter) => {
   }
 };
 
-export default function VisibleTodoList() {
-  const [{ visibilityFilter }, dispatch] = useContext(StoreContext);
-  const { todos } = useSWR('/api/data', fetcher, {
+const Repos = () => {
+  const [{ todos, visibilityFilter }, dispatch] = useContext(StoreContext);
+  useSWR('http://localhost:3001/todo', fetcher, {
     suspense: true,
     onSuccess: (data, key, config) => {
       dispatch(resetTodos(data))
     },
   })
   return (
-    <Suspense fallback={<div>loading...</div>}>
-      <TodoList
-        todos={getVisibleTodos(todos, visibilityFilter)}
-        changeTodo={id => dispatch(changeTodo(id))}
-      />
-    </Suspense>
+    <TodoList
+      todos={getVisibleTodos(todos, visibilityFilter)}
+      changeTodo={id => dispatch(changeTodo(id))}
+    />
   );
 }
+
+export default () => {
+  return (
+    <>
+      <Suspense fallback={<div>loading...</div>}>
+        <Repos></Repos>
+      </Suspense>
+    </>
+  )
+}
\ No newline at end of file
`;
