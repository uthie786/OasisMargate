import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Oasis Lodge | Coastal accommodation in Margate, KZN South Coast",
  description:
    "Oasis Lodge at Lawrence Rocks, Margate. Air-conditioned rooms, self-catering units and family suites with a pool, braai areas, free Wi-Fi, secure parking, events and conferencing, and the Oasis Rooftop Car Wash.",
  icons: {
    icon: "data:image/png;base64,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",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E2691F",
};

const css = `
:root{
  --sun:#F2C94C;--sun-bright:#F4DE5A;--sunset:#E2691F;--sunset-d:#B4501A;--ember:#D63A24;
  --gold:#C69A5D;--gold-l:#ECD4A6;
  --palm:#24583A;--palm-l:#3E7D50;--sage:#7E9B70;
  --stone:#C98B5E;--stone-d:#A9693F;--stone-l:#DDAE80;
  --earth:#3B2416;--earth-d:#1E120A;
  --cream:#FCF4E7;--card:#FFFBF4;--sand:#F6E5CC;
  --sea:#2A86A6;--sea-d:#1D5F7A;
  --ink:#3B2416;--muted:#7B5B48;
  --line:rgba(91,52,30,.14);
  --shadow:0 26px 50px -30px rgba(59,36,22,.55);
  --pebble:46% 54% 50% 50% / 55% 45% 55% 45%;
  --stone-tex:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="420" height="240" viewBox="0 0 420 240"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/%3E%3CfeColorMatrix values="0 0 0 0 .2 0 0 0 0 .1 0 0 0 0 .05 0 0 0 .55 0"/%3E%3C/filter%3E%3Crect width="420" height="240" fill="%239C7A62"/%3E%3Cg stroke-linejoin="round" stroke-width="9"%3E%3Cpolygon points="-44,-8 -19,6 4,-1 20,-8 23,-21 -7,-41 -44,-13" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="-45,-10 -21,4 3,-4 19,-10 22,-24 -8,-44 -46,-15" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="-38,-13 -20,-3 -2,-8 10,-13 12,-23 -10,-39 -38,-17" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="-22,32 -43,48 -38,76 -29,81 12,73 17,55" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="-24,30 -45,46 -39,74 -31,79 10,70 16,52" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="-24,35 -40,47 -36,68 -29,72 1,65 6,52" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="-79,164 -83,140 -37,121 -3,143 -6,167 -13,173" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="-80,162 -85,138 -38,119 -4,140 -7,164 -15,170" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="-71,157 -75,138 -40,124 -14,140 -16,159 -22,163" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="20,232 4,239 -19,246 -44,232 -44,227 -7,199 23,219" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="19,230 3,236 -21,244 -45,230 -46,225 -8,196 22,216" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="10,227 -2,232 -20,237 -38,227 -38,223 -10,201 12,217" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="35,-8 70,8 104,-14 104,-15 87,-28 66,-25 38,-22" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="34,-10 68,6 103,-17 103,-17 86,-30 65,-27 36,-24" fill="%23D49A6A" stroke="%23D49A6A"/%3E%3Cpolygon points="41,-14 67,-2 93,-19 93,-19 81,-29 65,-27 43,-25" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="119,-15 119,-14 150,14 195,-18 195,-21 168,-28" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="118,-17 118,-16 149,11 194,-21 194,-23 166,-31" fill="%23C98B5E" stroke="%23C98B5E"/%3E%3Cpolygon points="126,-19 126,-18 149,2 183,-22 183,-24 162,-29" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="231,12 279,-2 277,-20 234,-29 210,-21 210,-18" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="230,9 277,-4 275,-23 233,-31 209,-23 209,-20" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="230,1 266,-9 265,-23 233,-29 214,-23 214,-21" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="361,-13 319,-35 291,-20 293,-2 315,14 362,-7" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="359,-15 317,-37 290,-22 292,-4 313,11 360,-10" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="348,-17 317,-33 296,-22 298,-8 314,3 349,-13" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="413,-41 376,-13 376,-8 401,6 424,-1 440,-8 443,-21" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="412,-44 374,-15 375,-10 399,4 423,-4 439,-10 442,-24" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="410,-39 382,-17 382,-13 400,-3 418,-8 430,-13 432,-23" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="17,7 41,36 63,30 61,16 32,-0" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="16,4 40,34 61,27 60,14 30,-3" fill="%23C98B5E" stroke="%23C98B5E"/%3E%3Cpolygon points="21,5 39,27 55,22 54,12 32,-0" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="76,32 91,36 141,26 142,26 141,21 112,-6 76,17" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="75,29 90,34 140,24 140,24 139,19 110,-9 75,14" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="82,25 93,28 131,21 131,20 130,17 108,-4 82,13" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="222,18 200,-12 155,20 156,25 216,34" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="220,16 199,-15 154,18 155,23 214,32" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="211,14 195,-9 161,15 162,19 206,25" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="236,21 282,7 305,22 306,30 291,45 231,39 229,37" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="235,18 281,5 304,20 304,28 289,43 230,37 228,34" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="242,18 276,8 293,19 294,25 282,37 238,32 236,30" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="390,14 389,24 367,38 321,29 320,21 367,0" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="388,12 387,21 366,35 319,27 319,18 365,-2" fill="%23CF9566" stroke="%23CF9566"/%3E%3Cpolygon points="379,11 379,19 362,29 327,23 327,16 362,1" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="-16,16 -16,25 20,48 34,40 9,11" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="-18,14 -18,23 19,45 32,38 7,8" fill="%23BF7F52" stroke="%23BF7F52"/%3E%3Cpolygon points="-14,14 -14,21 14,38 24,33 5,11" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="45,49 65,40 78,44 92,72 37,77 25,72 32,55" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="44,47 63,37 77,41 90,70 35,74 24,69 31,52" fill="%23DDAE80" stroke="%23DDAE80"/%3E%3Cpolygon points="44,47 59,40 69,43 79,64 38,67 29,64 34,51" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="105,70 117,76 140,69 144,33 92,44" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="103,68 115,73 139,66 142,31 90,42" fill="%23B06E45" stroke="%23B06E45"/%3E%3Cpolygon points="106,63 114,67 132,62 134,35 95,43" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="215,41 217,44 206,73 198,78 154,69 155,32 155,31" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="213,39 215,41 204,70 196,75 153,66 153,29 154,29" fill="%23C4825A" stroke="%23C4825A"/%3E%3Cpolygon points="205,39 206,41 198,63 192,67 159,60 160,32 160,32" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="230,46 219,77 284,87 297,76 290,54" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="229,43 217,74 282,85 295,73 289,51" fill="%23D49A6A" stroke="%23D49A6A"/%3E%3Cpolygon points="236,47 227,70 276,78 286,69 281,53" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="318,37 363,47 370,77 310,73 304,51" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="316,34 362,44 368,75 308,71 303,49" fill="%23C98B5E" stroke="%23C98B5E"/%3E%3Cpolygon points="318,37 352,45 357,68 312,64 308,48" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="437,55 432,73 391,81 382,76 377,48 398,32" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="436,52 430,70 389,79 381,74 375,46 396,30" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="426,52 421,65 391,72 384,68 380,47 396,35" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="39,85 59,118 70,119 104,109 109,86 94,81" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="37,82 58,115 69,116 103,107 107,84 93,78" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="46,84 61,109 70,109 95,102 98,85 88,81" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="176,116 135,117 118,110 122,86 149,79 194,87 190,109" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="174,114 133,114 117,107 121,84 148,77 192,84 189,106" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="167,108 137,108 124,103 127,85 148,80 181,86 178,102" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="249,128 205,109 208,88 217,83 282,94 284,118" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="247,125 204,107 206,85 215,81 280,92 282,115" fill="%23CF9566" stroke="%23CF9566"/%3E%3Cpolygon points="244,117 211,103 213,87 220,84 268,92 270,110" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="298,117 296,94 310,82 369,84 380,90 376,112 331,131" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="296,115 295,91 308,79 368,82 378,87 374,109 329,129" fill="%23BF7F52" stroke="%23BF7F52"/%3E%3Cpolygon points="305,109 304,91 314,82 358,84 366,88 363,105 329,119" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="16,82 -26,90 -30,112 5,133 47,120 26,87" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="14,80 -27,88 -31,110 3,131 45,117 25,85" fill="%23DDAE80" stroke="%23DDAE80"/%3E%3Cpolygon points="10,83 -21,89 -24,105 2,121 34,111 18,87" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="44,165 7,167 12,142 51,129 61,130 74,162" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="42,162 6,164 10,140 49,127 60,128 72,159" fill="%23B06E45" stroke="%23B06E45"/%3E%3Cpolygon points="40,156 13,158 16,140 45,130 53,131 63,154" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="125,162 123,127 109,119 73,129 87,159 103,167" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="124,159 122,124 108,117 72,126 85,157 101,164" fill="%23C4825A" stroke="%23C4825A"/%3E%3Cpolygon points="117,153 115,126 105,121 78,128 88,151 100,157" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="137,162 134,127 177,126 176,157 158,165" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="136,160 133,124 175,124 174,155 156,162" fill="%23D49A6A" stroke="%23D49A6A"/%3E%3Cpolygon points="139,154 137,128 169,127 168,151 154,156" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="233,161 232,162 189,157 188,125 201,117 244,137" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="232,158 231,159 188,154 186,122 200,115 242,134" fill="%23C98B5E" stroke="%23C98B5E"/%3E%3Cpolygon points="226,152 225,152 193,149 192,125 202,119 234,134" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="246,164 315,174 327,164 322,141 292,128 258,138" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="245,162 314,172 326,161 321,138 290,125 257,135" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="255,156 307,164 316,156 312,139 289,129 264,136" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="414,167 417,143 383,121 337,140 341,164 407,173" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="413,164 416,140 382,119 335,138 340,162 405,170" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="404,159 406,140 380,124 345,138 349,157 398,163" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="96,177 79,172 51,175 66,202 89,202" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="94,175 78,169 50,172 65,200 87,199" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="88,175 76,171 55,173 66,194 83,193" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="130,174 109,179 100,205 115,219 165,203 152,176" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="129,172 107,176 98,202 113,216 163,201 150,174" fill="%23CF9566" stroke="%23CF9566"/%3E%3Cpolygon points="127,174 111,177 104,197 115,207 153,196 143,176" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="165,175 186,167 231,171 225,201 202,210 178,201" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="164,172 185,165 229,168 224,198 200,208 177,199" fill="%23BF7F52" stroke="%23BF7F52"/%3E%3Cpolygon points="170,174 186,168 219,170 215,193 198,200 180,193" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="245,170 244,171 239,201 281,211 310,197 313,181" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="244,168 242,169 238,199 280,209 308,194 312,178" fill="%23DDAE80" stroke="%23DDAE80"/%3E%3Cpolygon points="249,170 248,171 244,194 276,201 297,190 300,178" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="407,191 367,220 325,197 328,181 340,172 405,180" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="405,188 365,217 323,194 326,179 338,169 404,177" fill="%23B06E45" stroke="%23B06E45"/%3E%3Cpolygon points="392,186 362,208 331,191 333,179 342,172 391,178" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="28,210 55,206 38,176 6,176 -1,181 1,191" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="26,207 54,203 37,174 5,173 -2,178 -0,188" fill="%23C4825A" stroke="%23C4825A"/%3E%3Cpolygon points="23,200 44,197 31,175 7,175 2,179 3,186" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="87,212 66,215 38,218 35,232 70,248 104,226 104,225" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="86,210 65,213 36,216 34,230 68,246 103,223 103,223" fill="%23D49A6A" stroke="%23D49A6A"/%3E%3Cpolygon points="81,211 65,213 43,215 41,226 67,238 93,221 93,221" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="168,212 195,219 195,222 150,254 119,226 119,225" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="166,209 194,217 194,219 149,251 118,224 118,223" fill="%23C98B5E" stroke="%23C98B5E"/%3E%3Cpolygon points="162,211 183,216 183,218 149,242 126,222 126,221" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="279,238 277,220 234,211 210,219 210,222 231,252" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="277,236 275,217 233,209 209,217 209,220 230,249" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="266,231 265,217 233,211 214,217 214,219 230,241" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="319,205 291,220 293,238 315,254 362,233 361,227" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="317,203 290,218 292,236 313,251 360,230 359,225" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="317,207 296,218 298,232 314,243 349,227 348,223" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="424,239 401,246 376,232 376,227 413,199 443,219 440,232" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="423,236 399,244 375,230 374,225 412,196 442,216 439,230" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="418,232 400,237 382,227 382,223 410,201 432,217 430,227" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="32,240 61,256 63,270 41,276 17,247" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="30,237 60,254 61,267 40,274 16,244" fill="%23C98B5E" stroke="%23C98B5E"/%3E%3Cpolygon points="32,240 54,252 55,262 39,267 21,245" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="76,257 112,234 141,261 142,266 141,266 91,276 76,272" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="75,254 110,231 139,259 140,264 140,264 90,274 75,269" fill="%23B9764A" stroke="%23B9764A"/%3E%3Cpolygon points="82,253 108,236 130,257 131,260 131,261 93,268 82,265" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="216,274 156,265 155,260 200,228 222,258" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="214,272 155,263 154,258 199,225 220,256" fill="%23D9A274" stroke="%23D9A274"/%3E%3Cpolygon points="206,265 162,259 161,255 195,231 211,254" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="306,270 291,285 231,279 229,277 236,261 282,247 305,262" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="304,268 289,283 230,277 228,274 235,258 281,245 304,260" fill="%23A9693F" stroke="%23A9693F"/%3E%3Cpolygon points="294,265 282,277 238,272 236,270 242,258 276,248 293,259" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="389,264 367,278 321,269 320,261 367,240 390,254" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="387,261 366,275 319,267 319,258 365,238 388,252" fill="%23CF9566" stroke="%23CF9566"/%3E%3Cpolygon points="379,259 362,269 327,263 327,256 362,241 379,251" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="9,251 34,280 20,288 -16,265 -16,256" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="7,248 32,278 19,285 -18,263 -18,254" fill="%23BF7F52" stroke="%23BF7F52"/%3E%3Cpolygon points="5,251 24,273 14,278 -14,261 -14,254" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="429,11 454,40 440,48 404,25 404,16" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="427,8 452,38 439,45 402,23 402,14" fill="%23BF7F52" stroke="%23BF7F52"/%3E%3Cpolygon points="425,11 444,33 434,38 406,21 406,14" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="467,120 425,133 390,112 394,90 436,82 446,87" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="465,117 423,131 389,110 393,88 434,80 445,85" fill="%23DDAE80" stroke="%23DDAE80"/%3E%3Cpolygon points="454,111 422,121 396,105 399,89 430,83 438,87" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="494,162 464,165 427,167 432,142 471,129 481,130" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="492,159 462,162 426,164 430,140 469,127 480,128" fill="%23B06E45" stroke="%23B06E45"/%3E%3Cpolygon points="483,154 460,156 433,158 436,140 465,130 473,131" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="475,206 458,176 426,176 419,181 421,191 448,210" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="474,203 457,174 425,173 418,178 420,188 446,207" fill="%23C4825A" stroke="%23C4825A"/%3E%3Cpolygon points="464,197 451,175 427,175 422,179 423,186 443,200" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3Cpolygon points="454,280 440,288 404,265 404,256 429,251" fill="%234A2E1F" stroke="%234A2E1F" opacity=".45"/%3E%3Cpolygon points="452,278 439,285 402,263 402,254 427,248" fill="%23BF7F52" stroke="%23BF7F52"/%3E%3Cpolygon points="444,273 434,278 406,261 406,254 425,251" fill="%23FFF3E0" opacity=".07" stroke="none"/%3E%3C/g%3E%3Crect width="420" height="240" filter="url%28%23n%29" opacity=".5"/%3E%3C/svg%3E');
  --grain:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .35 0 0 0 0 .2 0 0 0 0 .1 0 0 0 .07 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23g)'/%3E%3C/svg%3E");
  --font:var(--font-jakarta),"Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:96px;-webkit-text-size-adjust:100%}
body{font-family:var(--font);color:var(--ink);background:var(--grain),var(--cream);line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
svg{display:block;max-width:100%}
svg text{font-family:var(--font)}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}
:focus-visible{outline:3px solid var(--sunset);outline-offset:3px;border-radius:10px}
.wrap{width:min(1180px,100% - 40px);margin-inline:auto}
.skip{position:absolute;left:-9999px;top:10px;z-index:100;padding:10px 16px;border-radius:10px;background:#fff;font-weight:700}
.skip:focus{left:10px}

/* scroll-driven progress line */
.progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:80;background:linear-gradient(90deg,var(--sun),var(--sunset),var(--ember));transform-origin:0 50%;transform:scaleX(0);pointer-events:none}
@supports (animation-timeline: scroll()){.progress{animation:grow linear both;animation-timeline:scroll(root)}}
@keyframes grow{to{transform:scaleX(1)}}

/* rock helpers */
.stone-frame{background:var(--stone-tex) center/420px 240px,var(--stone);padding:12px;border-radius:34px 30px 36px 28px / 30px 36px 28px 34px;box-shadow:inset 0 2px 0 rgba(255,240,220,.35),inset 0 -6px 14px rgba(59,36,22,.35),var(--shadow)}
.stone-band{position:relative;height:74px;background:var(--stone-tex) 0 0/336px 192px,var(--stone);box-shadow:inset 0 -10px 18px -8px rgba(30,18,10,.45)}
.stone-band::before{content:"";position:absolute;left:0;right:0;top:-12px;height:16px;border-radius:8px 8px 3px 3px;background:repeating-linear-gradient(90deg,transparent 0 94px,rgba(74,46,31,.55) 94px 97px),linear-gradient(180deg,#EBC296,#C98B5E);box-shadow:0 4px 8px rgba(59,36,22,.35)}

/* buttons */
.btn{position:relative;overflow:hidden;isolation:isolate;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:15px 24px;border-radius:999px;font-weight:700;font-size:.97rem;line-height:1;white-space:nowrap;transition:transform .25s,box-shadow .25s,background .25s}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn-primary{background:linear-gradient(135deg,var(--sunset),var(--ember));color:#fff;box-shadow:0 14px 28px -14px rgba(214,58,36,.9)}
.btn-primary::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(110deg,transparent 30%,rgba(255,236,190,.55) 50%,transparent 70%);transform:translateX(-130%);animation:shimmer 5s ease-in-out infinite}
@keyframes shimmer{0%,62%{transform:translateX(-130%)}100%{transform:translateX(130%)}}
.btn-ghost{background:rgba(255,251,244,.8);color:var(--earth);border:1px solid var(--line)}
.btn-light{background:var(--card);color:var(--earth)}
.btn-sun{background:var(--sun);color:var(--earth)}
.btn-glass{background:rgba(255,240,220,.08);color:#fff;border:1px solid rgba(255,240,220,.22)}
.ripple{position:absolute;border-radius:50%;transform:scale(0);background:rgba(255,240,210,.55);animation:ripple .65s ease-out forwards;pointer-events:none}
.btn-ghost .ripple,.btn-light .ripple,.btn-sun .ripple{background:rgba(226,105,31,.25)}
@keyframes ripple{to{transform:scale(3.2);opacity:0}}

/* nav */
.nav{position:fixed;left:0;right:0;top:0;z-index:60;padding:14px 0;pointer-events:none}
.nav .wrap{pointer-events:auto}
.nav-inner{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 10px 8px 10px;border-radius:999px;background:rgba(252,244,231,.68);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(236,212,166,.8);box-shadow:0 14px 34px -22px rgba(59,36,22,.6);transition:background .3s}
.nav.scrolled .nav-inner{background:rgba(252,244,231,.88)}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.1rem;letter-spacing:-.02em;color:var(--earth)}
.nav-links{display:flex;gap:2px;list-style:none}
.nav-links a{display:block;padding:9px 14px;border-radius:999px;font-weight:600;font-size:.93rem;color:var(--muted);transition:background .2s,color .2s}
.nav-links a:hover,.nav-links a[aria-current="true"]{background:rgba(226,105,31,.13);color:var(--sunset-d)}
.nav-cta{display:flex;align-items:center;gap:8px}
.nav-cta .btn{padding:12px 20px}
.menu-btn{display:none;width:44px;height:44px;border-radius:50%;align-items:center;justify-content:center;background:rgba(226,105,31,.1);color:var(--earth)}

/* hero */
.hero{position:relative;overflow:hidden;padding:clamp(128px,15vw,168px) 0 clamp(150px,14vw,190px);background:linear-gradient(180deg,#FFF5D6 0%,#FDE8C2 50%,#F8D6A8 100%)}
.ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.blob{position:absolute;border-radius:50%;filter:blur(50px);will-change:transform}
.b1{width:540px;height:540px;background:radial-gradient(circle,rgba(244,222,90,.8),transparent 68%);top:-180px;left:-140px;animation:drift1 22s ease-in-out infinite alternate}
.b2{width:460px;height:460px;background:radial-gradient(circle,rgba(226,105,31,.55),transparent 68%);top:30px;right:-110px;animation:drift2 26s ease-in-out infinite alternate}
.b3{width:600px;height:600px;background:radial-gradient(circle,rgba(214,58,36,.25),transparent 68%);bottom:-300px;left:28%;animation:drift3 30s ease-in-out infinite alternate}
.b4{width:300px;height:300px;background:radial-gradient(circle,rgba(62,125,80,.22),transparent 68%);top:46%;left:44%;animation:drift1 24s ease-in-out infinite alternate-reverse}
@keyframes drift1{to{transform:translate(120px,80px) scale(1.15)}}
@keyframes drift2{to{transform:translate(-150px,120px) scale(.9)}}
@keyframes drift3{to{transform:translate(-110px,-70px) scale(1.1)}}
.mesh{position:absolute;inset:0;background-image:radial-gradient(rgba(122,70,40,.16) 1px,transparent 1.2px);background-size:26px 26px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 75%);mask-image:linear-gradient(180deg,#000,transparent 75%)}
.hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.12fr .88fr;gap:clamp(36px,6vw,84px);align-items:center}
.hero-where{display:inline-flex;align-items:center;gap:8px;padding:8px 16px 8px 10px;border-radius:999px;background:rgba(255,251,244,.75);border:1px solid rgba(236,212,166,.9);color:var(--sunset-d);font-weight:600;font-size:.9rem;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.hero h1{margin-top:22px;font-size:clamp(2.8rem,6.6vw,5.4rem);line-height:.98;letter-spacing:-.045em;font-weight:800;max-width:11ch;background:linear-gradient(120deg,var(--earth) 25%,var(--sunset-d) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding-bottom:.06em}
.hero-sub{margin-top:22px;font-size:clamp(1.05rem,1.5vw,1.18rem);color:var(--muted);max-width:35rem}
.hero-actions{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}
.quick{margin-top:34px;display:flex;flex-wrap:wrap;gap:12px}
.quick a{display:flex;align-items:center;gap:12px;padding:10px 18px 10px 10px;border-radius:18px;background:rgba(255,251,244,.75);border:1px solid rgba(236,212,166,.95);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 12px 30px -24px rgba(59,36,22,.7);transition:transform .25s}
.quick a:hover{transform:translateY(-2px)}
.qi{flex:none;width:40px;height:40px;border-radius:var(--pebble);display:grid;place-items:center;background:linear-gradient(135deg,var(--sunset),var(--ember));color:#fff}
.qi.wa{background:linear-gradient(135deg,var(--palm-l),var(--palm))}
.quick small{display:block;font-size:.76rem;color:var(--muted);font-weight:600;line-height:1.3}
.quick strong{font-size:1rem;color:var(--earth);line-height:1.3}
.rise{animation:rise 1s cubic-bezier(.2,.7,.2,1) both}
.d1{animation-delay:.08s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}.d4{animation-delay:.42s}.d5{animation-delay:.55s}
@keyframes rise{from{opacity:0;transform:translateY(26px)}}

.postcard-wrap{position:relative}
.postcard{padding:12px 12px 6px;border-radius:28px;border:5px solid transparent;background:linear-gradient(var(--card),var(--card)) padding-box,linear-gradient(135deg,#C69A5D,#F6E7C8 35%,#B8874C 55%,#EBD3A6 80%,#C69A5D) border-box;box-shadow:0 44px 80px -40px rgba(59,36,22,.7);transform:rotate(2.5deg);transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.postcard:hover{transform:rotate(0deg)}
.postcard svg{width:100%;height:auto;border-radius:18px}
.postcard figcaption{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 8px 8px;font-size:.88rem;color:var(--muted)}
.postcard figcaption strong{display:block;color:var(--earth);font-size:.95rem}
.stamp{flex:none;width:46px;height:54px;border:2px dashed var(--gold);border-radius:6px;display:grid;place-items:center}
.float-chip{position:absolute;left:-30px;bottom:92px;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:16px;background:rgba(255,251,244,.9);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:var(--shadow);font-weight:700;font-size:.88rem;color:var(--earth);animation:bob 6s ease-in-out infinite}
.float-chip span{width:34px;height:34px;border-radius:var(--pebble);display:grid;place-items:center;background:rgba(226,105,31,.14);color:var(--sunset-d)}
@keyframes bob{50%{transform:translateY(-9px)}}
.pc-glow{transform-box:fill-box;transform-origin:center;animation:glow 5s ease-in-out infinite}
@keyframes glow{50%{transform:scale(1.12);opacity:.8}}
.pc-waves{animation:pcw 7s linear infinite}
.pc-waves.slow{animation-duration:11s}
@keyframes pcw{to{transform:translateX(-120px)}}
.pc-clouds{animation:clouds 18s ease-in-out infinite alternate}
@keyframes clouds{to{transform:translateX(36px)}}
.pc-palm{transform-box:view-box;transform-origin:118px 470px;animation:sway 7s ease-in-out infinite}
@keyframes sway{50%{transform:rotate(1.6deg)}}

/* hero wall */
.hero-wall{position:absolute;left:0;right:0;bottom:0;z-index:1;height:clamp(78px,9vw,104px)}
.hero-wall .stone-band{position:absolute;inset:auto 0 0 0;height:100%}
.plants{position:absolute;left:0;right:0;bottom:calc(100% + 2px);height:0}
.plants svg{position:absolute;bottom:0;width:clamp(70px,8vw,110px);height:auto}

/* sections */
.section{position:relative;padding:clamp(76px,10vw,128px) 0}
.section-head{max-width:640px;margin-bottom:clamp(36px,5vw,56px)}
.section-head h2{font-size:clamp(2rem,4.2vw,3.1rem);line-height:1.08;letter-spacing:-.035em;font-weight:800;color:var(--earth)}
.section-head p{margin-top:14px;color:var(--muted);font-size:1.08rem}
.js .reveal{opacity:0;transform:translateY(30px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
.js .reveal.in{opacity:1;transform:none}

/* pebble icons */
.ai{flex:none;width:54px;height:54px;border-radius:var(--pebble);display:grid;place-items:center;color:#FFF6E6;background:linear-gradient(145deg,var(--stone-l),var(--stone-d));box-shadow:inset 0 2px 0 rgba(255,240,220,.45),inset 0 -4px 8px rgba(59,36,22,.3),0 8px 16px -10px rgba(59,36,22,.7)}
.ai.warm{background:linear-gradient(145deg,#F2A04A,var(--ember))}
.ai.deep{background:linear-gradient(145deg,var(--palm-l),var(--palm))}

/* amenities */
.amen{background:var(--grain),linear-gradient(180deg,var(--cream) 0%,var(--sand) 100%)}
.amen-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:22px}
.pool-frame{display:flex}
.pool{position:relative;overflow:hidden;flex:1;min-height:420px;padding:30px;border-radius:24px 20px 26px 18px;display:flex;flex-direction:column;justify-content:space-between;color:#fff;background:linear-gradient(160deg,#4FC1B8 0%,#2A9BB0 45%,#1D6E8A 100%);isolation:isolate;box-shadow:inset 0 10px 24px rgba(10,40,50,.35)}
.pool::before{content:"";position:absolute;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,236,180,.45),transparent 65%);top:-120px;right:-80px;z-index:-1;animation:drift2 18s ease-in-out infinite alternate}
.pool-water{position:absolute;inset:0;z-index:-1;opacity:.4}
.pool-water svg{width:100%;height:100%}
.pool-badge{width:62px;height:62px;border-radius:var(--pebble);background:rgba(255,255,255,.2);display:grid;place-items:center;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
.pool h3{font-size:clamp(1.7rem,3vw,2.3rem);letter-spacing:-.03em;line-height:1.08;text-shadow:0 2px 12px rgba(10,40,50,.3)}
.pool p{margin-top:10px;max-width:30rem;color:rgba(255,255,255,.92)}
.amen-list{display:grid;gap:22px}
.amen-item{display:flex;gap:18px;align-items:flex-start;padding:26px;border-radius:24px;background:var(--card);border:1px solid var(--line)}
.amen-item h3{font-size:1.12rem;letter-spacing:-.01em;color:var(--earth)}
.amen-item p{color:var(--muted);margin-top:4px;font-size:.96rem}
.carwash{position:relative;overflow:hidden;margin-top:22px;display:grid;grid-template-columns:auto 1fr auto;gap:24px;align-items:center;padding:30px 34px;border-radius:32px 28px 34px 26px / 28px 34px 26px 32px;color:#fff;background:linear-gradient(90deg,rgba(30,18,10,.93),rgba(59,36,22,.78)),var(--stone-tex) 0 0/420px 240px,var(--stone);box-shadow:var(--shadow)}
.carwash > *:not(.bubbles){position:relative;z-index:1}
.carwash .ai{width:66px;height:66px}
.carwash h3{font-size:1.45rem;letter-spacing:-.02em}
.carwash p{color:rgba(255,240,220,.8);margin-top:4px;max-width:42rem}
.bubbles{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.bubbles i{position:absolute;bottom:-24px;border-radius:50%;border:1.5px solid rgba(255,240,220,.4);background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.35),transparent 60%);animation:bubble linear infinite}
@keyframes bubble{to{transform:translateY(-240px) translateX(12px);opacity:0}}

/* accommodations */
.accom{background:var(--grain),var(--sand)}
.rooms{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.room{display:flex;flex-direction:column;background:var(--card);border-radius:26px;overflow:hidden;border:1px solid var(--line);transition:transform .35s,box-shadow .35s}
.room:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.room-art{position:relative;height:176px;display:grid;place-items:center;color:#fff;overflow:hidden}
.room-art.a{background:linear-gradient(135deg,var(--sun-bright),var(--sunset))}
.room-art.b{background:linear-gradient(135deg,var(--sunset),var(--ember))}
.room-art.c{background:linear-gradient(135deg,var(--palm-l),#173D28)}
.room-art::before{content:"";position:absolute;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(255,246,214,.6),transparent 65%);top:-40px;right:-30px}
.room-ico{position:relative;width:78px;height:78px;border-radius:var(--pebble);display:grid;place-items:center;background:rgba(255,248,232,.22);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:inset 0 2px 0 rgba(255,255,255,.3)}
.room-wave{position:absolute;left:0;right:0;bottom:-1px;width:100%;height:30px}
.room-body{display:flex;flex-direction:column;flex:1;padding:22px 24px 26px}
.room h3{font-size:1.3rem;letter-spacing:-.02em;color:var(--earth)}
.room p{margin-top:8px;color:var(--muted)}
.tags{margin:16px 0 22px;display:flex;flex-wrap:wrap;gap:8px;list-style:none}
.tags li{font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:999px;background:#F7E9D4;color:var(--sunset-d)}
.room-link{margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--sunset-d)}
.room-link:hover{color:var(--ember)}
.comforts{margin-top:24px;padding:22px 28px;border-radius:24px;background:var(--card);border:1px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;gap:14px 30px}
.comforts h3{font-size:1rem;font-weight:800;color:var(--earth);margin-right:8px}
.comfort{display:flex;align-items:center;gap:10px;font-weight:600;font-size:.95rem}
.comfort span{width:40px;height:40px;border-radius:var(--pebble);display:grid;place-items:center;background:#F4E1C6;color:var(--stone-d)}

/* events */
.events{background:var(--grain),var(--cream)}
.events-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(36px,6vw,84px);align-items:start}
.events-copy{position:sticky;top:120px}
.events-copy h2{font-size:clamp(2rem,4.2vw,3.1rem);line-height:1.08;letter-spacing:-.035em;font-weight:800;color:var(--earth)}
.events-copy p{color:var(--muted);font-size:1.08rem;margin-top:14px}
.events-copy .row{margin-top:28px;display:flex;flex-wrap:wrap;gap:12px}
.event-list{list-style:none;display:grid;gap:16px}
.event{display:grid;grid-template-columns:auto 1fr;gap:20px;padding:26px 28px;border-radius:24px;background:var(--card);border:1px solid var(--line);transition:border-color .3s,transform .3s}
.event:hover{border-color:rgba(226,105,31,.5);transform:translateX(6px)}
.ei{width:58px;height:58px;border-radius:var(--pebble);display:grid;place-items:center;background:linear-gradient(145deg,#F6DDB6,#E6BE8C);color:var(--ember);box-shadow:inset 0 -4px 8px rgba(122,70,40,.18)}
.event h3{font-size:1.18rem;letter-spacing:-.01em;color:var(--earth)}
.event p{color:var(--muted);margin-top:4px}

/* contact */
.contact{background:var(--grain),var(--sand)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:22px;align-items:stretch}
.contact-card{display:flex;flex-direction:column;gap:22px;padding:34px;border-radius:30px;background:var(--card);border:1px solid var(--line)}
.c-row{display:flex;gap:16px;align-items:flex-start}
.c-row .ai{width:48px;height:48px}
.c-row small{display:block;color:var(--muted);font-size:.82rem;font-weight:600}
.c-row strong,.c-row a{font-size:1.06rem;font-weight:700;color:var(--earth);line-height:1.45}
.c-row a:hover{color:var(--sunset-d)}
.c-note{display:block;margin-top:2px;font-size:.86rem;color:var(--muted);line-height:1.45}
.c-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:auto;padding-top:6px}
.map-frame{display:flex}
.map{position:relative;flex:1;min-height:420px;border-radius:24px 20px 26px 18px;overflow:hidden;background:#F3E1C4}
.map > svg{position:absolute;inset:0;width:100%;height:100%}
.map-note{position:absolute;left:16px;top:16px;padding:8px 14px;border-radius:999px;background:rgba(255,251,244,.9);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-size:.82rem;font-weight:700;color:var(--sunset-d)}
.map .btn{position:absolute;right:16px;bottom:16px}
.pulse{transform-box:fill-box;transform-origin:center;animation:pulse 2.4s ease-out infinite}
@keyframes pulse{0%{transform:scale(.4);opacity:.75}100%{transform:scale(2.6);opacity:0}}
.arrive{margin-top:22px;display:grid;grid-template-columns:.85fr 1.15fr;gap:22px;align-items:center}
.arrive h3{font-size:1.35rem;letter-spacing:-.02em;color:var(--earth)}
.arrive p{color:var(--muted);margin-top:6px}
.photos{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.photo{padding:8px;margin:0}
.photo:nth-child(1){transform:rotate(-1.5deg)}
.photo:nth-child(2){transform:rotate(1.2deg)}
.photo img{display:block;width:100%;height:auto;aspect-ratio:294/220;object-fit:cover;border-radius:20px 16px 22px 14px}
.photo figcaption{padding:8px 6px 2px;font-size:.84rem;font-weight:700;color:#FFF6E6;text-shadow:0 1px 3px rgba(30,18,10,.6)}

/* game */
.play{background:radial-gradient(ellipse at 50% 0%,#6A3E22 0%,#3B2416 50%,#1E120A 100%);color:#fff;overflow:hidden}
.play .section-head h2{color:#FFF3DE}
.play .section-head p{color:rgba(255,236,210,.72)}
.play-grid{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:28px;align-items:start}
.arcade{padding:16px}
.arcade-inner{padding:16px;border-radius:24px 20px 26px 18px;background:linear-gradient(160deg,#4A2C1A,#24150C);box-shadow:inset 0 2px 0 rgba(255,230,190,.12),inset 0 -10px 20px rgba(0,0,0,.35)}
.hud{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:456px;margin:0 auto 14px}
.hud div{padding:10px 8px;border-radius:14px;background:rgba(0,0,0,.28);text-align:center}
.hud small{display:block;font-size:.72rem;font-weight:600;color:rgba(255,236,210,.6)}
.hud strong{display:block;font-size:1.2rem;line-height:1.3;color:var(--sun);font-variant-numeric:tabular-nums}
.lives{display:flex;justify-content:center;gap:5px;height:1.56rem;align-items:center}
.lives i{width:11px;height:11px;border-radius:50%;background:var(--sun);box-shadow:0 0 8px rgba(242,201,76,.7)}
.lives i.off{background:rgba(255,255,255,.15);box-shadow:none}
.screen{position:relative;max-width:456px;margin-inline:auto;border-radius:18px;overflow:hidden;background:var(--earth-d);box-shadow:inset 0 0 0 2px rgba(236,212,166,.35),0 0 0 3px rgba(0,0,0,.25)}
.screen canvas{display:block;width:100%;height:auto;aspect-ratio:19/21;touch-action:none}
.overlay{position:absolute;inset:0;display:grid;place-items:center;padding:24px;text-align:center;background:rgba(30,18,10,.74);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transition:opacity .3s}
.overlay.hide{opacity:0;pointer-events:none}
.overlay h3{font-size:1.9rem;letter-spacing:-.03em;color:#FFF3DE}
.overlay p{margin:6px auto 18px;max-width:26ch;color:rgba(255,236,210,.85)}
.controls{display:flex;justify-content:center;gap:10px;margin-top:14px}
.dpad{display:none;grid-template-columns:repeat(3,62px);grid-template-rows:repeat(2,62px);gap:8px;justify-content:center;margin-top:16px}
.dpad button{display:grid;place-items:center;border-radius:var(--pebble);background:linear-gradient(145deg,var(--stone-l),var(--stone-d));color:#FFF6E6;box-shadow:inset 0 2px 0 rgba(255,240,220,.4),inset 0 -4px 8px rgba(59,36,22,.35);touch-action:manipulation;-webkit-user-select:none;user-select:none}
.dpad button:active{background:linear-gradient(145deg,#F2A04A,var(--ember))}
.dpad .up{grid-column:2;grid-row:1}.dpad .left{grid-column:1;grid-row:2}.dpad .down{grid-column:2;grid-row:2}.dpad .right{grid-column:3;grid-row:2}
.how{padding:26px;border-radius:26px;background:rgba(255,236,210,.06);border:1px solid rgba(255,236,210,.12)}
.how h3{font-size:1.1rem;color:#FFF3DE}
.how ul{list-style:none;display:grid;gap:16px;margin-top:16px}
.how li{display:flex;gap:12px;color:rgba(255,236,210,.8);font-size:.93rem;line-height:1.55}
.how li b{flex:none;width:36px;height:36px;border-radius:var(--pebble);display:grid;place-items:center;background:rgba(255,236,210,.1);font-size:1.05rem}
kbd{font-family:inherit;font-size:.8rem;font-weight:700;padding:1px 7px;border-radius:6px;background:rgba(255,236,210,.14);border:1px solid rgba(255,236,210,.2)}

/* footer */
.footer{background:var(--earth-d);color:rgba(255,236,210,.72);padding:0 0 32px;font-size:.95rem}
.footer .stone-band{height:46px;margin-bottom:56px}
.footer-grid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;align-items:flex-start}
.footer p{margin-top:12px;max-width:30ch}
.footer ul{list-style:none;display:grid;gap:8px}
.footer a:hover{color:#fff}
.footer-bottom{margin-top:40px;padding-top:22px;border-top:1px solid rgba(255,236,210,.1);display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;font-size:.84rem;color:rgba(255,236,210,.5)}

/* rooms: hotel layouts */
.sub-head{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:8px 20px;margin-bottom:20px;padding-bottom:12px;border-bottom:2px dashed rgba(169,105,63,.3)}
.sub-head h3{font-size:clamp(1.4rem,2.4vw,1.8rem);letter-spacing:-.025em;color:var(--earth)}
.sub-head span{font-weight:600;color:var(--muted);font-size:.95rem}
.hotel-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.rtype{display:flex;flex-direction:column;padding:24px;border-radius:24px;background:var(--card);border:1px solid var(--line);transition:transform .3s,box-shadow .3s}
.rtype:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.bed-row{display:flex;gap:6px;color:var(--sunset-d)}
.bed-row.sm{gap:3px;color:var(--stone-d)}
.rtype .bed-row{margin-bottom:16px;padding:10px 12px;border-radius:var(--pebble);background:#F7E6CF;align-self:flex-start}
.rtype h4{font-size:1.12rem;letter-spacing:-.015em;color:var(--earth);line-height:1.3}
.rtype p{color:var(--muted);font-size:.93rem;margin-top:6px}
.keys{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 20px}
.key{position:relative;display:grid;place-items:center;min-width:54px;padding:14px 10px 8px;border-radius:14px 14px 20px 20px;background:linear-gradient(160deg,var(--stone-l),var(--stone-d));color:#FFF6E6;font-weight:800;font-size:1.25rem;line-height:1;box-shadow:inset 0 2px 0 rgba(255,240,220,.45),inset 0 -4px 8px rgba(59,36,22,.3)}
.key::before{content:"";position:absolute;top:5px;left:50%;width:7px;height:7px;margin-left:-3.5px;border-radius:50%;background:var(--card);box-shadow:inset 0 1px 2px rgba(59,36,22,.5)}
.key small{font-size:.6rem;font-weight:700;letter-spacing:.02em;opacity:.85;margin:4px 0 3px}

/* rooms: apartments */
.units{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;align-items:start}
.unit{border-radius:26px;overflow:hidden;background:var(--card);border:1px solid var(--line);transition:transform .3s,box-shadow .3s}
.unit:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.unit-top{position:relative;display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap;padding:22px 24px 20px;color:#fff;background:linear-gradient(135deg,var(--sunset),var(--ember))}
.u11 .unit-top{background:linear-gradient(135deg,#B8874C,#E6C58E 45%,#9C6B34)}
.u12 .unit-top{background:linear-gradient(135deg,var(--palm-l),#173D28)}
.unit-no{display:flex;flex-direction:column;font-size:3.2rem;font-weight:800;line-height:.9;letter-spacing:-.04em}
.unit-no small{font-size:.8rem;font-weight:700;letter-spacing:0;opacity:.85;margin-bottom:4px}
.unit-tag{padding:5px 12px;border-radius:999px;background:rgba(255,248,232,.92);color:var(--earth);font-size:.78rem;font-weight:800;align-self:flex-start}
.unit-meta{margin-left:auto;font-weight:700;font-size:.9rem;opacity:.95}
.unit-body{padding:22px 24px 26px}
.unit-body > p{color:var(--muted)}
.bedrooms{list-style:none;margin:18px 0 6px;display:grid;gap:10px}
.bedrooms li{display:grid;grid-template-columns:88px 1fr;gap:12px;padding:12px 14px;border-radius:16px;background:#F8ECDB}
.br-name{font-weight:800;font-size:.88rem;color:var(--earth)}
.br-beds{display:flex;flex-direction:column;gap:4px;font-size:.9rem;font-weight:600;color:var(--ink)}
.br-beds em{font-style:normal;font-size:.8rem;font-weight:600;color:var(--sunset-d)}
.group-cta{margin-top:26px;display:grid;grid-template-columns:auto 1fr auto;gap:22px;align-items:center;padding:26px 30px;border-radius:28px;background:var(--card);border:1px solid var(--line)}
.group-cta h3{font-size:1.25rem;letter-spacing:-.02em;color:var(--earth)}
.group-cta p{color:var(--muted);margin-top:4px;max-width:44rem}

/* events: catering */
.catering{display:grid;grid-template-columns:auto 1fr;gap:20px;padding:26px 28px;border-radius:24px;background:linear-gradient(135deg,#FCE7C6,#F7D3A4);border:1px solid rgba(226,105,31,.3)}
.catering h3{font-size:1.18rem;color:var(--earth)}
.catering p{color:#6A4A37;margin-top:4px}
.meals{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.meals li{padding:6px 14px;border-radius:999px;background:rgba(255,251,244,.85);font-weight:700;font-size:.82rem;color:var(--sunset-d)}

/* explore */
.explore{background:var(--grain),linear-gradient(180deg,var(--cream),#FBEAD2)}
.tabs{display:inline-flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:999px;background:#F3DFC2;margin-bottom:26px}
.tabs button{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:999px;font-weight:700;font-size:.93rem;color:var(--muted);transition:background .25s,color .25s}
.tabs button:hover{color:var(--earth)}
.tabs button.on{background:var(--card);color:var(--sunset-d);box-shadow:0 6px 14px -8px rgba(59,36,22,.5)}
.ex-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.ex-card{display:flex;flex-direction:column;padding:24px;border-radius:24px;background:var(--card);border:1px solid var(--line);transition:transform .3s,box-shadow .3s,border-color .3s;animation:rise .5s cubic-bezier(.2,.7,.2,1) both}
.ex-card:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:rgba(226,105,31,.4)}
.ex-meta{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}
.ex-town{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:999px;background:#F4E1C6;color:var(--stone-d);font-size:.78rem;font-weight:700}
.ex-when{padding:5px 10px;border-radius:999px;background:linear-gradient(135deg,var(--sunset),var(--ember));color:#fff;font-size:.78rem;font-weight:700}
.ex-card h3{font-size:1.12rem;letter-spacing:-.015em;color:var(--earth);line-height:1.3}
.ex-card p{color:var(--muted);font-size:.94rem;margin-top:6px;flex:1}
.ex-more{margin-top:14px;display:inline-flex;align-items:center;gap:6px;font-weight:700;color:var(--sunset-d);font-size:.92rem}
.ex-empty{grid-column:1/-1}
.ex-foot{margin-top:26px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px}
.ex-foot p{color:var(--muted);font-size:.88rem;max-width:44rem}

/* google photos panel */
.gallery-cta{margin-top:22px}
.gallery-inner{display:grid;grid-template-columns:auto 1fr auto;gap:22px;align-items:center;padding:26px 30px;border-radius:24px 20px 26px 18px;background:linear-gradient(120deg,rgba(30,18,10,.94),rgba(59,36,22,.88));color:#FFF3DE}
.gallery-inner h3{font-size:1.3rem;letter-spacing:-.02em}
.gallery-inner p{color:rgba(255,236,210,.8);margin-top:4px;max-width:40rem}

/* logos */
.badge{display:block;border-radius:50%;flex:none;-webkit-user-select:none;user-select:none}
.brand .badge{filter:drop-shadow(0 4px 8px rgba(59,36,22,.3))}
.footer-logo{display:inline-block}
.footer-logo img{display:block;width:170px;height:auto}

/* responsive */
@media (max-width:980px){
  .menu-btn{display:inline-flex}
  .nav-links{position:absolute;top:calc(100% + 10px);left:0;right:0;flex-direction:column;padding:10px;border-radius:24px;background:rgba(252,244,231,.97);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid rgba(236,212,166,.9);box-shadow:var(--shadow);opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .25s,transform .25s}
  .nav-links.open{opacity:1;transform:none;pointer-events:auto}
  .nav-links a{padding:14px 16px;font-size:1rem}
  .hero-grid,.amen-grid,.events-grid,.contact-grid,.play-grid,.arrive{grid-template-columns:1fr}
  .hotel-grid{grid-template-columns:1fr 1fr}
  .units,.ex-grid{grid-template-columns:1fr 1fr}
  .group-cta,.gallery-inner{grid-template-columns:auto 1fr}
  .group-cta .btn,.gallery-inner .btn{grid-column:1/-1;justify-self:start}
  .postcard-wrap{max-width:460px;margin-inline:auto;width:100%}
  .float-chip{left:-8px}
  .rooms{grid-template-columns:1fr 1fr}
  .events-copy{position:static}
}
@media (max-width:900px),(pointer:coarse){.dpad{display:grid}}
@media (max-width:640px){
  .wrap{width:min(1180px,100% - 28px)}
  .rooms{grid-template-columns:1fr}
  .carwash{grid-template-columns:1fr;padding:28px}
  .pool{min-height:340px;padding:24px}
  .contact-card{padding:26px}
  .hud strong{font-size:1rem}
  .arcade{padding:9px}.arcade-inner{padding:10px}
  .stone-frame{padding:9px}
  .nav-cta .btn{padding:11px 16px;font-size:.9rem}
  .brand{font-size:1rem}
  .hotel-grid,.units,.ex-grid{grid-template-columns:1fr}
  .map{min-height:0;display:flex;flex-direction:column}
  .map > svg{position:relative;inset:auto;height:auto;aspect-ratio:520/390}
  .map-note{display:none}
  .map .btn{position:static;margin:4px 12px 12px}
  .group-cta,.gallery-inner{grid-template-columns:1fr;padding:24px}
  .tabs{display:flex;border-radius:22px}
  .tabs button{flex:1;justify-content:center;padding:10px 12px}
}
@media (max-width:360px){.brand{font-size:0}}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}
  html{scroll-behavior:auto}
  .js .reveal{opacity:1;transform:none}
}
`;

