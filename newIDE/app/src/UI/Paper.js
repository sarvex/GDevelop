// @flow
import * as React from 'react';
import MuiPaper from '@material-ui/core/Paper';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

type Props = {|
  id?: string,
  children: React.Node,
  elevation?: number,
  variant?: 'outlined',
  // The background property allows to create contrast between papers,
  // 'dark' corresponds to the darker background on Dark theme,
  // but it corresponds to the lighter background on Light theme.
  background: 'light' | 'medium' | 'dark',
  style?: Object,
  square?: boolean,
|};

const Paper = ({
  id,
  children,
  background,
  elevation,
  variant,
  style,
  square,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const backgroundColor =
    background === 'dark'
      ? gdevelopTheme.paper.backgroundColor.dark
      : background === 'medium'
      ? gdevelopTheme.paper.backgroundColor.medium
      : gdevelopTheme.paper.backgroundColor.light;
  return (
    <MuiPaper
      id={id}
      variant={variant}
      elevation={elevation || 0}
      style={{
        backgroundColor,
        ...style,
      }}
      square={!!square}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
