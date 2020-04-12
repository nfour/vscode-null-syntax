export interface ITheme {
  name: string;
  type: string;
  colors: Partial<{
    /** Integrated Terminal Colors */
    'terminal.background': string;
    'terminal.foreground': string;
    'terminal.ansiBrightBlack': string;
    'terminal.ansiBrightRed': string;
    'terminal.ansiBrightGreen': string;
    'terminal.ansiBrightYellow': string;
    'terminal.ansiBrightBlue': string;
    'terminal.ansiBrightMagenta': string;
    'terminal.ansiBrightCyan': string;
    'terminal.ansiBrightWhite': string;
    'terminal.ansiBlack': string;
    'terminal.ansiRed': string;
    'terminal.ansiGreen': string;
    'terminal.ansiYellow': string;
    'terminal.ansiBlue': string;
    'terminal.ansiMagenta': string;
    'terminal.ansiCyan': string;
    'terminal.ansiWhite': string;

    /** Contrast Colors */
    /** An extra border around elements to separate them from others for greater contrast */
    'contrastBorder': string;
    /** An extra border around active elements to separate them from others for greater contrast */
    'contrastActiveBorder': string;

    /** Base Colors */
    /** Overall border color for focused elements. This color is only used if not overridden by a component */
    'focusBorder': string;
    /** Overall foreground color. This color is only used if not overridden by a component */
    'foreground': string;
    /** Shadow color of widgets such as Find/Replace inside the editor */
    'widget.shadow': string;
    /** Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal) */
    'selection.background': string;
    /** Overall foreground color for error messages (this color is only used if not overridden by a component) */
    'errorForeground': string;

    /** Button Control */
    /** Button background color */
    'button.background': string;
    /** Button foreground color */
    'button.foreground': string;
    /** Button background color when hovering */
    'button.hoverBackground': string;

    /** Dropdown Control */
    /** Dropdown background */
    'dropdown.background': string;
    /** Dropdown border */
    'dropdown.border': string;
    /** Dropdown foreground */
    'dropdown.foreground': string;

    /** Input Control */
    /** Input box background */
    'input.background': string;
    /** Input box foreground */
    'input.foreground': string;
    /** Input box border */
    'input.border': string;
    /** Input box foreground color for placeholder text */
    'input.placeholderForeground': string;
    /** Border color of activated options in input fields */
    'inputOption.activeBorder': string;
    /** Input validation background color for information severity */
    'inputValidation.infoBackground': string;
    /** Input validation border color for information severity */
    'inputValidation.infoBorder': string;
    /** Input validation background color for information warning */
    'inputValidation.warningBackground': string;
    /** Input validation border color for warning severity */
    'inputValidation.warningBorder': string;
    /** Input validation background color for error severity */
    'inputValidation.errorBackground': string;
    /** Input validation border color for error severity */
    'inputValidation.errorBorder': string;

    /** Scroll Bar Control */
    /** Scroll Bar shadow to indicate that the view is scrolled */
    'scrollbar.shadow': string;
    /** Slider background color when active */
    'scrollbarSlider.activeBackground': string;
    /** Slider background color */
    'scrollbarSlider.background': string;
    /** Slider background color when hovering */
    'scrollbarSlider.hoverBackground': string;

    /** Badge */
    /** Badge foreground color */
    'badge.foreground': string;
    /** Badge background color */
    'badge.background': string;

    /** Progress Bar */
    /** Background color of the progress bar shown for long running operations */
    'progressBar.background': string;

    /** List & Trees */
    /** List/Tree background color for the selected item when the list/tree is active */
    'list.activeSelectionBackground': string;
    /** List/Tree foreground color for the selected item when the list/tree is active */
    'list.activeSelectionForeground': string;
    /** List/Tree drag and drop background when moving items around using the mouse */
    'list.dropBackground': string;
    /** List/Tree background color for the focused item when the list/tree is active */
    'list.focusBackground': string;
    /** List/Tree foreground color of the match highlights when searching inside the list/tree */
    'list.highlightForeground': string;
    /** List/Tree background when hovering over items using the mouse */
    'list.hoverBackground': string;
    /** List/Tree background color for the selected item when the list/tree is inactive */
    'list.inactiveSelectionBackground': string;
    /** List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not */
    'list.inactiveSelectionForeground': string;
    /** List/Tree foreground when hovering over items using the mouse */
    'list.hoverForeground': string;
    /** List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not */
    'list.focusForeground': string;

    /** Activity Bar */
    /** Activity Bar background color */
    'activityBar.background': string;
    /** Drag and drop feedback color for the Activity Bar items */
    'activityBar.dropBackground': string;
    /** Activity bar foreground color (for example used for the icons) */
    'activityBar.foreground': string;
    /** Activity Bar border color with the Side Bar */
    'activityBar.border': string;
    /** Activity notification badge background color */
    'activityBarBadge.background': string;
    /** Activity notification badge foreground color */
    'activityBarBadge.foreground': string;

    /** Side Bar */
    /** Side Bar background color */
    'sideBar.background': string;
    /** Side Bar foreground color. The Side Bar is the container for views like Explorer and Search */
    'sideBar.foreground': string;
    /** Side Bar border color on the side separating the editor */
    'sideBar.border': string;
    /** Side Bar title foreground color */
    'sideBarTitle.foreground': string;
    /** Side Bar section header background color */
    'sideBarSectionHeader.background': string;
    /** Side Bar section header foreground color */
    'sideBarSectionHeader.foreground': string;

    /** Editor Group & Tabs */
    /** Background color of an editor group. The background color shows up when dragging editor groups around */
    'editorGroup.background': string;
    /** Color to separate multiple editor groups from each other */
    'editorGroup.border': string;
    /** Background color when dragging editors around */
    'editorGroup.dropBackground': string;
    /** Background color of the editor group title header when Tabs are disabled */
    'editorGroupHeader.noTabsBackground': string;
    /** Background color of the Tabs container */
    'editorGroupHeader.tabsBackground': string;
    /** Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors */
    'editorGroupHeader.tabsBorder': string;
    /** Active Tab background color */
    'tab.activeBackground': string;
    /** Active Tab foreground color in an active group */
    'tab.activeForeground': string;
    /** Border to separate Tabs from each other */
    'tab.border': string;
    /** A border drawn to the bottom of the active tab */
    'tab.activeBorder': string;
    /** A border drawn to the bottom of the active tab in an editor group that is not focused */
    'tab.unfocusedActiveBorder': string;
    /** Inactive Tab background color */
    'tab.inactiveBackground': string;
    /** Inactive Tab foreground color in an active group */
    'tab.inactiveForeground': string;
    /** Active tab foreground color in an inactive editor group */
    'tab.unfocusedActiveForeground': string;
    /** Inactive tab foreground color in an inactive editor group */
    'tab.unfocusedInactiveForeground': string;

    /** Editor Colors */
    'editor.foreground': string;
    'editor.background': string;
    'editorLineNumber.foreground': string;
    'editorCursor.foreground': string;

    /** Color of the editor selection */
    'editor.selectionBackground': string;
    /** Color for regions with the same content as the selection */
    'editor.selectionHighlightBackground': string;
    /** Color of the selection in an inactive editor */
    'editor.inactiveSelectionBackground': string;

    /** Background color of a symbol during read-access, for example when reading a variable */
    'editor.wordHighlightBackground': string;
    /** Background color of a symbol during write-access, for example when writing to a variable */
    'editor.wordHighlightStrongBackground': string;

    'editor.findMatchBackground': string;
    /** Color of the other search matches */
    'editor.findMatchHighlightBackground': string;
    /** Color the range limiting the search */
    'editor.findRangeHighlightBackground': string;

    /** Highlight below the word for which a hover is shown */
    'editor.hoverHighlightBackground': string;

    /** Background color for the highlight of line at the cursor position */
    'editor.lineHighlightBackground': string;
    /** Background color for the border around the line at the cursor position */
    'editor.lineHighlightBorder': string;

    /** Color of active links */
    'editorLink.activeForeground': string;
    /** Background color of highlighted ranges, like by Quick Open and Find features */
    'editor.rangeHighlightBackground': string;

    /** Color of whitespace characters in the editor */
    'editorWhitespace.foreground': string;
    /** Color of the editor indentation guides */
    'editorIndentGuide.background': string;
    /** Color of the active indentation guide */
    'editorIndentGuide.activeBackground': string;
    /** Color of the editor rulers */
    'editorRuler.foreground': string;

    /** Foreground color of an editor CodeLens */
    'editorCodeLens.foreground': string;

    /** Background color behind matching brackets */
    'editorBracketMatch.background': string;
    /** Color for matching brackets boxes */
    'editorBracketMatch.border': string;

    /** Color of the overview ruler border */
    'editorOverviewRuler.border': string;
    'editorOverviewRuler.findMatchForeground': string;
    'editorOverviewRuler.rangeHighlightForeground': string;
    'editorOverviewRuler.selectionHighlightForeground': string;
    'editorOverviewRuler.wordHighlightForeground': string;
    'editorOverviewRuler.wordHighlightStrongForeground': string;
    'editorOverviewRuler.modifiedForeground': string;
    'editorOverviewRuler.addedForeground': string;
    'editorOverviewRuler.deletedForeground': string;
    'editorOverviewRuler.errorForeground': string;
    'editorOverviewRuler.warningForeground': string;
    'editorOverviewRuler.infoForeground': string;

    /** Foreground color of error squigglies in the editor */
    'editorError.foreground': string;
    /** Border color of error squigglies in the editor */
    'editorError.border': string;
    /** Foreground color of warning squigglies in the editor */
    'editorWarning.foreground': string;
    /** Border color of warning squigglies in the editor */
    'editorWarning.border': string;

    /** Background color of the editor gutter */
    'editorGutter.background': string;
    /** Editor gutter background color for lines that are modified */
    'editorGutter.modifiedBackground': string;
    /** Editor gutter background color for lines that are added */
    'editorGutter.addedBackground': string;
    /** Editor gutter background color for lines that are deleted */
    'editorGutter.deletedBackground': string;

    /** Explorer Colors */
    'gitDecoration.modifiedResourceForeground': string;
    'gitDecoration.deletedResourceForeground': string;
    'gitDecoration.untrackedResourceForeground': string;
    'gitDecoration.ignoredResourceForeground': string;
    'gitDecoration.conflictingResourceForeground': string;

    /** Diff Editor Colors */
    /** Background color for inserted text */
    'diffEditor.insertedTextBackground': string;
    /** Outline color for inserted text */
    'diffEditor.insertedTextBorder': string;
    /** Background color for removed text */
    'diffEditor.removedTextBackground': string;
    /** Outline color for removed text */
    'diffEditor.removedTextBorder': string;

    /** Editor Widget Colors */
    /** Background color of editor widgets, such as Find/Replace */
    'editorWidget.background': string;
    /** Border color of the editor widget unless the widget does not contain a border or defines its own border color */
    'editorWidgetBorder': string;

    /** Background color of the suggestion widget */
    'editorSuggestWidget.background': string;
    /** Border color of the suggestion widget */
    'editorSuggestWidget.border': string;
    /** Foreground color of the suggestion widget */
    'editorSuggestWidget.foreground': string;
    /** Color of the match highlights in the suggestion widget */
    'editorSuggestWidget.highlightForeground': string;
    /** Background color of the selected entry in the suggestion widget */
    'editorSuggestWidget.selectedBackground': string;

    /** Background color of the editor hover */
    'editorHoverWidget.background': string;
    /** Border color of the editor hover */
    'editorHoverWidget.border': string;

    /** Exception widget background color */
    'debugExceptionWidget.background': string;
    /** Exception widget border color */
    'debugExceptionWidget.border': string;

    /** Editor marker navigation widget background */
    'editorMarkerNavigation.background': string;
    /** Editor marker navigation widget error color */
    'editorMarkerNavigationError.background': string;
    /** Editor marker navigation widget warning color */
    'editorMarkerNavigationWarning.background': string;

    /** Peek View Colors */
    /** Color of the peek view borders and arrow */
    'peekView.border': string;
    /** Background color of the peek view editor */
    'peekViewEditor.background': string;
    /** Background color of the gutter in the peek view editor */
    'peekViewEditorGutter.background': string;
    /** Match highlight color in the peek view editor */
    'peekViewEditor.matchHighlightBackground': string;
    /** Background color of the peek view result list */
    'peekViewResult.background': string;
    /** Foreground color for file nodes in the peek view result list */
    'peekViewResult.fileForeground': string;
    /** Foreground color for line nodes in the peek view result list */
    'peekViewResult.lineForeground': string;
    /** Match highlight color in the peek view result list */
    'peekViewResult.matchHighlightBackground': string;
    /** Background color of the selected entry in the peek view result list */
    'peekViewResult.selectionBackground': string;
    /** Foreground color of the selected entry in the peek view result list */
    'peekViewResult.selectionForeground': string;
    /** Background color of the peek view title area */
    'peekViewTitle.background': string;
    /** Color of the peek view title info */
    'peekViewTitleDescription.foreground': string;
    /** Color of the peek view title */
    'peekViewTitleLabel.foreground': string;

    /** Merge Conflicts */
    /** Current header background in inline merge conflicts */
    'merge.currentHeaderBackground': string;
    /** Current content background in inline merge conflicts */
    'merge.currentContentBackground': string;
    /** Incoming header background in inline merge conflicts */
    'merge.incomingHeaderBackground': string;
    /** Incoming content background in inline merge conflicts */
    'merge.incomingContentBackground': string;
    /** Border color on headers and the splitter in inline merge conflicts */
    'merge.border': string;
    /** Current overview ruler foreground for inline merge conflicts */
    'editorOverviewRuler.currentContentForeground': string;
    /** Incoming overview ruler foreground for inline merge conflicts */
    'editorOverviewRuler.incomingContentForeground': string;

    /** Panel Colors */
    /** Panel background color */
    'panel.background': string;
    /** Panel border color on the top separating to the editor */
    'panel.border': string;
    /** Border color for the active panel title */
    'panelTitle.activeBorder': string;
    /** Title color for the active panel */
    'panelTitle.activeForeground': string;
    /** Title color for the inactive panel */
    'panelTitle.inactiveForeground': string;

    /** Status Bar Colors */
    /** Standard Status Bar background color */
    'statusBar.background': string;
    /** Status Bar foreground color */
    'statusBar.foreground': string;
    /** Status Bar background color when a program is being debugged */
    'statusBar.debuggingBackground': string;
    /** Status Bar foreground color when a program is being debugged */
    'statusBar.debuggingForeground': string;
    /** Status Bar foreground color when no folder is opened */
    'statusBar.noFolderBackground': string;
    /** Status Bar background color when no folder is opened */
    'statusBar.noFolderForeground': string;
    /** Status Bar item background color when clicking */
    'statusBarItem.activeBackground': string;
    /** Status Bar item background color when hovering */
    'statusBarItem.hoverBackground': string;
    /** Status Bar prominent items background color. Prominent items stand out from other Status Bar entries to indicate importance */
    'statusBarItem.prominentBackground': string;
    /** Status Bar prominent items background color when hovering. Prominent items stand out from other Status Bar entries to indicate importance */
    'statusBarItem.prominentHoverBackground': string;
    'statusBar.border': string;

    /** Title Bar Colors (MacOS Only) */
    /** Title Bar background when the window is active */
    'titleBar.activeBackground': string;
    /** Title Bar foreground when the window is active */
    'titleBar.activeForeground': string;
    /** Title Bar background when the window is inactive */
    'titleBar.inactiveBackground': string;
    /** Title Bar foreground when the window is inactive */
    'titleBar.inactiveForeground': string;

    /** Notification Dialog Colors */
    /** Notifications background color */
    'notification.background': string;
    /** Notifications foreground color */
    'notification.foreground': string;
    'notification.buttonBackground': string;
    'notification.buttonForeground': string;
    'notification.buttonHoverBackground': string;
    'notification.errorBackground': string;
    'notification.errorForeground': string;
    'notification.infoBackground': string;
    'notification.infoForeground': string;
    'notification.warningBackground': string;
    'notification.warningForeground': string;

    /** Extensions */
    /** Extension view button foreground color (for example Install button). */
    'extensionButton.prominentForeground': string;
    /** Extension view button background color */
    'extensionButton.prominentBackground': string;
    /** Extension view button background hover color */
    'extensionButton.prominentHoverBackground': string;

    /** Quick Picker */
    /** Quick picker (Quick Open) color for grouping borders */
    'pickerGroup.border': string;
    /** Quick picker (Quick Open) color for grouping labels */
    'pickerGroup.foreground': string;

    /** Debug */
    /** Debug toolbar background color */
    'debugToolBar.background': string;

    /** Welcome Page */
    /** Background color for the buttons on the Welcome page */
    'welcomePage.buttonBackground': string;
    /** Hover background color for the buttons on the Welcome page */
    'welcomePage.buttonHoverBackground': string;
    /** Background color for the embedded editors on the Interactive Playground */
    'walkThrough.embeddedEditorBackground': string;

    /** Background color of the border around highlighted ranges. */
    'editor.rangeHighlightBorder': string;
    /** The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor. */
    'editorCursor.background': string;
    /** Color of whitespace characters in the editor. */
    'editorLineNumber.activeForeground': string;
    /** Color of the editor rulers. */
    'editorInfo.foreground': string;
    /** Border color of info squigglies in the editor. */
    'editorInfo.border': string;
    /** Foreground color of hint squigglies in the editor. */
    'editorHint.foreground': string;
    /** Border color of hint squigglies in the editor. */
    'editorHint.border': string;
    /** Foreground color of unnecessary code in the editor. */
    'editorUnnecessary.foreground': string;
    /** Overview ruler marker color for range highlights. The color must not be opaque to not hide underlying decorations. */
    'terminalCursor.foreground': string;
    /** The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor. */
    'terminalCursor.background': string;
    /** The selection background color of the terminal. */
    'terminal.selectionBackground': string;
    /** The color of the border that separates split panes within the terminal. This defaults to panel.border. */
    'terminal.border': string;
    /** { dark:  */
    'descriptionForeground': string;
    /** { dark: Color.fromHex( */
    'textSeparator.foreground': string;
    /** { light:  */
    'textLink.foreground': string;
    /** { light:  */
    'textLink.activeForeground': string;
    /** { light:  */
    'textPreformat.foreground': string;
    /** { light:  */
    'textBlockQuote.background': string;
    /** { light:  */
    'textBlockQuote.border': string;
    /** { light:  */
    'textCodeBlock.background': string;
    /** Shadow color of widgets such as find/replace inside the editor. */
    'dropdown.listBackground': string;
    /** { dark:  */
    'list.inactiveFocusBackground': string;
    /** { dark:  */
    'list.invalidItemForeground': string;
    /** Foreground color of list items containing errors. */
    'list.errorForeground': string;
    /** Foreground color of list items containing warnings. */
    'list.warningForeground': string;
    /** { dark: Color.fromHex( */
    'editorWidget.border': string;
    /** { light:  */
    'editor.selectionForeground': string;
    /** { light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hc: transparent(editorSelectionBackground, 0.5) }, nls.localize( */
    'editor.selectionHighlightBorder': string;
    /** { light:  */
    'editor.findMatchBorder': string;
    /** { light: null, dark: null, hc: activeContrastBorder }, nls.localize( */
    'editor.findMatchHighlightBorder': string;
    /** { dark: null, light: null, hc: transparent(activeContrastBorder, 0.4) }, nls.localize( */
    'editor.findRangeHighlightBorder': string;
    /** { light: null, dark: null, hc: null }, nls.localize( */
    'editor.findWidgetResizeBorder': string;
    /** Highlight below the word for which a hover is shown. The color must not be opaque to not hide underlying decorations. */
    'merge.commonHeaderBackground': string;
    /** Common ancestor content background in inline merge-conflicts. The color must not be opaque to not hide underlying decorations. */
    'merge.commonContentBackground': string;
    /** Border color on headers and the splitter in inline merge-conflicts. */
    'editorOverviewRuler.commonContentForeground': string;
    /** Overview ruler marker color for find matches. The color must not be opaque to not hide underlying decorations. */
  }>;
  tokenColors: Array<{
    name?: string;
    scope: string;
    settings: Partial<{
      foreground: string;
      background: string;
      fontStyle: 'italic' | 'bold' | string;
    }>;
  }>;
  semanticTokenColors: {

    [k: string]: Partial<{
      foreground: string;
      background: string;
      fontStyle: 'italic' | 'bold' | string;
    }>
  }
}