/* =====================================================================
   "Around the South Coast" live data
   Fetched on the server from visitkznsouthcoast.co.za and refreshed every
   12 hours (Next.js incremental static regeneration). The page falls back
   to its built-in list if the site can't be reached.
   ===================================================================== */
export const revalidate = 43200; // seconds (12 hours)

const SC_BASE = "https://www.visitkznsouthcoast.co.za";
const SC_UA = "OasisLodgeWebsite/1.0 (South Coast guide for guests of Oasis Lodge, Margate)";
// Towns near Margate, closest first. Listings elsewhere on the coast are skipped.
const NEAR = [
  "margate", "ramsgate", "uvongo", "manaba-beach", "st-michaels", "shelly-beach", "izotsha", "gamalakhe",
  "southbroom", "marina-beach", "san-lameer", "trafalgar", "munster", "port-shepstone", "port-shepstone-1",
  "oribi-gorge", "umtentweni", "port-edward",
];
const TOWN_NAMES = { "st-michaels": "St Michael’s-on-Sea", "port-shepstone-1": "Port Shepstone", "scottburgh-umzinto-north": "Scottburgh" };
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DATE_RE = new RegExp(`(\\d{1,2})(?:st|nd|rd|th)?\\s+(${MONTHS.join("|")})\\s+(\\d{4})`);

