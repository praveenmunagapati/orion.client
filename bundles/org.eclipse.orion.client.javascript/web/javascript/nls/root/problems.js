/*******************************************************************************
 * @license
 * Copyright (c) 2014, 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 ******************************************************************************/
/* eslint-env amd */
define({
    'eslintValidationFailure': 'ESLint failed to validate this file because an error occurred: ${0}',
	'check-tern-plugin': 'To work in the \'${0}\' environment, the \'${1}\' plugin must be running.',
	'check-tern-lib': 'To work in the \'${0}\' environment, the \'${1}\' library must be running.',
	'curly': 'Statement should be enclosed in braces.',
	'curly-description': 'Require curly braces for all control statements.',
	'eqeqeq' : 'Expected \'${0}\' and instead saw \'${1}\'.',
	'eqeqeq-description': 'Require the use of === and !==.',
	'missing-doc' : 'Missing documentation for function \'${0}\'.',
	'missing-doc-description': 'Require JSDoc for all functions.',
	'missing-nls' : 'Non-externalized string literal \'${0}\'.',
	'missing-nls-description': 'Disallow non-externalized string literals.',
	'new-parens' : 'Missing parentheses invoking constructor.',
	'new-parens-description': 'Require parenthesis for constructors.',
	'no-caller': '\'arguments.${0}\' is deprecated.',
	'no-caller-description': 'Warn on use of arguments.callee or arguments.caller.',
	'no-comma-dangle': 'Trailing commas in object expressions are discouraged.',
	'no-comma-dangle-description': 'Report extra trailing comma in object expressions.',
	'no-cond-assign': 'Expected a conditional expression and instead saw an assignment.',
	'no-cond-assign-description': 'Disallow assignment statements in control statements like if-else, do-while, while and for statements.',
	'no-console': 'Discouraged use of console in browser-based code.',
	'no-console-description': 'Disallow the use of \'console\' in browser-run code.',
	'no-constant-condition': 'Discouraged use of constant as a conditional expression.',
	'no-constant-condition-description': 'Disallow use of a constant value as a conditional expression.',
	'no-debugger': '\'debugger\' statement use is discouraged.',
	'no-debugger-description': 'Disallow use of the debugger keyword.',
	'no-dupe-keys' : 'Duplicate object key \'${0}\'.',
	'no-dupe-keys-description': 'Warn when object contains duplicate keys.',
	'no-empty-block' : 'Empty block should be removed or commented.',
	'no-empty-block-description': 'Warn when a code block is empty.',
	'no-eval' : '${0} function calls are discouraged.',
	'no-eval-description': 'Disallow use of eval function.',
	'no-extra-semi' : 'Unnecessary semicolon.',
	'no-extra-semi-description': 'Warn about extraneous semi colons.',
	'no-fallthrough' : 'Switch case may be entered by falling through the previous case.',
	'no-fallthrough-description': 'Warn when a switch case falls through.',
	'no-implied-eval' : '${0} function calls are discouraged.',
	'no-implied-eval-description': 'Disallow use of implied eval function.',
	'no-iterator' : 'Discouraged __iterator__ property use.',
	'no-iterator-description': 'Warn when the __iterator__ property is used.',
	'no-proto' : 'Discouraged __proto__ property use.',
	'no-proto-description': 'Warn when the __proto__ property is used.',
	'no-jslint' : 'The \'${0}\' directive is unsupported, please use eslint-env.',
	'no-jslint-description': 'Warn when the jslint/jshint directive is used.',
	'no-mixed-spaces-and-tabs': 'Mixed spaces and tabs.',
	'no-mixed-spaces-and-tabs-description': 'Warn about mixed spaces and tabs.',
	'no-new-array' : 'Use the array literal notation \'[]\'.',
	'no-new-array-description': 'Disallow use of the Array constructor.',
	'no-new-func' : 'The Function constructor is eval.',
	'no-new-func-description': 'Disallow use of the Function constructor.',
	'no-new-object' : 'Use the object literal notation \'{}\' or Object.create(null).',
	'no-new-object-description': 'Disallow use of the Object constructor.',
	'no-new-wrappers' : 'Do not use \'${0}\' as a constructor.',
	'no-new-wrappers-description': 'Disallow creating new String, Number or Boolean via their constructor.',
	'no-redeclare' : '\'${0}\' is already defined.',
	'no-redeclare-description': 'Warn when variable or function is redeclared.',
	'no-regex-spaces' : 'Avoid multiple spaces in regular expressions. Use \' {${0}}\' instead.',
	'no-regex-spaces-description': 'Warn when multiple spaces are used in regular expressions.',
	'no-reserved-keys' : 'Reserved words should not be used as property keys.',
	'no-reserved-keys-description': 'Warn when a reserved word is used as a property key.',
	'no-shadow' : '\'${0}\' is already declared in the upper scope.',
	'no-shadow-description': 'Warn when shadowing variable from upper scope.',
	'no-shadow-global' : 'Variable \'${0}\' shadows a global member.',
	'no-shadow-global-description': 'Warn when a variable or parameter shadows a member from the global environment.',
	'no-shadow-global-param' : 'Parameter \'${0}\' shadows a global member.',
	'no-sparse-arrays': 'Sparse array declarations should be avoided.',
	'no-sparse-arrays-description': 'Warn when sparse arrays are defined.',
	'no-throw-literal': 'Throw an Error instead.',
	'no-throw-literal-description': 'Warn when a Literal is used in a throw statement.',
	'no-undef-defined' : '\'${0}\' is undefined.',
	'no-undef-expression-defined' : '\'${0}\' is undefined.',
	'no-undef-expression-defined-object' : '\'${0}\' is undefined for \'${1}\' in ${2}.',  // 0: member name 1: object name 2: file name
	'no-undef-expression-defined-index' : '\'${0}\' is undefined for \'${1}\' in ${2}.',  // 0: member name 1: object name 2: library
	'no-undef-init': 'Avoid explicitly initializing variables to \'undefined\'.',
	'no-undef-init-description': 'Warn when variables are explicitly initialized to undefined.',
	'no-undef-readonly': '\'${0}\' is read-only.',
	'no-undef-description': 'Warn when used variable or function has not been defined.',
	'no-unreachable' : 'Unreachable code.',
	'no-unreachable-description': 'Warn when code is not reachable.',
	'no-unused-params' : 'Parameter \'${0}\' is never used.',
	'no-unused-params-description': 'Warn when function parameters are not used.',
	'no-unused-vars-unused' : '\'${0}\' is unused.',
	'no-unused-vars-unused-funcdecl' : 'Function \'${0}\' is unused.',
	'no-unused-vars-unread' : '\'${0}\' is unread.',
	'no-unused-vars-description': 'Warn when declared variables are not used.',
	'no-use-before-define': '\'${0}\' was used before it was defined.',
	'no-use-before-define-description': 'Warn when a variable, function or class is used before it is defined.',
	'no-with': 'Discouraged use of \'with\' statement.',
	'no-with-description': 'Warn when the with statement is used.',
	'radix': 'Missing radix parameter.',
	'unknown-require': 'This library could not be found, type information for it will be incomplete.',
	'unknown-require-plugin': 'This library is available in a Tern plugin that is not currently loaded.',
	'unknown-require-not-running': 'Type information for this library might be available, but requires the \'${0}\' plug-in to be running.',
	'unknown-require-missing-env': 'The \'${0}\' entry is missing from the eslint-env directive',
	'missing-requirejs': 'To use AMD, the \'requirejs\' plug-in needs to be running.',
	'radix-description': 'Warn when parseInt() is called without the \'radix\' parameter.',
	'semi': 'Missing semicolon.',
	'semi-description': 'Warn about missing semicolons.',
	'unnecessary-nls' : 'Unnecessary $NON-NLS$ tag.',
	'unnecessary-nls-description': 'Disallow unnecessary non-NLS comments.',
	'use-isnan': 'Use the isNaN function to compare with NaN.',
	'use-isnan-description': 'Disallow comparison to the value NaN.',
	'valid-typeof' : 'Invalid typeof comparison.',
	'valid-typeof-description': 'Warn when incorrectly comparing the result of a typeof expression.',
	'noErrorDetailed' : 'Unknown error occurred',
	'esmodules-not-running' : 'import/export declarations require the \'es_modules\' plug-in to be running.',
		
	// Rules consumed from ESLint
	'accessor-pairs-description' : "Report when accessors don't come in pairs (getter, setter)",
	'no-control-regex-description' : "Disallow control characters in regular expressions",
	'no-const-assign-description' : "Disallow modifying variables that are declared using const",
	'no-duplicate-case-description' : 'Disallow a duplicate case label',
	'no-empty-character-class-description' : 'Disallow empty character classes',
	'no-extra-boolean-cast-description' : 'Discourage redundant double negation',
	'no-extra-parens-description' : 'Discourage redundant parentheses',
	'no-invalid-regexp-description' : 'Report invalid regular expressions',
	'no-negated-in-lhs-description' : 'Disallow negated left operand of in operator',
	'no-obj-calls-description' : 'Disallow global object as function calls',
	'no-eq-null-description' : 'Disallow null comparisons',
	'no-else-return-description' : 'Report else after return',
	'no-empty-label-description' : 'No empty labels',
	'no-self-compare-description' : 'Disallow self compare',
	'no-irregular-whitespace-description' : 'No irregular whitespace:',
	'no-self-assign-description' : 'Disallow self assignment',
	'no-self-assign' : '\'${0}\' is assigned to itself.',
	'type-checked-consistent-return-description' : 'Detect inconsistent return values',
	'inconsistent-return' : 'Inconsistent return types: \'{{type1}}\', \'{{type2}}\'',
	'no-void' : 'Expected \'undefined\' and instead saw \'void\'.',
	'no-void-description' : 'Disallow use of the void operator.',
	'no-extra-bind-description' : 'Disallow unnecessary function binding.',
	'no-implicit-coercion-description' : 'Disallow the type conversion with shorter notations.',
	'no-extend-native-description' : 'Disallow extending of native objects',
	'no-lone-blocks-description' : 'Disallow unecessary nested blocks',
	'quotes-description' : 'Enforce quote style',
	'yoda-description' : 'Require or disallow Yoda conditions',
	'no-param-reassign-description' : 'Disallow reassignment of function parameters',
	'no-native-reassign-description' : 'Disallow reassignment of native objects',
	'no-unused-expressions-description' : 'Disallow unused expressions',
	'no-invalid-this-description' : 'Disallow this keywords outside of classes or class-like objects.',

	//.tern-project file validation messages
	'notNum': "'${0}' must be a number",
	'notArray': "'${0}' must be an array of strings",
	'notEmpty': "'${0}' should not be empty",
	'onlyStrings': "'${0}' entries can only be strings",
	'notObject': "'${0}' must be an object",
	'pluginNotObject': "plugin '${0}' must be an object",
	'noDupes': "Duplicate entries are not allowed",
	'problemInFile': "There is a problem with your .tern-project-file.",
	'openFile': "Open the .tern-project file",
	'errorParsing': "There was an error parsing the JSON in your .tern-project file",
	'multiAttrProblems': "Multiple problems were found with attributes in your .tern-project file.",
	'attrProblem': "A problem with one of the attributes in your .tern-project file was found.",
	'multipleFileMatchesProblem': 'Multiple file matches found for: ${0}. Defaulting to: ${1}.',
	'noFileMatchProblem': 'No file match found for: ${0}.',
	'tooManyFileMatchProblems': '... (${0} more)',
	'fileMatchProblems': 'Problems found in the loadEagerly attribute of your .tern-project file.',
	'fileMatchProgress': 'Validating loadEagerly paths in your .tern-project file.',
	'failedWrite': "There was a problem writing to your .tern-project file."
});
