import * as C from 'color';

export const colors = {
  foregrounds: ['#e0e0e0', '#dadada', '#cacaca', '#bababa', '#ffffffcc'],
  back: '#201f1f',
  red: '#e79d8d',
  orange: '#fdbd7d',
  yellow: '#e2d294',
  gold: '#bfa383',
  grass: '#abc78a',
  lime: '#6fb050',
  teal: '#a0dab0',
  cyan: '#a1dbe3',
  blue: '#96b3f2',
  purple: '#bcb6d9',
  darkPurple: '#a4a1c0',

  shade: '#9f9f9f',
  shade1: '#949494',
  shade2: '#727272',
  shade3: '#4a4a4a',
};

const dry: any = {};

export const elements = {
  importantText: colors.foregrounds[0],
  text: colors.foregrounds[1],
  editorText: colors.foregrounds[4],
  background: dry.background = colors.back,

  // Not sure where these get used
  bracketsForeground: colors.red,
  bracketContentsForeground: colors.darkPurple,

  punctuation: colors.shade1,
  operator: colors.red,
  keyword: colors.red,
  keywordControl: colors.red,
  dataStructures: colors.shade,

  terminator: colors.shade3,
  delimiter: colors.shade2,
  brace: colors.shade2,
  block: colors.shade3,
  string: colors.cyan,
  regexp: colors.blue,
  quote: colors.shade1,
  comment: C(colors.purple).darken(0.22).desaturate(0.6).hex(),
  annotation: C(colors.darkPurple).saturate(0.6).hex(),
  annotation2: C(colors.darkPurple).desaturate(0.35).lighten(0.15).hex(),
  annotation3: C(colors.darkPurple)
    .mix(C(colors.teal), 0.5)
    .desaturate(0.34)
    .darken(0.12)
    .hex(),

  function: colors.orange,

  variable: colors.yellow,
  support: C(colors.yellow).mix(C(colors.foregrounds[1])).hex(),
  supportType: colors.red,
  supportFunction: colors.lime,
  storage: colors.shade,
  storage2: colors.shade1,
  entity: colors.shade,
  constant: colors.teal,
  class: colors.teal,

  propWrite: colors.yellow,
  propRead: colors.shade,

  caret: '#ffffff',
  selection: colors.lime + '30',
  selectionBorder: colors.lime + '70',
  lineHighlight: C(dry.background).darken(0.2).hex(),
  findHighlight: colors.gold + '40',
  guide: colors.foregrounds[1] + '35',
  activeGuide: colors.foregrounds[1] + '50',
  invisibles: colors.foregrounds[1] + '05',
};