const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const textOf = (html) =>
  decode(html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const tidyCaps = (s) =>
  s && s.replace(/[^A-Za-z]/g, "").length > 6 && s === s.toUpperCase()
    ? s.toLowerCase().replace(/(^|[.!?]\s+)([a-z])/g, (m) => m.toUpperCase())
    : s;
const titleCase = (s) =>
  s === s.toUpperCase() ? s.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase()) : s;
const clip = (s, n = 190) => (s.length > n ? s.slice(0, s.lastIndexOf(" ", n)).replace(/[,;:\s]+$/, "") + "…" : s);

const slugOf = (url) => {
  const m = url.match(/\/(?:vic|events)\/([^/?#]+)\/[^/?#]+\/?$/);
  return m && m[1] !== "category" && m[1] !== "page" ? m[1] : "";
};
const townOf = (slug) =>
  TOWN_NAMES[slug] || slug.split("-").filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

function parseListings(html, kind) {
  const body = html.replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, " ");
  const re = /<a\s[^>]*title="View:\s*([^"]*)"[^>]*>/gi;
  const hits = [];
  let m;
  while ((m = re.exec(body))) {
    const href = (m[0].match(/href="([^"]+)"/) || [])[1];
    if (href) hits.push({ title: decode(m[1]).trim(), url: decode(href), at: m.index });
  }
  const seen = new Set();
  const out = [];
  hits.forEach((h, i) => {
    if (seen.has(h.url)) return;
    seen.add(h.url);
    const end = i + 1 < hits.length ? hits[i + 1].at : Math.min(body.length, h.at + 6000);
    let t = textOf(body.slice(h.at, end)).split(/Read more|Posts navigation|Loading\.\.\.|No Records Found/)[0];
    t = t.replace(h.title, "").trim();
    const dm = t.match(DATE_RE);
    const addr = (t.match(/Address:\s*(.+?)\s+KwaZulu-Natal/) || [])[1];
    let d = t;
    if (kind === "events" && dm) d = d.slice(d.indexOf(dm[0]) + dm[0].length);
    else if (d.includes("South Africa")) d = d.slice(d.lastIndexOf("South Africa") + 12);
    d = d.replace(/https?:\/\/\S+/g, " ").replace(/No Reviews|Favorite/g, " ").replace(/\s+/g, " ").trim();
    if (!d && addr) d = addr.replace(/\s+\d{4}$/, "").trim();
    const slug = slugOf(h.url);
    const item = { title: titleCase(h.title), town: slug ? townOf(slug) : "", slug, text: clip(tidyCaps(d)), url: h.url };
    if (dm) {
      const mi = MONTHS.indexOf(dm[2]);
      item.date = `${dm[3]}-${String(mi + 1).padStart(2, "0")}-${dm[1].padStart(2, "0")}`;
      item.when = `${+dm[1]} ${dm[2]} ${dm[3]}`;
    }
    out.push(item);
  });
  return out;
}

