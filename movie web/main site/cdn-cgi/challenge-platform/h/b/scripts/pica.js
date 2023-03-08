~ function(I, d, e, f, g, h, i) {
    I = b,
        function(c, j, H, k, l) {
            for (H = b, k = c(); !![];) try {
                if (l = -parseInt(H(304)) / 1 * (-parseInt(H(315)) / 2) + parseInt(H(328)) / 3 + parseInt(H(303)) / 4 * (parseInt(H(367)) / 5) + -parseInt(H(361)) / 6 + parseInt(H(307)) / 7 * (parseInt(H(357)) / 8) + parseInt(H(318)) / 9 + -parseInt(H(334)) / 10 * (parseInt(H(358)) / 11), j === l) break;
                else k.push(k.shift())
            } catch (m) {
                k.push(k.shift())
            }
        }(a, 531990), d = this || self, e = d[I(331)], (I(306) !== typeof d ? d : self)[I(355)] = function(c, L, z) {
            return L = I, z = L(359)[L(353)](''), 'd' != n(o(L(314)))[1] && (j = function(A, B, C) {
                return C = (65535 & A) + (65535 & B), (A >> 16) + (B >> 16.78) + (C >> 16) << 16 | 65535 & C
            }), n(o(c));

            function o(A, K, B, C, D, E, F, G) {
                for (K = b, B = A[K(349)], C = [1732584193, -271733879, -1732584194, 271733878], D = 64; D <= A[K(349)]; D += 64) {
                    for (F = A[K(350)](D - 64, D), G = [], E = 0; 64 > E; G[E >> 2.81] = F.charCodeAt(E) + (F[K(321)](E + 1) << 8) + (F[K(321)](E + 2) << 16) + (F[K(321)](E + 3) << 24.66), E += 4);
                    y(C, G)
                }
                for (A = A[K(350)](D - 64), E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], D = 0; D < A[K(349)]; E[D >> 2.84] |= A[K(321)](D) << (D % 4 << 3.21), D++);
                if (E[D >> 2] |= 128 << (D % 4 << 3.26), 55 < D) {
                    for (y(C, E), D = 0; 16 > D; E[D] = 0, D++);
                }
                return E[14] = 8 * B, y(C, E), C
            }

            function s(A, B, C, D, E, F, G) {
                return x((~D | B) ^ C, A, B, E, F, G)
            }

            function x(A, B, C, D, E, F) {
                return B = j(j(B, A), j(D, F)), j(B << E | B >>> 32 - E, C)
            }

            function n(A, J, B, C, D, E, F) {
                for (J = b, B = 0; B < A[J(349)]; B++) {
                    for (C = B, D = A[B], E = '', F = 0; 4 > F; E += z[D >> F * 8 + 4 & 15.3] + z[15 & D >> 8 * F], F++);
                    A[C] = E
                }
                return A[J(301)]('')
            }

            function v(A, B, C, D, E, F, G) {
                return x(C & ~D | D & B, A, B, E, F, G)
            }

            function y(A, B, C, D, E, F) {
                C = A[0], D = A[1], E = A[2], F = A[3], C = w(C, D, E, F, B[0], 7, -680876936), F = w(F, C, D, E, B[1], 12, -389564586), E = w(E, F, C, D, B[2], 17, 606105819), D = w(D, E, F, C, B[3], 22, -1044525330), C = w(C, D, E, F, B[4], 7, -176418897), F = w(F, C, D, E, B[5], 12, 1200080426), E = w(E, F, C, D, B[6], 17, -1473231341), D = w(D, E, F, C, B[7], 22, -45705983), C = w(C, D, E, F, B[8], 7, 1770035416), F = w(F, C, D, E, B[9], 12, -1958414417), E = w(E, F, C, D, B[10], 17, -42063), D = w(D, E, F, C, B[11], 22, -1990404162), C = w(C, D, E, F, B[12], 7, 1804603682), F = w(F, C, D, E, B[13], 12, -40341101), E = w(E, F, C, D, B[14], 17, -1502002290), D = w(D, E, F, C, B[15], 22, 1236535329), C = v(C, D, E, F, B[1], 5, -165796510), F = v(F, C, D, E, B[6], 9, -1069501632), E = v(E, F, C, D, B[11], 14, 643717713), D = v(D, E, F, C, B[0], 20, -373897302), C = v(C, D, E, F, B[5], 5, -701558691), F = v(F, C, D, E, B[10], 9, 38016083), E = v(E, F, C, D, B[15], 14, -660478335), D = v(D, E, F, C, B[4], 20, -405537848), C = v(C, D, E, F, B[9], 5, 568446438), F = v(F, C, D, E, B[14], 9, -1019803690), E = v(E, F, C, D, B[3], 14, -187363961), D = v(D, E, F, C, B[8], 20, 1163531501), C = v(C, D, E, F, B[13], 5, -1444681467), F = v(F, C, D, E, B[2], 9, -51403784), E = v(E, F, C, D, B[7], 14, 1735328473), D = v(D, E, F, C, B[12], 20, -1926607734), C = x(D ^ E ^ F, C, D, B[5], 4, -378558), F = x(E ^ (D ^ C), F, C, B[8], 11, -2022574463), E = x(F ^ C ^ D, E, F, B[11], 16, 1839030562), D = x(E ^ F ^ C, D, E, B[14], 23, -35309556), C = x(D ^ E ^ F, C, D, B[1], 4, -1530992060), F = x(D ^ C ^ E, F, C, B[4], 11, 1272893353), E = x(F ^ C ^ D, E, F, B[7], 16, -155497632), D = x(E ^ F ^ C, D, E, B[10], 23, -1094730640), C = x(D ^ E ^ F, C, D, B[13], 4, 681279174), F = x(D ^ C ^ E, F, C, B[0], 11, -358537222), E = x(D ^ (F ^ C), E, F, B[3], 16, -722521979), D = x(E ^ F ^ C, D, E, B[6], 23, 76029189), C = x(D ^ E ^ F, C, D, B[9], 4, -640364487), F = x(E ^ (D ^ C), F, C, B[12], 11, -421815835), E = x(D ^ (C ^ F), E, F, B[15], 16, 530742520), D = x(E ^ F ^ C, D, E, B[2], 23, -995338651), C = s(C, D, E, F, B[0], 6, -198630844), F = s(F, C, D, E, B[7], 10, 1126891415), E = s(E, F, C, D, B[14], 15, -1416354905), D = s(D, E, F, C, B[5], 21, -57434055), C = s(C, D, E, F, B[12], 6, 1700485571), F = s(F, C, D, E, B[3], 10, -1894986606), E = s(E, F, C, D, B[10], 15, -1051523), D = s(D, E, F, C, B[1], 21, -2054922799), C = s(C, D, E, F, B[8], 6, 1873313359), F = s(F, C, D, E, B[15], 10, -30611744), E = s(E, F, C, D, B[6], 15, -1560198380), D = s(D, E, F, C, B[13], 21, 1309151649), C = s(C, D, E, F, B[4], 6, -145523070), F = s(F, C, D, E, B[11], 10, -1120210379), E = s(E, F, C, D, B[2], 15, 718787259), D = s(D, E, F, C, B[9], 21, -343485551), A[0] = j(C, A[0]), A[1] = j(D, A[1]), A[2] = j(E, A[2]), A[3] = j(F, A[3])
            }

            function j(A, B) {
                return 4294967295 & A + B
            }

            function w(A, B, C, D, E, F, G) {
                return x(C & B | ~B & D, A, B, E, F, G)
            }
        }, f = typeof globalThis !== I(306) ? globalThis : d, g = [
            [
                [0, 142, 139, 136, 1.0182059664104268, 4.234970170886814],
                [0, 142, 133, 94, 5.3849570248895775, 2.9421639085067177],
                [3, 6, I(354), 105, 41, 408, 16, 194, 259],
                [2, 3, I(344), 157, 6, 159, 128, 82, 72, 142, 294],
                [2, 16, I(316), 203, 3, 178, 132, 179, 6, 96, 297],
                [3, 16, I(344), 215, 16, 192, 25, 84, 284],
                [1, 18, I(356), I(366), 0, I(329), 188, 256]
            ],
            [
                [0, 29, 132, 14, 265, 287, 503, I(317), I(322)],
                [0, 129, 265, 25, 14, 190, 586, I(330), I(333)],
                [0, 72, 264, 19, 111, 113, 386, I(345), I(356)],
                [0, 174, 117, 19, 115, 126, 437, I(319), I(323)],
                [0, 13, 35, 15, 165, 232, 452, I(309), I(320)],
                [0, 132, 163, 13, 267, 72, 599, I(352), I(344)]
            ]
        ], h = {}, i = function(c, j, k, U, l, m, n, o, p) {
            o = (U = I, l = function(q, r, M, s, t, u, v, w, x, y, C, D, z, A, B) {
                for (M = b, s = {}, s[M(305)] = 300, s[M(327)] = 300, t = s, u = function(E, F, N, G) {
                        N = M, G = E[N(368)](F[1], F[2], F[3], F[4], F[5], F[6]), G[N(326)](0, F[7]), G[N(326)](1, F[8]), E[N(342)] = G
                    }, v = [function(E, F, O) {
                        return O = M, E[O(338)](), E[O(351)](F[1], F[2], F[3], F[4], F[5]), E[O(313)](), !![]
                    }, function(E, F, P) {
                        return P = M, E[P(340)] = F[1], E[P(362)] = F[2], E[P(347)] = F[3], F[4] ? E[P(308)](F[5], F[6], F[7]) : E[P(337)](F[5], F[6], F[7]), ![]
                    }, function(E, F, Q) {
                        return Q = M, E[Q(340)] = F[1], E[Q(362)] = F[2], E[Q(338)](), E[Q(312)](F[3], F[4]), E[Q(332)](F[5], F[6], F[7], F[8], F[9], F[10]), E[Q(313)](), !![]
                    }, function(E, F, R) {
                        return R = M, E[R(340)] = F[1], E[R(362)] = F[2], E[R(338)](), E[R(312)](F[3], F[4]), E[R(339)](F[5], F[6], F[7], F[8]), E[R(313)](), !![]
                    }, function(E, F, S) {
                        return S = M, E[S(338)](), E[S(343)](F[1], F[2], F[3], F[4], F[5], F[6], F[7]), E[S(313)](), !![]
                    }], r[M(305)] = t[M(305)], r[M(327)] = t[M(327)], w = r[M(346)]('2d'), x = q[0], y = q[1], z = 0; z < x[M(349)]; A = y[z], z < y[M(349)] && u(w, A), B = x[z], v[B[0]](w, B) && w[M(364)](), w.shadowBlur = 0, z++);
                if (C = ![], typeof OffscreenCanvas !== M(306)) {
                    if (C = r instanceof OffscreenCanvas, !C && !f[M(325)]) return M(324);
                    else if (C && !f[M(300)]) return M(324)
                }
                return C ? (D = r[r[M(335)] ? M(335) : M(311)](), D) : r[M(360)]()
            }, m = '', n = '', null);
            try {
                n = l(g, j), n !== undefined && (m = n)
            } catch (q) {
                o = q
            }
            return p = function(r, T, s) {
                return T = b, '' !== r ? {
                    'results': f[T(355)](r)
                } : (s = {}, s[T(341)] = '', s)
            }, typeof Promise === U(306) || typeof OffscreenCanvas === U(306) || k ? {
                'r': p(m),
                'e': o
            } : m[U(363)](function(r, V, s) {
                return V = U, s = r[V(348)] ? r[V(348)]() : r, s[V(363)](function(t) {
                    return {
                        'r': p(t),
                        'e': o
                    }
                })
            })
        }, f[I(365)] = function(c, W, j, k) {
            W = I, j = c[W(302)].canvas, k = c[W(302)][W(310)], i(k, j)[W(363)](function(l, X) {
                X = W, self[X(336)](l)
            })
        };

    function a(Y) {
        return Y = 'CanvasRenderingContext2DIaddColorStopIheightI482820lnWfVpI&XqI#809900IdocumentIbezierCurveToI#404041I10ypllWoIconvertToBlobIpostMessageIfillTextIbeginPathIquadraticCurveToIshadowBlurIresultsIfillStyleIellipseI#CCCC00I#00B3E6IgetContextIfontItextIlengthIsubstringIarcI#66664DIsplitI#FF6633I__cf_md5I#E6B333I2600faCSfuI2630672wrAYvmI0123456789abcdefItoDataURLI2325462ccPrCMIshadowColorIthenIfillIonmessageI28.571428571428573px aanotafontaaI5llmjcsIcreateRadialGradientIOffscreenCanvasRenderingContext2DIjoinIdataI694156gEQSGQI2dPrSAtIwidthIundefinedI3073AvyEwmIstrokeTextI#4DB3FFIparamsItoBlobImoveToIstrokeIhelloI483370zHAvCaI#33FFCCI#4D8000I1783755ZlbxFQI#3366E6I#E6FF80IcharCodeAtI#B33300I#999966Iunknown'.split('I'), a = function() {
            return Y
        }, a()
    }

    function b(c, d, e) {
        return e = a(), b = function(f, g, h) {
            return f = f - 300, h = e[f], h
        }, b(c, d)
    }
}()