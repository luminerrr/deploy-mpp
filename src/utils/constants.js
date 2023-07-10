let Lwl = 69.72;
let B = 16.3;
let T = 4.1;
let LOA = 73.3;
let LPP = 66.4;
const LDisp = (Lwl + LPP) / 2;
const Cb = (LDisp * 1.025) / (B * T * LOA);
let GrossTonnage = 2877;
let Vdinas = 12;
let CbNSP = 0.611;
let CmB = 0.9809;
let CpT = 0.673;
const Ldispl = 0.5 * (Lwl + LPP);
const ShiLWL = (Cb * Ldispl) / Lwl;
const Cwp = (1 + 2 * ShiLWL) / 3;
const SpeedConstant = Vdinas / (Lwl * 3.2808) ** 0.5;
const LCB = 0.0025 * LDisp;
const VDisp = B * T * Cb * LDisp;
const BL = B / Lwl;
const BT = B / T;
const LB = LOA / B;
const TL = T / Lwl;
const Lr = LPP * (1 - CpT + 0.06 * CpT * (LCB / (4 * CpT - 1)));
const BLR = B / Lr;
const L3Vdisp = Lwl ** 3 / (Lwl * B * T * CbNSP * 1.025);

const v = 1.188 * 10 ** -6;
const oneCp = 1 - CpT;
const LLR = Lwl / Lr;
let CStern = 8;
const Cfourteen = 1 + 0.11 * CStern;
const kOne =
  0.93 +
  0.487118 *
    TL *
    BLR ** 1.06806 *
    TL ** 0.46106 *
    LLR ** 0.121563 *
    TL ** 0.36486 *
    oneCp ** -0.604247;
const S =
  Lwl *
    (2 * T + B) *
    CmB ** 0.5 *
    (0.453 + 0.4425 * Cb - 0.2862 * CmB - 0.003467 * BT + 0.3696 * Cwp) +
  2.38 * (6.62 / Cb);

const TFL = Lwl / T;
let Cone = 1;
let Ctwo = 1;
let Cthree = 1;
let Cfour = 0.04;
let Cfive = 1.5;
let Cfifteen = -1.69;
let Csixteen = 0;

const Ca =
  0.006 * (Lwl + 100) ** -0.16 -
  0.00205 +
  0.003 * ((Lwl / 7.5) ** 0.5 * Cb ** 4 * 1 * (0.04 - Cfour));

const kTwo = 1.5 + 2.8;
const Sapp = Cone * Ctwo * Cthree * Cfive * ((1.75 * Lwl * T) / 100);
const kTwoEq = kTwo / Sapp / Sapp;
const LVdispl = Lwl / VDisp ** 0.33;
const lambda = LB <= 12 ? 1.44 * Cb - 0.03 * LB : 1.44 * Cb - 0.36;

const w = (0.5*Cb)-0.05
const t = w*0.9
let nrr = 0.96
let KoeHull = 1.1
const nh = (1-t)/(1-w)
let no = 0.5
const PC = nh*no*nrr

export {
  Lwl,
  B,
  T,
  LOA,
  LPP,
  LDisp,
  Cb,
  GrossTonnage,
  Vdinas,
  CbNSP,
  CmB,
  CpT,
  Ldispl,
  ShiLWL,
  Cwp,
  SpeedConstant,
  LCB,
  VDisp,
  BL,
  BT,
  LB,
  TL,
  Lr,
  BLR,
  L3Vdisp,
  v,
  oneCp,
  LLR,
  CStern,
  Cfourteen,
  kOne,
  S,
  TFL,
  Cone,
  Ctwo,
  Cthree,
  Cfour,
  Cfive,
  Cfifteen,
  Csixteen,
  Ca,
  kTwo,
  Sapp,
  kTwoEq,
  LVdispl,
  lambda,
  w,
  t,
  nrr,
  KoeHull,
  nh,
  no,
  PC,
};