async function grab(path) {
  try {
    const res = await fetch(SC_BASE + path, {
      headers: { "User-Agent": SC_UA, Accept: "text/html" },
      next: { revalidate },
      signal: AbortSignal.timeout(10000),
    });
    return res.ok ? await res.text() : "";
  } catch {
    return "";
  }
}

const pages = (base, n) => Array.from({ length: n }, (_, i) => (i === 0 ? base : `${base}page/${i + 1}/`));

function nearby(list, limit = 6) {
  const seen = new Set();
  return list
    .filter((x) => NEAR.includes(x.slug) && !seen.has(x.url) && seen.add(x.url))
    .sort((a, b) => NEAR.indexOf(a.slug) - NEAR.indexOf(b.slug) || a.title.localeCompare(b.title))
    .slice(0, limit)
    .map(({ slug, ...rest }) => rest);
}

async function getSouthCoast() {
  const [ev1, ev2, food, todo] = await Promise.all([
    grab("/events/category/events/?etype=upcoming"),
    grab("/events/category/events/page/2/?etype=upcoming"),
    Promise.all(pages("/vic/category/restaurants/", 4).map(grab)),
    Promise.all(pages("/vic/category/things-to-do/", 10).map(grab)),
  ]);

  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  const titles = new Set();
  const events = [...parseListings(ev1, "events"), ...parseListings(ev2, "events")]
    .filter((e) => !e.date || e.date >= yesterday)
    .sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"))
    .filter((e) => !titles.has(e.title) && titles.add(e.title))
    .slice(0, 6)
    .map(({ slug, ...rest }) => rest);

  const data = {
    fetchedAt: new Date().toISOString(),
    events,
    food: nearby(food.flatMap((h) => parseListings(h, "vic"))),
    todo: nearby(todo.flatMap((h) => parseListings(h, "vic"))),
  };
  return data.events.length || data.food.length || data.todo.length ? data : null;
}

export default async function RootLayout({ children }) {
  const southCoast = await getSouthCoast().catch(() => null);
  return (
    <html lang="en-ZA" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        {southCoast && (
          <script
            id="south-coast-data"
            type="application/json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(southCoast).replace(/</g, "\u003c") }}
          />
        )}
        {children}
      </body>
    </html>
  );
}
