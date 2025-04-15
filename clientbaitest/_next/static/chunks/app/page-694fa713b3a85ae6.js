(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    7432: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 7520));
    },
    7520: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => K });
      var n = a(5155),
        s = a(2115),
        i = a(5273);
      function r(e) {
        let { TextSound: t, targetLang: a } = e,
          [r, o] = (0, s.useState)(!1),
          l = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "en-US",
              a = new SpeechSynthesisUtterance(e);
            (a.lang = t), (a.rate = 1), (a.pitch = 1);
            let n = window.speechSynthesis
              .getVoices()
              .find((e) => e.lang === t);
            n && (a.voice = n),
              (a.onstart = () => {
                o(!0);
              }),
              (a.onend = () => {
                o(!1);
              }),
              window.speechSynthesis.speak(a);
          };
        return (0, n.jsx)("div", {
          children: (0, n.jsx)(i.A, {
            onClick: () => {
              "" != t && l(t, a);
            },
            className:
              "cursor-pointer transform transition-all duration-300 hover:scale-110 ".concat(
                r ? "text-red-500" : "text-gray-500"
              ),
          }),
        });
      }
      var o = a(2355),
        l = a(3052),
        c = a(2596),
        d = a(9688);
      function u() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, d.QP)((0, c.$)(t));
      }
      var g = a(2085);
      let h = (0, g.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function p(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)("nav", {
          role: "navigation",
          "aria-label": "pagination",
          "data-slot": "pagination",
          className: u("mx-auto flex w-full justify-center", t),
          ...a,
        });
      }
      function x(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)("ul", {
          "data-slot": "pagination-content",
          className: u("flex flex-row items-center gap-1", t),
          ...a,
        });
      }
      function m(e) {
        let { ...t } = e;
        return (0, n.jsx)("li", { "data-slot": "pagination-item", ...t });
      }
      function f(e) {
        let { className: t, isActive: a, size: s = "icon", ...i } = e;
        return (0, n.jsx)("a", {
          "aria-current": a ? "page" : void 0,
          "data-slot": "pagination-link",
          "data-active": a,
          className: u(h({ variant: a ? "outline" : "ghost", size: s }), t),
          ...i,
        });
      }
      function v(e) {
        let { className: t, ...a } = e;
        return (0, n.jsxs)(f, {
          "aria-label": "Go to previous page",
          size: "default",
          className: u("gap-1 px-2.5 sm:pl-2.5", t),
          ...a,
          children: [
            (0, n.jsx)(o.A, {}),
            (0, n.jsx)("span", {
              className: "hidden sm:block",
              children: "Previous",
            }),
          ],
        });
      }
      function j(e) {
        let { className: t, ...a } = e;
        return (0, n.jsxs)(f, {
          "aria-label": "Go to next page",
          size: "default",
          className: u("gap-1 px-2.5 sm:pr-2.5", t),
          ...a,
          children: [
            (0, n.jsx)("span", {
              className: "hidden sm:block",
              children: "Next",
            }),
            (0, n.jsx)(l.A, {}),
          ],
        });
      }
      var b = a(6671),
        y = a(2525);
      function w(e) {
        let { Historys: t } = e,
          [a, i] = (0, s.useState)(""),
          o = "https://translateserver.nguyenkimhung.id.vn/api",
          [l, c] = (0, s.useState)([]),
          [d, u] = (0, s.useState)(!1),
          [g, h] = (0, s.useState)(null),
          [w, _] = (0, s.useState)(1),
          [N, k] = (0, s.useState)(1);
        (0, s.useEffect)(() => {
          fetch("http://ip-api.com/json")
            .then((e) => e.json())
            .then((e) => i(e.query))
            .catch((e) => {
              console.error("Error fetching IP:", e),
                h("Kh\xf4ng thể lấy IP người d\xf9ng.");
            });
        }, []),
          (0, s.useEffect)(() => {
            a &&
              (async () => {
                u(!0), h(null);
                try {
                  let e = await fetch(
                      "".concat(o, "/Historys?page=").concat(w),
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ IP_indress: a }),
                      }
                    ),
                    t = await e.json();
                  e.ok && t.data
                    ? (c(t.data),
                      t.pagination &&
                        (_(t.pagination.current_page),
                        k(t.pagination.last_page)))
                    : h(t.message || "Kh\xf4ng c\xf3 lịch sử dịch.");
                } catch (e) {
                  console.error("Lỗi lấy dữ liệu:", e),
                    h("C\xf3 lỗi xảy ra khi lấy lịch sử.");
                } finally {
                  u(!1);
                }
              })();
          }, [a, w, t]);
        let S = (e) => {
            e >= 1 && e <= N && _(e);
          },
          C = async (e, t) => {
            try {
              let a = await fetch("".concat(o, "/Historys/delete-by-id"), {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: e, IP_indress: t }),
                }),
                n = await a.json();
              a.ok
                ? (c((t) => t.filter((t) => t.id !== e)),
                  b.oR.success("X\xf3a th\xe0nh c\xf4ng!", {
                    position: "top-right",
                  }))
                : alert(n.message || "Kh\xf4ng thể x\xf3a lịch sử");
            } catch (e) {
              console.error("Error deleting history:", e),
                alert("C\xf3 lỗi xảy ra khi x\xf3a lịch sử");
            }
          };
        return (0, n.jsxs)("div", {
          className: "w-full mt-8",
          children: [
            (0, n.jsx)(b.l$, {}),
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between mb-4",
              children: [
                (0, n.jsx)("h1", {
                  className: "text-2xl font-bold",
                  children: "Historys",
                }),
                (0, n.jsx)(p, {
                  children: (0, n.jsxs)(x, {
                    children: [
                      (0, n.jsx)(m, {
                        children: (0, n.jsx)(v, {
                          href: "#",
                          onClick: () => S(w - 1),
                        }),
                      }),
                      Array.from({ length: N }, (e, t) =>
                        (0, n.jsx)(
                          m,
                          {
                            children: (0, n.jsx)(f, {
                              href: "#",
                              isActive: w === t + 1,
                              onClick: () => S(t + 1),
                              children: t + 1,
                            }),
                          },
                          t
                        )
                      ),
                      (0, n.jsx)(m, {
                        children: (0, n.jsx)(j, {
                          href: "#",
                          onClick: () => S(w + 1),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "p-2 rounded-xl border border-gray-200 bg-gray-50",
              children: d
                ? (0, n.jsx)("div", {
                    className: "text-center text-gray-500 animate-pulse",
                    children: "Đang tải...",
                  })
                : g || 0 === l.length
                ? (0, n.jsx)("div", {
                    className: "text-center text-gray-500 animate-pulse",
                    children: "Kh\xf4ng c\xf3 lịch sử n\xe0o.",
                  })
                : (0, n.jsx)("div", {
                    className: "space-y-4",
                    children: l.map((e) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          className:
                            "p-4 bg-white rounded-lg shadow-md border border-gray-300 w-full",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "text-sm text-gray-500",
                                  children: e.ip_address,
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "text-sm text-gray-500",
                                      children: new Date(
                                        e.updated_at
                                      ).toLocaleString(),
                                    }),
                                    (0, n.jsx)("button", {
                                      className:
                                        "text-red-500 hover:text-red-700 cursor-pointer",
                                      onClick: () => C(e.id, e.ip_address),
                                      children: (0, n.jsx)(y.A, { size: 20 }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "mt-2",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "font-medium flex items-center gap-3",
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: "Original Text",
                                    }),
                                    (0, n.jsx)(r, {
                                      TextSound: e.original_text,
                                      targetLang: e.source_language_id,
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: "text-gray-700 break-words",
                                  children: '"'.concat(e.original_text, '"'),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "mt-5",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "font-medium flex items-center gap-3",
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: "Translated Text",
                                    }),
                                    (0, n.jsx)(r, {
                                      TextSound: e.translated_text,
                                      targetLang: e.target_language_id,
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: "text-gray-700 break-words",
                                  children: '"'.concat(e.translated_text, '"'),
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "mt-2 flex justify-end items-center",
                              children: (0, n.jsxs)("span", {
                                className: "text-sm text-gray-500",
                                children: ["Status: ", e.status],
                              }),
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
            }),
          ],
        });
      }
      var _ = a(4357),
        N = a(8262),
        k = a(6474);
      function S(e) {
        let { className: t, children: a, viewport: s = !0, ...i } = e;
        return (0, n.jsxs)(N.bL, {
          "data-slot": "navigation-menu",
          "data-viewport": s,
          className: u(
            "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
            t
          ),
          ...i,
          children: [a, s && (0, n.jsx)(z, {})],
        });
      }
      function C(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)(N.B8, {
          "data-slot": "navigation-menu-list",
          className: u(
            "group flex flex-1 list-none items-center justify-center gap-1",
            t
          ),
          ...a,
        });
      }
      function P(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)(N.q7, {
          "data-slot": "navigation-menu-item",
          className: u("relative", t),
          ...a,
        });
      }
      let T = (0, g.F)(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
      );
      function L(e) {
        let { className: t, children: a, ...s } = e;
        return (0, n.jsxs)(N.l9, {
          "data-slot": "navigation-menu-trigger",
          className: u(T(), "group", t),
          ...s,
          children: [
            a,
            " ",
            (0, n.jsx)(k.A, {
              className:
                "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
              "aria-hidden": "true",
            }),
          ],
        });
      }
      function E(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)(N.UC, {
          "data-slot": "navigation-menu-content",
          className: u(
            "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
            "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
            t
          ),
          ...a,
        });
      }
      function z(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: u(
            "absolute top-full left-0 isolate z-50 flex justify-center"
          ),
          children: (0, n.jsx)(N.LM, {
            "data-slot": "navigation-menu-viewport",
            className: u(
              "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
              t
            ),
            ...a,
          }),
        });
      }
      function O(e) {
        let { className: t, ...a } = e;
        return (0, n.jsx)(N.N_, {
          "data-slot": "navigation-menu-link",
          className: u(
            "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...a,
        });
      }
      function I(e) {
        let { onChange: t } = e,
          [a, i] = (0, s.useState)(navigator.language.split("-")[0] || "vi"),
          [r, o] = (0, s.useState)(null),
          [l, c] = (0, s.useState)([]),
          d = "https://translateserver.nguyenkimhung.id.vn/api";
        (0, s.useEffect)(() => {
          fetch("".concat(d, "/languages"))
            .then((e) => e.json())
            .then((e) => {
              c(
                e.sort((e, t) =>
                  e.language_name_vi < t.language_name_vi
                    ? -1
                    : +(e.language_name_vi > t.language_name_vi)
                )
              );
            })
            .catch((e) => {
              console.error("Error fetching languages:", e);
            });
        }, [d]),
          (0, s.useEffect)(() => {
            if (l.length > 0) {
              let e = l.find((e) => e.language_code === a);
              o(e ? e.language_name_vi : "Kh\xf4ng truy cập được ng\xf4n ngữ");
            }
          }, [l, a]);
        let u = (e) => {
          o(e.language_name_vi), i(e.language_code), t(e.language_code);
        };
        return (0, n.jsx)(S, {
          children: (0, n.jsx)(C, {
            children: (0, n.jsxs)(P, {
              children: [
                (0, n.jsx)(L, {
                  className: "cursor-pointer",
                  children: r || "Đang tải ...",
                }),
                (0, n.jsx)(E, {
                  className: "min-w-[1000px] left-0 !transform-none",
                  children: (0, n.jsx)("div", {
                    className:
                      "overflow-y-auto max-h-64 grid grid-cols-5 gap-2 p-2",
                    children: l.map((e) =>
                      (0, n.jsx)(
                        O,
                        {
                          className:
                            "cursor-pointer text-sm hover:bg-gray-100 rounded px-2 py-1",
                          onClick: () => u(e),
                          children: e.language_name_vi,
                        },
                        e.id
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function A(e) {
        let { onChange: t } = e,
          [a, i] = (0, s.useState)("en"),
          [r, o] = (0, s.useState)(null),
          [l, c] = (0, s.useState)([]),
          d = "https://translateserver.nguyenkimhung.id.vn/api";
        (0, s.useEffect)(() => {
          fetch("".concat(d, "/languages"))
            .then((e) => e.json())
            .then((e) => {
              c(
                e.sort((e, t) =>
                  e.language_name_vi < t.language_name_vi
                    ? -1
                    : +(e.language_name_vi > t.language_name_vi)
                )
              );
            })
            .catch((e) => {
              console.error("Error fetching languages:", e);
            });
        }, [d]),
          (0, s.useEffect)(() => {
            if (l.length > 0) {
              let e = l.find((e) => e.language_code === a);
              o(e ? e.language_name_vi : "Kh\xf4ng truy cập được ng\xf4n ngữ");
            }
          }, [l, a]);
        let u = (e) => {
          o(e.language_name_vi), i(e.language_code), t(e.language_code);
        };
        return (0, n.jsx)(S, {
          children: (0, n.jsx)(C, {
            children: (0, n.jsxs)(P, {
              children: [
                (0, n.jsx)(L, {
                  className: "cursor-pointer",
                  children: r || "Đang tải ...",
                }),
                (0, n.jsx)(E, {
                  className: "min-w-[700px] left-0 !transform-none",
                  children: (0, n.jsx)("div", {
                    className:
                      "overflow-y-auto max-h-64 grid grid-cols-5 gap-2 p-2",
                    children: l.map((e) =>
                      (0, n.jsx)(
                        O,
                        {
                          className:
                            "cursor-pointer text-sm hover:bg-gray-100 rounded px-2 py-1",
                          onClick: () => u(e),
                          children: e.language_name_vi,
                        },
                        e.id
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var R = a(9588);
      function H(e) {
        let { sendDataToParent: t } = e,
          [a, i] = (0, s.useState)(!1),
          r = (0, s.useRef)(null),
          o = () => {
            if (
              !(
                "SpeechRecognition" in window ||
                "webkitSpeechRecognition" in window
              )
            )
              return void alert("Cấp quyền bật mịc ạ");
            let e = new (window.SpeechRecognition ||
              window.webkitSpeechRecognition)();
            (e.lang = "vi-VN"),
              (e.interimResults = !0),
              (e.continuous = !1),
              (e.onresult = (e) => {
                t(e.results[e.resultIndex][0].transcript);
              }),
              (e.onspeechend = () => {
                e.stop(), i(!1);
              }),
              (r.current = e);
          };
        return (
          (0, s.useEffect)(() => {
            o();
          }, []),
          (0, n.jsx)("div", {
            children: (0, n.jsx)(R.A, {
              onClick: () => {
                var e, t;
                a
                  ? (null == (e = r.current) || e.stop(), i(!1))
                  : (null == (t = r.current) || t.start(), i(!0));
              },
              className:
                "cursor-pointer transform transition-all duration-300 hover:scale-110 ".concat(
                  a ? "text-red-500" : "hover:text-black"
                ),
            }),
          })
        );
      }
      function K() {
        let e = (0, s.useRef)(null),
          [t, a] = (0, s.useState)(165),
          [i, o] = (0, s.useState)("vi"),
          [l, c] = (0, s.useState)("en"),
          [d, u] = (0, s.useState)(""),
          [g, h] = (0, s.useState)(""),
          [p, x] = (0, s.useState)(!1),
          [m, f] = (0, s.useState)({
            IP_indress: null,
            targetLang: "",
            OutLang: "",
            PostCodeTarget: "",
            PostCOdeOutLang: "",
          });
        (0, s.useEffect)(() => {
          fetch("http://ip-api.com/json")
            .then((e) => e.json())
            .then((e) => {
              f((t) => ({ ...t, IP_indress: e.query }));
            })
            .catch((e) => console.error("Error fetching IP:", e));
        }, []);
        let v = (n) => {
            let s = e.current;
            if ((u(n.target.value), s)) {
              s.style.height = "auto";
              let e = s.scrollHeight;
              (s.style.height = "".concat(e, "px")), e !== t && a(e);
            }
          },
          j = (e) => ("zh-TW" === e || "zh-HK" === e ? "zh" : e);
        (0, s.useEffect)(() => {
          if (!d.trim()) {
            h(""), x(!1);
            return;
          }
          let e = setTimeout(() => {
            let e = encodeURIComponent(d.trim()),
              t = j(i),
              a = j(l),
              n = "https://lingva.ml/api/v1/"
                .concat(t, "/")
                .concat(a, "/")
                .concat(e);
            x(!0),
              console.log("Gọi API:", n),
              fetch(n)
                .then((e) => e.json())
                .then((e) => {
                  if (e && e.translation) {
                    h(e.translation);
                    let t = {
                      IP_indress: m.IP_indress,
                      targetLang: d,
                      OutLang: e.translation,
                      PostCodeTarget: i,
                      PostCOdeOutLang: l,
                    };
                    t.IP_indress &&
                      t.targetLang &&
                      t.OutLang &&
                      fetch(
                        "".concat(
                          "https://translateserver.nguyenkimhung.id.vn/api",
                          "/addHistory"
                        ),
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            ip_address: t.IP_indress,
                            original_text: t.targetLang,
                            translated_text: t.OutLang,
                            source_language_id: t.PostCodeTarget,
                            target_language_id: t.PostCOdeOutLang,
                            status: "success",
                          }),
                        }
                      )
                        .then((e) => e.json())
                        .then((e) => {
                          console.log(
                            "Dữ liệu đ\xe3 được gửi th\xe0nh c\xf4ng:",
                            e
                          );
                        })
                        .catch((e) => {
                          console.log("Lỗi khi gửi dữ liệu:", e);
                        }),
                      f(t);
                  } else h("Kh\xf4ng thể dịch nội dung.");
                })
                .catch((e) => {
                  console.log("Lỗi khi dịch:", e),
                    h("Văn bản qu\xe1 d\xe0i giới hạn 180 k\xed tự.");
                })
                .finally(() => {
                  x(!1);
                });
          }, 1e3);
          return () => clearTimeout(e);
        }, [d, i, l]);
        let [y, N] = (0, s.useState)(!1);
        return (0, n.jsxs)("div", {
          className:
            "grid grid-rows-[auto_1fr_auto] min-h-screen pb-20 gap-8 p-8 sm:p-16",
          children: [
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("h1", {
                  className: "text-2xl font-bold pb-6 sm:pb-10",
                  children: "Translation",
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-6 sm:gap-10",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "w-full flex gap-5",
                      children: [
                        (0, n.jsx)("div", {
                          className: "w-full flex gap-5",
                          children: (0, n.jsx)(I, { onChange: (e) => o(e) }),
                        }),
                        (0, n.jsx)("div", {
                          className: "w-full flex gap-5",
                          children: (0, n.jsx)(A, { onChange: (e) => c(e) }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex gap-6 sm:gap-10",
                      children: [
                        (0, n.jsx)("div", {
                          className: "flex-1 flex flex-col relative",
                          children: (0, n.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, n.jsx)("textarea", {
                                ref: e,
                                onInput: v,
                                onChange: v,
                                value: d,
                                className:
                                  "w-full border border-gray-300 rounded-xl px-4 pt-3 pb-10 sm:pt-4 resize-none focus:outline-none focus:ring-0 overflow-hidden",
                                style: { minHeight: "165px" },
                                rows: 1,
                                placeholder: "Enter translation content ...",
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "absolute right-5 bottom-5 flex items-center space-x-2 text-gray-500",
                                children: [
                                  (0, n.jsx)(H, {
                                    sendDataToParent: (e) => {
                                      u(e);
                                    },
                                  }),
                                  (0, n.jsx)(r, {
                                    TextSound: d,
                                    targetLang: i,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex-1 bg-gray-100 rounded-xl px-4 py-3 relative",
                          style: { height: "".concat(t, "px") },
                          children: [
                            d.trim()
                              ? p
                                ? (0, n.jsx)("span", {
                                    className: "text-gray-400 italic",
                                    children: "loading...",
                                  })
                                : g
                              : (0, n.jsx)("span", {
                                  className: "text-gray-400",
                                  children: "translate...",
                                }),
                            (0, n.jsxs)("div", {
                              className:
                                "absolute right-5 bottom-5 flex items-center space-x-2 text-gray-500",
                              children: [
                                (0, n.jsx)(_.A, {
                                  className:
                                    "cursor-pointer hover:text-black transform transition-all duration-300 hover:scale-110 ".concat(
                                      y
                                        ? "text-green-500 hover:text-green-500"
                                        : ""
                                    ),
                                  onClick: () => {
                                    navigator.clipboard
                                      .writeText(g)
                                      .then(() => {
                                        N(!0),
                                          b.oR.success(
                                            "Copy th\xe0nh c\xf4ng!",
                                            { position: "top-right" }
                                          ),
                                          setTimeout(() => {
                                            N(!1);
                                          }, 2e3);
                                      });
                                  },
                                }),
                                (0, n.jsx)(b.l$, {}),
                                (0, n.jsx)(r, { TextSound: g, targetLang: l }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(w, { Historys: m }),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [276, 441, 684, 358], () => t(7432)), (_N_E = e.O());
  },
]);
