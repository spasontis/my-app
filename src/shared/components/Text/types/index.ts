import { ComponentProps, HTMLAttributes } from 'react';

export type TextColor = 'black' | 'white' | 'content1' | 'content2' | 'error';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextElement = HeadingElement | 'p' | 'span';

export interface BaseTextProps {
  color?: TextColor;
  as?: TextElement;
}

interface ParagraphProps extends ComponentProps<'p'> {
  as?: 'p';
}

interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  as: HeadingElement;
}

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  as: 'span';
}

export type TextElementProps = ParagraphProps | HeadingProps | SpanProps;

export type TextProps = BaseTextProps & TextElementProps;
