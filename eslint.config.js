import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    plugins: {
      prettier: prettierPlugin,
      "@stylistic": stylistic,
    },
  },

  pluginJs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*{js,jsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "@stylistic/indent": ["error", 2], // Обеспечить единообразие отступов
      "@stylistic/linebreak-style": ["error", "unix"], // Обеспечить единообразие стиля переноса строк
      "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: true }],
      "@stylistic/semi": ["error", "always"], // требует точек с запятой в конце операторов
      "no-console": "off",
      "no-loop-func": ["error"], // правило запрещает любую функцию внутри цикла, содержащую небезопасные ссылки
      "@stylistic/block-spacing": ["error", "always"], // требуется один или несколько пробелов
      camelcase: ["error"],
      eqeqeq: ["error", "always"],
      "@stylistic/brace-style": [
        "error",
        "1tbs", // применяет один истинный стиль фигурных скобок.
        {
          allowSingleLine: true, // позволяет открывающим и закрывающим фигурным скобкам блока располагаться на одной строке.
        },
      ],
      "@stylistic/comma-style": ["error", "last"], // требует запятую после и на той же строке, что и элемент массива, свойство объекта или объявление переменной
      "@stylistic/comma-spacing": [
        "error",
        {
          before: false, // запрещает пробелы перед запятыми
          after: true, // требуется один или несколько пробелов после запятых
        },
      ],
      "@stylistic/eol-last": ["error"], // Это правило обеспечивает наличие как минимум одного символа новой строки (или его отсутствие) в конце непустых файлов.
      "@stylistic/func-call-spacing": ["error", "never"], // запрещает пробел между именем функции и открывающейся скобкой.
      "@stylistic/key-spacing": [
        "error",
        {
          beforeColon: false, // запрещает пробелы между ключом и двоеточием в литералах объектов.
          afterColon: true, // требуется как минимум один пробел между двоеточием и значением в литералах объекта.
          mode: "minimum", // принудительно вставляет один или несколько пробелов до или после двоеточий в литералах объектов.
        },
      ],
      "max-len": [
        "error",
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
        },
      ],
      "new-cap": [
        // чтобы имена конструкторов начинались с заглавной буквы
        "error",
        {
          newIsCap: true, // требует, чтобы все newоператоры вызывались с функциями, начинающимися с заглавных букв.
          capIsNew: false, // позволяет вызывать функции, начинающиеся с заглавных букв, без newоператоров.
          properties: true, // включает проверку свойств объекта
        },
      ],
      "@stylistic/new-parens": ["error"], // Включить или отключить скобки при вызове конструктора без аргументов
      "no-lonely-if": ["error"], // правило запрещает if использование операторов в качестве единственного оператора в elseблоках.
      "@stylistic/no-trailing-spaces": ["error"], // Запретить пробелы в конце строк
      "no-unneeded-ternary": ["error"], // правило запрещает использование тернарных операторов, если существуют более простые альтернативы
      "@stylistic/no-whitespace-before-property": ["error"], // Запретить пробелы перед свойствами
      "@stylistic/object-curly-spacing": ["error", "always"], // Обеспечьте постоянный интервал внутри скобок
      "operator-assignment": ["error", "always"], // правило требует или запрещает использование сокращенной записи оператора присваивания там, где это возможно.
      "@stylistic/operator-linebreak": ["error", "after"], // Обеспечить единый стиль переноса строк для операторов
      "@stylistic/semi-spacing": [
        // Обеспечьте одинаковый интервал до и после точек с запятой
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "@stylistic/space-before-blocks": ["error", "always"], // Обеспечьте одинаковый интервал перед блоками
      "space-before-function-paren": [
        // правило теперь будет применять интервалы для асинхронных стрелочных функций
        "error",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "@stylistic/space-in-parens": ["error", "never"], // Обеспечьте одинаковый интервал внутри скобок
      "@stylistic/space-infix-ops": ["error"], // Требуйте пробелов вокруг инфиксных операторов
      "@stylistic/space-unary-ops": [
        // Обеспечивать единообразие интервалов до и после унарных операторов
        "error",
        {
          words: true,
          nonwords: false,
          overrides: {
            typeof: false,
          },
        },
      ],
      "no-unreachable": ["error"], // Запретить недостижимый код после операторов return, throw, continue, иbreak
      "no-global-assign": ["error"], // правило запрещает вносить изменения в глобальные переменные, доступные только для чтения.
      "no-self-compare": ["error"], // Запретить сравнения, где обе стороны абсолютно одинаковы
      "no-unmodified-loop-condition": ["error"], // Запретить немодифицированные условия цикла
      "no-constant-condition": [
        // Запретить константные выражения в условиях
        "error",
        {
          checkLoops: false,
        },
      ],
      "no-useless-concat": ["error"], // Запретить ненужную конкатенацию литералов или шаблонных литералов
      "no-useless-escape": ["error"], // Запретить ненужные экранированные символы
      "no-shadow-restricted-names": ["error"], // Запретить идентификаторам скрывать запрещенные имена
      "no-use-before-define": [
        // правило выдаст предупреждение, если встретит ссылку на идентификатор, который еще не был объявлен.
        "error",
        {
          functions: false,
        },
      ],
      "@stylistic/arrow-parens": ["error", "always"], // Стрелочные функции могут опускать скобки, если у них ровно один параметр.
      "arrow-body-style": ["error", "as-needed"], // не требует использования фигурных скобок там, где их можно опустить (по умолчанию)
      "@stylistic/arrow-spacing": ["error"], // нормализует стиль интервалов до/после стрелочной функции arrow( =>).
      "no-confusing-arrow": [
        "error",
        {
          allowParens: true,
        },
      ],
      "no-useless-computed-key": ["error"],
      "no-useless-rename": ["error"], // Запретить переименование импорта, экспорта и деструктурированных назначений на одно и то же имя
      "no-var": ["error"], // Требовать let или const вместо var
      "object-shorthand": ["error", "always"], // Требовать или запрещать сокращенный синтаксис методов и свойств для литералов объектов
      "prefer-arrow-callback": ["error"], // Требовать использования стрелочных функций для обратных вызовов
      "prefer-const": ["error"], // Требовать constобъявления переменных, которые никогда не переназначаются после объявления
      "prefer-numeric-literals": ["error"], // Запрещать parseInt()и Number.parseInt()использовать двоичные, восьмеричные и шестнадцатеричные литералы
      "prefer-rest-params": ["error"], // Требовать остальные параметры вместоarguments
      "prefer-spread": ["error"], // Требовать операторы распространения вместо.apply()
      "@stylistic/rest-spread-spacing": ["error", "never"], // Обеспечить соблюдение интервалов между операторами rest и spread и их выражениями
      "@stylistic/template-curly-spacing": ["error", "never"], // Требовать или запрещать пробелы вокруг встроенных выражений строк шаблонов
      "no-cond-assign": "off", // Запретить операторы присваивания в условных выражениях
      "no-irregular-whitespace": "error", // Запретить нерегулярные пробелы
      "no-unexpected-multiline": "error", // Запретить запутанные многострочные выражения
      "guard-for-in": "error", // Требовать, for-inчтобы циклы включали ifоператор
      "no-caller": "error", // Запретить использование arguments.callerилиarguments.callee
      "no-extend-native": "error", // Запретить расширение собственных типов
      "no-extra-bind": "error", // Запретить ненужные вызовы.bind()
      "no-invalid-this": "error", // Запретить использование thisв контекстах, где значение thisравноundefined
      "@stylistic/no-multi-spaces": "error", //  Запретить множественные пробелы
      "no-multi-str": "error", // Запретить многострочные строки
      "no-new-wrappers": "error", // Запретить newоператоры с объектами String, Number, иBoolean
      "no-throw-literal": "error", // Запретить выдачу литералов в качестве исключений
      "no-with": "error", // Запретить withзаявления
      "prefer-promise-reject-errors": "error", // Требовать использования объектов Error в качестве причин отклонения Promise
      "@stylistic/array-bracket-newline": "off", // Принудительно вводить переносы строк после открытия и перед закрытием скобок массива
      "@stylistic/array-bracket-spacing": ["error", "never"], // Обеспечить единообразие интервалов внутри скобок массива
      "@stylistic/array-element-newline": "off", // Принудительно вставлять переносы строк после каждого элемента массива
      "@stylistic/comma-dangle": ["error", "only-multiline"], // разрешает (но не требует) конечные запятые, когда последний элемент или свойство находится на другой строке, чем закрывающий ]или }и запрещает конечные запятые, когда последний элемент или свойство находится на той же строке, что и закрывающий ]или}
      "@stylistic/computed-property-spacing": "error", // Обеспечить постоянный интервал внутри вычисляемых скобок свойств
      "@stylistic/keyword-spacing": "error", // Обеспечьте одинаковый интервал до и после ключевых слов.
      "no-array-constructor": "error", // Запретить Arrayконструкторы
      "@stylistic/no-mixed-spaces-and-tabs": "error", // Запретить смешанные пробелы и табуляции для отступов
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 2, // Запретить несколько пустых строк
        },
      ],
      "no-object-constructor": "error", // Это правило запрещает вызов Objectконструктора с помощью new.
      "@stylistic/no-tabs": "error", // Запретить все вкладки
      "one-var": [
        // Обеспечить объявление переменных в функциях либо вместе, либо по отдельности
        "error",
        {
          var: "never",
          let: "never",
          const: "never",
        },
      ],
      "@stylistic/padded-blocks": ["error", "never"], // Требовать или запрещать отступы внутри блоков
      "@stylistic/spaced-comment": ["error", "always"], // Обеспечьте одинаковый интервал после //или /*в комментарии
      "@stylistic/switch-colon-spacing": "error", // Обеспечить наличие пробелов вокруг двоеточий в операторах switch
      "constructor-super": "error", // Требовать super()вызовы в конструкторах
      "@stylistic/generator-star-spacing": ["error", "after"], // Обеспечить единообразие интервалов между *операторами в функциях генератора
      "no-new-native-nonconstructor": "error", // Запретить newоператоры с глобальными функциями, не являющимися конструкторами
      "no-this-before-super": "error", // Запретить this/ superперед вызовом super()конструкторов
      "@stylistic/yield-star-spacing": ["error", "after"], // Требовать или запрещать пробелы вокруг *выраженийyield*
    },
  },
];
