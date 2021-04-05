import * as C from 'color';
import { ITheme } from './types';
import { elements, colors } from './config';

const darkener = 0.175;

const sidebarBg = C(colors.red).darken(0.814).desaturate(0.92).darken(darkener);
const sidebarFg = sidebarBg.desaturate(0.88).lighten(4);
const activityBg = sidebarBg.lighten(0.14).darken(darkener);
const highlight = C(colors.red).darken(0.5).desaturate(0.14);
const peekBg = sidebarBg.desaturate(0.25).darken(0.075).darken(darkener);
const theme: ITheme = {
  name: 'Null-Syntax',
  type: 'dark',
  colors: {
    // 'contrastActiveBorder': `${highlight.hex()}33`,
    'foreground': elements.editorText,
    'selection.background': elements.selection,

    'titleBar.activeBackground': activityBg.hex(),
    'titleBar.inactiveBackground': activityBg.hex(),

    'peekViewEditor.matchHighlightBackground': C(elements.background)
      .darken(0.088)
      .hex(),
    'peekViewEditor.background': peekBg.hex(),
    'peekView.border': peekBg.lighten(0.3).hex(),
    'peekViewResult.background': elements.background,
    'peekViewEditorGutter.background': sidebarBg.darken(0.3).hex() + '60',
    'peekViewResult.lineForeground': sidebarFg.darken(0.25).hex(),
    'peekViewTitle.background': peekBg.hex(),
    'peekViewTitleDescription.foreground': sidebarBg.lighten(2.88).hex(),
    'peekViewTitleLabel.foreground': sidebarBg.lighten(5).hex(),

    'editor.foreground': elements.text,
    'editor.background': elements.background,
    'editor.selectionBackground': elements.selection,
    'editor.selectionHighlightBorder': elements.selectionBorder,
    'editor.findMatchHighlightBackground': elements.findHighlight,
    'editor.selectionHighlightBackground': elements.findHighlight,

    'editor.lineHighlightBackground': sidebarBg.darken(0.1).hex() + '88',
    'editor.lineHighlightBorder': sidebarBg.lighten(0.1).hex() + '88',

    'editorGroupHeader.noTabsBackground': '#00000000',
    'editorGroupHeader.tabsBackground': '#00000000',
    'editorGroupHeader.tabsBorder': '#00000022',
    'editorGroup.border': '#ffffff0a',

    'tab.inactiveBackground': '#ffffff00',
    'tab.activeBackground': sidebarBg.hex(),

    'editorBracketMatch.border': elements.bracketContentsForeground,
    'editorCursor.foreground': elements.caret,
    'editorWhitespace.foreground': elements.invisibles,

    'activityBar.background': activityBg.hex(),
    'activityBar.foreground': sidebarFg.darken(0.14).hex(),
    'activityBarBadge.background': sidebarBg.saturate(0.7).darken(0.1).hex(),
    'activityBarBadge.foreground': C(colors.red).saturate(0.88).hex(),

    'sideBar.background': sidebarBg.hex(),
    'sideBar.foreground': `${sidebarFg.lighten(0.25).hex()}aa`,
    'sideBar.border': sidebarBg.lighten(0.3).hex(),
    'sideBarSectionHeader.background': sidebarBg.lighten(0.14).hex(),

    'gitDecoration.ignoredResourceForeground': `${sidebarFg.hex()}70`,
    'gitDecoration.modifiedResourceForeground': `${C(colors.orange)
      .lighten(0.14)
      .hex()}cc`,

    'list.inactiveSelectionForeground': '#ffffffbb',
    'list.inactiveSelectionBackground': `${highlight.hex()}14`,
    'list.activeSelectionBackground': `${highlight.hex()}24`,
    'list.focusBackground': `${highlight.hex()}33`,
    'list.hoverBackground': `${highlight.hex()}33`,
    'list.hoverForeground': '#ffffffbb',

    'terminal.background': sidebarBg.hex(),
    'terminal.border': sidebarBg.lighten(0.3).hex(),

    'panel.border': sidebarBg.lighten(0.3).hex(),
    'panel.background': sidebarBg.lighten(0.075).hex(),
    'panelTitle.activeBorder': highlight.hex(),

    'focusBorder': highlight.hex() + '88',

    'editorLineNumber.foreground': sidebarBg.lighten(0.75).hex(),
    'editorLineNumber.activeForeground': sidebarFg.hex(),

    'editorSuggestWidget.background': activityBg.hex() + 'e0',
    'editorSuggestWidget.border': activityBg.hex() + '00',
    'editorSuggestWidget.foreground': sidebarFg.hex(),

    'dropdown.background': activityBg.lighten(0.1).hex() + 'f0',
    'dropdown.foreground': sidebarFg.hex(),
  },
  tokenColors: [
    /**
     * Object property definition
     */
    {
      scope: `
        meta.class meta.field.declaration meta.definition.property variable.object.property,
        meta.object-literal.key,
        support.type.property-name.json,
        entity.name.tag.yaml,
        entity.name.section.markdown,
        entity.other.attribute-name,
        variable.other.normal.shell,
        source.rust entity.name.type.mod,
        meta.property-name.css, meta.property-name.scss

      `,
      settings: {
        foreground: elements.propWrite,
        fontStyle: 'bold',
      },
    },
    /**
     * CSS
     */
    {
      scope: `
        meta.property-name.css, meta.property-name.scss

      `,
      settings: {
        foreground: colors.grass,
        fontStyle: 'bold',
      },
    },

    /**
     * Destructuring
     */
    {
      scope: `
        meta.object-binding-pattern-variable variable.object.property,
        meta.parameter.object-binding-pattern variable.object.property,
        meta.array-binding-pattern-variable variable.object.property,
        meta.parameters variable.object.property
      `,
      settings: { foreground: elements.propRead },
    },

    /**
     * Strings, constants, numbers
     */
    {
      scope: `
        string,
        markup.inline.raw.markdown
      `,
      settings: { foreground: elements.string },
    },

    // Fix templates
    {
      scope: `
        meta.template.expression
      `,
      settings: { foreground: elements.text },
    },

    /**
     * Functions
     */
    {
      scope: `
        support.function,
        entity.name.function,
        meta.selector.css,
        entity.name.tag,
        source.rust support.other.macro
      `,
      settings: { foreground: elements.function },
    },

    /**
     * Operators
     */
    {
      scope: `
        keyword.operator,
        json.punctuation.separator,
        punctuation.separator.key,
        punctuation.separator.key-value,
        punctuation.definition.scalar.folded,
        yaml.chomping-indicator,
        punctuation.definition.sequence.item,
        beginning.punctuation.definition.list.markdown,
        punctuation.decorator
      `,
      settings: { foreground: elements.operator },
    },

    /**
     * Keywords
     */
    {
      scope: `
        keyword.reserved,
        keyword.control,
        keyword.other.debugger,
        constant.language.import-export-all,
        css.keyword.other.unit,
        keyword.language.gherkin,
        source.rust keyword.operator.assignment,
        source.rust keyword.operator.arithmetic,
        punctuation.assignment.graphql

      `,
      settings: {
        foreground: elements.keyword,
        fontStyle: 'italic',
      },
    },

    /**
     * Storage
     */
    {
      scope: `
        storage,
        keyword.other.binding.rust,
        source.rust keyword.other,
        source.rust entity.name.lifetime,
        meta.attribute.rust,
        keyword.scalar.graphql,
        keyword.type.graphql,
        keyword.union.graphql,
        keyword.input.graphql,
        keyword.enum.graphql
      `,
      settings: { foreground: elements.storage, fontStyle: 'italic' },
    },
    {
      scope: `
        meta.var storage.type.js,
        keyword.other.unit
      `,
      settings: { foreground: elements.storage2 },
    },

    /**
     * Constants
     */
    {
      scope: `
        support.constant,
        constant.other,
        constant.numeric,
        regexp,
        variable.language.this,
        variable.language.super,
        support.class.builtin,
        support.class.console.js,
        support.variable.object.process,
        support.variable.object.node,
        support.variable.property.js,
        constant.language,
        markup.heading.section,
        source.rust variable.language.self,
        source.rust storage.class.std,
        source.rust storage.type.core,
        source.toml constant.other
      `,
      settings: {
        foreground: colors.blue,
        fontStyle: 'italic',
      },
    },

    /**
     * (ITALICS) Language
     */
    {
      scope: `
        variable.language,
        constant.language
      `,
      settings: { fontStyle: 'italic' },
    },

    /**
     * (BOLD) Variable assignment and usage
     */
    {
      scope: `
        meta.definition.variable,
        variable.parameter,
        meta.import variable.other.readwrite.alias,
        meta.class.js entity.name.type.class.js,
        meta.class.js meta.method.declaration.js meta.definition.method.js,
        meta.class.js meta.field.declaration.js meta.definition.property.js,
        source.rust variable.other
      `,
      settings: {
        fontStyle: 'bold',
        foreground: elements.importantText,
      },
    },

    // Imports
    {
      scope: `
        meta.import variable.other.readwrite.alias,
        variable.parameter.graphql
      `,
      settings: {
        fontStyle: 'bold underline',
      },
    },

    // /**
    //  * Structure Declarations (Array, Object)
    //  */
    // {
    //   scope: `
    //     meta.array.literal meta.brace.square,
    //     meta.objectliteral punctuation.definition.block
    //   `,
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: elements.dataStructures
    //   }
    // },

    /**
     * Fade out destructuring, non-literal punctuation
     */
    {
      scope: `
        punctuation.definition.binding-pattern,
        meta.object-literal.key meta.brace.square,
        punctuation.definition.template-expression
      `,
      settings: { foreground: elements.brace },
    },

    /**
     * Parenthesis
     */
    {
      scope: `
        meta.brace,
        punctuation.definition.parameters.begin,
        punctuation.definition.parameters.end
      `,
      settings: { foreground: elements.brace },
    },

    /**
     * Parameters
     */
    {
      scope: `
        punctuation.definition.parameters.begin,
        punctuation.definition.parameters.end
      `,
      settings: { fontStyle: 'bold' },
    },

    /**
     * Annotations
     */
    {
      scope: `
        meta.indexer.declaration.ts variable.parameter.ts,
        meta.interface.ts,
        meta.interface entity.name.type,
        cast.expr.ts entity.name.type.ts,
        meta.type.parameters.ts entity.name.type.ts,
        meta.indexer.declaration.tsx variable.parameter.tsx,
        meta.interface.tsx,
        cast.expr.tsx entity.name.type.tsx,
        meta.type.parameters.tsx entity.name.type.tsx,
        meta.type.declaration,
        meta.type.annotation,
        meta.type.annotation variable.object.property,
        meta.class meta.type.annotation meta.object.type meta.definition.property variable.object.property,
        meta.class meta.object.type meta.field.declaration meta.definition.property variable.object.property,
        meta.return.type,
        entity.name.type.rust,
        support.type.graphql
      `,
      settings: { foreground: elements.annotation },
    },
    {
      scope: `
        meta.type.annotation variable.parameter,
        meta.type.declaration variable.object.property,
        meta.type.annotation meta.object.type variable.object.property,
        meta.type.annotation string,
        variable.graphql
      `,
      settings: { foreground: elements.annotation2 },
    },
    {
      scope: `
        keyword.operator.type,
        keyword.operator.optional,
        source.rust keyword.operator
      `,
      settings: { foreground: elements.punctuation },
    },
    /**
     * Interface props
     */
    {
      scope: `
        meta.interface.ts meta.definition.property.ts,
        meta.object.type.ts meta.definition.property.ts,
        meta.type.declaration.ts entity.name.type.alias.ts,
        meta.interface.ts entity.name.type.interface.ts
        meta.interface.tsx meta.definition.property.tsx,
        meta.object.type.tsx meta.definition.property.tsx,
        meta.type.declaration.tsx entity.name.type.alias.tsx,
        meta.interface.tsx entity.name.type.interface.tsx
      `,
      settings: {
        fontStyle: 'bold',
      },
    },

    /**
     * Annotation primitives
     */
    {
      scope: `
        support.type.primitive,
        support.type.builtin,
        source.rust storage.type.primitive
      `,
      settings: { foreground: elements.annotation3, fontStyle: 'italic' },
    },

    /**
     * Comment
     */
    {
      scope: `
        comment
      `,
      settings: { foreground: elements.comment },
    },

    /**
     * Punctuation
     */
    {
      scope: `
        punctuation,
        markup.heading,
        keyword.control.from
      `,
      settings: { foreground: elements.punctuation },
    },

    /**
     * Terminator
     */
    {
      scope: `
        punctuation.terminator
      `,
      settings: { foreground: elements.terminator },
    },

    {
      scope: `
        string.language.gherkin.scenario.title,
        entity.scalar.graphql,
        support.type.enum.graphql,
        constant.character.enum.graphql

      `,
      settings: { foreground: elements.constant },
    },
  ],
  semanticTokenColors: {
    'interface.declaration': { fontStyle: 'bold underline' },
    'type.declaration': { fontStyle: 'bold underline' },
    'parameter.declaration': { fontStyle: 'bold underline' },
    'function.declaration': { fontStyle: 'bold underline' },
    'variable.declaration': { fontStyle: 'bold underline' },

    'typeParameter': { fontStyle: 'italic' },
    'namespace': { fontStyle: 'italic' },
    'type': { fontStyle: 'italic' },
    'interface': { fontStyle: 'italic', foreground: elements.annotation },
  },
};

export default theme;
