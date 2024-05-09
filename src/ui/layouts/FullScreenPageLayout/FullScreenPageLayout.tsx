import * as React from 'react';
import { observer } from 'mobx-react-lite';
// import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import classNames from 'classnames';

import { ThemeWrapper } from 'src/core/wrappers/ThemeWrapper';
import { AppHeader } from 'src/components/App/AppHeader';
import { AppFooter } from 'src/components/App/AppFooter';
import { useAppSessionStore } from 'src/store';
import { HelpModal } from 'src/components/Help/HelpModal';

import styles from './FullScreenPageLayout.module.scss';

export interface TFullScreenPageLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const FullScreenPageLayout: React.FC<TFullScreenPageLayoutProps> = observer(
  (props): JSX.Element => {
    // NOTE: Get props from nextjs (as `pageProps`)
    const { className, children } = props;
    const appSessionStore = useAppSessionStore();
    const { themeMode } = appSessionStore;
    /* // DEBUG: router location
     * const location = useLocation();
     * const { pathname } = location;
     * React.useEffect(() => {
     *   console.log('[FullScreenPageLayout:Effect:pathname]', pathname, {
     *     location,
     *   });
     * }, [pathname, location]);
     */
    return (
      <ThemeWrapper className={classNames(className, styles.root)} themeMode={themeMode} fullSize>
        <AppHeader className={styles.header} />
        <Box className={styles.content}>{children}</Box>
        <AppFooter className={styles.footer} />
        <HelpModal />
      </ThemeWrapper>
    );
  },
);
