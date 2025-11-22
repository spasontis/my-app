import { ComponentProps, HTMLAttributes } from 'react';

export type TextVariant =
  | 'label'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'text1'
  | 'text2'
  | 'caption'
  | 'button';

export type TextColor = 'primary' | 'black' | 'white' | 'content1' | 'content2' | 'error';

export type TextWeight = 400 | 500 | 600 | 700 | 800;

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextElement = HeadingElement | 'p' | 'span';

export interface BaseTextProps {
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
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
