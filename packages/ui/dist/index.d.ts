import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_config from '@stitches/react/types/config';
import * as _stitches_react_types_theme from '@stitches/react/types/theme';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as react from 'react';
import * as _stitches_react_types_util from '@stitches/react/types/util';

declare const Button: _stitches_react_types_styled_component.StyledComponent<"button", {}, {
    bp1: "(min-width: 480px)";
}, _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    marginX: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
}>>;

declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | react.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | react.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    marginX: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : _stitches_react_types_util.WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    bp1: "(min-width: 480px)";
}, _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    marginX: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
}>>;
declare const css: <Composers extends (string | _stitches_react_types_util.Function | react.ExoticComponent<any> | react.JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    marginX: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.ExoticComponent<any> | react.JSXElementConstructor<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : _stitches_react_types_util.WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => _stitches_react_types_styled_component.CssComponent<_stitches_react_types_styled_component.StyledComponentType<Composers>, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    bp1: "(min-width: 480px)";
}, CSS>;
declare const globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? _stitches_react_types_css.AtRule.FontFace | _stitches_react_types_css.AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: _stitches_react_types_css_util.CSS<{
        bp1: "(min-width: 480px)";
    }, {
        colors: {
            gray400: string;
            gray500: string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        marginX: (value: string | number) => {
            marginLeft: string | number;
            marginRight: string | number;
        };
    }>;
} : K extends `@property ${string}` ? _stitches_react_types_css.AtRule.Property : _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    marginX: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
}>; })[]) => () => string;
declare const keyframes: (style: {
    [offset: string]: _stitches_react_types_css_util.CSS<{
        bp1: "(min-width: 480px)";
    }, {
        colors: {
            gray400: string;
            gray500: string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        marginX: (value: string | number) => {
            marginLeft: string | number;
            marginRight: string | number;
        };
    }>;
}) => {
    (): string;
    name: string;
};
declare const getCssText: () => string;
declare const theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        gray400: _stitches_react_types_theme.Token<"gray400", string, "colors", "">;
        gray500: _stitches_react_types_theme.Token<"gray500", string, "colors", "">;
    };
};
declare const createTheme: <Argument0 extends string | ({
    colors?: {
        gray400?: string | number | boolean | undefined;
        gray500?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        gray400?: string | number | boolean | undefined;
        gray500?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? _stitches_react_types_stitches.ThemeTokens<Argument1, ""> : _stitches_react_types_stitches.ThemeTokens<Argument0, "">);
declare const config: {
    prefix: "";
    media: {
        bp1: "(min-width: 480px)";
    };
    theme: {
        colors: {
            gray400: string;
            gray500: string;
        };
    };
    themeMap: _stitches_react_types_config.DefaultThemeMap;
    utils: {
        marginX: (value: string | number) => {
            marginLeft: string | number;
            marginRight: string | number;
        };
    };
};
declare const globalStyles: () => string;

export { Button, config, createTheme, css, getCssText, globalCss, globalStyles, keyframes, styled, theme };
